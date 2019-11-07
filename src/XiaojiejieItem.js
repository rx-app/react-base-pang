import React, { Component } from 'react'; 
class XiaojiejieItem extends Component{
    render(){
        return(
            <div onClick={this.handleClick.bind(this)}>{this.props.content}</div>
        );
    }
    handleClick(){
        console.log(this.props.index)
    }
}

export default XiaojiejieItem;