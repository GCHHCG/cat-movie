import{s as t}from"./index.9d9ef0c2.js";const r=t.div`
    top: 0;
    left:0;
    right:0;
    width: 100%;
    height:auto;
    z-index: 100;
    overflow: hidden;
    background: #fff;
    transform-origin: right bottom;
    /* CSSTranstion 过度类型给children  */
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
    .nav_wrap{
        width: 100%;
        height: 3.2rem;
        position: fixed;
        z-index: 999;
        nav {
            background-color: red!important;
            justify-content: space-between;
            display: flex;
            padding: 0.22rem 0;
            height: 1.88rem;
            width: 100%;
            .navbar-back:after {
                content: "";
                position: absolute;
                width: .6rem;
                height: .6rem;
                top: 25%;
                left: .8rem;
                transform: rotate(45deg) translateY(-50%);
                border: 2px solid #fff;
                border-width: 0 0 2px 2px;
            }
            .navbar-title {
                color: #fff;
                font-size: .8rem;
                font-weight: 500;
                line-height: 2;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .navbar-btn {
               position: relative;
                left: -0.5rem;
                margin-top: .16rem;
                .nav-icon {
                    width: 0.84rem;
                    height: 0.82rem;
                }
            }
        }
    }
    .sum {
        width: 88%;
        margin:1rem;
        height: 1.8rem;
        line-height: 1.8rem;
        bottom:1.5rem;
        /* position: fixed; */
        font-size: .7rem;
        text-align: center;
        color:#fff;
        background-color: red;
        position: absolute;
        opacity:.8;
        border:1px solid transparent;
    }
`;export{r as C};
