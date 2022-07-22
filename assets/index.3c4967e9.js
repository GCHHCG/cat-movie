import{s as i,a1 as n,r as e,j as t,d as o}from"./index.9d9ef0c2.js";import{C as l}from"./CSSTransition.0bba6707.js";import{P as p}from"./index.d7a6aa2c.js";import"./button.a664ff7b.js";const c=i.div`
    text-align: center;
    &.fly-enter,&.fly-appear {
        opacity: 0;
        /* 启用GPU加速 */
        transform: translate3d(100%, 0, 0);
    }
    &.fly-enter-active, &.fly-apply-active {
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit {
        opacity: 1;
        transform: translate3d(0,0,0)
    }
    &.fly-exit-active {
        opacity: 0;
        transition: all .3s;
        transform: translate3d(100%, 0, 0);
    }
`;function y(){const s=n(),[r,a]=e.exports.useState(!1);return e.exports.useEffect(()=>{a(!0),window.scrollTo(0,0)},[]),t(l,{in:r,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,onExit:()=>{s(-1)},children:o(c,{children:[t(p,{className:"site-page-header",onBack:()=>a(!1),subTitle:"\u8D5B\u4E8B\u8BE6\u60C5\u9875\u9762"}),t("img",{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6de2a9fb372d490ba42061305ad6a93a~tplv-k3u1fbpfcp-watermark.image?"})]})})}export{y as default};
