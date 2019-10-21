import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {toast} from "react-toastify";
import {editOperationalProjects} from "../../services/operationalProjectService";

class editOperationalProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            projectSubject: "",
            requester: "",
            typeOfApproveCompetent: "",
            contractStatus: "",
            contractAmount: "",
            incomeMoney: "",
            expensesMoney: "",
            estimatedExpensesMoney: "",
            percentageOfWorkProgress: "",
            fiscalMonthId: "",
            id: "",
        };
        this.onBack = this.onBack.bind(this);
    }

    componentDidMount() {
        const {dataInfo} = this.props.location;
        const {id} = this.props.location;
        if (!dataInfo) return this.props.history.push('/fiscal-year');
        if (!id) return this.props.history.push('/fiscal-year');
        console.log(dataInfo, 432)
        this.setState({
            id: dataInfo.id,
            fiscalMonthId: id,
            name: dataInfo.name,
            projectSubject: dataInfo.projectSubject,
            requester: dataInfo.requester,
            typeOfApproveCompetent: dataInfo.typeOfApproveCompetent,
            contractStatus: dataInfo.contractStatus,
            contractAmount: dataInfo.contractAmount,
            incomeMoney: dataInfo.incomeMoney,
            expensesMoney: dataInfo.expensesMoney,
            estimatedExpensesMoney: dataInfo.estimatedExpensesMoney,
            percentageOfWorkProgress: dataInfo.percentageOfWorkProgress
        });
    }


    onBack() {
        this.props.history.push({
            pathname: '/operational-project',
            dataInfo: this.state.fiscalMonthId,
        });
    };

    fillParameterValue = (value, name) => {
        this.setState({[name]: value});
    };
    sendInfo = async () => {
        const data = {
            fiscalMonth: {
                id: this.state.fiscalMonthId
            },
            id: this.state.id,
            name: this.state.name,
            projectSubject: this.state.projectSubject,
            requester: this.state.requester,
            typeOfApproveCompetent: this.state.typeOfApproveCompetent,
            contractStatus: this.state.contractStatus,
            contractAmount: this.state.contractAmount,
            incomeMoney: this.state.incomeMoney,
            expensesMoney: this.state.expensesMoney,
            estimatedExpensesMoney: this.state.estimatedExpensesMoney,
            percentageOfWorkProgress: this.state.percentageOfWorkProgress
        };
        console.log(data, 123)
        try {
            const result = await editOperationalProjects(data);
            if (result.status === 200) {
                toast.success('عملیات با موفقیت انجام شد.');
                this.props.history.push({
                    pathname: '/operational-project',
                    dataInfo: this.state.fiscalMonthId,
                });
            }
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                toast.error('خطایی در دریافت اطلاعات رخ داده است.');
                this.props.history.push({
                    pathname: '/operational-project',
                    dataInfo: this.state.fiscalMonthId,
                });
            }
        }
        document.getElementById("loading").style.display = "none";
    };

    render() {
        return (
            <div
                className="rtl border bg-light shadow row w-100 m-0 text-center justify-content-center align-items-center my-3">
                <div className="col-12 justify-content-center align-items-center text-center header-box text-light">
                    <h4 className="py-2">افزودن پروژه عملیاتی</h4>
                </div>
                <div className="col-12 justify-content-center align-items-center text-center">
                    <div
                        className="rtl border m-0 bg-light shadow float-right row w-100 justify-content-start my-3 pb-3">
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>نام پروژه :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.name}
                                   name="name"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>موضوع پروژه :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.projectSubject}
                                   name="projectSubject"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>سفارش دهنده :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.requester}
                                   name="requester"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>نحوه تصویب مقامات ذی صلاح :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.typeOfApproveCompetent}
                                   name="typeOfApproveCompetent"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>وضعیت قرارداد :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.contractStatus}
                                   name="contractStatus"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>مبلغ قرارداد :</label>
                            <input className="form-control text-center"
                                   type="number"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.contractAmount}
                                   name="contractAmount"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>درامد شناسایی شده تاکنون :</label>
                            <input className="form-control text-center"
                                   type="number"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.incomeMoney}
                                   name="incomeMoney"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>درصد پیشرفت کار :</label>
                            <input className="form-control text-center"
                                   type="number"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.expensesMoney}
                                   name="expensesMoney"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>مخارج انجام شده تاکنون :</label>
                            <input className="form-control text-center"
                                   type="number"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.estimatedExpensesMoney}
                                   name="estimatedExpensesMoney"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>کل مخارج براوردی :</label>
                            <input className="form-control text-center"
                                   type="number"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.percentageOfWorkProgress}
                                   name="percentageOfWorkProgress"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="col-12 p-4 row text-center justify-content-center">
                            <div className="p-2">
                                <input type="button" className="btn btn-success" value="ثبت نهایی"
                                       onClick={this.sendInfo}/>
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

export default withRouter(editOperationalProject);
