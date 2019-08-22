import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
// import {toast} from 'react-toastify';
import SearchResult from "../search/search-result"

class editDeliveryInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageSize: 5,
            data:[]
        };
    }

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


    fillParameterValue = (value, name) => {
        this.setState({[name]: value});
    };
    getResultTableHeader() {
        let headerInfo = {
            showCheckBox: false,
            actions: [],
            headerTitleInfos: [
                {name: "naghd", title: "وجوه نقد"},
                {name: "sepordeBanki", title: "سپرده بانکی"},
                {name: "motalebatTejari", title: "مطالبات تجاری"},
                {name: "sayerMotalebat", title: "سایر مطالبات"},
                {name: "mojudiKala", title: "موجودی کالا"},
                {name: "pishpardakht", title: "پیش پرداخت ها و سایر داراهای جاری"},
                {name: "daramdShenasayi", title: "جمع دارایی های غیر جاری"},
            ]
        };
        return headerInfo;
    }
    getResultTableInfoHeader() {
        let headerInfo = {
            showCheckBox: false,
            actions: [],
            headerTitleInfos: [
                {name: "darayinamashhud", title: "دارایی های نا مشهود"},
                {name: "bolandmodat", title: "سایر دارایی های بلند مدت"},
                {name: "sabet", title: "دارایی های ثابت"},
                {name: "sarmayebolandmodt", title: "سرمایه گذاری های بلند مدت"},
                {name: "gharardad", title: "سایر دارایی های غیر جاری"},
                {name: "mablaghGharardad", title: "جمع دارایی های غیر جاری"},
            ]
        };
        return headerInfo;
    }



    render() {
        const headerInfo = this.getResultTableHeader();
        const headerInfos = this.getResultTableInfoHeader();
        const {data, pageSize} = this.state;
        return (
            <div
                className="rtl border bg-light shadow row w-100 m-0 text-center justify-content-center align-items-center my-3">
                <div className="col-12 justify-content-center align-items-center text-center header-box text-light">
                    <h4 className="py-2">افزودن ترکیب دارایی ها</h4>
                </div>
                <div className="col-12 justify-content-center align-items-center text-center">
                    <div className=" border m-0 bg-light shadow float-center row w-100 justify-content-center my-3 pb-3">
                        <div className="rtl p-3 col-11 border m-0 bg-light shadow float-right row w-100 justify-content-start my-3 pb-3">
                            <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                                <label>وجوه نقد :</label>
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
                                <label>سپرده بانکی :</label>
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
                                <label>مطلبات تجاری :</label>
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
                                <label>سایر مطالبات :</label>
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
                                <label>موجودی کالا :</label>
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
                                <label>پیش پرداخت ها و سایر داراهای جاری :</label>
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
                                <label>جمع دارایی های غیر جاری :</label>
                                <input className="form-control text-center"
                                       type="input"
                                       step="any"
                                       placeholder="---"
                                       value={this.state.daramdShenasayi}
                                       name="daramdShenasayi"
                                       onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                                />
                            </div>


                        </div>
                        <div
                            className="rtl col-11 p-3 border m-0 bg-light shadow float-right row w-100 justify-content-start my-3 pb-3">
                            <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                                <label>دارایی های نا مشهود :</label>
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
                                <label>سایر دارایی های بلند مدت	 :</label>
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
                                <label>دارایی های ثابت :</label>
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
                                <label>سرمایه گذاری های بلند مدت :</label>
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
                                <label>سایر دارایی های غیر جاری :</label>
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
                                <label>جمع دارایی های غیر جاری :</label>
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
                                <label>جمع دارایی های غیر جاری :</label>
                                <input className="form-control text-center"
                                       type="input"
                                       step="any"
                                       placeholder="---"
                                       value={this.state.daramdShenasayi}
                                       name="daramdShenasayi"
                                       onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                                />
                            </div>

                        </div>
                        <div className=" row w-100 m-0 text-center justify-content-center align-items-center my-3">
                            <div>
                                <input type="button" className="btn btn-warning" value="افزودن"
                                       onClick={this.addData}/>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.data.length!==0?
                    <div>
                        <div
                            className="rtl border bg-light shadow row w-100 m-0 py-4 px-2">
                            <SearchResult headerInfo={headerInfo} searchResultList={data} pageSize={pageSize}/>
                            <SearchResult headerInfo={headerInfos} searchResultList={data} pageSize={pageSize}/>
                        </div>
                        <div className=" row w-100 m-0 text-center justify-content-center align-items-center my-3">
                            <div className="p-2">
                                <input type="button" className="btn btn-success" value="اضافه کردن"
                                       onClick={this.sendDataTimeInfo}/>
                            </div>
                            <div className="p-2">
                                <input type="button" className="btn btn-danger" value="لغو"
                                       onClick={this.addTime}/>
                            </div>
                        </div>
                    </div>:null
                }


            </div>
        );
    }
}

export default withRouter(editDeliveryInfo);
