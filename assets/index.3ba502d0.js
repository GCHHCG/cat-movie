import{c as p,R as v,r as d,a1 as f,j as e,d as s,_ as g,w as N,al as F}from"./index.9d9ef0c2.js";import{C as x}from"./style.aba8b666.js";import{C}from"./CSSTransition.0bba6707.js";function w(n){const{movieslist:c,price:r}=n,{changemovienumDispatch:i}=n,[m,l]=d.exports.useState(!1),u=f(),o=(a,t,h)=>{a.preventDefault(),a.stopPropagation(),i({status:t,id:h})};return d.exports.useEffect(()=>{l(!0)},[]),e(C,{in:m,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,onExit:()=>{u("/home")},children:s(x,{children:[e("div",{className:"nav_wrap",children:s("nav",{children:[e("span",{className:"navbar-back",onClick:()=>l(!1)}),e("div",{className:"navbar-title",children:"\u8D2D\u7968\u4FE1\u606F"}),e("div",{className:"navbar-btn",children:e("img",{className:"nav-icon",src:"https://p0.meituan.net/scarlett/f05f61e7a8f3f45fd071c068d7a26870356.png"})})]})}),e("div",{className:"event-list",style:{paddingTop:"1.5rem"},children:c.map(a=>a.count!==0&&e("div",{style:{margin:"1rem 1rem 0rem"},children:s("div",{className:"list",children:[e(g,{placeholder:e("img",{width:"100%",height:"100%",src:N}),children:e("img",{src:a.url,style:{width:"5rem",height:"6rem"}})}),e("div",{className:"list",children:s("div",{className:"desc",children:[e("p",{className:"text",children:a.title}),s("p",{className:"detail",children:["\u89C2\u4F17\u8BC4\u5206\uFF1A",e("span",{style:{color:"#faa40f",fontWeight:"600"},children:a.pinfen})]}),e("p",{className:"detail",children:a.des}),s("div",{className:"cart",children:[s("p",{style:{color:"red"},children:["\uFFE5 ",(a.count*1*a.price).toFixed(2)]}),s("span",{className:"cart-price",children:[e("span",{className:"reducer",children:e("i",{className:"iconfont icon-24gl-minus",onClick:t=>o(t,"reduce",a.id)})}),e("span",{style:{marginLeft:".6rem",marginRight:".6rem"},children:a.count}),e("span",{className:"add",children:e("i",{className:"iconfont icon-24gl-plus",onClick:t=>o(t,"add",a.id)})})]})]})]})})]})},a.id))}),r!=0&&s("span",{className:"sum",children:[" \u603B\u8BA1\uFF1A",r.toFixed(2)]})]})})}const y=n=>{let c=n.Home.movieslist.reduce((r,i)=>r+(i.check?parseFloat(i.price*i.count):0),0);return{movieslist:n.Home.movieslist,price:c}},D=n=>({changemovienumDispatch(c){n(F(c))},getmoviesDispatch(){n(getmovies())}});var T=p(y,D)(v.memo(w));export{T as default};
