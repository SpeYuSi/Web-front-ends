import React from 'react'
import axios from 'axios'

/* axios不支持jsonp，接口后台必须允许跨域CORS
* */
class Axios extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            list: []
        }
    }
    getData= ()=>{
        var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20'
        axios.get(api).then((res)=>{
            this.setState({
                list:res.data.result
            })
        }).catch(function (err) {
            console.log(err)
        })
    }
    render (){
        return (
            <div>
                <hr/>
                <h3>使用axios获取数据</h3>
                <button onClick={this.getData}>获取数据</button>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            return <li key={key}>{value.title}</li>
                    })
                    }
                </ul>
            </div>
        )
    }
}
export default Axios;