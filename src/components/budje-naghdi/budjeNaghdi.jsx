import React, {Component} from 'react'
// import {toast} from 'react-toastify';
import SearchResult from "../search/search-result"
import {withRouter} from 'react-router-dom';

class deliveryInfoManagement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageSize: 20,
            data: [
                {
                    name: "درآمد حاصل از فروش کالا / ارائه خدمات",
                    id: 0
                }, {
                    name: "وصول مطالبات",
                    id: 1
                }, {
                    name: "فروش دارایی های غیر جاری",
                    id: 2
                }, {
                    name: "افزایش سرمایه (نقدی)",
                    id: 3
                }, {
                    name: "درامد غیر عملیاتی",
                    id: 4
                }, {
                    name: "سایر دریافت ها",
                    id: 5
                },
                {
                    name: <label className="font-weight-bold">جمع دریافت ها</label>,
                    id: 6
                },
                {
                    name: "خرید کالا/مواد/لوازم یدکی/...",
                    id: 7
                },
                {
                    name: "هزینه های دستمزد و سربار (مستقیم و غیر مستقیم)",
                    id: 8
                },
                {
                    name: "هزینه های فروش ، اداری و مالی و عمومی",
                    id: 9
                },
                {
                    name: "پرداخت بدهی های دوره قبل",
                    id: 10
                },
                {
                    name: "پرداخت مخارج سرمایه ای ",
                    id: 11
                },
                {
                    name: "پرداخت سود سهام",
                    id: 12
                },
                {
                    name: "پرداخت مالیات",
                    id: 13
                },
                {
                    name: "هزینه های غیر عملیاتی",
                    id: 14
                },
                {
                    name: "سایر پرداخت ها",
                    id: 15
                },
                {
                    name: <label className="font-weight-bold">جمع پرداخت ها</label>,
                    id: 16
                },
                {
                    name: <label className="font-weight-bold">مازاد(کسری) دریافتها نسبت به پرداخت ها</label>,
                    id: 17
                },
                {
                    name: <label className="font-weight-bold">موجودی نقد ابتدای دوره</label>,
                    id: 18
                },
                {
                    name: <label className="font-weight-bold">موجودی نقد پایان دوره</label>,
                    id: 19
                },
            ],
            dataInfo: [
                {
                    name: "درآمد حاصل از فروش کالا / ارائه خدمات",
                    id: 0
                }, {
                    name: "وصول مطالبات",
                    id: 1
                }, {
                    name: "فروش دارایی های غیر جاری",
                    id: 2
                }, {
                    name: "افزایش سرمایه (نقدی)",
                    id: 3
                }, {
                    name: "درامد غیر عملیاتی",
                    id: 4
                }, {
                    name: "سایر دریافت ها",
                    id: 5
                },
                {
                    name: <label className="font-weight-bold">جمع دریافت ها</label>,
                    id: 6
                },
                {
                    name: "خرید کالا/مواد/لوازم یدکی/...",
                    id: 7
                },
                {
                    name: "هزینه های دستمزد و سربار (مستقیم و غیر مستقیم)",
                    id: 8
                },
                {
                    name: "هزینه های فروش ، اداری و مالی و عمومی",
                    id: 9
                },
                {
                    name: "پرداخت بدهی های دوره قبل",
                    id: 10
                },
                {
                    name: "پرداخت مخارج سرمایه ای ",
                    id: 11
                },
                {
                    name: "پرداخت سود سهام",
                    id: 12
                },
                {
                    name: "پرداخت مالیات",
                    id: 13
                },
                {
                    name: "هزینه های غیر عملیاتی",
                    id: 14
                },
                {
                    name: "سایر پرداخت ها",
                    id: 15
                },
                {
                    name: <label className="font-weight-bold">جمع پرداخت ها</label>,
                    id: 16
                },
                {
                    name: <label className="font-weight-bold">مازاد(کسری) دریافتها نسبت به پرداخت ها</label>,
                    id: 17
                },
                {
                    name: <label className="font-weight-bold">موجودی نقد ابتدای دوره</label>,
                    id: 18
                },
                {
                    name: <label className="font-weight-bold">موجودی نقد پایان دوره</label>,
                    id: 19
                },
            ],
        };
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


    getResultTableHeader() {
        let headerInfo = {
            showCheckBox: false,
            actions: [],
            headerTitleInfos: [
                {name: "name", title: "شرح"},
                {name: "mozuProje", title: "عملکرد دوره جاری"},
                {name: "sefareshDahnde", title: "عملکرد واقعی تاکنون"},
                {name: "sefareshDahnde", title: "بودجه مصوب"},
                {name: "sefareshDahnde", title: "بودجه تعدیل شده"},
                {name: "sefareshDahnde", title: "درصد پوشش"},
            ]
        };
        return headerInfo;
    }

    render() {
        const headerInfo = this.getResultTableHeader();
        const {data,dataInfo, pageSize} = this.state;
        return (
            <div
                className="rtl border bg-light shadow row w-100 m-0 text-center justify-content-center align-items-center my-3">
                <div className="col-12 justify-content-center align-items-center text-center header-box text-light">
                    <h4 className="py-2">بودجه نقدی</h4>
                </div>
                <div className="rtl border bg-light shadow row w-100 m-0 py-4 px-2">

                    <h5 className="font-weight-bold p-4 ">دوره سه ماهه منتهی به (دوره جاری) :</h5>
                    <SearchResult headerInfo={headerInfo} searchResultList={data} pageSize={pageSize}/>
                </div>
                <div
                    className="rtl border bg-light shadow row w-100 m-0 py-4 px-2">
                    <h5 className="font-weight-bold p-4 ">دوره سه ماهه مشابه (سال قبل) :</h5>


                    <SearchResult headerInfo={headerInfo} searchResultList={dataInfo} pageSize={pageSize}/>
                </div>
            </div>
        );
    }
}

export default withRouter(deliveryInfoManagement);