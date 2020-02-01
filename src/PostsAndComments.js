import React, { Component } from 'react'
import './App.css';

class App extends Component {
    
    // constructor(props) {
    //     super(props)
        state = {
        // _meta: {},
        posts: []
        }
    // }
    
    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/posts"

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ posts: data })
            // console.log(data.result);
            })
    }

    render() {
        const {posts} = this.state;
        // console.log(posts)

        const all_post = posts.map(post => {
            // console.log(entry);
            // return <li key={user.id}>{user.first_name}</li>
            return <p key={post.id}>{post.body}</p>
        })

        return <div className="container">{all_post}</div>
        // return <div className="container">pfff...</div>
    }
}

export default App;
