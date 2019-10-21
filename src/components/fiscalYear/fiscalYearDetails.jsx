import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import SearchResult from "../search/search-result"

class fiscalYearDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {

            pageSize: 5,
            seasonData: [],
            year: "",
            status: "active",
            description: "",

            // autumnDescription: "",
            // autumnStatus: "",
            //
            // summerStatus: "",
            // summerDescription: "",
            //
            // springStatus: "",
            // springDescription: "",
            //
            // winterStatus: "",
            // winterDescription: "",

            identifier: "",

        };
        this.onShow = this.onShow.bind(this);

    }


    async componentDidMount() {
        const {dataInfo} = this.props.location;
        if (!dataInfo) return this.props.history.push('/fiscal-year');
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
                        year: dataInfo.year,
                    }
                )
        });
        this.setState({
            seasonData,
            year: dataInfo.year,
            statusCode: dataInfo.statusCode,
            statusName: dataInfo.statusName,
            description: dataInfo.description,
        });
    }

    cancel = () => {
        this.props.history.push('/fiscal-year')
    };


    getResultTableHeader() {
        let headerInfo = {
            showCheckBox: false,
            actions: [
                {
                    name: 'edit',
                    title: 'مشاهده',
                    icon: 'fa fa-th-list',
                    style: 'btn btn-primary btn-xs',
                    onclick: this.onShow
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

    onShow(searchResult) {
        this.props.history.push({
            pathname: '/forms',
            dataInfo: searchResult

        });
    }


    render() {
        const {seasonData, pageSize} = this.state;
        const headerInfo = this.getResultTableHeader();
        return (

            <div
                className="rtl border bg-light shadow row w-100 m-0 text-center justify-content-center align-items-center my-3">
                <div className="col-12 justify-content-center align-items-center text-center header-box text-light">
                    <h4 className="py-2">بررسی سال مالی</h4>
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
                                />
                            </div>

                            <div className="form-group col-2  float-right">
                                <label>وضعیت :</label>
                                <select
                                    className="form-control text-center"
                                >
                                    <option value={this.state.statusCode}>{this.state.statusName}</option>
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
                                />
                            </div>
                        </div>
                        <div
                            className="rtl border bg-light shadow row w-100 m-0 py-4 px-2">
                            <SearchResult headerInfo={headerInfo} searchResultList={seasonData} pageSize={pageSize}/>
                        </div>

                    </div>

                    <div>
                        <div className=" row w-100 m-0 text-center justify-content-center align-items-center my-3">
                            <div className="p-2">
                                <input type="button" className="btn btn-danger" value="بازگشت"
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

export default withRouter(fiscalYearDetails);
