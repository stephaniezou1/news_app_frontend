import React, { Component } from 'react'

class Like extends Component {

    handleLike = () => {
        this.props.addALike(this.props.likes + 1, this.props.article.id)
    }

    render() {
        let { likes } = this.props
        return (
            <div>
                <div className="like-button" onClick={this.handleLike}>
                    <span className="right floated">
                    <i className="heart outline like icon"></i>
                        {likes}
                    </span>
                </div>
            </div>
        )
    }
}

export default Like
