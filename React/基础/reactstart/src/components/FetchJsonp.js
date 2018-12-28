import React from 'react'
import fetchJsonp from 'fetch-jsonp'
/*只适用于支持jsonp的api，即在api后面加 &callback=xxx 可以访问到数据
* */
class FetchJsonp extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            list: []
        }
    }
    getData= ()=>{
        var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20'
        fetchJsonp(api).then(function (res) {
            return res.json()
        }).then((json)=>{
                this.setState({
                    list:json.result
                })

        }).catch(function (err) {
            console.log(err)
        })

    }
    render (){
        return (
            <div>
                <hr/>
                <h3>使用jsonp获取数据</h3>
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
export default FetchJsonp;