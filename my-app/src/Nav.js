import React from "react";
import  { Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";




export default function Nav(){
    return (
        <div>
            <Link to ="/">Home</Link>
            <Link to ="/test">Test</Link>
        </div>
    )
}