import React, {Component} from 'react'
// import {toast} from 'react-toastify';
import SearchResult from "../search/search-result"
import {withRouter} from 'react-router-dom';

class deliveryInfoManagement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageSize: 5,
            data: [],
        };
        this.onAdd = this.onAdd.bind(this);
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


    onAdd() {
        this.props.history.push({
            pathname: '/add-tarkib-darayi',
        });
    }

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
                    <h4 className="py-2">ترکیب دارايی ها</h4>
                </div>
                <div
                    className="rtl border bg-light shadow row w-100 m-0 py-4 px-2">
                    <SearchResult headerInfo={headerInfo} searchResultList={data} pageSize={pageSize}/>
                    <SearchResult headerInfo={headerInfos} searchResultList={data} pageSize={pageSize}/>
                    <div className="col-12 text-center justify-content-center">
                    <input type="button" className="btn btn-success" value="اضافه کردن" onClick={() => {
                            this.onAdd();
                        }}/>
                    </div>

                </div>
            </div>
        );
    }
}

export default withRouter(deliveryInfoManagement);
