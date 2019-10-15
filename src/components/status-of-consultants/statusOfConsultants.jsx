import React, {Component} from 'react'
import Table from "./table"
import {withRouter} from 'react-router-dom';

class deliveryInfoManagement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageSize: 6,
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

    render() {
        const headerTitleInfos = [
            {name: "name", title: "کارکنان"},
            {name: "vaziyat", title: "تعداد اخرین وضعیت قبلی"},
            {name: "dore", title: "تعداد دوره مورد گزارش"},
        ];
        return (
            <div
                className="rtl border bg-light shadow row w-100 m-0 text-center justify-content-center align-items-center my-3">
                <div className="col-12 justify-content-center align-items-center text-center header-box text-light">
                    <h4 className="py-2">وضعیت مشاوران</h4>
                </div>

                <div className="col-12 justify-content-center align-items-center text-center">
                    <div className="rtl border m-0  shadow  row w-100 justify-content-center my-3 pb-3">

                        <div className="   justify-content-center py-3 col-11">
                            <Table
                                headerTitleInfos={headerTitleInfos}
                            />
                        </div>


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
            </div>
        );
    }
}

export default withRouter(deliveryInfoManagement);
