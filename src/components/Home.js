import React, { Component } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'

class Home extends Component {

    state = {
        posts: []
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }
    render() {
        const posts = this.state.posts;
        const Postlist = posts ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content" >
                            <Link to={"/"+post.id}>
                            <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })) : (
                <div className="center">No Posts Yet</div>
            )
        return (
                <div className="container">
                    <h2 className="center">Home</h2>
                    {Postlist}
                </div>
                )
        }
    }

export default Home