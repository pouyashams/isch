import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
// import {toast} from 'react-toastify';
import DatePicker from "../SimpleDatePicker";
// import "../textArea.css"
import SearchResult from "../search/search-result"

class editDeliveryInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[],
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
            pathname: '/motalebat-movagh',
        });
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
                {name: "name", title: "نام شرکت"},
                {name: "mozuProje", title: "تاریخ ایجاد مطالبات"},
                {name: "sefareshDahnde", title: "موضوع"},
                {name: "tasvibMagham", title: "علت معوق شدن"},
                {name: "gharardad", title: "اقدامات انجام شده"},
                {name: "mablaghGharardad", title: "مبلغ "},
            ]
        };
        return headerInfo;
    }


    render() {
        const headerInfo = this.getResultTableHeader();
        const {data, pageSize} = this.state;
        return (
            <div
                className="rtl border bg-light shadow row w-100 m-0 text-center justify-content-center align-items-center my-3">
                <div className="col-12 justify-content-center align-items-center text-center header-box text-light">
                    <h4 className="py-2">افزودن مطالبات معوق</h4>
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
                            <label>تاریخ ایجاد مطالبات :</label>
                            <DatePicker
                                name={""}
                                // value={""}
                                placeholder="---"
                                // onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 col-sm-6 col-md-3 float-right">
                            <label>موضوع :</label>
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
                            <label>علت معوق شدن :</label>
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
                            <label>مبلغ :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   placeholder="---"
                                   value={this.state.mablaghGharardad}
                                   name="mablaghGharardad"
                                   onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>
                        <div className="form-group col-12 float-right">
                            <label>اقدامات انجام شده :</label>
                            <textarea className="col-5 form-control text-center  "
                                // value={""}
                                      name={"description"}
                                      onChange={(e) => this.fillParameterValue(e.target.value, e.target.name)}
                            />
                        </div>

                        <div className=" row w-100 m-0 text-center justify-content-center align-items-center my-3">
                            <div>
                                <input type="button" className="btn btn-warning" value="افزودن"
                                       onClick={this.addData}/>
                            </div>
                        </div>
                    </div>
                    {data.length!==0?
                        <div>
                            <div
                                className="rtl border bg-light shadow row w-100 m-0 py-4 px-2">
                                <SearchResult headerInfo={headerInfo} searchResultList={data} pageSize={pageSize}/>
                                <div className="col-12 text-center justify-content-center">
                                </div>
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
                        </div>:null
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(editDeliveryInfo);
