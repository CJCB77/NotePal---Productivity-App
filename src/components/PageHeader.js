import React,{useState, useEffect} from "react"
import "../style.css"
import todo from "../imgs/todo-icon.svg"
import options from "../imgs/options.svg"

export function PageHeader(props) {
    return(
        <header className="header">
            <div className="header__title">
                <img src={todo} className="header--icon" />
                <h1>{props.title}</h1>
            </div>
            <img src={options} className="header--options" />

        </header>
    )
}