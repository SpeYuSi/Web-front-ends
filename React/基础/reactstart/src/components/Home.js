import React from 'react';
import img1 from '../assets/images/2.png';
//新建组件并继承Component
class Home extends React.Component {
    //props用于父子组件通信
    constructor(props){
        //子类没有自己的this对象，需要调用super来使用父类的this
        super(props);
        //自定义数据
        this.state = {
            name : 'Trolife',
            color :'red',
            style:{
                color:'green',
                fontSize:'40px'
            },
            list: ['数组循环1','数组循环1','数组循环1','数组循环1'],
            list2: [<h2 key={'1'}>数组循环2</h2>,<h2 key={'2'}>数组循环2</h2>,<h2 key={'3'}>数组循环2</h2>,<h2 key={'4'}>数组循环2</h2>],
            list3: [{title:"数组循环3"},
                {title:"数组循环3"},
                {title:"数组循环3"},
                {title:"数组循环3"}]


        }
    }
    //jsx语法
    render() {
        //将普通数组转换成标签数组
        let listResult = this.state.list.map(function (value,key) {
            return <h3 key={key}>{value}</h3>
        })

        //class需要替换成className
        return (
            <div className="Home">
                <p>组件里的节点都必须被根节点包住</p>
                <hr/>
                <p className={this.state.color}>{this.state.name}</p>
                <hr/>
                <div style={{color:'red'}}>行内样式1</div>
                <div style={this.state.style}>行内样式2</div>
                <hr/>
                <label htmlFor="name">绑定label和input时使用htmlFor</label>
                <input type="text" id="name"/>
                <hr/>
                <div>
                    <p>本地图片使用import img1 from '../assets/images/2.png'</p>
                    <img src={img1} alt=""/>
                    <p>本地图片使用 require('../assets/images/2.png'</p>
                    <img src={require('../assets/images/2.png')} alt=""/>
                    <p>远程图片 https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2540924496.webp</p>
                    <img src='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2540924496.webp' alt=""/>
                </div>
                {listResult}
                <hr/>
                {this.state.list2}
                <hr/>
                {
                    this.state.list3.map(function (value,key) {
                        return (<h4 key={key}>{value.title}</h4>)
                    })
                }


            </div>
        );
    }
}

export default Home;
