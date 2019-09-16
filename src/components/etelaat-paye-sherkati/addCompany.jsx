import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {toast} from 'react-toastify';
import DatePicker from "../SimpleDatePicker";
import Upload from "../choose-file"
import {register} from "../../services/companyService";


class editDeliveryInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            managingDirectorInfo : {
                identifier : "",
                fullName: ""
            },
            officialADNewspaper: {
                identifier: "",
            },
            foundedAD: {
                identifier: "",
            },
            statute: {
                identifier: "",
            },
            boardOfDirectors: [
                {
                    number : 1,
                    identifier : "",
                    fullName: ""
                }
            ],
            name: "",
            activityTopic: "",
            nationalCode: "",
            economicCode: "",
            kindOfRegistration: "",
            registrationCode: "",
            registerDate: "",
            membershipCode: "",
            stocks: "",
            phoneNumber: "",
            faxNumber: "",
            email: "",
            address: "",
            postalCode: "",
            inspector: "",
            auditCompany: "",
        };
    }

    fillDateParameterValue = (value, name) => {
        this.setState({[name]: value});
    };

    fillParameterValue = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };


    fillParameterForManagingDirectorInfo = (value) => {
        let {managingDirectorInfo} = this.state;
        managingDirectorInfo.fullName = value;
        this.setState(managingDirectorInfo);
    };

    fillParameterForBoardOfDirectors = (value, number) => {
        let {boardOfDirectors} = this.state;

        boardOfDirectors.forEach((boardOfDirector) => {
            if (boardOfDirector.number === number) {
                boardOfDirector.fullName = value;
            }
        });

        this.setState(boardOfDirectors);
    };

    deleteBoardOfDirectors = (number) => {
        let newBoardOfDirectors = [];
        let {boardOfDirectors} = this.state;

        boardOfDirectors.forEach((boardOfDirector) => {
            if (boardOfDirector.number !== number) {
                newBoardOfDirectors.push(boardOfDirector)
            }
        });

        this.setState({boardOfDirectors : newBoardOfDirectors});
    };

    addBoardOfDirectors = () => {
        const {boardOfDirectors, number} = this.state;
        let newNumber = number + 1;
        boardOfDirectors.push({
            number: number + 1,
            identifier : "",
            fullName: ""
        });
        this.setState({boardOfDirectors: boardOfDirectors, number: newNumber});
    };

    registerCompany = async () => {
        const {boardOfDirectors} = this.state;
        const newBoardOfDirectors = [];
        boardOfDirectors.forEach((boardOfDirector) => {
            newBoardOfDirectors.push(
                {
                    name: boardOfDirector.fullName,
                    imageInfo: {identifier: boardOfDirector.identifier}
                }
            )
        });


        const data = {
            name: this.state.name,
            nationalCode: this.state.nationalCode,
            economicCode: this.state.echoCancellation,
            registrationCode: this.state.registrationCode,
            membershipCode: this.state.membershipCode,
            inspector: this.state.inspector,
            registerDate: this.state.registerDate,
            addressInfo: {address: this.state.addressInfo},
            phoneNumber: this.state.phoneNumber,
            faxNumber: this.state.faxNumber,
            email: this.state.email,
            activityTopic: this.state.activityTopic,
            auditCompany: this.state.auditCompany,
            kindOfRegistration: this.state.kindOfRegistration,
            stocks: this.state.stocks,
            managingDirector: {
                name: this.state.managingDirectorInfo.fullName,
                imageInfo: {identifier: this.state.managingDirectorInfo.identifier}
            },
            boardOfDirectors: newBoardOfDirectors
        };

        try {
            const result = await await register(data);
            if (result.status === 200) {
                toast.success('عملیات با موفقیت انجام شد');
                this.props.history.goBack();
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
                    <h4 className="py-2">افزودن اطلاعات شرکت</h4>
                </div>
                <div className="col-12 justify-content-center align-items-center text-center">
                    <div className="rtl border m-0 bg-light shadow float-right row w-100 justify-content-start my-3 pb-3">
                        <div className="col-12 justify-content-center align-items-center text-center header-box text-light panel-header">
                            <h4 className="py-2">اطلاعات شرکت</h4>
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>نام شرکت :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.name}
                                   name="name"
                                   onChange={(e) => this.fillParameterValue(e)}
                            />
                        </div>

                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>موضوع فعالیت شرکت :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.activityTopic}
                                   name="activityTopic"
                                   onChange={(e) => this.fillParameterValue(e)}
                            />
                        </div>

                        <div className="form-group col-12 col-sm-6 col-md-3 float-right ">
                            <label>شناسه ملی شرکت :</label>
                            <input className="form-control text-center "
                                   type="number"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.nationalCode}
                                   name="nationalCode"
                                   onChange={(e) => this.fillParameterValue(e)}
                            />
                        </div>

                        <div className="form-group col-12 col-sm-6 col-md-3 float-right ">
                            <label>کد اقتصادی :</label>
                            <input className="form-control text-center "
                                   type="number"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.economicCode}
                                   name="economicCode"
                                   onChange={(e) => this.fillParameterValue(e)}
                            />
                        </div>



                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>نوع ثبتی شرکت :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.kindOfRegistration}
                                   name="kindOfRegistration"
                                   onChange={(e) => this.fillParameterValue(e)}
                            />
                        </div>


                        <div className="form-group col-12 col-sm-6 col-md-3 float-right ">
                            <label>شماره ثبت :</label>
                            <input className="form-control text-center "
                                   type="number"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.registrationCode}
                                   name="registrationCode"
                                   onChange={(e) => this.fillParameterValue(e)}
                            />
                        </div>


                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>تاریخ ثبت :</label>
                            <DatePicker
                                name="registerDate"
                                value={this.state.registerDate}
                                placeholder="---"
                                onChange={() => this.fillDateParameterValue()}
                            />
                        </div>

                        <div className="form-group col-12 col-sm-6 col-md-3 float-right ">
                            <label>کد عضویت :</label>
                            <input className="form-control text-center "
                                   type="number"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.membershipCode}
                                   name="membershipCode"
                                   onChange={(e) => this.fillParameterValue(e)}
                            />
                        </div>

                        <div className="form-group col-12 col-sm-6 col-md-3 float-right ">
                            <label>سهام شرکت :</label>
                            <input className="form-control text-center "
                                   type="number"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.stocks}
                                   name="stocks"
                                   onChange={(e) => this.fillParameterValue(e)}
                            />
                        </div>

                        <div className="form-group col-12 col-sm-6 col-md-3 float-right ">
                            <label> تلفن :</label>
                            <input className="form-control text-center "
                                   type="number"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.phoneNumber}
                                   name="phoneNumber"
                                   onChange={(e) => this.fillParameterValue(e)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right ">
                            <label>شماره نمابر :</label>
                            <input className="form-control text-center "
                                   type="number"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.faxNumber}
                                   name="faxNumber"
                                   onChange={(e) => this.fillParameterValue(e)}
                            />
                        </div>

                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>آدرس الکترونیکی :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="example@gmail.com"
                                   value={this.state.email}
                                   name="email"
                                   onChange={(e) => this.fillParameterValue(e)}
                            />
                        </div>


                        <div className="form-group col-9 float-right">
                            <label>آدرس محل فعالیت :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.address}
                                   name="address"
                                   onChange={(e) => this.fillParameterValue(e)}
                            />
                        </div>


                        <div className="form-group col-12 col-sm-6 col-md-3 float-right ">
                            <label>کد پستی :</label>
                            <input className="form-control text-center"
                                   type="number"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.postalCode}
                                   name="postalCode"
                                   onChange={(e) => this.fillParameterValue(e)}
                            />
                        </div>


                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>بازرس :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.inspector}
                                   name="inspector"
                                   onChange={(e) => this.fillParameterValue(e)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>شرکت حسابرسی :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.auditCompany}
                                   name="auditCompany"
                                   onChange={(e) => this.fillParameterValue(e)}
                            />
                        </div>



                    </div>

                    <div className="rtl border m-0 bg-light shadow float-right row w-100 justify-content-start my-3 pb-3">
                        <div className="col-12 justify-content-center align-items-center text-center header-box text-light panel-header">
                            <h4 className="py-2">هیئت مدیره</h4>
                        </div>


                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <div className="rtl border m-0 bg-light shadow float-right row w-100 justify-content-start my-3 pb-3">
                                <div className="col-12 justify-content-center align-items-center text-center header-box text-light panel-header">
                                    <h4 className="py-2">مدیرعامل</h4>
                                </div>
                                <div className="form-group col-12 col-sm-6 col-md-6 float-right justify-content-center text-center pt-5">
                                    <label>نام و نام خانوادگی :</label>
                                    <input className="form-control text-center"
                                           type="input"
                                           step="any"
                                           placeholder="---"
                                           value={this.state.managingDirectorInfo.fullName}
                                           name="name"
                                           onChange={(e) => this.fillParameterForManagingDirectorInfo(e.target.value)}
                                    />
                                </div>
                                <div className="form-group col-12 col-sm-6 col-md-6 float-right">
                                    <Upload
                                        label=""
                                        ref="child"
                                        isImage={true}
                                        dataInfo={this.state.managingDirectorInfo}
                                    />
                                </div>
                            </div>
                        </div>

                        {this.state.boardOfDirectors.map((dataInfo) =>
                            (
                                <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                                    <div className="rtl border m-0 bg-light shadow float-right row w-100 justify-content-start my-3 pb-3">
                                        <div className="col-12  header-box text-light panel-header text-left card-wrap">
                                            <h4 className="py-2 justify-content-center align-items-center text-center">هیئت مدیره</h4>
                                            <i className="fa fa-trash text-left close" aria-hidden="true" onClick={() => this.deleteBoardOfDirectors(dataInfo.number)}></i>
                                        </div>
                                        <div className="form-group col-12 col-sm-6 col-md-6 float-right justify-content-center text-center pt-5">
                                            <label>نام و نام خانوادگی :</label>
                                            <input className="form-control text-center"
                                                   type="input"
                                                   step="any"
                                                   placeholder="---"
                                                   value={dataInfo.fullName}
                                                   name="name"
                                                   onChange={(e) => this.fillParameterForBoardOfDirectors(e.target.value, dataInfo.number)}
                                            />
                                        </div>
                                        <div className="form-group col-12 col-sm-6 col-md-6 float-right">
                                            <Upload
                                                label=""
                                                ref="child"
                                                isImage={true}
                                                dataInfo={dataInfo}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>


                    <div className="rtl border m-0 bg-light shadow float-right row w-100 justify-content-start my-3 pb-3">
                        <div className="col-12 justify-content-center align-items-center text-center header-box text-light panel-header">
                            <h4 className="py-2">الحاقیات</h4>
                        </div>

                        <div>
                            <Upload
                                label="اساسنامه :"
                                ref="child"
                                isImage={false}
                                dataInfo={this.state.statute}
                            />

                            <Upload
                                label="آگهی تاسیس :"
                                ref="child"
                                isImage={false}
                                dataInfo={this.state.foundedAD}
                            />

                            <Upload
                                label="روزنامه اگهی رسمی :"
                                ref="child"
                                isImage={false}
                                dataInfo={this.state.officialADNewspaper}
                            />

                        </div>


                    </div>


                    <div>
                        <div className=" row w-100 m-0 text-center justify-content-center align-items-center my-3">
                            <div className="p-2">
                                <input type="button" className="btn btn-success" value="ثبت"
                                       onClick={() => {
                                           this.registerCompany();
                                       }}/>
                            </div>
                            <div className="p-2">
                                <input type="button" className="btn btn-warning" value="افزودن هیات مدیره"
                                       onClick={this.addBoardOfDirectors}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(editDeliveryInfo);
