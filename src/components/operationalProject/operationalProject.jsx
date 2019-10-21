import React, {Component} from 'react'
import {toast} from 'react-toastify';
import SearchResult from "../search/search-result"
import {withRouter} from 'react-router-dom';
import {reciveOperationalProject} from "../../services/operationalProjectService"

class operationalProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageSize: 10,
            data: [],
            id: ""
        };
        this.onAdd = this.onAdd.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onBack = this.onBack.bind(this);
    }


    async componentDidMount() {
        const {dataInfo} = this.props.location;
        if (!dataInfo) return this.props.history.push('/fiscal-year');
        this.setState({id: dataInfo});
        let data = {
            identifier: dataInfo
        };
        try {
            const result = await reciveOperationalProject(data);
            if (result.status === 200) {
                const data = result.data.data;

                this.setState({data});
            }
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                toast.error('خطایی در دریافت اطلاعات رخ داده است.');
            }
        }
        document.getElementById("loading").style.display = "none";
    }


    onAdd() {
        this.props.history.push({
            pathname: '/add-operational-project',
            dataInfo: this.state.id
        });
    }
    onEdit(searchresult) {
        this.props.history.push({
            pathname: '/edit-operational-project',
            dataInfo:searchresult,
            id:this.state.id
        });
    }

    onBack() {
        this.props.history.push({
            pathname: '/fiscal-year',

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
                    style: 'btn btn-primary btn-xs',
                    onclick: this.onEdit
                },
            ],
            headerTitleInfos: [
                {name: "name", title: "نام پروژه"},
                {name: "projectSubject", title: "موضوع پروژه"},
                {name: "requester", title: "سفارش دهنده"},
                {name: "typeOfApproveCompetent", title: "نحوه تصویب مقامات ذی صلاح"},
                {name: "contractStatus", title: "وضعیت قرارداد"},
                {name: "contractAmount", title: "مبلغ قرارداد"},
                {name: "incomeMoney", title: "درامد شناسایی شده تاکنون"},
                {name: "expensesMoney", title: "درصد پیشرفت کار"},
                {name: "estimatedExpensesMoney", title: "مخارج انجام شده تاکنون"},
                {name: "percentageOfWorkProgress", title: "کل مخارج براوردی"},
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
                    <h4 className="py-2">وضعیت پروژه های عملیاتی</h4>
                </div>
                <div
                    className="rtl border bg-light shadow row w-100 m-0 py-4 px-2">
                    <SearchResult headerInfo={headerInfo} searchResultList={data} pageSize={pageSize}/>
                    <div className="row col-12 text-center justify-content-center">
                        <div className="text-center justify-content-center">
                            <input type="button" className="btn btn-success" value="اضافه کردن" onClick={() => {
                                this.onAdd();
                            }}/>
                        </div>
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

export default withRouter(operationalProject);
