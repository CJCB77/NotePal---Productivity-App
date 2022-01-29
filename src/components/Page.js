import React,{useState, useEffect} from "react"
import "../style.css"
import { PageHeader } from "./PageHeader"
import ToDo from "./ToDo"

export default function Page(props) {
    return(
        <React.Fragment>
            <PageHeader />
            <ToDo todoList={props.user.todo} />
        </React.Fragment>
    )
}