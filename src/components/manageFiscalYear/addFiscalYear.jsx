import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import FaslMaliTable from "./fasl-mali-table"
import {toast} from "react-toastify";
import {registerFicalYear} from "../../services/fiscalYearService";


class addFiscalYear extends Component {

    constructor(props) {
        super(props);
        this.state = {

            year: "",
            status: "",
            description: "",

            autumnDescription: "",
            autumnStatus: "",

            summerStatus: "",
            summerDescription: "",

            springStatus: "",
            springDescription: "",

            winterStatus: "",
            winterDescription: "",
        };
    }


    fillParameterValue = (value, name) => {
        this.setState({[name]: value});

    };

    cancel = () => {
        this.props.history.push('/manage-fiscal-year')
    };
    addFiscalYear = async() => {
        const data = {
            year: this.state.year,
            description: this.state.description,
            status: {
                code: this.state.status,
            },
            fiscalMonthList: [
                {
                    status: {
                        code: this.state.springStatus
                    },
                    session: {
                        code: "SPRING"
                    },
                    description: this.state.springDescription
                },
                {
                    status: {
                        code: this.state.summerStatus
                    },
                    session: {
                        code: "SUMMER"
                    },
                    description: this.state.summerDescription
                },
                {
                    status: {
                        code: this.state.autumnStatus
                    },
                    session: {
                        code: "FALL"
                    },
                    description: this.state.autumnDescription
                },
                {
                    status: {
                        code: this.state.winterStatus
                    },
                    session: {
                        code: "WINTER"
                    },
                    description: this.state.winterDescription
                }
            ]
        };
        console.log(data)
        try {
            const result = await registerFicalYear(data);
            if (result.status === 200) {
                toast.success('عملیات با موفقیت انجام شد.');
            }
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                toast.error('خطایی در دریافت اطلاعات رخ داده است.');
            }
        }
        document.getElementById("loading").style.display = "none";

    };

    render() {
        const data = [
            {
                seasonName: "بهار",
                description:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                               value={this.state.springDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "springDescription")}
                        />
                    </div>,
                status:
                    <div className=" col-12">
                        <select
                            className="form-control  text-center"
                            style={{"text-align-last": "center", "padding-right": "29px"}}

                            onChange={(e) => this.fillParameterValue(e.target.value, "springStatus")}
                        >
                            {[{value: "active ", title: "فعال ", selected: true}, {
                                value: "deActive ",
                                title: " غیر فعال ",
                                selected: false
                            }].map(
                                (option) => {
                                    return (<option value={option.value}
                                                    selected={option.selected}>{option.title}</option>);
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
                           value={this.state.summerDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "summerDescription")}
                    />
                </div>,
                status:
                    <div className=" col-12">
                        <select
                            className="form-control  text-center"
                            style={{"text-align-last": "center", "padding-right": "29px"}}

                            onChange={(e) => this.fillParameterValue(e.target.value, "summerStatus")}
                        >
                            {[{value: "active ", title: "فعال ", selected: false}, {
                                value: "deActive ",
                                title: " غیر فعال ",
                                selected: true
                            }].map(
                                (option) => {
                                    return (<option value={option.value}
                                                    selected={option.selected}>{option.title}</option>);
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
                           value={this.state.autumnDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "autumnDescription")}
                    />
                </div>,
                status: <div className=" col-12">
                    <select
                        className="form-control  text-center"
                        style={{"text-align-last": "center", "padding-right": "29px"}}

                        onChange={(e) => this.fillParameterValue(e.target.value, "autumnStatus")}
                    >
                        {[{value: "active ", title: "فعال ", selected: false}, {
                            value: "deActive ",
                            title: " غیر فعال ",
                            selected: true
                        }].map(
                            (option) => {
                                return (
                                    <option value={option.value} selected={option.selected}>{option.title}</option>);
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
                           value={this.state.winterDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "winterDescription")}
                    />
                </div>,
                status: <div className=" col-12">
                    <select
                        className="form-control  text-center"
                        style={{"text-align-last": "center", "padding-right": "29px"}}

                        onChange={(e) => this.fillParameterValue(e.target.value, "winterStatus")}
                    >
                        {[{value: "active ", title: "فعال ", selected: false}, {
                            value: "deActive ",
                            title: " غیر فعال ",
                            selected: true
                        }].map(
                            (option) => {
                                return (
                                    <option value={option.value} selected={option.selected}>{option.title}</option>);
                            }
                        )}
                    </select>
                </div>
            },


        ];
        const option = [{value: "active ", title: "فعال ", selected: true}, {
            value: "deActive ",
            title: " غیر فعال ",
            selected: false
        }];
        return (

            <div
                className="rtl border bg-light shadow row w-100 m-0 text-center justify-content-center align-items-center my-3">
                <div className="col-12 justify-content-center align-items-center text-center header-box text-light">
                    <h4 className="py-2">افزودن سال مالی</h4>
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
                            <FaslMaliTable
                                data={data}
                                check={false}
                            />

                        </div>


                    </div>

                    <div>
                        <div className=" row w-100 m-0 text-center justify-content-center align-items-center my-3">
                            <div className="p-2">
                                <input type="button" className="btn btn-success" value="ثبت"
                                       onClick={() => {
                                           this.addFiscalYear();
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

export default withRouter(addFiscalYear);
