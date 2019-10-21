import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import Table from "./table"

class deliveryInfoManagement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageSize: 20,
        };
        this.onBack = this.onBack.bind(this);


    }
    onBack() {
        this.props.history.push({
            pathname: '/fiscal-year',
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
                name: "بهای تمام شده فروش / ارائه خدمات",
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
                name: "سود (زیان) ناخالص",
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
                name: "هزینه های فروش،اداری و عمومی",
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
                name: "سایر اقلام عملیاتی",
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
                name: "سود (زیان) عملیاتی",
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
                name: "هزینه های مالی",
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
                name: "سایر درآمدها (هزینه ها)های غیر عملیاتی",
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
                name: "سود(زیان) قبل از کسر مالیات",
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
                name: "مالیات",
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
                name: "سود(زیان)خالص",
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

        const headerTitleInfos =[
            {name: "name", title: "شرح"},
            {name: "dore", title: "عملکرد دوره جاری"},
            {name: "vaghe", title: "عملکرد واقعی تاکنون"},
            {name: "budje", title: "بودجه مصوب"},
            {name: "moghayeseBudje", title: "بودجه تعدیل شده"},
            {name: "furusj", title: "درصد پوشش"},
        ];

        return (
            <div
                className="rtl border bg-light shadow row w-100 m-0 text-center justify-content-center align-items-center my-3">
                <div className="col-12 justify-content-center align-items-center text-center header-box text-light">
                    <h4 className="py-2">صورت سود و زیان دوره</h4>
                </div>
                <div className="rtl border bg-light shadow row w-100 m-0 py-4 px-2">

                    <h5 className="font-weight-bold p-4 ">دوره سه ماهه منتهی به (دوره جاری) :</h5>
                    <Table
                        data={data}
                        headerTitleInfos={headerTitleInfos}
                    />
                </div>
                <div
                    className="rtl border bg-light shadow row w-100 m-0 py-4 px-2">
                    <h5 className="font-weight-bold p-4 ">دوره سه ماهه مشابه (سال قبل) :</h5>
                    <Table
                        data={data}
                        headerTitleInfos={headerTitleInfos}
                    />
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
