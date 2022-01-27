import ReactDOM from "react-dom"
import React,{useState, useEffect} from "react"
import "./style.css"
import Sidebar from "./components/Sidebar"
import Page from "./components/Page"

function App () {

    const[userData, setUserData] = useState({
            name: "Johnny"
    })

    return(
        <main className="content">
            <Sidebar user={userData}/>
            <Page />
        </main>

    )
}

ReactDOM.render(<App />, document.getElementById("root"))