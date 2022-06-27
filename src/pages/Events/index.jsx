import React, {useState, useEffect} from 'react'
import CitySelect from './CitySelect'
import { useSearchParams } from 'react-router-dom'
import {fetchTodos} from '@/utils/api'
import 'antd/dist/antd.css' // UI 框架的样式
import {Spin, Tabs} from 'antd'
import { Wrapper } from './style'
import TodoList from '@/components/Todos/TodoList'
import TodoInput from '@/components/Todos/TodoInput'
export default function Events() {
  const {TabPane} = Tabs
  const [todos,setTodos] = useState([])
  const [query, setQuery] = useState('')
  const [activeKey ,setActiveKey] = useState("全部")
  const [loading,setLoading] = useState(true)
  const [placeholder, setPlaceholder] = useState('');
  const [search] = useSearchParams()
  // console.log('我是search',search)
  let cityName = search.get('name')|| ''
  if(cityName=='城市') {
    cityName = ''
  }
  // console.log(cityName)
  const onSetQuery = (query) => {
    setQuery(query)
  }
  useEffect(() => {
    // 该做的onload 
    setLoading(true);
    setPlaceholder(`在${activeKey}内搜索`)
  },[activeKey])
  useEffect( () => {
    //useEffect 不只是做生命周期的onload
    // 做更新
    setLoading(true);
    setTodos([1])
    fetchTodos({query, tab: activeKey,cityName})
    .then(data => {
      setTodos([...data.result])
      setLoading(false)
    })
    // console.log('更新')

  },[activeKey, query,cityName])
  
    return (
      <Wrapper>
        <header>
          <img className = "title" src = "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad0b22b3dcb64a688522d03e79ceef7e~tplv-k3u1fbpfcp-watermark.image?"></img>
          <div className='title-photo'>
            <img src = "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf829e67c48144f79bf8941028009994~tplv-k3u1fbpfcp-watermark.image?"></img>
            <img src = "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/066ff0e907d24e51ad6687c8982694cc~tplv-k3u1fbpfcp-watermark.image?"></img>
            <img src = "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b93c2a0840964aed907e35790c6e7461~tplv-k3u1fbpfcp-watermark.image?"></img>
          </div>
        </header>
        <h2 className='app-title'>热门赛事</h2>
        <div className='match'>
          <Tabs activeKey= {activeKey}  onChange = {setActiveKey}
            >
            <TabPane tab = "全部" key = "全部">
            </TabPane>
            <TabPane tab = "电竞赛事" key = "电竞赛事">
            </TabPane>
            <TabPane tab = "体育赛事" key = "体育赛事"/>
          </Tabs>
          <CitySelect cityName={cityName}/>
        </div>
        <div className='app-wrap'>
          <TodoInput placeholder={placeholder} onSetQuery = {onSetQuery}/>
        <Spin spinning = {loading} tip ="加载中~">
         { todos.length== 0 ?
         <div className='nodata'>
          <img src='https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6de2a9fb372d490ba42061305ad6a93a~tplv-k3u1fbpfcp-watermark.image?'></img>
          <p style={{fontSize:'15px'}}>暂无代办事项</p> 
         </div>:
         <TodoList todos = {todos}  />
         }
        </Spin>
        </div>
      </Wrapper>
    )
}
