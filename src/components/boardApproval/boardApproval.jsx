import React, {Component} from 'react'
import {toast} from 'react-toastify';
import SearchResult from "../search/search-result"
import {withRouter} from 'react-router-dom';
import {reciveBoardApproval} from "../../services/boardApprovalService";

class boardApproval extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageSize: 10,
            data: [],
            id: "",
        };
        this.onAdd = this.onAdd.bind(this);
        this.onBack = this.onBack.bind(this);
        this.onEdit = this.onEdit.bind(this);


    }

    onBack() {
        this.props.history.push({
            pathname: '/fiscal-year',
        });
    }

    async componentDidMount() {
        const {dataInfo} = this.props.location;
        if (!dataInfo) return this.props.history.push('/fiscal-year');
        this.setState({id: dataInfo});
        let data = {
            identifier: dataInfo
        };
        try {
            const result = await reciveBoardApproval(data);
            if (result.status === 200) {
                const data = result.data.data;
                console.log(data)
                this.setState({data});
            }
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                toast.error('خطایی در دریافت اطلاعات رخ داده است.');
            }
        }
        document.getElementById("loading").style.display = "none";
    }

    onEdit(searchResult) {
        this.props.history.push({
            pathname: '/edi-board-approval',
            dataInfo: searchResult,
            id: this.state.id

        });
    }

    onAdd() {
        this.props.history.push({
            pathname: '/add-board-approval',
            dataInfo: this.state.id
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
                {name: "date", title: "تاریخ مصوبه"},
                {name: "details", title: "شرح مصوبه هیات مدیره"},
                {name: "actions", title: "اقدامات انجام شده"},
                {name: "operationalDate", title: "تاریخ انجام"},
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
                    <h4 className="py-2">مصوبات هیات مدیره</h4>
                </div>
                <div
                    className="rtl border bg-light shadow row w-100 m-0 py-4 px-2">
                    <SearchResult headerInfo={headerInfo} searchResultList={data} pageSize={pageSize}/>
                    <div className="row col-12 text-center justify-content-center">
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

export default withRouter(boardApproval);
