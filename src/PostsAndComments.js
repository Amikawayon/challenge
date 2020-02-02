import React, { Component } from 'react'
import './App.css';

class App extends Component {
    
    // constructor(props) {
    //     super(props)
        state = {
        // _meta: {},
        posts: [],
        comments: []
        }
    // }
    
    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/posts"
        const comments = "https://jsonplaceholder.typicode.com/comments"

        fetch(comments)
            .then(response => response.json())
            .then(data => {
                this.setState({ comments: data })
            // console.log(data.result);
            })

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ posts: data })
            // console.log(data.result);
            })
    }

    render() {
        const {posts} = this.state
        const {comments} = this.state
          const resultArray = posts.map(post => {
           const filteredComments = comments.filter(comment => comment.postId == post.id)
           const commentsResult = filteredComments.map(comment => <p>{comment.body}</p>)

           return (
            <div>
            <p>{post.body}</p>
            <p>{commentsResult}</p>
            </div>
            )

        });
          return <div>{resultArray}</div>
        // console.log(posts)

        // const all_post = posts.map(post => {
        //     // console.log(entry);
        //     // return <li key={user.id}>{user.first_name}</li>
        //     return <p key={post.id}>{post.body}</p>
        // }

        // return <div className="container">{all_post}</div>
        // return <div className="container">pfff...</div>
    }
}

export default App;
