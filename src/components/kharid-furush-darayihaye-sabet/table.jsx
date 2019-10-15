import React, {Component} from 'react';

class SearchResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // baharDescription:"",
            // baharStatus:"active",
            // tabestanDescription:"",
            // tabestanStatus:"deActive",
            // payizDescription:"",
            // payizStatus:"deActive",
            // zemestanDescription:"",
            // zemestanStatus:"deActive",
        }
    }

     componentDidMount() {
        //  if(this.props.check===true){
        //     this.setState({
        //         baharDescription: this.props.baharDescription,
        //         baharStatus: this.props.baharStatus,
        //         tabestanDescription: this.props.tabestanDescription,
        //         tabestanStatus: this.props.tabestanStatus,
        //         payizDescription: this.props.payizDescription,
        //         payizStatus: this.props.payizStatus,
        //         zemestanDescription: this.props.zemestanDescription,
        //         zemestanStatus: this.props.zemestanStatus
        //     });
        //     console.log(this.state.baharDescription,"1234")
        //
        // }
    }

    fillParameterValue = (value, name) => {
        this.setState({[name]: value});

    };
    //
    // returnFile = () => {
    //     const data = {
    //         baharDescription:this.state.baharDescription,
    //         baharStatus:this.state.baharStatus,
    //         tabestanDescription:this.state.tabestanDescription,
    //         tabestanStatus:this.state.tabestanStatus,
    //         payizDescription:this.state.payizDescription,
    //         payizStatus:this.state.payizStatus,
    //         zemestanDescription:this.state.zemestanDescription,
    //         zemestanStatus:this.state.zemestanStatus
    //     };
    //     return data;
    // };

    render() {
        const data =    [
            {
                name: "زمین",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                           // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                kharid:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                               // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                tasvib:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
            },
            {
                name: "ساختمان و مستحدثات",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                           // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                kharid:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                               // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                tasvib:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
            },
            {
                name: "تاسیسات",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                           // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                kharid:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                               // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                tasvib:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
            },
            {
                name: "وسایل نقلیه",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                           // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                kharid:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                               // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                tasvib:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
            },
            {
                name: "اثاثیه و منصوبات",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                           // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                kharid:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                               // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                tasvib:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
            },
            {
                name: "تجهیزات وماشین آلات",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                           // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                kharid:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                               // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                tasvib:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
            },
            {
                name: "دارایی در جریان تکمیل",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                           // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                kharid:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                               // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                tasvib:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
            },
            {
                name: "جمع دارایی های ثابت مشهود",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                           // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                kharid:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                               // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                tasvib:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
            },
            {
                name: "حق الامتیازها",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                           // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                kharid:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                               // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                tasvib:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
            },
            {
                name: "نرم افزارهای رایانه ای",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                           // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                kharid:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                               // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                tasvib:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
            },
            {
                name: "سایر",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                           // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                kharid:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                               // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                tasvib:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
            },
            {
                name: "جمع دراریی های نامشهد",
                dore: <div className="col-12">
                    <input className="form-control text-center"
                           type="input"
                           step="any"
                           placeholder=""
                           // value={this.state.baharDescription}
                           onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                    />
                </div>,
                kharid:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                               // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                budje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                moghayeseBudje:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                furusj:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
                tasvib:
                    <div className="col-12">
                        <input className="form-control text-center"
                               type="input"
                               step="any"
                               placeholder=""
                            // value={this.state.baharDescription}
                               onChange={(e) => this.fillParameterValue(e.target.value, "baharDescription")}
                        />
                    </div>,
            },





        ];
        let loopCounter = 1;

        let headerInfo = this.props.headerTitleInfos;
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
