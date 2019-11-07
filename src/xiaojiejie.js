import React, { Component } from 'react'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '初级',
            list: ['基础', '高级','终极'],
        }
        // this.inputChange = this.inputChange.bind(this)
    }
    render() {
        return (
            <div>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} /> 
                    <button onClick={this.addList.bind(this)} > 增加服务 </button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                    <XiaojiejieItem index={index} key={index+item} deleteEvent={this.deleteItem.bind(this)} content={item} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    inputChange(e) {
        this.setState({ inputValue: e.target.value })
        console.log(e.target.value)
    }
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue]
        })
    }
    deleteItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}
export default Xiaojiejie 