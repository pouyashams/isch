import React, {Component} from 'react'
import SearchResult from "../search/search-result"
import {withRouter} from 'react-router-dom';


class forms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageSize: 8,
            data: [],
            status: "",
            name: "",
            identifier:"",
        };
        this.onUpdate = this.onUpdate.bind(this);
    }


    async componentDidMount() {
        const {dataInfo} = this.props.location;
        if (!dataInfo) return this.props.history.push('/fiscal-year');
        this.setState({
            data: [
                {
                    form: <span className="font-weight-bold">وضعیت پروژه عملیاتی</span>,
                    identifier: 1
                }, {
                    form: <span className="font-weight-bold">ترکیب دارایی ها</span>,
                    identifier: 2
                }, {
                    form: <span className="font-weight-bold">مطالبات معوق</span>,
                    identifier: 3
                }, {
                    form: <span className="font-weight-bold">گزارش مامورت خارج کشور</span>,
                    identifier: 4
                }, {
                    form: <span className="font-weight-bold">گزارش حسابرسی مستقل</span>,
                    identifier: 5
                }, {
                    form: <span className="font-weight-bold">قرارداد های مهم</span>,
                    identifier: 6
                }, {
                    form: <span className="font-weight-bold">وضعیت کارکنان</span>,
                    identifier: 7
                },{
                    form: <span className="font-weight-bold">"وضعیت مشاوران</span>,
                    identifier: 8
                },{
                    form: <span className="font-weight-bold">مصوبات هیات مدیره</span>,
                    identifier: 10
                },{
                    form: <span className="font-weight-bold">وضعیت تعهدات قانونی</span>,
                    identifier: 11
                },{
                    form: <span className="font-weight-bold">دارایی های ثابت</span>,
                    identifier: 12
                },{
                    form: <span className="font-weight-bold">بودجه نقدی</span>,
                    identifier: 13
                },{
                    form: <span className="font-weight-bold">صورت سود و زیان دوره</span>,
                    identifier: 14
                },{
                    form: <span className="font-weight-bold">سرمایه گذاری طی دوره</span>,
                    identifier: 15
                },{
                    form: <span className="font-weight-bold">سود سهام مصوب</span>,
                    identifier: 16
                },
            ],
            name: dataInfo.sessionName,
            status: dataInfo.year,
            identifier:dataInfo.identifier
        });
    }


    onUpdate(data) {
        if (data.identifier === 1) {
            this.props.history.push({
                pathname: '/operational-project',
                dataInfo: this.state.identifier
            });
        }
        else if (data.identifier === 2) {
            this.props.history.push({
                pathname: '/tarkib-darayi',
                dataInfo: this.state.identifier
            });
        }  else if (data.identifier === 3) {
            this.props.history.push({
                pathname: '/motalebat-movagh',
                dataInfo: this.state.identifier
            });
        } else if (data.identifier === 4) {
            this.props.history.push({
                pathname: '/gozaresh-mamuriyat-kharej-keshvar',
                dataInfo: this.state.identifier
            });
        } else if (data.identifier === 5) {
            this.props.history.push({
                pathname: '/gozaresh-hesabresi-mostaghel',
                dataInfo: this.state.identifier
            });
        } else if (data.identifier === 6) {
            this.props.history.push({
                pathname: '/gharardadhaye-mohem',
                dataInfo: this.state.identifier
            });
        } else if (data.identifier === 7) {
            this.props.history.push({
                pathname: '/staff-status',
                dataInfo: this.state.identifier
            });
        }else if (data.identifier === 8) {
            this.props.history.push({
                pathname: '/status-of-consultants',
                dataInfo: this.state.identifier
            });
        }else if (data.identifier === 10) {
            this.props.history.push({
                pathname: '/board-approval',
                dataInfo: this.state.identifier
            });
        }else if (data.identifier === 11) {
            this.props.history.push({
                pathname: '/vaziyat-tahodat-ghanuni',
                dataInfo: this.state.identifier
            });
        }else if (data.identifier === 12) {
            this.props.history.push({
                pathname: '/kharid-furush-darayi-sabet',
                dataInfo: this.state.identifier
            });
        }else if (data.identifier === 13) {
            this.props.history.push({
                pathname: '/budje-naghdi',
                dataInfo: this.state.identifier
            });
        }else if (data.identifier === 14) {
            this.props.history.push({
                pathname: '/soud-ziyan-dore',
                dataInfo: this.state.identifier
            });
        }else if (data.identifier === 15) {
            this.props.history.push({
                pathname: '/sarmayegozari-tey-dore',
                dataInfo: this.state.identifier
            });
        }else if (data.identifier === 16) {
            this.props.history.push({
                pathname: '/soud-saham-mosavab',
                dataInfo: this.state.identifier
            });
        }

    }

    getResultTableHeader() {
        let headerInfo = {
            showCheckBox: false,
            actions: [
                {
                    name: 'edit',
                    title: 'ورود',
                    icon: 'fa fa-th-list',
                    style: 'btn btn-primary btn-xs',
                    onclick: this.onUpdate
                },
            ],
            headerTitleInfos: [
                {name: "form", title: "فرم"},
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
                    <h4 className="py-2"> فرم ها</h4>
                </div>

                <div className="rtl my-4 col-8 border bg-light shadow row w-100 m-0 ">
                    <div className=" col-12 container text-center header-box text-light panel-header">
                        <h4 className="py-2 ">{this.state.name} {""} {this.state.status}</h4>
                    </div>
                    <SearchResult headerInfo={headerInfo} searchResultList={data} pageSize={pageSize}/>
                </div>
            </div>
        );
    }
}

export default withRouter(forms);
