import React from 'react'
import Navbar from "../Navbar/Navbar";

export class Bienvenu extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar history = {this.props.history} />
                <h1 className="text-center mt-4">Bienvenu à FORDISCO-IUS</h1>
                <p className="text-center">Vous etes déjà membre, mais il vous faut la permission de l'Administrateur du FORDISCO-IUS pour y acceder..</p>
                <p className="text-center">Merci beaucoup!!</p>
            </div>
        )
    }
}

export default Bienvenu
