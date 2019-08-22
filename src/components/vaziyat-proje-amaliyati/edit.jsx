import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
// import {toast} from 'react-toastify';
import SearchResult from "../search/search-result"

class editDeliveryInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
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
    }


    fillParameterValue = (value, name) => {
        this.setState({[name]: value});
    };
    addData = () => {
        const data = this.state.data;
        data.push(
            {
                name: this.state.name,
                gharardad: this.state.gharardad,
                tasvibMagham: this.state.tasvibMagham,
                sefareshDahnde: this.state.sefareshDahnde,
                mozuProje: this.state.mozuProje,
                mablaghGharardad: this.state.mablaghGharardad,
                daramdShenasayi: this.state.daramdShenasayi,
                darsadPishraft: this.state.darsadPishraft,
                makharejAnjamide: this.state.makharejAnjamide,
                koleMakharej: this.state.koleMakharej,
            }
        );
        this.setState({data});
        this.setState({
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
        });
    };

    getResultTableHeader() {
        let headerInfo = {
            showCheckBox: false,
            actions: [],
            headerTitleInfos: [
                {name: "name", title: "نام پروژه"},
                {name: "mozuProje", title: "موضوع پروژه"},
                {name: "sefareshDahnde", title: "سفارش دهنده"},
                {name: "tasvibMagham", title: "نحوه تصویب مقامات ذی صلاح"},
                {name: "gharardad", title: "وضعیت قرارداد"},
                {name: "mablaghGharardad", title: "مبلغ قرارداد"},
                {name: "daramdShenasayi", title: "درامد شناسایی شده تاکنون"},
                {name: "darsadPishraft", title: "درصد پیشرفت کار"},
                {name: "makharejAnjamide", title: "مخارج انجام شده تاکنون"},
                {name: "koleMakharej", title: "کل مخارج براوردی"},
            ]
        };
        return headerInfo;
    }


    render() {
        const {data, pageSize} = this.state;
        const headerInfo = this.getResultTableHeader();

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
                                   value={this.state.mozuProje}
                                   name="mozuProje"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>سفارش دهنده :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.sefareshDahnde}
                                   name="sefareshDahnde"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>نحوه تصویب مقامات ذی صلاح :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.tasvibMagham}
                                   name="tasvibMagham"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>وضعیت قرارداد :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.gharardad}
                                   name="gharardad"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>مبلغ قرارداد :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.mablaghGharardad}
                                   name="mablaghGharardad"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>درامد شناسایی شده تاکنون :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.daramdShenasayi}
                                   name="daramdShenasayi"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>درصد پیشرفت کار :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.darsadPishraft}
                                   name="darsadPishraft"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>مخارج انجام شده تاکنون :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.makharejAnjamide}
                                   name="makharejAnjamide"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>کل مخارج براوردی :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.koleMakharej}
                                   name="koleMakharej"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className=" row w-100 m-0 text-center justify-content-center align-items-center my-3">
                            <div className="p-2">
                                <input type="button" className="btn btn-warning" value="افزودن"
                                       onClick={this.addData}/>
                            </div>
                        </div>
                    </div>
                    {this.state.data.length !== 0 ?
                        <div>
                            <div className="rtl border bg-light shadow row w-100 m-0 py-4 px-2">
                                <SearchResult headerInfo={headerInfo} searchResultList={data} pageSize={pageSize}/>
                            </div>
                            <div className="col-12 p-4 row text-center justify-content-center">
                                <div className="p-2">
                                    <input type="button" className="btn btn-success" value="ثبت نهایی"
                                           onClick={this.addTime}/>
                                </div>

                                <div className="p-2">
                                    <input type="button" className="btn btn-danger" value="لغو"
                                           onClick={this.addTime}/>
                                </div>
                            </div>
                        </div> : null
                    }

                </div>
            </div>
        );
    }
}

export default withRouter(editDeliveryInfo);
