import React, { Component } from 'react'
import './App.css';

class App extends Component {
    // constructor(props) {
    //     super(props)
        state = {
        // _meta: {},
        result: []
        }
    // }
    
    componentDidMount() {
        const url = "https://gorest.co.in/public-api/users?access-token=uItjmwOt5yAcXHHXd982DemaMwt9m11onrqS"

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ result: data.result })
            // console.log(data.result);
            })
    }

    render() {
        const { result } = this.state;
        console.log(result)

        const users = result.map(user => {
            // console.log(entry);
            // return <li key={user.id}>{user.first_name}</li>
            return <p key={user.id}>{user.first_name}</p>
        })

        // return <div className="container"><ul>{users}</ul></div>
        return <div className="container">{users}</div>
    }
}

export default App;
