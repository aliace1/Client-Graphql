import { gql } from "apollo-boost"

const getClasseQuery = gql`
    {
        classes{
            _id
            nom
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

export{ getClasseQuery, createArticleMutation }