import React, {Component} from 'react'
import Table from "./table"
import {withRouter} from 'react-router-dom';

class deliveryInfoManagement extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onBack = this.onBack.bind(this);

    }

    onBack() {
        this.props.history.push({
            pathname: '/sal-mali',
        });
    }

    //
    // async componentDidMount() {
    //     try {
    //         const result = await loadDataOfCity();
    //         if (result.status === 200) {
    //             const data = [];
    //             result.data.data.forEach((dataInfo) => {
    //                 data.push(
    //                     {
    //                         identifier: dataInfo.provinceInfo.identifier,
    //                         name: dataInfo.provinceInfo.name,
    //                         numberOfProduct: dataInfo.numberOfProduct,
    //                         waitingDay: dataInfo.waitingDay,
    //                         numberOfDate: dataInfo.numberOfDate,
    //                         deliveryAmount: dataInfo.deliveryAmount,
    //                         timePeriodList: dataInfo.timePeriodList
    //                     }
    //                 )
    //             });
    //             this.setState({data, dataInfo: result.data.data});
    //         }
    //     } catch (ex) {
    //         if (ex.response && ex.response.status === 400) {
    //             toast.error('خطایی در دریافت اطلاعات رخ داده است.');
    //         }
    //     }
    //     document.getElementById("loading").style.display = "none";
    // }
    //


    render() {
        const data = [
            {
                name: "درآمد حاصل از فروش کالا / ارائه خدمات",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
            },

            {
                name: "وصول مطالبات",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },

            {
                name: "فروش دارایی های غیر جاری",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
            },

            {
                name: "افزایش سرمایه (نقدی)",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
            },

            {
                name: "درامد غیر عملیاتی",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },

            {
                name: <label className="font-weight-bold">جمع دریافت ها</label>,
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },

            {
                name: "خرید کالا/مواد/لوازم یدکی/...",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },

            {
                name: "هزینه های دستمزد و سربار (مستقیم و غیر مستقیم)",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },

            {
                name: "هزینه های فروش ، اداری و مالی و عمومی",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },
            {
                name: "پرداخت بدهی های دوره قبل",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },

            {
                name: "پرداخت مخارج سرمایه ای ",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },

            {
                name: "پرداخت سود سهام",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },
            {
                name: "پرداخت مالیات",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },
            {
                name: "هزینه های غیر عملیاتی",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },
            {
                name: "سایر پرداخت ها",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },
            {
                name: <label className="font-weight-bold">جمع پرداخت ها</label>,
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },
            {
                name: <label className="font-weight-bold">مازاد(کسری) دریافتها نسبت به پرداخت ها</label>,
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },
            {
                name: <label className="font-weight-bold">موجودی نقد ابتدای دوره</label>,
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },
            {
                name: <label className="font-weight-bold">موجودی نقد پایان دوره</label>,
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },
        ];
        const dataInfo = [
            {
                name: "درآمد حاصل از فروش کالا / ارائه خدمات",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
            },

            {
                name: "وصول مطالبات",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },

            {
                name: "فروش دارایی های غیر جاری",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
            },

            {
                name: "افزایش سرمایه (نقدی)",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
            },

            {
                name: "درامد غیر عملیاتی",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },
            {
                name: "سایر دریافت ها",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },

            {
                name: <label className="font-weight-bold">جمع دریافت ها</label>,
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },

            {
                name: "خرید کالا/مواد/لوازم یدکی/...",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },

            {
                name: "هزینه های دستمزد و سربار (مستقیم و غیر مستقیم)",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },

            {
                name: "هزینه های فروش ، اداری و مالی و عمومی",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },

            {
                name: "پرداخت مخارج سرمایه ای ",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },

            {
                name: "پرداخت سود سهام",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },
            {
                name: "پرداخت مالیات",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },
            {
                name: "هزینه های غیر عملیاتی",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },
            {
                name: "سایر پرداخت ها",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },
            {
                name: <label className="font-weight-bold">جمع پرداخت ها</label>,
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },
            {
                name: <label className="font-weight-bold">مازاد(کسری) دریافتها نسبت به پرداخت ها</label>,
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },
            {
                name: <label className="font-weight-bold">موجودی نقد ابتدای دوره</label>,
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },
            {
                name: <label className="font-weight-bold">موجودی نقد پایان دوره</label>,
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                        // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                vaghe:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,

            },
        ];

        const headerTitleInfos = [
            {name: "name", title: "شرح"},
            {name: "dore", title: "عملکرد دوره جاری"},
            {name: "vaghe", title: "عملکرد واقعی تاکنون"},
            {name: "budje", title: "بودجه مصوب"},
            {name: "moghayeseBudje", title: "بودجه تعدیل شده"},
            {name: "furusj", title: "بودجه تعدیل شده"},
        ];

        return (
            <div
                className="rtl border bg-light shadow row w-100 m-0 text-center justify-content-center align-items-center my-3">
                <div className="col-12 justify-content-center align-items-center text-center header-box text-light">
                    <h4 className="py-2">بودجه نقدی</h4>
                </div>
                <div className="rtl border bg-light shadow row w-100 m-0 py-4 px-2">

                    <h5 className="font-weight-bold p-4 ">دوره سه ماهه منتهی به (دوره جاری) :</h5>
                    <Table
                        data={data}
                        headerTitleInfos={headerTitleInfos}
                    />
                    {/*<SearchResult headerInfo={headerInfo} searchResultList={data} pageSize={pageSize}/>*/}
                </div>
                <div
                    className="rtl border bg-light shadow row w-100 m-0 py-4 px-2">
                    <h5 className="font-weight-bold p-4 ">دوره سه ماهه مشابه (سال قبل) :</h5>

                    <Table
                        data={dataInfo}
                        headerTitleInfos={headerTitleInfos}
                    />
                    {/*<SearchResult headerInfo={headerInfo} searchResultList={dataInfo} pageSize={pageSize}/>*/}
                </div>
                <div>
                    <div className=" row w-100 m-0 text-center justify-content-center align-items-center my-3">
                        <div className="p-2">
                            <input type="button" className="btn btn-success" value="ذخیره"
                                   onClick={() => {
                                       this.addSalMali();
                                   }}/>
                        </div>
                        <div className="p-2">
                            <input type="button" className="btn btn-danger" value="بازگشت"
                                   onClick={this.onBack}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(deliveryInfoManagement);
