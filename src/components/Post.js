import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component{
    state={
        post:null
    }
    componentDidMount(){
        // console.log(this.props);
        const id = this.props.match.params.postId;
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(res => {
            this.setState({
                post:res.data
            })
            console.log(res);
        })
       
    }

    render(){

        const post=this.state.post?(
            <div className="post">
                    <h4>{this.state.post.title}</h4>
                    <p>{this.state.post.body}</p>
            </div>
        ):(
            <div className="center">Post Loading...</div>
        )
    
    return(
        <div className="container">
            {post}
        </div>
    )
}
}

export default Post
