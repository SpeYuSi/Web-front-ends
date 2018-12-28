import React from 'react'
/*组件用于解决html标签构建应用的不足*/
/*父子组件通信用于实现组件的复用*/

/*在父组件中调用子组件时在子组件标签中添加一个属性,这个属性的值可以是函数也可以是数据
*<SonCom msg={this.state.msg}></SonCom>
*在子组件中使用 this.props.msg (this.props.属性名)就可以获取到父组件传递的信息*/

/*父组件还可以把自己传给子组件
*子组件可以使用父组件的方法
* 在子组件中获取父组件state中的信息时需要通过父组件中的方法
* 也可以利用执行父组件的方法来将子组件的值传递给父组件*/

/*父组件主动获取子组件信息
*在组件标签中创建一个ref属性并指定value
* 在父组件中使用 (this.refs.value) 来获取子组件
* 必须在组件加载完后获取*/

import SonCom from './SonCom'
class ParentCom extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            title: '父子组件通信',
            msg: '父组件信息',
        }
    }
    run= ()=>{
        alert('我是父组件的方法')
    }
    getData= ()=>{
        return this.state.msg;
    }
    receSonData= (msg)=>{
        alert('父组件收到了' + msg)
    }
    getSonData= ()=>{
        alert('父组件获取到了'+this.refs.child.state.msg)
    }
    runSonFun= ()=>{
        alert('父组件调用了' +this.refs.child.run())
    }
    render(){
        return(
            <div>
                <h3>{this.state.title}</h3>
                <SonCom msg={this.state.msg} num='qweqwe' fun={this.run} parent={this} ref='child'></SonCom>
                <br/>
                <button onClick={this.getSonData}>在父组件里获取子组件</button>
                <br/>
                <br/>
                <button onClick={this.runSonFun}>在父组件中调用子组件方法</button>

            </div>
        )
    }
}
export default ParentCom;