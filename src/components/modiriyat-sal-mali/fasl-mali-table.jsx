import React, {Component} from 'react';

class SearchResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            baharDescription:"",
            baharStatus:"active",
            tabestanDescription:"",
            tabestanStatus:"deActive",
            payizDescription:"",
            payizStatus:"deActive",
            zemestanDescription:"",
            zemestanStatus:"deActive",
        }
    }

     componentDidMount() {
         if(this.props.check===true){
            this.setState({
                baharDescription: this.props.baharDescription,
                baharStatus: this.props.baharStatus,
                tabestanDescription: this.props.tabestanDescription,
                tabestanStatus: this.props.tabestanStatus,
                payizDescription: this.props.payizDescription,
                payizStatus: this.props.payizStatus,
                zemestanDescription: this.props.zemestanDescription,
                zemestanStatus: this.props.zemestanStatus
            });
            console.log(this.state.baharDescription,"1234")

        }
    }

    fillParameterValue = (value, name) => {
        this.setState({[name]: value});

    };

    returnFile = () => {
        const data = {
            baharDescription:this.state.baharDescription,
            baharStatus:this.state.baharStatus,
            tabestanDescription:this.state.tabestanDescription,
            tabestanStatus:this.state.tabestanStatus,
            payizDescription:this.state.payizDescription,
            payizStatus:this.state.payizStatus,
            zemestanDescription:this.state.zemestanDescription,
            zemestanStatus:this.state.zemestanStatus
        };
        return data;
    };

    render() {
        const data = [
            {
                seasonName: "بهار",
                description: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                           value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                status: <div className=" col-12">
                    <select
                        className="form-control  text-center"
                        style={{"text-align-last":"center","padding-right":"29px"}}

                        onChange={(e) => this.fillParameterValue(e.target.value, "baharStatus")}
                    >
                        {[{value: "active ", title: "فعال " , selected : true}, {value: "deActive ", title: " غیر فعال " ,selected : false}].map(
                            (option) => {
                                return (<option value={option.value} selected={option.selected}>{option.title}</option>);
                            }
                        )}
                    </select>
                </div>
            },
            {
                seasonName: "تابستان",
                description: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                           value={this.state.tabestanDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "tabestanDescription")}
                    />
                </div>,
                status: <div className=" col-12">
                    <select
                        className="form-control  text-center"
                        style={{"text-align-last":"center","padding-right":"29px"}}

                        onChange={(e) => this.fillParameterValue(e.target.value, "tabestanStatus")}
                    >
                        {[{value: "active ", title: "فعال " , selected : false}, {value: "deActive ", title: " غیر فعال " ,selected : true}].map(
                            (option) => {
                                return (<option value={option.value} selected={option.selected}>{option.title}</option>);
                            }
                        )}
                    </select>
                </div>
            },
            {
                seasonName: "پاییز",
                description: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                           value={this.state.payizDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "payizDescription")}
                    />
                </div>,
                status: <div className=" col-12">
                    <select
                        className="form-control  text-center"
                        style={{"text-align-last":"center","padding-right":"29px"}}

                        onChange={(e) => this.fillParameterValue(e.target.value, "payizStatus")}
                    >
                        {[{value: "active ", title: "فعال " , selected : false}, {value: "deActive ", title: " غیر فعال " ,selected : true}].map(
                            (option) => {
                                return (<option value={option.value} selected={option.selected}>{option.title}</option>);
                            }
                        )}
                    </select>
                </div>
            },
            {
                seasonName: "زمستان",
                description: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                           value={this.state.zemestanDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "zemestanDescription")}
                    />
                </div>,
                status: <div className=" col-12">
                    <select
                        className="form-control  text-center"
                        style={{"text-align-last":"center","padding-right":"29px"}}

                        onChange={(e) => this.fillParameterValue(e.target.value, "zemestanStatus")}
                    >
                        {[{value: "active ", title: "فعال " , selected : false}, {value: "deActive ", title: " غیر فعال " ,selected : true}].map(
                            (option) => {
                                return (<option value={option.value} selected={option.selected}>{option.title}</option>);
                            }
                        )}
                    </select>
                </div>
            },



        ];
        let loopCounter = 1;

        let headerInfo = [
            {name: "seasonName", title: "فصل" ,width: "8%"},
            {name: "description", title: "توضیحات",width: "75%"},
            {name: "status", title: "وضعیت", width: "17%"},

        ];
        return (
            <div className="col-12 justify-content-center align-items-center text-center table-responsive">
                <table className="table shadow border table-bordered table-striped ">
                    <thead className="bg-dark">
                    <tr>
                        {headerInfo.map((headerTitleInfo) => (
                            <th className="text-center text-light" style = {{"width": headerTitleInfo.width}}
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

export default SearchResult;
