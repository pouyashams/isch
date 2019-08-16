import React, {Component} from 'react';
import SearchCriteria from "../search/search-criteria";
import SearchResult from "../search/search-result";
import {fetchAllChildOfCurrentMerchant, searchCustomerInternet} from "../../services/reportService"
import {toast} from 'react-toastify';
import {withRouter} from 'react-router-dom';


class reportOfInternetPack extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageSize: 10,
            searchResultList: [],
            merchants:[]

        };
    }
    getSearchCriteriaArray() {
        return [
            {
                name: "customerReferenceNumber",
                element: "input",
                type: "text",
                placeholder: "---",
                label: "شماره پیگیری",
                defaultValue: ""
            }, {
                name: "orderStatusCode",
                element: "input",
                type: "text",
                placeholder: "---",
                label: "کد وضعیت سفارش ",
                defaultValue: ""
            },{
                name: "packageCode",
                element: "input",
                type: "text",
                placeholder: "---",
                label: "کد بسته ",
                defaultValue: ""
            },
            {
                name: "identifier",
                element: "input",
                type: "text",
                placeholder: "---",
                label: "شناسه سفارش",
                defaultValue: ""
            },
            {
                name: "mobileNumber",
                element: "input",
                type: "number",
                placeholder: "---",
                label: "شماره موبایل",
                defaultValue: ""
            },
            {
                name: "subscriberNumber",
                element: "input",
                type: "text",
                placeholder: "---",
                label: "شماره ذینفع",
                defaultValue: ""
            },
            {
                name: "registerDateFrom",
                element: "date",
                placeholder: "--- ",
                label: "از تاریخ"
            },
            {
                name: "registerDateTo",
                element: "date",
                placeholder: "---",
                label: "تا تاریخ"
            },
            {
                name: "paymentGatewayProviderCode",
                element: "select",
                placeholder: "---",
                defaultValue: "",
                label: "درگاه پرداخت",
                options: [
                    {value: "", title: "انتخاب کنید..."},
                    {value: "PARSIAN_PAYMENT_GATEWAY_PROVIDER", title: "پارسیان"},
                    {value: "FANAVA_PAYMENT_GATEWAY_PROVIDER", title: "فن آوا"}
                ]
            },
            {
                name: "operatorCode",
                element: "select",
                placeholder: "---",
                defaultValue: "",
                label: "اپراتور",
                options: [
                    {value: "", title: "انتخاب کنید..."},
                    {value: "IRANCELL", title: "ایرانسل"},
                    {value: "MCI", title: "همراه اول"},
                    {value: "RIGHTEL", title: "رایتل"}
                ]
            }, {
                name: "orderStatusCode",
                element: "select",
                placeholder: "---",
                defaultValue: "",
                label: "وضعیت سفارش:",
                options: [
                    {value: "", title: "انتخاب کنید..."},
                    {value: "REGISTERED_ORDER_STATUS", title: "ثبت شده"},
                    {value: "PAID_ORDER_STATUS", title: "پرداخت شده"}
                ]
            },
            {
                name: "requesterUserId",
                element: "select",
                placeholder: "---",
                defaultValue: "",
                label: "پذیرنده",
                options: this.state.merchants
            },
        ];
    }
    prepareMerchantSelection(merchants) {
        let merchantArray = [{
            value: "",
            title: "انتخاب کنید..."
        }];
        merchants.forEach((merchant) => {
            let data = {
                value: merchant.identifier,
                title: merchant.name
            };
            merchantArray.push(data);
        });
        return merchantArray;
    }
    async componentDidMount() {
        try {
            const resultForFetchMerchants = await fetchAllChildOfCurrentMerchant();
            if (resultForFetchMerchants.status === 200) {
                const merchantArray = this.prepareMerchantSelection(resultForFetchMerchants.data.data);
                this.setState({
                    merchants: merchantArray
                });
            }
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                toast.error('خطایی در دریافت اطلاعات رخ داده است.');
            }
        }
        document.getElementById("loading").style.display = "none";
    }

    getResultTableHeader() {
        let headerInfo = {
            showCheckBox: false,
            actions: [],
            headerTitleInfos: [
                {name: "internetPackage.code", title: "کد بسته"},
                {name: "operator", title: "اپراتور"},
                {name: "subscriberNumber", title: "شماره ذینفع"},
                {name: "identifier", title: "شناسه سفارش"},
                {name: "orderStatus", title: "وضعیت سفارش"},
                {name: "mobileNumber", title: "شماره موبایل"},
                {name: "customerReferenceNumber", title: "شماره پیگیری"},
                {name: "paymentGatewayProvider", title: "درگاه پرداخت"},
                {name: "amount", title: "مبلغ"},
                {name: "registerDateTime", title: "تاریخ"},
            ]
        };
        return headerInfo;
    }

    search = async (parameters) => {
        try {
            const result = await searchCustomerInternet(parameters);
            if (result.status === 200) {
                this.setState({searchResultList: result.data.data})
            }
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                toast.error('لطفا کلیه موارد را پر کنید');
            }
        }
        document.getElementById("loading").style.display = "none";
    };

    render() {
        const searchCriteriaArray = this.getSearchCriteriaArray();
        const headerInfo = this.getResultTableHeader();
        const {searchResultList, pageSize} = this.state;

        return (
            <div
                className="rtl border bg-light shadow row w-100 m-0 text-center justify-content-center align-items-center my-3">
                <div className="col-12 justify-content-center align-items-center text-center header-box text-light">
                    <h4 className="py-2">گزارشات بسته اینترنت</h4>
                </div>
                <SearchCriteria onSearch={this.search} searchCriteriaArray={searchCriteriaArray}/>
                <SearchResult headerInfo={headerInfo} searchResultList={searchResultList} pageSize={pageSize}/>
            </div>
        );
    }
}

export default withRouter(reportOfInternetPack);
