import ReactDOM from "react-dom"
import React,{useState, useEffect} from "react"
import "./style.css"
import Sidebar from "./components/Sidebar"
import Page from "./components/Page"
import todoList from "./listItems"

function App () {

    const[userData, setUserData] = useState({
            name: "Johnny",
            todo: todoList,
    })

    return(
        <main className="content">
            <Sidebar user={userData}/>
            <Page user={userData}/>
        </main>

    )
}

ReactDOM.render(<App />, document.getElementById("root"))