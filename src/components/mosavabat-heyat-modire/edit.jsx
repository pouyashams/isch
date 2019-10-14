import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
// import {toast} from 'react-toastify';
import SearchResult from "../search/search-result"

import DatePicker from "../SimpleDatePicker";
import "../../css/textArea.css"

class editDeliveryInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageSize: 5,
            data: [],
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
            pathname: '/mosvabat-heyat-modire',
        });
    }

    fillParameterValue = (value, name) => {
        this.setState({[name]: value});
    };

    getResultTableHeader() {
        let headerInfo = {
            showCheckBox: false,
            actions: [],
            headerTitleInfos: [
                {name: "name", title: "تاریخ مصوبه"},
                {name: "mozuProje", title: "شرح مصوبه هیات مدیره"},
                {name: "sefareshDahnde", title: "اقدامات انجام شده"},
                {name: "sefareshDahnde", title: "تاریخ انجام"},
            ]
        };
        return headerInfo;
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


    render() {
        const headerInfo = this.getResultTableHeader();
        const {data, pageSize} = this.state;
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
                                name={""}
                                // value={""}
                                placeholder="---"
                                // onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group py-2  col-12 col-sm-6 col-md-3 float-right">
                            <label>تاریخ انجام :</label>
                            <DatePicker
                                name={""}
                                // value={""}
                                placeholder="---"
                                // onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 px-4 float-right">
                            <label>شرح مصوبه هیات مدیره	 :</label>
                            <textarea className="col-5 form-control text-center  "
                                // value={""}
                                      name={"description"}
                                      onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 px-4 float-right">
                            <label>اقدامات انجام شده :</label>
                            <textarea className="col-5 form-control text-center  "
                                // value={""}
                                      name={"description"}
                                      onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className=" row w-100 m-0 text-center justify-content-center align-items-center my-3">
                            <div >
                                <input type="button" className="btn btn-warning" value="افزودن"
                                       onClick={this.addData}/>
                            </div>
                        </div>
                    </div>
                    {data.length !== 0 ?
                        <div>
                            <div
                                className="rtl border bg-light shadow row w-100 m-0 py-4 px-2">
                                <SearchResult headerInfo={headerInfo} searchResultList={data} pageSize={pageSize}/>
                            </div>
                            <div className=" row w-100 m-0 text-center justify-content-center align-items-center my-3">
                                <div className="p-2">
                                    <input type="button" className="btn btn-success" value="اضافه کردن"
                                           onClick={this.sendDataTimeInfo}/>
                                </div>
                                <div className="p-2">
                                    <input type="button" className="btn btn-danger" value="لغو"
                                           onClick={this.onBack}/>
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
