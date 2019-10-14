import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import FaslMaliTable from "../sal-mali/fasl-mali-table"

class editDeliveryInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
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
        if (!dataInfo) return this.props.history.push('/sal-mali');
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

    cancel = () => {
        this.props.history.push('/sal-mali')
    };


    render() {
        return (

            <div
                className="rtl border bg-light shadow row w-100 m-0 text-center justify-content-center align-items-center my-3">
                <div className="col-12 justify-content-center align-items-center text-center header-box text-light">
                    <h4 className="py-2">بررسی سال مالی</h4>
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
                                />
                            </div>
                            <div className="form-group col-2  float-right">
                                <label>وضعیت :</label>
                                <select
                                    className="form-control text-center"
                                    value={this.state.status}
                                >

                                    <option value={"active"}>{"فعال"}</option>
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
                                />
                            </div>
                        </div>


                        {this.state.init ?
                            <FaslMaliTable
                                year={this.state.year}
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

                    <div>
                        <div className=" row w-100 m-0 text-center justify-content-center align-items-center my-3">
                            <div className="p-2">
                                <input type="button" className="btn btn-danger" value="بازگشت"
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
