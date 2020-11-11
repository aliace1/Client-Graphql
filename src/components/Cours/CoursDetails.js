import React from 'react'
import Navbar from "../Navbar/Navbar";

class CoursDetails extends React.Component {
    render() {
        return (
            <div>
            <Navbar history = {this.props.history} />
            </div>
        )
    }
}

export default CoursDetails
