import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import DatePicker from "../SimpleDatePicker";
import "../../css/textArea.css"
import {toast} from "react-toastify";
import {editBoardApprovals} from "../../services/boardApprovalService";

class editBoardApproval extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageSize: 5,
            data: [],
            date: "",
            operationalDate: "",
            details: "",
            actions: "",
            fiscalMonthId: "",

        };
        this.onBack = this.onBack.bind(this);
        this.fillParameterValue = this.fillParameterValue.bind(this);

    }

    onBack() {
        this.props.history.push({
            pathname: '/board-approval',
            dataInfo: this.state.fiscalMonthId,
        });
    }

    fillParameterValue = (value, name) => {
        this.setState({[name]: value});
    };

    componentDidMount() {
        const {dataInfo} = this.props.location;
        const {id} = this.props.location;
        if (!dataInfo) return this.props.history.push('/fiscal-year');
        if (!id) return this.props.history.push('/fiscal-year');
        this.setState({
            id: dataInfo.id,
            fiscalMonthId: id,
            date: dataInfo.date,
            operationalDate: dataInfo.operationalDate,
            details: dataInfo.details,
            actions: dataInfo.actions,

        });
    };

    addData = async () => {
        const allData = {
            fiscalMonth: {
                id: this.state.fiscalMonthId
            },
            id: this.state.id,
            date: this.state.date,
            operationalDate: this.state.operationalDate,
            details: this.state.details,
            actions: this.state.actions,
        };
        console.log(allData, 12345);
        try {
            const result = await editBoardApprovals(allData);
            if (result.status === 200) {
                toast.success('عملیات با موفقیت انجام شد.');
                this.props.history.push({
                    pathname: '/board-approval',
                    dataInfo: this.state.fiscalMonthId,
                });
            }
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                toast.error('خطایی در دریافت اطلاعات رخ داده است.');
            }
        }
        document.getElementById("loading").style.display = "none";
    };


    render() {

        return (
            <div
                className="rtl border bg-light shadow row w-100 m-0 text-center justify-content-center align-items-center my-3">
                <div className="col-12 justify-content-center align-items-center text-center header-box text-light">
                    <h4 className="py-2">افزودن مصوبات هیات مدیره</h4>
                </div>
                <div className="col-12 justify-content-center align-items-center text-center">
                    <div
                        className="rtl border m-0 bg-light shadow float-right row w-100 justify-content-start my-3 pb-3">


                        <div className="form-group  py-2 px-4 col-12 col-sm-6 col-md-3 float-right">
                            <label>تاریخ مصوبه :</label>
                            <DatePicker
                                name={"date"}
                                value={this.state.date}
                                placeholder="---"
                                onChange={this.fillParameterValue}
                            />
                        </div>
                        <div className="form-group py-2  col-12 col-sm-6 col-md-3 float-right">
                            <label>تاریخ انجام :</label>
                            <DatePicker
                                name={"operationalDate"}
                                value={this.state.operationalDate}
                                placeholder="---"
                                onChange={this.fillParameterValue}
                            />
                        </div>
                        <div className="form-group col-12 px-4 float-right">
                            <label>شرح مصوبه هیات مدیره :</label>
                            <textarea className="col-5 form-control text-center  "
                                      value={this.state.details}
                                      name={"details"}
                                      onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 px-4 float-right">
                            <label>اقدامات انجام شده :</label>
                            <textarea className="col-5 form-control text-center  "
                                      value={this.state.actions}
                                      name={"actions"}
                                      onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className=" row w-100 m-0 text-center justify-content-center align-items-center my-3">
                            <div className="p-2">
                                <input type="button" className="btn btn-success" value="ثبت نهایی"
                                       onClick={this.addData}/>
                            </div>
                            <div className="p-2">
                                <input type="button" className="btn btn-danger" value="بازگشت"
                                       onClick={this.onBack}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(editBoardApproval);
