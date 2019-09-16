import React, {Component} from 'react';
import {Switch, Redirect, Router, withRouter} from 'react-router-dom';
import Navbar from './components/common/navbar';
import Sidebar from './components/common/sidebar';
import Footer from './components/common/footer';
import {PrivateRoute} from "./components/privateroute";
import {ToastContainer} from "react-toastify";
import vaziyatProjeAmaliyati from "./components/vaziyat-proje-amaliyati/vaziyat-proje-amaliyati";
import editVaziyatProjeAmaliyati from "./components/vaziyat-proje-amaliyati/edit";
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
import mosavabatHeyatModire from "./components/mosavabat-heyat-modire/mosavabatHeyatModire";
import addMosavabatHeyatModire from "./components/mosavabat-heyat-modire/edit";
import vaziatTahodatGhanuni from "./components/vaziyat-tahodat-ghanuni/vaziatTahodatGhanuni";
import addVaziatTahodatGhanuni from "./components/vaziyat-tahodat-ghanuni/edit";
import kharidFurushDarayihayeSabet from "./components/kharid-furush-darayihaye-sabet/kharidFurushDarayihayeSabet";
import budjeNaghdi from "./components/budje-naghdi/budjeNaghdi";
import soudZiyanDore from "./components/soud-ziyan-dore/soudZiyanDore";
import sarmayegozariTeyDore from "./components/sarmayegozari-teye-dore/sarmayegozariTeyDore";
import addSarmayegozariTeyDore from "./components/sarmayegozari-teye-dore/edit";
import soudSahamMosavab from "./components/soud-saham-mosavab/soudSahamMosavab";
import addSoudSahamMosavab from "./components/soud-saham-mosavab/edit";

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
                                <PrivateRoute path="/vaziyat-prozhe-amaliyati" exact={false}
                                              component={vaziyatProjeAmaliyati}/>
                                <PrivateRoute path="/add-vaziyat-prozhe-amaliyati" exact={false}
                                              component={editVaziyatProjeAmaliyati}/>

                                <PrivateRoute path="/tarkib-darayi" exact={false} component={TarkibDarayi}/>
                                <PrivateRoute path="/add-tarkib-darayi" exact={false} component={editTarkibDarayi}/>

                                <PrivateRoute path="/motalebat-movagh" exact={false} component={motalebatMovagh}/>
                                <PrivateRoute path="/edit-motalebat-movagh" exact={false} component={editMotalebatMovagh}/>

                                <PrivateRoute path="/gozaresh-mamuriyat-kharej-keshvar" exact={false} component={gozareshMamuriyatKharejKeshvar}/>
                                <PrivateRoute path="/add-gozaresh-mamuriyat-kharej-keshvar" exact={false} component={editGozareshMamuriyatKharejKeshvar}/>


                                <PrivateRoute path="/gozaresh-hesabresi-mostaghel" exact={false} component={gozareshHesabresiMostaghel}/>
                                <PrivateRoute path="/add-gozaresh-hesabresi-mostaghel" exact={false} component={addGozareshHesabresiMostaghel}/>

                                <PrivateRoute path="/gharardadhaye-mohem" exact={false} component={gharardadhayeMohem}/>
                                <PrivateRoute path="/add-gharardadhaye-mohem" exact={false} component={addGharardadhayeMohem}/>

                                <PrivateRoute path="/etelaat-paye-sherkati" exact={false} component={telaatPayeSherkati}/>
                                <PrivateRoute path="/add-etelaat-paye-sherkati" exact={false} component={addTelaatPayeSherkati}/>
                                <PrivateRoute path="/show-company" exact={false} component={showCompany}/>
                                <PrivateRoute path="/edit-company" exact={false} component={editCompany}/>

                                <PrivateRoute path="/staff-status" exact={false} component={staffStatus}/>
                                <PrivateRoute path="/status-of-consultants" exact={false} component={statusOfConsultants}/>
                                <PrivateRoute path="/mosvabat-heyat-modire" exact={false} component={mosavabatHeyatModire}/>
                                <PrivateRoute path="/add-mosvabat-heyat-modire" exact={false} component={addMosavabatHeyatModire}/>

                                <PrivateRoute path="/vaziyat-tahodat-ghanuni" exact={false} component={vaziatTahodatGhanuni}/>
                                <PrivateRoute path="/add-vaziyat-tahodat-ghanuni" exact={false} component={addVaziatTahodatGhanuni}/>

                                <PrivateRoute path="/kharid-furush-darayi-sabet" exact={false} component={kharidFurushDarayihayeSabet}/>
                                <PrivateRoute path="/budje-naghdi" exact={false} component={budjeNaghdi}/>
                                <PrivateRoute path="/soud-ziyan-dore" exact={false} component={soudZiyanDore}/>

                                <PrivateRoute path="/sarmayegozari-tey-dore" exact={false} component={sarmayegozariTeyDore}/>
                                <PrivateRoute path="/add-sarmayegozari-tey-dore" exact={false} component={addSarmayegozariTeyDore}/>
                                <PrivateRoute path="/soud-saham-mosavab" exact={false} component={soudSahamMosavab}/>
                                <PrivateRoute path="/add-soud-saham-mosavab" exact={false} component={addSoudSahamMosavab}/>

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
