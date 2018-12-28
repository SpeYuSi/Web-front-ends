### React组件生命周期
![reactLifeCycle](./reactLifeCycle.jpg)

#### 组件加载时
- constructor() -- 组件构造函数
- componentWillMount() -- 组件渲染前调用
- render() -- 组件渲染
- componentDidMount() -- 组件渲染完毕,一般Dom操作和数据请求放这

#### 组件数据更新时
- shouldComponentUpdate(nextProps, nextState) -- 组件更新前，返回true更新
  - nextProps 父子组件通信数据改变后的值
  - nextState 组件state改变后的值
- render() -- 组件渲染
- componentDidUpdate() -- 组件更新后，

#### 组件销毁时
- componentWillUnmount() -- 组件销毁前，多用于保存数据