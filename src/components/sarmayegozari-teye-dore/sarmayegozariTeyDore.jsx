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


    onAdd() {
        this.props.history.push({
            pathname: '/add-sarmayegozari-tey-dore',
        });
    }

    getResultTableHeader() {
        let headerInfo = {
            showCheckBox: false,
            actions: [],
            headerTitleInfos: [
                {name: "name", title: "نام شرکت سرمایه پذیر"},
                {name: "mozuProje", title: "شرح"},
                {name: "sefareshDahnde", title: "مبلغ سرمایه گذاری"},
                {name: "tasvibMagham", title: "درصد مالکیت"},
                {name: "gharardad", title: "هدف از سرمایه گذاری"},
                {name: "mablaghGharardad", title: "شماره موجوز سرمایه گذاری"},
                {name: "mablaghGharardad", title: "تاریخ سرمایه گذاری"},
                {name: "mablaghGharardad", title: "بازده سرمایه گذاری"},
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
                    <h4 className="py-2">سرمایه گذاری طی دوره</h4>
                </div>
                <div
                    className="rtl sborder bg-light shadow row w-100 m-0 py-4 px-2">
                    <SearchResult headerInfo={headerInfo} searchResultList={data} pageSize={pageSize}/>
                    <div className="rtl  col-12 bg-transparent row  m-0 text-center justify-content-center align-items-center ">

                    <div className="rtl  border col-10 bg-transparent row  m-0 text-center justify-content-center align-items-center ">
                        <div className="form-group p-3 col-lg-3 col-sm-6 col-md-3 float-right">
                            <label>مبلغ کل سرمایه گذاری :</label>
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
                        <div className="form-group p-3 col-lg-3 col-sm-6 col-md-3 float-right">
                            <label>بازده کل سرمایه گذاری :</label>
                            <input className="form-control text-center"
                                   type="input"
                                   step="any"
                                   value={100}

                            />
                        </div>
                    </div>
                    </div>
                    <div className="row col-12 p-4 text-center justify-content-center">
                        <input type="button" className="btn btn-success" value="اضافه کردن" onClick={() => {
                            this.onAdd();
                        }}/>
                        <div className="px-4 text-center justify-content-center">
                            <input type="button" className="btn btn-danger" value="بازگشت" onClick={() => {
                                this.onBack();
                            }}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(deliveryInfoManagement);
