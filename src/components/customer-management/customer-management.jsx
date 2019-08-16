import React, {Component} from 'react';
import SearchCriteria from "../search/search-criteria";
import SearchResult from "../search/search-result";
import {searchCustomer} from "../../services/userService"
import {toast} from 'react-toastify';
import { withRouter } from 'react-router-dom';


class customerManagement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageSize: 5,
            searchResultList: []
        };
        this.onUpdate = this.onUpdate.bind(this);
    }


    onUpdate(searchResult) {
        this.props.history.push({
            pathname: '/edit-customer',
            customerInfo: searchResult
        });
    }

    getSearchCriteriaArray() {
        return [
            {
                name: "firstName",
                element: "input",
                type: "text",
                placeholder: "---",
                label: "نام",
                defaultValue: ""
            },
            {
                name: "lastName",
                element: "input",
                type: "text",
                placeholder: "---",
                label: "نام خانوادگی",
                defaultValue: ""
            },
            {
                name: "username",
                element: "input",
                type: "text",
                placeholder: "---",
                label: "نام کاربری",
                defaultValue: ""
            },
            {
                name: "nationalCode",
                element: "input",
                type: "text",
                placeholder: "---",
                label: "کد ملی",
                defaultValue: ""
            },
            {
                name: "mobileNumber",
                element: "input",
                type: "text",
                placeholder: "---",
                label: "شماره موبایل",
                defaultValue: ""
            },
            {
                name: "email",
                element: "input",
                type: "text",
                placeholder: "---",
                label: "ایمیل",
                defaultValue: ""
            },
        ];
    }

    getResultTableHeader() {
        let headerInfo = {
            showCheckBox: false,
            actions: [
                {
                    name: 'update',
                    title: 'ویرایش',
                    icon: 'fa fa-th-list',
                    style: 'btn btn-success btn-xs',
                    onclick: this.onUpdate
                }
            ],
            headerTitleInfos: [
                {name: "firstName", title: "نام"},
                {name: "lastName", title: "نام خانوادگی"},
                {name: "username", title: "نام کاربری"},
                {name: "nationalCode", title: "شماره ملی"},
                {name: "mobileNumber", title: "شماره موبایل"},
            ]
        };
        return headerInfo;
    }

    getExtraActions() {
        let extraActions = {
            rightActions: [],
            leftActions: []
        };
        return extraActions;
    }


    search = async (parameters) => {
        try {
            const result = await searchCustomer(parameters);
            if (result.status === 200) {
                this.setState({searchResultList : result.data.data})
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
        const extraActions = this.getExtraActions();
        const {searchResultList, pageSize} = this.state;

        return (
            <div className="rtl border bg-light shadow row w-100 m-0 text-center justify-content-center align-items-center my-3">
                <div className="col-12 justify-content-center align-items-center text-center header-box text-light">
                    <h4 className="py-2">مدیریت مشتریان</h4>
                </div>
                <SearchCriteria extraActions={extraActions} onSearch={this.search} searchCriteriaArray={searchCriteriaArray}/>
                <SearchResult headerInfo={headerInfo} searchResultList={searchResultList} pageSize={pageSize}/>
            </div>
        );
    }
}

export default withRouter(customerManagement);
