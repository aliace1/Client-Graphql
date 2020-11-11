import React from 'react'
import Navbar from "../Navbar/Navbar";

export class Bienvenu extends React.Component {
    render() {
        return (
            <div>
                <Navbar history = {this.props.history} />
                <h1>Bienvenu à FORDISCO-IUS</h1>
                <p>Vous etes déjà membre, mais il vous faut la permission de l'Administrateur du FORDISCO-IUS..</p>
                <p>Merci beaucoup!!</p>
            </div>
        )
    }
}

export default Bienvenu
