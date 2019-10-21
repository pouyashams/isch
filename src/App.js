import React, {Component} from 'react';
import {Switch, Redirect, Router, withRouter} from 'react-router-dom';
import Navbar from './components/common/navbar';
import Sidebar from './components/common/sidebar';
import Footer from './components/common/footer';
import {PrivateRoute} from "./components/privateroute";
import {ToastContainer} from "react-toastify";
import vaziyatProjeAmaliyati from "./components/operationalProject/operationalProject";
import editVaziyatProjeAmaliyati from "./components/operationalProject/addOperationalProject";
import editTarkibDarayi from "./components/tarkib-darayi/edit";
import TarkibDarayi from "./components/tarkib-darayi/tarkib-darayi";

import motalebatMovagh from "./components/motalebatMovagh/motalebatMovagh";
import editMotalebatMovagh from "./components/motalebatMovagh/edit";

import gozareshMamuriyatKharejKeshvar from "./components/gozareshMamuriyatKharejKeshvar/gozareshMamuriyatKharejKeshvar";
import editGozareshMamuriyatKharejKeshvar from "./components/gozareshMamuriyatKharejKeshvar/edit";

import gozareshHesabresiMostaghel from "./components/gozareshHesabresiMostaghel/gozareshHesabresiMostaghel";
import addGozareshHesabresiMostaghel from "./components/gozareshHesabresiMostaghel/edit";

import gharardadhayeMohem from "./components/gharardadhayeMohem/gharardadhayeMohem";
import addGharardadhayeMohem from "./components/gharardadhayeMohem/edit";

import telaatPayeSherkati from "./components/etelaat-paye-sherkati/etelaatPayeSherkati";
import addTelaatPayeSherkati from "./components/etelaat-paye-sherkati/addCompany";
import showCompany from "./components/etelaat-paye-sherkati/showCompany";
import editCompany from "./components/etelaat-paye-sherkati/editCompany";
import staffStatus from "./components/staff-status/staff-status";
import statusOfConsultants from "./components/status-of-consultants/statusOfConsultants";
import mosavabatHeyatModire from "./components/boardApproval/boardApproval";
import addMosavabatHeyatModire from "./components/boardApproval/addBoardApproval";
import vaziatTahodatGhanuni from "./components/vaziyat-tahodat-ghanuni/vaziatTahodatGhanuni";
import addVaziatTahodatGhanuni from "./components/vaziyat-tahodat-ghanuni/edit";
import kharidFurushDarayihayeSabet from "./components/kharid-furush-darayihaye-sabet/kharidFurushDarayihayeSabet";
import budjeNaghdi from "./components/budje-naghdi/budjeNaghdi";
import soudZiyanDore from "./components/soud-ziyan-dore/soudZiyanDore";
import sarmayegozariTeyDore from "./components/sarmayegozari-teye-dore/sarmayegozariTeyDore";
import addSarmayegozariTeyDore from "./components/sarmayegozari-teye-dore/edit";
import soudSahamMosavab from "./components/soud-saham-mosavab/soudSahamMosavab";
import addSoudSahamMosavab from "./components/soud-saham-mosavab/edit";
import modiriyatSalMali from "./components/manageFiscalYear/manageFiscalYear";
import addSalMali from "./components/manageFiscalYear/addFiscalYear";
import editSalMali from "./components/manageFiscalYear/editFiscalYear";

import salMali from "./components/fiscalYear/fiscalYear";
import clientAddSalMali from "./components/fiscalYear/fiscalYearDetails";

import forms from "./components/fiscalYear/forms";
import editFiscalYearDetails from "./components/manageFiscalYear/editFiscalYearDetails";
import editOperationalProject from "./components/operationalProject/editOperationalProject";
import editBoardApproval from "./components/boardApproval/editBoardApproval";

class App extends Component {
    render() {
        return (
            <div className="container-fluid rtl">
                <Navbar/>
                <ToastContainer/>
                <div className="row">
                    <Sidebar/>
                    <main
                        role="main"
                        className="col-12 col-md-10 offset-md-2 text-center justify-content-center align-items-center"
                    >
                        <Router history={this.props.history}>
                            <Switch>
                                <PrivateRoute path="/operational-project" exact={false}
                                              component={vaziyatProjeAmaliyati}/>
                                <PrivateRoute path="/add-operational-project" exact={false}
                                              component={editVaziyatProjeAmaliyati}/>

                                <PrivateRoute path="/tarkib-darayi" exact={false} component={TarkibDarayi}/>
                                <PrivateRoute path="/add-tarkib-darayi" exact={false} component={editTarkibDarayi}/>

                                <PrivateRoute path="/motalebat-movagh" exact={false} component={motalebatMovagh}/>
                                <PrivateRoute path="/edit-motalebat-movagh" exact={false}
                                              component={editMotalebatMovagh}/>

                                <PrivateRoute path="/gozaresh-mamuriyat-kharej-keshvar" exact={false}
                                              component={gozareshMamuriyatKharejKeshvar}/>
                                <PrivateRoute path="/add-gozaresh-mamuriyat-kharej-keshvar" exact={false}
                                              component={editGozareshMamuriyatKharejKeshvar}/>


                                <PrivateRoute path="/gozaresh-hesabresi-mostaghel" exact={false}
                                              component={gozareshHesabresiMostaghel}/>
                                <PrivateRoute path="/add-gozaresh-hesabresi-mostaghel" exact={false}
                                              component={addGozareshHesabresiMostaghel}/>

                                <PrivateRoute path="/gharardadhaye-mohem" exact={false} component={gharardadhayeMohem}/>
                                <PrivateRoute path="/add-gharardadhaye-mohem" exact={false}
                                              component={addGharardadhayeMohem}/>

                                <PrivateRoute path="/etelaat-paye-sherkati" exact={false}
                                              component={telaatPayeSherkati}/>
                                <PrivateRoute path="/add-etelaat-paye-sherkati" exact={false}
                                              component={addTelaatPayeSherkati}/>
                                <PrivateRoute path="/show-company" exact={false} component={showCompany}/>
                                <PrivateRoute path="/edit-company" exact={false} component={editCompany}/>

                                <PrivateRoute path="/staff-status" exact={false} component={staffStatus}/>
                                <PrivateRoute path="/status-of-consultants" exact={false}
                                              component={statusOfConsultants}/>
                                <PrivateRoute path="/board-approval" exact={false}
                                              component={mosavabatHeyatModire}/>
                                <PrivateRoute path="/add-board-approval" exact={false}
                                              component={addMosavabatHeyatModire}/>

                                <PrivateRoute path="/vaziyat-tahodat-ghanuni" exact={false}
                                              component={vaziatTahodatGhanuni}/>
                                <PrivateRoute path="/add-vaziyat-tahodat-ghanuni" exact={false}
                                              component={addVaziatTahodatGhanuni}/>

                                <PrivateRoute path="/kharid-furush-darayi-sabet" exact={false}
                                              component={kharidFurushDarayihayeSabet}/>
                                <PrivateRoute path="/budje-naghdi" exact={false} component={budjeNaghdi}/>
                                <PrivateRoute path="/soud-ziyan-dore" exact={false} component={soudZiyanDore}/>

                                <PrivateRoute path="/sarmayegozari-tey-dore" exact={false}
                                              component={sarmayegozariTeyDore}/>
                                <PrivateRoute path="/add-sarmayegozari-tey-dore" exact={false}
                                              component={addSarmayegozariTeyDore}/>
                                <PrivateRoute path="/soud-saham-mosavab" exact={false} component={soudSahamMosavab}/>
                                <PrivateRoute path="/add-soud-saham-mosavab" exact={false}
                                              component={addSoudSahamMosavab}/>


                                <PrivateRoute path="/manage-fiscal-year" exact={false} component={modiriyatSalMali}/>
                                <PrivateRoute path="/add-sal-mali" exact={false} component={addSalMali}/>
                                <PrivateRoute path="/edit-fiscal-year" exact={false} component={editSalMali}/>

                                <PrivateRoute path="/fiscal-year" exact={false} component={salMali}/>
                                <PrivateRoute path="/fiscal-year-details" exact={false} component={clientAddSalMali}/>

                                <PrivateRoute path="/fiscal-year-details" exact={false} component={clientAddSalMali}/>

                                <PrivateRoute path="/forms" exact={false} component={forms}/>
                                <PrivateRoute path="/edit-fiscal-year-details" exact={false} component={editFiscalYearDetails}/>
                                <PrivateRoute path="/edit-operational-project" exact={false} component={editOperationalProject}/>

                                <PrivateRoute path="/edi-board-approval" exact={false} component={editBoardApproval}/>

                                <PrivateRoute path="/" exact={true} component={telaatPayeSherkati}/>

                                <Redirect to="/not-found"/>
                            </Switch>
                        </Router>

                    </main>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(App);
