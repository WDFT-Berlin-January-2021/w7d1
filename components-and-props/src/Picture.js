import React, { Component } from 'react'

export default class Picture extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image} style={{ width: '200px' }} alt="user image" />
            </div>
        )
    }
}
