import {BrowserRouter , Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/authentification/Signup";
import Signin from "./components/authentification/Signin";
import MenuPage from "./components/menu/menu_page";
import Liste from "./components/Liste_etudiant/Liste";
import React from "react";
import './App.css'
import Cours from "./components/Cours/Cours";
import Tp from "./components/Tp/Tp";
import Livres from "./components/livres/Livres";
import Add from "./components/Cours/Add";
import ApolloClient, { InMemoryCache, HttpLink } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";
import Verification from "./components/verification/verification";
import Bienvenu from "./components/Bienvenu/Bienvenu";
import AjoutTp from "./components/Tp/AjoutTp";
import AjoutLivre from "./components/livres/AjoutLivre"
import Commentaire from "./components/Commentaire/Commentaire";
import Footer from "./components/Footer/Footer";
import Detail from "./components/Cours/Detail";
import DetailTp from "./components/Tp/DetailTp";
import DetailLivre from "./components/livres/DetailLivre";
import Apropos from "./components/Apropos/Apropos";
import ModifieCours from "./components/Cours/ModifieCours";
import ModifierLivre from "./components/livres/ModifierLivre";
import ModifierTp from "./components/Tp/Modifier-tp";
import RespCommentaire from "./components/Commentaire/RespCommentaire";
import LoginRegistre from "./components/Login/LoginRegistre";

const uri = 'http://localhost:8000/graphql';
// // const encoded = encodeURI(uri);

// const client = new ApolloClient({
//   // cache: new InMemoryCache(),
//   // headers: {Authorization:'Bearer '+localStorage.getItem("Token")},
//   uri,
//   headers: {Authorization:'Bearer '+localStorage.getItem("Token")},
//   cache: new InMemoryCache,
//   defaultOptions: {
//     mutate: { errorPolicy: 'ignore' },
//   }
// });

// const client = new ApolloClient({
//   link: new HttpLink({
//     uri: "http://localhost:8000/graphql"
//   }),
//   cache: new InMemoryCache()
// });

const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  uri
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
              <Route path="/Cours" component={Cours}/>
              <Route path="/Ajout_cours" component={Add}/>
              <Route path="/Detail/:id" component={Detail} />
              <Route path="/Modifie-cours/:id" component={ModifieCours} />
              <Route path="/Tp" component={Tp}/>
              <Route path="/AjoutTp" component={AjoutTp} />
              <Route path="/DetailTp/:id" component={DetailTp} />
              <Route path="/Modifier-tp/:id" component={ModifierTp} />
              <Route path="/Livres" component={Livres}/>
              <Route path="/Detail-livre/:id" component={DetailLivre} />
              <Route path="/Modifier-livre/:id" component={ModifierLivre} />
              <Route path="/AjoutLivre" component={AjoutLivre} />
              <Route path="/Bienvenu" component={Bienvenu} />
              <Route path="/Verification" component={Verification} />
              <Route path="/Commentaire/:type/:id" component={Commentaire} />
              <Route path="/RespCommentaire/:type/:id/:idA" component={RespCommentaire} />
              <Route path="/Apropos" component={Apropos} />
              <Route path="/LoginAndRegister" component={LoginRegistre} />
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
