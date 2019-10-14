import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import FaslMaliTable from "./fasl-mali-table"


class editDeliveryInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageSize: 5,
            year: "",
            status: "active",
            description: "",
            payizDescription: "",
            tabestanStatus: "",
            tabestanDescription: "",
            baharStatus: "",
            baharDescription: "",
            zemestanStatus: "",
            zemestanDescription: "",
            payizStatus: "",
            init: false
        };
    }

    async componentDidMount() {
        const {dataInfo} = this.props.location;
        if (!dataInfo) return this.props.history.push('/modiriyat-sal-mali');
        this.setState({
            year: dataInfo.year,
            status: dataInfo.status,
            description: dataInfo.description,
            baharDescription: dataInfo.baharDescription,
            baharStatus: dataInfo.baharStatus,
            tabestanDescription: dataInfo.tabestanDescription,
            tabestanStatus: dataInfo.tabestanStatus,
            payizDescription: dataInfo.payizDescription,
            payizStatus: dataInfo.payizStatus,
            zemestanDescription: dataInfo.zemestanDescription,
            zemestanStatus: dataInfo.zemestanStatus,
            init: true
        });
    }

    fillParameterValue = (value, name) => {
        this.setState({[name]: value});

    };

    returnFile = () => {
        const data = this.refs.child.returnFile();
        return data;
    };
    cancel = () => {
        this.props.history.push('/modiriyat-sal-mali')
    };
    addSalMali = () => {
        const data = {
            description: this.state.description,
            status: this.state.status,
            year: this.state.year,
            seasonData: this.returnFile()
        };
    };

    render() {
        const option = [{value: "active ", title: "فعال ", selected: true}, {
            value: "deActive ",
            title: " غیر فعال ",
            selected: false
        }];
        return (

            <div
                className="rtl border bg-light shadow row w-100 m-0 text-center justify-content-center align-items-center my-3">
                <div className="col-12 justify-content-center align-items-center text-center header-box text-light">
                    <h4 className="py-2">ویرایش سال مالی</h4>
                </div>
                <div className="col-12 justify-content-center align-items-center text-center">
                    <div className="rtl border m-0  shadow  row w-100 justify-content-center my-3 pb-3">
                        <div className="py-3  col-11">
                            <div className="form-group col-2  float-right">
                                <label>سال :</label>
                                <input className="form-control text-center"
                                       type="number"
                                       step="any"
                                       placeholder="---"
                                       value={this.state.year}
                                       onChange={(e) => this.fillParameterValue(e.target.value, "year")}
                                />
                            </div>
                            <div className="form-group col-2  float-right">
                                <label>وضعیت :</label>
                                <select
                                    className="form-control text-center"
                                    value={this.state.status}
                                    onChange={(e) => this.fillParameterValue(e.target.value, "status")}
                                >
                                    {option.map(
                                        (option) => {
                                            return (<option value={option.value}
                                                            selected={option.selected}>{option.title}</option>);
                                        }
                                    )}
                                </select>
                            </div>
                            <div className="form-group col-8 float-right">
                                <label>توضیحات :</label>
                                <input className="form-control text-center"
                                       type="input"
                                       step="any"
                                       placeholder="---"
                                       value={this.state.description}
                                       name="address"
                                       onChange={(e) => this.fillParameterValue(e.target.value, "description")}
                                />
                            </div>
                        </div>

                        <div className="   justify-content-center py-3 col-11">
                            {this.state.init ?
                                <FaslMaliTable
                                    baharDescription={this.state.baharDescription}
                                    payizDescription={this.state.payizDescription}
                                    tabestanDescription={this.state.tabestanDescription}
                                    zemestanDescription={this.state.zemestanDescription}
                                    tabestanStatus={this.state.tabestanStatus}
                                    baharStatus={this.state.baharStatus}
                                    payizStatus={this.state.payizStatus}
                                    zemestanStatus={this.state.zemestanStatus}
                                    check={true}
                                />
                                : null}
                        </div>


                    </div>

                    <div>
                        <div className=" row w-100 m-0 text-center justify-content-center align-items-center my-3">
                            <div className="p-2">
                                <input type="button" className="btn btn-success" value="ثبت"
                                       onClick={() => {
                                           this.addSalMali();
                                       }}/>
                            </div>
                            <div className="p-2">
                                <input type="button" className="btn btn-danger" value="لغو"
                                       onClick={this.cancel}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(editDeliveryInfo);
