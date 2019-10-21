import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import SearchResult from "../search/search-result"
import {toast} from 'react-toastify';
import {updateFicalYear} from "../../services/fiscalYearService";


class editFiscalYear extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageSize: 5,
            seasonData: [],
            year: "",
            statusCode: "",
            statusName: "",
            description: "",
            id: "",
        };
        this.onEdit = this.onEdit.bind(this);
    }

    async componentDidMount() {
        const {dataInfo} = this.props.location;
        if (!dataInfo) return this.props.history.push('/manage-fiscal-year');
        const seasonData = [];
        dataInfo.fiscalMonthList.forEach((data) => {
            seasonData.push(
                {
                    description: data.description,
                    identifier: data.identifier,
                    sessionName: data.session.name,
                    sessionCode: data.session.code,
                    statusCode: data.status.code,
                    statusName: data.status.name,
                    dataInfo: dataInfo,
                }
            )
        });
        this.setState({
            seasonData,
            year: dataInfo.year,
            statusCode: dataInfo.statusCode,
            statusName: dataInfo.statusName,
            description: dataInfo.description,
            id: dataInfo.identifier,
        });
    }

    fillParameterValue = (value, name) => {
        console.log(value)
        console.log(name)
        this.setState({[name]: value});

    };

    returnFile = () => {
        const data = this.refs.child.returnFile();
        return data;
    };
    cancel = () => {
        this.props.history.push('/manage-fiscal-year')
    };
    updateFiscalYear = async () => {
        const dataInfo=[];
        console.log(this.state.seasonData,122121)
        this.state.seasonData.forEach((info) => {

            dataInfo.push({
                identifier:info.identifier,
                description:info.description,
                status: {
                    code: info.statusCode,
                },
                session: {
                    code: info.sessionCode,
                },
            })
        });
        const data = {

                identifier: this.state.id,
                year: this.state.year,
                description: this.state.description,
                status: {
                    code: this.state.statusCode,
                },
                fiscalMonthList: dataInfo,

            }
        ;
        console.log(data, "Shaams");
        try {
            const result = await updateFicalYear(data);
            if (result.status === 200) {
                toast.success('عملیات با موفقیت انجام شد.');
            }
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                toast.error('خطایی در دریافت اطلاعات رخ داده است.');
            }
        }
        document.getElementById("loading").style.display = "none";
    }
    ;

    getResultTableHeader() {
        let headerInfo = {
            showCheckBox: false,
            actions: [
                {
                    name: 'edit',
                    title: 'ویرایش',
                    icon: 'fa fa-th-list',
                    style: 'btn btn-primary btn-xs',
                    onclick: this.onEdit
                },
            ],
            headerTitleInfos: [
                {name: "sessionName", title: "سال"},
                {name: "description", title: "توضیحات"},
                {name: "statusName", title: "وضعیت"},
            ]
        };
        return headerInfo;
    }

    onEdit(searchResult) {
        this.props.history.push({
            pathname: '/edit-fiscal-year-details',
            dataInfo: searchResult

        });
    }


    render() {
        const headerInfo = this.getResultTableHeader();
        const {seasonData, pageSize} = this.state;
        const option = [
            {value: "active ", title: "فعال ", selected: true},
            {value: "deActive ", title: " غیر فعال ", selected: false}
        ];
        return (

            <div
                className="rtl border bg-light shadow row w-100 m-0 text-center justify-content-center align-items-center my-3">
                <div className="col-12 justify-content-center align-items-center text-center header-box text-light">
                    <h4 className="py-2">ویرایش سال مالی</h4>
                </div>
                <div className="col-12 justify-content-center align-items-center text-center">
                    <div className="rtl border m-0  shadow  row w-100 justify-content-center my-3 pb-3">
                        <div className="py-3  col-11">
                            <div className="form-group col-2  float-right">
                                <label>سال :</label>
                                <input className="form-control text-center"
                                       type="number"
                                       step="any"
                                       placeholder="---"
                                       value={this.state.year}
                                       onChange={(e) => this.fillParameterValue(e.target.value, "year")}
                                />
                            </div>
                            <div className="form-group col-2  float-right">
                                <label>وضعیت :</label>
                                <select
                                    className="form-control text-center"
                                    value={this.state.statusCode}
                                    onChange={(e) => this.fillParameterValue(e.target.value, "statusCode")}
                                >
                                    {option.map(
                                        (option) => {
                                            return (<option value={option.value}
                                                            selected={option.selected}>{option.title}</option>);
                                        }
                                    )}
                                </select>
                            </div>
                            <div className="form-group col-8 float-right">
                                <label>توضیحات :</label>
                                <input className="form-control text-center"
                                       type="input"
                                       step="any"
                                       placeholder="---"
                                       value={this.state.description}
                                       name="address"
                                       onChange={(e) => this.fillParameterValue(e.target.value, "description")}
                                />
                            </div>
                        </div>

                        <div className="rtl border bg-light shadow row w-100 m-0 py-4 px-2">
                            <SearchResult headerInfo={headerInfo} searchResultList={seasonData} pageSize={pageSize}/>
                        </div>

                    </div>

                    <div>
                        <div className=" row w-100 m-0 text-center justify-content-center align-items-center my-3">
                            <div className="p-2">
                                <input type="button" className="btn btn-success" value="ثبت"
                                       onClick={() => {
                                           this.updateFiscalYear();
                                       }}/>
                            </div>
                            <div className="p-2">
                                <input type="button" className="btn btn-danger" value="لغو"
                                       onClick={this.cancel}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(editFiscalYear);
