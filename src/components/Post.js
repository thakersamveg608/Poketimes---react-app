import React, {Component} from "react"
// import axios from 'axios'
import { connect } from 'react-redux'
import {deletePost} from "../actions/postActions";

class Post extends Component{

    /*
    Used when we don't use redux
    */
    // state = {
    //     post: null
    // }
    // componentDidMount() {
    //     let id = this.props.match.params.post_id;
    //     axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
    //         .then(res => {
    //             this.setState({
    //                 post: res.data
    //             })
    //         })
    // }

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    render() {
        // const post = this.state.post ? (
        console.log(this.props)
        const post = this.props.post ? (
            <div className="post">
                {/*<h4 className='center'>{this.state.post.title}</h4>*/}
                {/*<p>{this.state.post.body}</p>*/}
                <h4 className='center'>{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
            <div className='center'>Loading Post...</div>
        )
        return(
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === Number (id))
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post)