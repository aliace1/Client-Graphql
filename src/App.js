import {BrowserRouter , Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/authentification/Signup";
import Signin from "./components/authentification/Signin";
import MenuPage from "./components/menu/menu_page";
import Liste from "./components/Liste_etudiant/Liste";
import React from "react";
import './App.css'
import Ajout from "./components/Article/Ajout";
import Cours from "./components/Cours/Cours";
import Tp from "./components/Tp/Tp";
import Livres from "./components/livres/Livres";
import Add from "./components/Cours/Add";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Verification from "./components/verification/verification";
import Bienvenu from "./components/Bienvenu/Bienvenu";
import AjoutTp from "./components/Tp/AjoutTp";
import AjoutLivre from "./components/livres/AjoutLivre"
import Commentaire from "./components/Commentaire/Commentaire";
import Footer from "./components/Footer/Footer";
import Detail from "./components/Cours/Detail";
import DetailTp from "./components/Tp/DetailTp";
import DetailLivre from "./components/livres/DetailLivre";


const client = new ApolloClient({
  uri:'http://localhost:8000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BrowserRouter>
        <Navbar />
          <div className={"divCentral"}>
              <Route exact path="/" component={MenuPage}/>
              <Route path="/Signup" component={Signup} exact/>
              <Route path="/Signin" component={Signin}/>
              <Route path="/Membres" component={Liste}/>
              <Route path="/Articles" component={Ajout}/>
              <Route path="/Cours" component={Cours}/>
              <Route path="/Tp" component={Tp}/>
              <Route path="/Detail/:id" component={Detail} />
              <Route path="/Livres" component={Livres}/>
              <Route path="/Detail-livre/:id" component={DetailLivre} />
              <Route path="/AjoutLivre" component={AjoutLivre} />
              <Route path="/Ajout_cours" component={Add}/>
              <Route path="/AjoutTp" component={AjoutTp} />
              <Route path="/DetailTp/:id" component={DetailTp} />
              <Route path="/Bienvenu" component={Bienvenu} />
              <Route path="/Verification" component={Verification} />
              <Route path="/Commentaire" component={Commentaire} />
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
