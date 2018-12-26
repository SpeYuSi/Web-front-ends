import React from 'react'

class EventAndFunction extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            msg:'事件和方法',
            name: 'Trolife',
            inputMsg:'',
            key:'',
            modelValue:'default'

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
    changeColor = (event)=>{
        alert(event.target.getAttribute('aid'))
        event.target.style.background='red'
    }
    inputChange = (e)=>{
        this.setState({
            inputMsg:e.target.value
        })
    }
    inputChangeRef= ()=>{
        this.setState({
            inputMsg:this.refs.msg.value
        })
    }
    inputKeyUp= (e)=>{
        this.setState({
            key: e.keyCode
        })
    }
    valueChange= (e)=>{
        this.setState({
            modelValue:e.target.value
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
                <hr/>
                <h3>获取事件对象的属性</h3>
                <button  aid='123'onClick={this.changeColor}>改变按钮颜色</button>
                <hr/>
                <h3>表单事件</h3>
                <h4>获取表单的值：监听表单的改变事件获取值，使用事件对象的值设置state</h4>
                输入：<input type="text" onChange={this.inputChange}/>
                <p>{this.state.inputMsg}</p>
                <br/>
                <h4>获取表单的值：监听表单的改变事件获取值，使用ref属性对象的值设置state</h4>
                输入：<input type="text" ref="msg" onChange={this.inputChangeRef}/>
                <p>{this.state.inputMsg}</p>
                <br/>
                <hr/>
                <h3>键盘事件</h3>
                <h5>event.keyCode获取按键ASCII码</h5>
                输入：<input type="text" onKeyUp={this.inputKeyUp}/>
                <p>{this.state.key}</p>
                <br/>
                <hr/>
                <h3>通过事件模拟双向数据绑定 MVVM</h3>
                <h5>model改变影响value(react默认)，value改变影响model</h5>
                输入：<input type="text" onChange={this.valueChange}/>
                <p>{this.state.modelValue}</p>
                <hr/>
                <h3>约束型组件，非约束型组件</h3>
                <p>使用defaultValue，就是实际Dom中的value，React不参与</p>
                <p>使用value必须使用onChange事件来绑定state中的值</p>



            </div>
        )
    }
}

export default EventAndFunction;