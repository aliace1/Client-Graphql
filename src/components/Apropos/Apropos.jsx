import React from 'react';
import Navbar from "../Navbar/Navbar";
import './Apropos.css';

class Apropos extends React.Component {
    render(){
        const titre = "Le FORDISCO-IUS c'est un acronyme :";
        return (
            <div className="service-container" >
                <Navbar history = {this.props.history} />
                <div className=" grey-text text-darken-3 ml-3 service-title">
                    <h3 className=" text-center" id="iusService">
                        <b>{titre}</b>
                    </h3>
                </div>
                <div className="cardBody">

                    < div className="service-card">
                        <span>
                            <i className="fa fa-leanpub service-icon" />
                        </span>
                        <h4 className="subtitle">
                            <b>La formation </b>
                        </h4>
                        <p id="pargrPropos">
                            L’apprentissage du Droit a connu la réception de beaucoup de
                            nouveautés depuis le début du 21° siècle. Certains facteurs
                            relèvent de l’évolution des technologies de la
                            communication, d’autres prennent source dans le
                            développement du Droit lui-même. Enfin, l’augmentation sans
                            cesse des demandes et des offres de formation en Droit
                            milite pour diversification et l’augmentation des supports
                            d’enseignement comme celui-ci.
                        </p>
                    </div>

                    <div className="service-card">
                        <span>
                            <i className="fa fa-comment service-icon" />
                        </span>
                        <h4 className="subtitle">
                            <b>Les discussions </b>
                        </h4>
                        <p id="pargrPropos">
                            Jusqu’à la fin du vingtième siècle, l’enseignement du Droit
                            s’est généralement déroulé d’une part, sous forme de cours
                            magistral sans possibilité d’échange direct avec son
                            professeur. D’autre part, des séances de travaux dirigés
                            sont organisées pour compléter les cours magistraux, les
                            renforcer et les approfondir aux fins de compréhension par
                            les apprenants des concepts fondamentaux utilisés par les
                            cours magistraux. En ce début du vingt-et-unième siècle, il
                            semble constant que la démarche intellectuelle retourne à la
                            prise en considération des faits contrairement à la démarche
                            déductive La structure des sites numériques offre une
                            possibilité de mener sous certaines conditions des
                            discussions via les forums et ainsi de perpétuer de telle
                            opportunité. Ces échanges entre enseignants et apprenants
                            concourent à l’augmentation de l’intensité des transmissions
                            des messages pédagogiques.
                        </p>
                    </div>

                    <div className="service-card">
                        <span>
                            <i className="fa fa-gift service-icon" />
                        </span>
                        <h4 className="subtitle">
                            <b>Les conseils </b>
                        </h4>
                        <p id="pargrPropos">
                            Certaines personnes n’appartiennent pas à la catégorie des
                            apprenants : il s’agit de professionnels de tous horizons
                            C’est la partie pratique des connaissances sur le Droit. Ces
                            questions pratiques revêtent une importance particulière
                            pour les administrateurs du site car, en fait, il s’agit, en
                            général, de faits à l’état pur. Ne nous méprenons pas, il
                            s’agit de conseils pour l’apprentissage du Droit et non pour
                            la défense d’un droit.
                        </p>
                    </div>

                    <div className="service-card">
                        <span>
                            <i className="fa fa-balance-scale service-icon" />
                        </span>
                        <h4 className="subtitle">
                            <b >L'IUS </b>
                        </h4>
                        <p id="pargrPropos">
                            En Droit, l’art de distinguer que ce soit au sein des choses
                            ou au sein des personnes, aide fondamentalement à progresser
                            dans la connaissance du Droit. Appliquons cette opération de
                            distinction sur le « ius ». Elle nous conduit sur quelques
                            précisons étymologiques et livre quelques idées bien fixées
                            au départ. « IUS » signifiant « droit » est la racine de «
                            iustitia » qui signifie justice. L’adjectif français «
                            juridique » vient également de « iustitia ». Il semble
                            qu’ils sont construits sur le même radical Il y a aussi le
                            terme juridiction (iuris-dictio) qui signifie « qui dit le
                            droit » et le terme judiciaire signifie « ce qui se rapporte
                            à la justice (le terme justice est ici considéré comme
                            institution) ». Par contre, l’expression française « droit »
                            vient du mot latin « directum » dont les dérivés sont «
                            direction » ou « directive ». Ces sens dérivés rejoignent le
                            sens du mot latin « regula » qui s’octroie la signification
                            de « règle » cet outil servant à diriger, à donner une
                            direction en tirant des lignes droites évidemment. Compte
                            tenu de ces distinctions, seule l’étymologie latine du mot «
                            juridique » conduit à une signification de la justice au
                            sens formel qui structure la connaissance juridique. En
                            fait, au terme « juridique » correspond selon le plus vieux
                            dictionnaire de Richelet (1680) la signification « qui est
                            dans les formes de la justice ».
                        </p>
                    </div>
                </div>            
                        
            </div>
        )
    }
}

export default Apropos