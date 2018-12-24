import React from 'react'

class EventAndFunction extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            msg:'事件和方法',
            name: 'Trolife',
        }
        this.getMsg=this.getMsg.bind(this)
    }
    run(){
        alert('running!')
    }
    getData(){
        alert(this.state.msg)
    }
    getMsg(){
        alert(this.state.msg)
    }
    getName=()=>{
        alert(this.state.name)
    }
    setName= ()=>{
        this.setState({
            name: 'Trolife1'
        })
    }
    updateName= (str)=>{
        this.setState({
            name: str
        })
    }
    render(){
        return(
            <div>
                <hr/>
                <h2>{this.state.msg}</h2>
                <h2>{this.state.name}</h2>
                <button onClick={this.run}>run</button>
                <br/>
                <br/>
                <button onClick={this.getData.bind(this)}>getData使用bind传递this指向</button>
                <br/>
                <br/>
                <button onClick={this.getMsg}> 在构造函数里使用bind传递this</button>
                <br/>
                <br/>
                <button onClick={this.getName}> 在定义函数的时候使用箭头函数</button>
                <br/>
                <br/>
                <button onClick={this.setName}> 改变name</button>
                <br/>
                <br/>
                <button onClick={this.updateName.bind(this,'React')}> 在方法执行时传值，使用箭头函数定义，并使用dind绑定this和参数</button>
            </div>
        )
    }
}
export default EventAndFunction;