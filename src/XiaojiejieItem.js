import React, { Component } from 'react'; 
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render(){
        return(
            <div onClick={this.handleClick}>{this.props.content}</div>
        );
    }
    handleClick(){
        // this.props.index= 0;
        // this.props.deleteEvent(this.props.index) //这样写报错,props接收到的值不可以直接修改

        // let a = this.props.index;
        // a=0
        // this.props.deleteEvent(a)     //这样写可以

        this.props.deleteEvent(this.props.index)
    }
}

XiaojiejieItem.propTypes = { //这里的propTypes开头的p是小写的
    content:PropTypes.string,
    deleteEvent:PropTypes.func,
    index:PropTypes.number,
}

export default XiaojiejieItem;