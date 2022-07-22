import{s as a,c as n,r as c,j as i,L as o}from"./index.9d9ef0c2.js";import{g as l}from"./actionCreators.b4321598.js";const m=a.div`
    .city_name{
        display: block;
        width: 100%;
        height: 2.5rem;
        text-align: center;
        color: #666;
        border-bottom: 1px solid rgb(206, 204, 204);
        font-size: 0.7rem;
        line-height: 2.5rem;
        text-indent: 0.5rem;
        
    }
`;function d(t){const{getCitiesDataDispatch:s}=t;return c.exports.useEffect(()=>{s()},[]),i(m,{children:(()=>(console.log(t,"///"),t.citieslist.map(({id:r,nm:e})=>i(o,{className:"city_name",to:{pathname:"/events",search:`name=${e}`},children:e},r))))()})}const p=t=>({citieslist:t.Events.citieslist}),h=t=>({getCitiesDataDispatch(){t(l())}});var x=n(p,h)(d);export{x as default};
