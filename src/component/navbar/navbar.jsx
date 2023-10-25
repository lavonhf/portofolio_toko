import {  useState } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavBar(){
    const [display, setDisplay] = useState(0)

    function handleDisplay(){
        setDisplay(!display)
    }
    return<>
    <nav className={display ? "nav-show navbar" : "navbar"} onClick={handleDisplay}>
        <ul className="navbar-nav">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/menu">Menu</CustomLink>
            <CustomLink to="/about">About</CustomLink>
        </ul>
        <span/>
    </nav>
    </>
}

function CustomLink({ to, children, ...pops}){
   const resovlePath = useResolvedPath(to)
   const isActive = useMatch({path: resovlePath.pathname, end: true})
   

    return <li  onClick={e => e.stopPropagation()}>
        <Link className="nav-prop   " to={to} {...pops}>{children}</Link>
        {isActive ? <span className="span-nav"></span> : ""}
    </li>
}