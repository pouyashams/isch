import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class SearchResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            year:"",
            baharDescription: "",
            baharStatus: "active",
            tabestanDescription: "",
            tabestanStatus: "deActive",
            payizDescription: "",
            payizStatus: "deActive",
            zemestanDescription: "",
            zemestanStatus: "deActive",
        }
    }

    componentDidMount() {
        if (this.props.check === true) {
            this.setState({
                year:this.props.year,
                baharDescription: this.props.baharDescription,
                baharStatus: this.props.baharStatus,
                tabestanDescription: this.props.tabestanDescription,
                tabestanStatus: this.props.tabestanStatus,
                payizDescription: this.props.payizDescription,
                payizStatus: this.props.payizStatus,
                zemestanDescription: this.props.zemestanDescription,
                zemestanStatus: this.props.zemestanStatus
            });

        }
    }

    fillParameterValue = (value, name) => {
        this.setState({[name]: value});

    };
    openForms = (name, status) => {
        const dataInfo = {name, status};
        this.props.history.push({
            pathname: '/forms',
            dataInfo: dataInfo
        });
    };

    returnFile = () => {
        const data = {
            baharDescription: this.state.baharDescription,
            baharStatus: this.state.baharStatus,
            tabestanDescription: this.state.tabestanDescription,
            tabestanStatus: this.state.tabestanStatus,
            payizDescription: this.state.payizDescription,
            payizStatus: this.state.payizStatus,
            zemestanDescription: this.state.zemestanDescription,
            zemestanStatus: this.state.zemestanStatus
        };
        return data;
    };

    render() {
        const data = [
            {
                seasonName: "بهار",
                description: <div className="col-12">
                    <span>
                        {this.state.baharDescription}
                    </span>
                </div>,
                status: <div className="col-12">
                    <span>
                        {this.state.baharStatus}
                    </span>
                </div>,
                action: <div className="col-12">
                    <button className={"btn btn-primary btn-xs"} data-title={"وارد کردن اطلاعات"}
                            onClick={() => {
                                this.openForms("بهار", this.state.year)
                            }}
                    >
                        <span className={"fa fa-th-list"} title={"وارد کردن اطلاعات"}/>
                    </button>
                </div>,
            },
            {
                seasonName: "تابستان",
                description: <div className="col-12">
                    <span>{this.state.tabestanDescription}</span>
                </div>,
                status: <div className="col-12">
                    <span>{" غیر فعال"}</span>

                </div>,
                action: <div className="col-12">
                    <button className={"btn btn-primary btn-xs"} data-title={"وارد کردن اطلاعات"}
                            onClick={() => {
                                this.openForms("تابستان", this.state.year)
                            }}
                    >
                        <span className={"fa fa-th-list"} title={"وارد کردن اطلاعات"}/>
                    </button>
                </div>
            },
            {
                seasonName: "پاییز",
                description: <div className="col-12">
                   <span>
                       {this.state.payizDescription}
                   </span>
                </div>,
                status: <div className="col-12">
                    <span>{"غیر فعال"}</span>
                </div>,
                action: <div className="col-12">
                    <button className={"btn btn-primary btn-xs"} data-title={"وارد کردن اطلاعات"}
                            onClick={() => {
                                this.openForms("پاییز", this.state.year)
                            }}
                    >
                        <span className={"fa fa-th-list"} title={"وارد کردن اطلاعات"}/>
                    </button>
                </div>
            },
            {
                seasonName: "زمستان",
                description: <div className="col-12">
                <span>
                    {this.state.zemestanDescription}
                </span>

                </div>,
                status: <div className="col-12">
                    <span>{"غیر فعال"}</span>
                </div>,
                action: <div className="col-12">
                    <button className={"btn btn-primary btn-xs"} data-title={"وارد کردن اطلاعات"}
                            onClick={() => {
                                this.openForms("زمستان", this.state.year)
                            }}
                    >
                        <span className={"fa fa-th-list"} title={"وارد کردن اطلاعات"}/>
                    </button>
                </div>
            },
        ];
        let loopCounter = 1;

        let headerInfo = [
            {name: "seasonName", title: "فصل", width: "8%"},
            {name: "description", title: "توضیحات", width: "70%"},
            {name: "status", title: "وضعیت", width: "17%"},
            {name: "action", title: "", width: "5%"},

        ];
        return (
            <div className="col-12 justify-content-center align-items-center text-center table-responsive">
                <table className="table shadow border table-bordered table-striped ">
                    <thead className="bg-dark">
                    <tr>
                        {headerInfo.map((headerTitleInfo) => (
                            <th className="text-center text-light" style={{"width": headerTitleInfo.width}}
                                key={loopCounter++}>{headerTitleInfo.title}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {data.length === 0 ?
                        (
                            <tr key={loopCounter++}>
                                <td colSpan={headerInfo.headerTitleInfos.length + headerInfo.actions.length + 1}>
                                    موردی یافت نشد.
                                </td>
                            </tr>
                        )
                        : data.map((dataInfo) =>
                            (
                                <tr key={loopCounter++}>
                                    {headerInfo.map((headerTitleInfo) =>
                                        (
                                            <td key={loopCounter++}>{dataInfo[headerTitleInfo.name]}</td>
                                        )
                                    )}
                                </tr>
                            )
                        )
                    }
                    </tbody>

                </table>
            </div>
        );
    }

}

export default withRouter(SearchResult);
