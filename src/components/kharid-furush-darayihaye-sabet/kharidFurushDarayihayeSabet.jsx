import React, {Component} from 'react'
// import {toast} from 'react-toastify';
import "../../css/textArea.css"
import SearchResult from "../search/search-result"
import {withRouter} from 'react-router-dom';

class deliveryInfoManagement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageSize: 12,
            data: [
                {
                    identifier:0,
                    name:"زمین"
                },
                {
                    identifier:1,
                    name:"ساختمان و مستحدثات"
                },
                {
                    identifier:2,
                    name:"تاسیسات"
                },
                {
                    identifier:3,
                    name:"وسایل نقلیه"
                },
                {
                    identifier:4,
                    name:"اثاثیه و منصوبات"
                },
                {
                    identifier:5,
                    name:"تجهیزات وماشین آلات"
                },
                {
                    identifier:6,
                    name:"دارایی در جریان تکمیل"
                },
                {
                    identifier:7,
                    name:"جمع دارایی های ثابت مشهود"
                },
                {
                    identifier:8,
                    name:"حق الامتیازها"
                },
                {
                    identifier:9,
                    name:"نرم افزارهای رایانه ای"
                },
                {
                    identifier:10,
                    name:"سایر"
                },
                {
                    identifier:11,
                    name:"جمع دراریی های نامشهد"
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
                {name: "name", title: " نوع دارایی  های  طی دوره"},
                {name: "mozuProje", title: "خرید طی دوره"},
                {name: "sefareshDahnde", title: "خرید از ابتدای سال تاکنون"},
                {name: "tasvibMagham", title: "بودجه مصوب سال"},
                {name: "gharardad", title: "مقایسه واقعی با بودجه مصوب"},
                {name: "mablaghGharardad", title: "فروش طی دوره"},
                {name: "mablaghGharardad", title: "نحوه تصویب توسط مقامات ذی صلاح مطابق آیین نامه معاملات"},
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
                    <h4 className="py-2">خرید و فروش  دارایی های ثابت</h4>
                </div>
                <div
                    className="rtl border bg-light shadow row w-100 m-0 py-4 px-2">
                    <SearchResult headerInfo={headerInfo} searchResultList={data} pageSize={pageSize}/>
                </div>
            </div>
        );
    }
}

export default withRouter(deliveryInfoManagement);
