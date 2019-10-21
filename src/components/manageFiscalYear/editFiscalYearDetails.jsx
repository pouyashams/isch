import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
// import {toast} from 'react-toastify';


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
            dataInfo: [],
        };
    }

    async componentDidMount() {
        const {dataInfo} = this.props.location;
        if (!dataInfo) return this.props.history.push('/manage-fiscal-year');
        console.log(dataInfo, 123456)
        this.setState({
            description: dataInfo.description,
            sessionName: dataInfo.sessionName,
            sessionCode: dataInfo.sessionCode,
            statusCode: dataInfo.statusCode,
            statusName: dataInfo.statusName,
            identifier: dataInfo.identifier,
            dataInfo: dataInfo.dataInfo,
        });
    }

    fillParameterValue = (value, name) => {
        console.log(value);
        this.setState({[name]: value});
    };
    fillParameterValueSelect = (value, name) => {
        if (value === "active") {
            this.setState({[name]: value, statusName: "فعال"});
        } else {
            this.setState({[name]: value, statusName: "غیر فعال"});

        }

    };
    fillParameterValueSeason = (value, name) => {
        this.setState({[name]: value});
        if (value === "بهار") {
            this.setState({
                sessionCode: "spring"
            });
        } else if (value === "تابستان") {
            this.setState({
                sessionCode: "summer"
            });

        } else if (value === "پاییز") {
            this.setState({
                sessionCode: "autumn"
            });

        } else if (value === "زمستان") {
            this.setState({
                sessionCode: "winter"
            });
        }

    };

    cancel = () => {
        this.props.history.push('/manage-fiscal-year')
    };

    setData = () => {
        const {dataInfo} = this.state;
        const fiscalMonthList = dataInfo.fiscalMonthList.filter(id => id.identifier !== this.state.identifier);
        fiscalMonthList.push({
            description: this.state.description,
            status: {
                code: this.state.statusCode,
                name: this.state.statusName,
            },
            session: {
                code: this.state.sessionCode,
                name: this.state.sessionName
            },
            identifier: this.state.identifier,
        });
        const data = {
            identifier: dataInfo.identifier,
            year: dataInfo.year,
            description: dataInfo.description,
            statusCode: dataInfo.statusCode,
            fiscalMonthList: fiscalMonthList,
        };
        this.props.history.push({
            pathname: '/edit-fiscal-year',
            dataInfo: data

        });
    };

    makeOption = () => {
        console.log(this.state.statusCode, 123)
        if (this.state.statusCode === "active") {
            const option = [
                {value: "active ", title: "فعال ", selected: false},
                {value: "deActive ", title: " غیر فعال ", selected: true}
            ];
            return option;
        } else {
            const option = [
                {value: "active ", title: "فعال ", selected: true},
                {value: "deActive ", title: " غیر فعال ", selected: false}
            ];
            return option;
        }

    };


    render() {
        const option = this.makeOption();
        return (

            <div
                className="rtl border bg-light shadow row w-100 m-0 text-center justify-content-center align-items-center my-3">
                <div className="col-12 justify-content-center align-items-center text-center header-box text-light">
                    <h4 className="py-2">ویرایش فصل مالی</h4>
                </div>
                <div className="col-12 justify-content-center align-items-center text-center">
                    <div className="rtl border m-0  shadow  row w-100 justify-content-center my-3 pb-3">
                        <div className="py-3  col-11">
                            <div className="form-group col-2  float-right">
                                <label>فصل :</label>
                                <input className="form-control text-center"
                                       type="input"
                                       step="any"
                                       placeholder="---"
                                       value={this.state.sessionName}
                                       onChange={(e) => this.fillParameterValueSeason(e.target.value, "sessionName")}
                                />
                            </div>
                            <div className="form-group col-2  float-right">
                                <label>وضعیت :</label>
                                <select
                                    className="form-control text-center"
                                    value={this.state.statusCode}
                                    onChange={(e) => this.fillParameterValueSelect(e.target.value, "statusCode")}
                                >
                                    {option.map(
                                        (option) => {
                                            return (<option
                                                value={option.value}
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

                    </div>

                    <div>
                        <div className=" row w-100 m-0 text-center justify-content-center align-items-center my-3">
                            <div className="p-2">
                                <input type="button" className="btn btn-success" value="ثبت"
                                       onClick={() => {
                                           this.setData();
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
