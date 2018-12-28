import React from 'react'

/*
* deafultProps用于在父组件向子组件传递信息时的默认值
* propTypes用于验证父组件传值的类型正确与否
* 使用时先引入prop-types*/
import PropTypes from 'prop-types'
class SonCom extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            msg: '子组件信息'

        }
    }
    run= ()=>{
        return '我是子组件的run方法'
    }
    render (){
        return (
            <div>
                <p>从父组件获取的信息：{this.props.msg}</p>
                <p>从父组件获取的信息，默认值：{this.props.title}</p>
                <p>从父组件获取的信息：num={this.props.num}</p>
                <button onClick={this.props.fun}>点击执行父组件方法</button>

                <p>{this.props.parent.getData()}</p>
                <button onClick={this.props.parent.receSonData.bind(this,this.state.msg)}>子组件传递数据给父组件</button>

            </div>
        )
    }
}
SonCom.propTypes={
    title: PropTypes.string,
    num: PropTypes.number

}
SonCom.defaultProps={
    msg: 'msg默认值',
    title: 'title默认值'
}
export default SonCom;