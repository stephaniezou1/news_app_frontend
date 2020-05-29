import React, { Component } from 'react'

class Like extends Component {

    handleLike = () => {
        this.props.addALike(this.props.likes + 1, this.props.article.id)
    }

    render() {
        let { likes } = this.props
        return (
            <div>
                <div class="like-button" onClick={this.handleLike}>
                    <span class="right floated">
                    <i class="heart outline like icon"></i>
                        {likes}
                    </span>
                </div>
            </div>
        )
    }
}

export default Like
