import React from 'react'

class ReactForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:'React表单',
            name:'' ,
            sex:'1',
            city:'北京',
            citys:['北京','上海','成都'],
            hobby:[{'title':'足球','checked':true},{'title':'游戏','checked':false},{'title':'音乐','checked':false}],
            info:'',

        }
    }
    handelSubmit= (e)=>{
        //阻止默认提交事件
        e.preventDefault();
        console.log(this.state.name)
        console.log(this.state.sex)
        console.log(this.state.city)
        console.log(this.state.hobby)
    }
    handelName =(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handelSex =(e)=>{
        this.setState({
            sex:e.target.value
        })
    }
    handelCitys =(e)=>{
        this.setState({
            city:e.target.value
        })
    }
    handelHobby =(key)=>{
        let hobby = this.state.hobby
        hobby[key].checked=!hobby[key].checked
        this.setState({
            hobby: hobby
        })
    }
    handleInfo =(e)=>{
        this.setState({
            info:e.target.value
        })
    }
    render(){
        return(
            <div>
                <h2>{this.state.msg}</h2>
                <h5>使用React获取表单值</h5>
                <form action="" onSubmit={this.handelSubmit}>
                    用户名：
                    <input type="text" value={this.state.name} onChange={this.handelName}/>
                    <br/>
                    性别：
                    男<input type="radio" value='1' checked={this.state.sex==='1'} onChange={this.handelSex}/>
                    女<input type="radio" value='2' checked={this.state.sex==='2'} onChange={this.handelSex}/>
                    <br/>
                    城市：
                    <select vaklue="city" onChange={this.handelCitys}>
                        {
                            this.state.citys.map(function (value,key) {
                            return <option key={key}>{value}</option>
                            })
                        }
                    </select>
                    <br/>
                    爱好：
                    {/*注意this指向问题,每点击一次就修改一次this.state.hobby里的值*/}
                    {
                        this.state.hobby.map((value,key) =>{
                            return (
                                <span key={key}>
                                    <input  type="checkbox"  checked={value.checked} onChange={this.handelHobby.bind(this,key)}/>{value.title}
                                </span>
                                )
                        })
                    }
                    <br/>
                    信息：
                    <br/>
                    <textarea value={this.state.info} cols="30" rows="10" onChange={this.handleInfo}></textarea>
                    <br/>
                    <input type="submit" defaultValue="submit"/>
                </form>
            </div>
        )
    }
}
export default ReactForm;
