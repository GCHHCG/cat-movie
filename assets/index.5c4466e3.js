import{s as h,j as e,L as f,d as s,_ as D,w as N,r,F as k,c as w,u as j,T as m}from"./index.9d9ef0c2.js";import{a as B}from"./actionCreators.b4321598.js";import{I as S,S as F}from"./index.07eb5d45.js";import"./button.a664ff7b.js";const T=h.div`
width: 3rem;
margin-top: .6rem;
padding:0.3rem;
span { 
    width:100%;
    /* padding: 0.2rem; */
    background-color:#dee1e6;
    border-radius:1.5rem;
    }
.citygps {
    position:relative;
    font-size: 0.6rem;
    color: #666;
    line-height: 0.6rem;
    i { 
        font-size: 0.6rem;
    }

}
`;function A({cityName:t=""}){return e(T,{children:e(f,{className:"citygps",to:"/cities",children:s("span",{children:[t||"\u57CE\u5E02",e("i",{className:"iconfont icon-xiangxia1"})]})})})}const C=h.div`
    width:18.75rem;
    margin:0 auto;
    padding-bottom: 3rem;
    header {
    position: relative;
    }
    .title {
    width:10rem;
    height:5rem;
    margin-top: 0.5rem;
    position: relative;
    left:0.5rem;
    }
    header .title-photo {
        display: flex;
        padding:.1rem;
        justify-content: center;
        overflow: hidden;
    }
    header .title-photo img {
        width:5.625rem;
        height:12rem;
    }
    .match {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .match img {
        margin :2rem auto;
    }
    .match .tab {
        margin-left:1.5rem;
    }
`,L=t=>e("div",{className:"event-list",children:t.eventslist.map(i=>{const{url:c,dec:n,id:a,price:p,text:d,pos:u}=i;return e(f,{to:`/eventdetail/${a}/moviedetail`,className:"nav-box",children:e("div",{children:s("div",{className:"list",children:[e(D,{placeholder:e("img",{width:"100%",height:"100%",src:N}),children:e("img",{src:c})}),s("span",{className:"desc",children:[e("p",{className:"text",children:d}),e("p",{className:"detail",children:n}),e("p",{className:"detail",children:u}),s("p",{className:"price",children:[e("span",{style:{background:"#fff2f1",color:"#fca48f"},children:"\u552E\u7968\u4E2D\uFF1A"}),p]})]})]})},a)},a)})}),P=({placeholder:t,onSetQuery:i})=>{const[c,n]=r.exports.useState(""),a=()=>{i(c)};return r.exports.useEffect(()=>{n(c)},[c]),e(k,{children:e("section",{className:"input-wrap",children:e(S,{className:"Input",onPressEnter:a,placeholder:t,value:c,onChange:p=>n(p.target.value)})})})};function I(t){const{TabPane:i}=m,[c,n]=r.exports.useState(""),[a,p]=r.exports.useState("\u5168\u90E8"),[d,u]=r.exports.useState(!0),[g,b]=r.exports.useState(""),[v]=j();let o=v.get("name")||"";o=="\u57CE\u5E02"&&(o=""),r.exports.useEffect(()=>{E({query:c,tab:a,cityName:o})},[a,c,o]);const{eventslist:l}=t,{getEventsDataDispatch:E,changeEventsListDispatch:K}=t,x=y=>{n(y)};return r.exports.useEffect(()=>{u(!0),b(`\u5728${a}\u5185\u641C\u7D22`)},[a]),r.exports.useEffect(()=>{u(!1)},[a,c,o]),s(C,{children:[s("header",{children:[e("img",{className:"title",src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad0b22b3dcb64a688522d03e79ceef7e~tplv-k3u1fbpfcp-watermark.image?"}),s("div",{className:"title-photo",children:[e("img",{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf829e67c48144f79bf8941028009994~tplv-k3u1fbpfcp-watermark.image?"}),e("img",{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/066ff0e907d24e51ad6687c8982694cc~tplv-k3u1fbpfcp-watermark.image?"}),e("img",{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b93c2a0840964aed907e35790c6e7461~tplv-k3u1fbpfcp-watermark.image?"})]})]}),e("h2",{className:"app-title",children:"\u70ED\u95E8\u8D5B\u4E8B"}),s("div",{className:"match",children:[s(m,{className:"tab",activeKey:a,tabBarGutter:40,onChange:p,children:[e(i,{tab:"\u5168\u90E8"},"\u5168\u90E8"),e(i,{tab:"\u7535\u7ADE\u8D5B\u4E8B"},"\u7535\u7ADE\u8D5B\u4E8B"),e(i,{tab:"\u4F53\u80B2\u8D5B\u4E8B"},"\u4F53\u80B2\u8D5B\u4E8B")]}),e(A,{cityName:o})]}),s("div",{className:"app-wrap",children:[e(P,{placeholder:g,onSetQuery:x}),e(F,{spinning:d,tip:"\u52A0\u8F7D\u4E2D~",children:(l==null?void 0:l.length)==0?s("div",{className:"nodata",children:[e("img",{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6de2a9fb372d490ba42061305ad6a93a~tplv-k3u1fbpfcp-watermark.image?"}),e("p",{style:{fontSize:"15px"},children:"\u6682\u65E0\u4EE3\u529E\u4E8B\u9879"})]}):e(L,{eventslist:l})})]})]})}const z=t=>({eventslist:t.Events.eventslist}),$=t=>({changeEventsListDispatch(i){},getEventsDataDispatch(i){t(B(i))}});var G=w(z,$)(I);export{G as default};
