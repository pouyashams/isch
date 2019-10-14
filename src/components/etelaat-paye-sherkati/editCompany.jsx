import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
// import {toast} from 'react-toastify';
import DatePicker from "../SimpleDatePicker";
// import SearchResult from "../search/search-result"
import Image from "../choose-image"

class editDeliveryInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{num: 1}],
            num: 1,
            pageSize: 5,
            name: "",
            mozuProje: "",
            sefareshDahnde: "",
            tasvibMagham: "",
            gharardad: "",
            mablaghGharardad: "",
            daramdShenasayi: "",
            darsadPishraft: "",
            makharejAnjamide: "",
            koleMakharej: "",
        };
        this.onBack = this.onBack.bind(this);

    }

    onBack() {
        this.props.history.push({
            pathname: '/etelaat-paye-sherkati',
        });
    }
    componentDidMount() {

        const {productInfo} = this.props.location;
        if (!productInfo) return this.props.history.push('/etelaat-paye-sherkati');
        this.setState({
            name: this.getValue(productInfo.name),
        });
    };

    fillParameterValue = (value, name) => {
        this.setState({[name]: value});
    };
    addData = () => {
        const {data, num} = this.state;
        let number = num + 1;
        data.push({num: number});
        this.setState({num: number});
    };

    getValue(field) {
        if (this.hasValue(field)) {
            return field;
        } else {
            return "";
        }
    }

    hasValue(field) {
        return field !== null && field !== undefined && field !== "";
    }

    render() {
        return (
            <div
                className="rtl border bg-light shadow row w-100 m-0 text-center justify-content-center align-items-center my-3">
                <div className="col-12 justify-content-center align-items-center text-center header-box text-light">
                    <h4 className="py-2">ویرایش اطلاعات شرکت</h4>
                </div>
                <div className="col-12 justify-content-center align-items-center text-center">
                    <div
                        className="rtl border m-0 bg-light shadow float-right row w-100 justify-content-start my-3 pb-3">
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>نام شرکت :</label>
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
                            <label>نوع ثبتی شرکت :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                // value={this.state.name}
                                // name="name"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>موضوع فعالیت شرکت :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                // value={this.state.name}
                                // name="name"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>بازرس :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                // value={this.state.name}
                                // name="name"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>شرکت حسابرسی :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                // value={this.state.name}
                                // name="name"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>آدرس الکترونیکی :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="example@gmail.com"
                                // value={this.state.name}
                                // name="name"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>تاریخ ایجاد مطالبات :</label>
                            <DatePicker
                                name={""}
                                // value={""}
                                placeholder="---"
                                // onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-6 float-right">
                            <label>آدرس محل فعالیت :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                // value={this.state.name}
                                // name="name"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                    </div>
                    <div
                        className="rtl border m-0 bg-light shadow float-right row w-100 justify-content-start my-3 pb-3">
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right ">
                            <label>شناسه ملی شرکت :</label>
                            <input className="form-control text-center w-75"
                                   type="number"
                                   step="any"
                                   placeholder="---"
                                // value={this.state.name}
                                // name="name"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right ">
                            <label>کد اقتصادی :</label>
                            <input className="form-control text-center w-75"
                                   type="number"
                                   step="any"
                                   placeholder="---"
                                // value={this.state.name}
                                // name="name"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right ">
                            <label>شماره ثبت :</label>
                            <input className="form-control text-center w-75"
                                   type="number"
                                   step="any"
                                   placeholder="---"
                                // value={this.state.name}
                                // name="name"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right ">
                            <label>سهام شرکت :</label>
                            <input className="form-control text-center w-75"
                                   type="number"
                                   step="any"
                                   placeholder="---"
                                // value={this.state.name}
                                // name="name"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right ">
                            <label> تلفن :</label>
                            <input className="form-control text-center w-75"
                                   type="number"
                                   step="any"
                                   placeholder="---"
                                // value={this.state.name}
                                // name="name"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right ">
                            <label>شماره نمابر :</label>
                            <input className="form-control text-center w-75"
                                   type="number"
                                   step="any"
                                   placeholder="---"
                                // value={this.state.name}
                                // name="name"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right ">
                            <label>کد پستی :</label>
                            <input className="form-control text-center w-75"
                                   type="number"
                                   step="any"
                                   placeholder="---"
                                // value={this.state.name}
                                // name="name"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right ">
                            <label>کد عضویت :</label>
                            <input className="form-control text-center w-75"
                                   type="number"
                                   step="any"
                                   placeholder="---"
                                // value={this.state.name}
                                // name="name"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>

                    </div>

                    <div>
                        <Image
                            label="اساسنامه :"
                            ref="child"
                            src={false}
                            canBeDel={false}
                        />
                        <Image
                            label="آگهی تاسیس :"
                            ref="child"
                            src={false}
                            canBeDel={false}
                        />
                        <Image
                            label="روزنامه اگهی رسمی :"
                            ref="child"
                            src={false}
                            canBeDel={false}
                        />
                        <Image
                            label="مدیر عامل :"
                            ref="child"
                            src={true}
                            canBeDel={false}
                        />
                        {this.state.data.map((dataInfo) =>
                            (
                                <div>
                                    <Image
                                        label="هیات مدیره :"
                                        ref="child"
                                        src={true}
                                        canBeDel={true}
                                    />
                                </div>

                            ))
                        }

                    </div>

                    <div>
                        <div className=" row w-100 m-0 text-center justify-content-center align-items-center my-3">
                            <div className="p-2">
                                <input type="button" className="btn btn-success" value="ثبت"
                                       onClick={this.sendDataTimeInfo}/>
                            </div>
                            <div className="p-2">
                                <input type="button" className="btn btn-warning" value="افزودن هیات مدیره"
                                       onClick={this.addData}/>
                            </div>
                            <div className="p-2">
                                <input type="button" className="btn btn-danger" value="لغو"
                                       onClick={this.onBack}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(editDeliveryInfo);
