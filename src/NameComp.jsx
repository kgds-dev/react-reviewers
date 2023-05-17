import React, { Component } from "react";

class Name extends Component{

    constructor(props) {
        super(props);

        this.state = {
            name: 'Kimbo Sanz',
            age: 15
        }
    }

    render () {
       return (
            <div>
                <h3>Hi I'am {this.state.name}</h3>
                <button onClick={() => this.setState({name: 'Felix Santos'})}>Change name</button>
            </div>
       )
    }
}

export default Name