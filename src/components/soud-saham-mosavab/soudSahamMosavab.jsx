import React, {Component} from 'react'
// import {toast} from 'react-toastify';
import "../../css/textArea.css"
import SearchResult from "../search/search-result"
import {withRouter} from 'react-router-dom';

class deliveryInfoManagement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageSize: 5,
            data: [{name:"pouya"},{name:"pouya"},{name:"pouya"},{name:"pouya"},{name:"pouya"},{name:"pouya"},{name:"pouya"},{name:"pouya"},{name:"pouya"},],
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
            pathname: '/add-soud-saham-mosavab',
        });
    }

    getResultTableHeader() {
        let headerInfo = {
            showCheckBox: false,
            actions: [],
            headerTitleInfos: [
                {name: "name", title: "نام سهامدار"},
                {name: "mozuProje", title: "درصد مالکیت"},
                {name: "sefareshDahnde", title: "سود سهام مصوب"},
                {name: "tasvibMagham", title: "تاریخ مجمع"},
                {name: "gharardad", title: "مهلت پرداخت طبق قانون تجارت"},
                {name: "mablaghGharardad", title: "تاریخ پرداخت"},
                {name: "mablaghGharardad", title: "توضیحات تکمیلی"},
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
                    <h4 className="py-2"> سود سهام مصوب</h4>
                </div>
                <div
                    className="rtl sborder bg-light shadow row w-100 m-0 py-4 px-2">
                    <SearchResult headerInfo={headerInfo} searchResultList={data} pageSize={pageSize}/>
                    <div className="rtl  col-12 bg-transparent row  m-0 text-center justify-content-center align-items-center ">

                    <div className="rtl  border col-10 bg-transparent row  m-0 text-center justify-content-center align-items-center ">
                        <div className="form-group p-3 col-lg-3 col-sm-6 col-md-3 float-right">
                            <label>سود کل سهام مصوب :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   value={1000000}

                            />
                        </div>
                        <div className="form-group p-3 col-lg-3 col-sm-6 col-md-3 float-right">
                            <label>درصد کل مالکیت :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   value={20}

                            />
                        </div>
                    </div>
                    </div>
                    <div className="col-12 p-4 text-center justify-content-center">
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
