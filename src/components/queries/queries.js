import { gql } from "apollo-boost"

const getClasseQuery = gql`
    {
        classes{
            _id
            nom
        }
    }
`
const getCoursQuery = gql`
    {
        articles{ 
            _id 
            titre 
            matiere 
            contenu 
            date
        }
    }
`

const createArticleMutation = gql`
    mutation($titre: String!, $matiere: String!, $contenu: String!, $date: String!, $creator: String!){
    createArticle(articleInput:{
        titre:$titre,
        matiere:$matiere,
        contenu:$contenu,
        date:$date,
        creator:$creator
    }){
        titre
        matiere
        contenu
        date
    }
}
`
const createLivreMutation = gql`
    mutation($titre: String!, $matiere: String!, $contenu: String!, $date: String!, $creator: String!){
        createLivre(livreInput:{
            titre:$titre,
            matiere:$matiere,
            contenu:$contenu,
            date:$date,
            creator:$creator
        }){
            titre
            matiere
            contenu
            date
        }
    }
`
const createDevoirMutation = gql`
    mutation($titre: String!, $matiere: String!, $contenu: String!, $date: String!, $creator: String!){
        createDevoir(devoirInput:{
            titre:$titre,
            matiere:$matiere,
            contenu:$contenu,
            date:$date,
            creator:$creator
        }){
            titre
            matiere
            contenu
            date
        }
    }
`
const updateArticleMutation = gql`
    mutation($id: String!, $matiere: String!, $contenu: String!, $date: String!, $creator: String!){
        updateArticle(articleId:$id,titre:$titre,matiere:$matiere,contenu:$contenu){ 
        titre 
        matiere 
        contenu 
        date
        }}
`

export{ 
    getClasseQuery,
    getCoursQuery, 
    createArticleMutation, 
    createLivreMutation , 
    createDevoirMutation,
    updateArticleMutation 
}