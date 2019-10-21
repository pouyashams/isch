import React, {Component} from 'react'
import {toast} from 'react-toastify';
import SearchResult from "../search/search-result"
import {withRouter} from 'react-router-dom';
import {reciveFicalYear} from "../../services/fiscalYearService"


class fiscalYear extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageSize: 5,
            data: [],
        };
        this.onShow = this.onShow.bind(this);
    }


    async componentDidMount() {
        try {
            const result = await reciveFicalYear();
            if (result.status === 200) {
                const data = [];
                result.data.data.forEach((dataInfo) => {
                        data.push(
                            {
                                identifier: dataInfo.identifier,
                                year: dataInfo.year,
                                description: dataInfo.description,
                                statusCode: dataInfo.status.code,
                                statusName: dataInfo.status.name,
                                fiscalMonthList: dataInfo.fiscalMonthList,
                            }
                        )
                });
                this.setState({data});
            }
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                toast.error('خطایی در دریافت اطلاعات رخ داده است.');
            }
        }
        document.getElementById("loading").style.display = "none";
    }

    onShow(searchResult) {
        this.props.history.push({
            pathname: '/fiscal-year-details',
            dataInfo: searchResult

        });
    }

    getResultTableHeader() {
        let headerInfo = {
            showCheckBox: false,
            actions: [
                {
                    name: 'edit',
                    title: 'اضافه کردن اطلاعات',
                    icon: 'fa fa-th-list',
                    style: 'btn btn-primary btn-xs',
                    onclick: this.onShow
                },
            ],
            headerTitleInfos: [
                {name: "year", title: "سال"},
                {name: "description", title: "توضیحات"},
                {name: "statusName", title: "وضعیت"},
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
                    <h4 className="py-2"> سال مالی</h4>
                </div>
                <div
                    className="rtl border bg-light shadow row w-100 m-0 py-4 px-2">
                    <SearchResult headerInfo={headerInfo} searchResultList={data} pageSize={pageSize}/>
                </div>
            </div>
        );
    }
}

export default withRouter(fiscalYear);
