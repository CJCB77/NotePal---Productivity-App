import React,{useState, useEffect} from "react"
import "../style.css"
import todo from "../imgs/todo-icon.svg"
import options from "../imgs/options.svg"

export function PageHeader() {
    return(
        <header className="header">
            <div className="header__title">
                <img src={todo} className="header--icon" />
                <h1>My To-Do-List</h1>
            </div>
            <img src={options} className="header--options" />

        </header>
    )
}