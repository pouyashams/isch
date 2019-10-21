import React, {Component} from 'react'
import {toast} from 'react-toastify';
import SearchResult from "../search/search-result"
import {withRouter} from 'react-router-dom';
import {loadAllCompany} from "../../services/companyService";


class etelaatPayeSherkati extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageSize: 5,
            data: [],
        };
        this.onAdd = this.onAdd.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onShow = this.onShow.bind(this);
    }


    async componentDidMount() {
        try {
            const result = await loadAllCompany();
            if (result.status === 200) {
                const data = [];
                result.data.data.forEach((dataInfo) => {
                    data.push(
                        {
                            name: dataInfo.name,
                            nationalCode: dataInfo.nationalCode,
                            activityTopic: dataInfo.activityTopic,
                            registrationCode: dataInfo.registrationCode
                        }
                    )
                });
                this.setState({data, dataInfo: result.data.data});
            }
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                toast.error('خطایی در دریافت اطلاعات رخ داده است.');
            }
        }
        document.getElementById("loading").style.display = "none";
    }


    onUpdate(searchResult) {
        // this.props.history.push({
        //     pathname: '/edit-company',
        //     productInfo: searchResult
        // });
    }

    onShow(searchResult) {
        // this.props.history.push({
        //     pathname: '/show-company',
        //     productInfo: searchResult
        //     Object.assign(searchResult,{checkUpdate: false})
        // });
    }

    onAdd() {
        this.props.history.push({
            pathname: '/add-etelaat-paye-sherkati',
        });
    }

    getResultTableHeader() {
        let headerInfo = {
            showCheckBox: false,
            actions: [
                {
                    name: 'edit',
                    title: 'ویرایش',
                    icon: 'fa fa-th-list',
                    style: 'btn btn-success btn-xs',
                    onclick: this.onUpdate
                },
                {
                    name: 'show',
                    title: 'نمایش',
                    icon: 'fa fa-check-square',
                    style: 'btn btn-success btn-xs',
                    onclick: this.onShow
                }
            ],
            headerTitleInfos: [
                {name: "name", title: "نام شرکت"},
                {name: "nationalCode", title: "شناسه ملی شرکت"},
                {name: "activityTopic", title: "موضوع فعالیت شرکت"},
                {name: "registrationCode", title: "شماره ثبت"}
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
                    <h4 className="py-2">اطلاعات پایه شرکت ها</h4>
                </div>
                <div
                    className="rtl border bg-light shadow row w-100 m-0 py-4 px-2">
                    <SearchResult headerInfo={headerInfo} searchResultList={data} pageSize={pageSize}/>
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

export default withRouter(etelaatPayeSherkati);
