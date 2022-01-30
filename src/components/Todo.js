import React,{useState, useEffect} from "react"
import "../style.css"
import trash from "../imgs/trashcan.svg"




export default function ToDo() {
    
    function ListItem(props) {
        return(
            <div className="todo__list--item">
                <input type="checkbox" id={`${props.id}`} checked={props.completed} onChange={handleChangeCheck} name="completed"/>
                <label className={props.completed ? "crossed" : ""} htmlFor={`item${props.id}`}>{props.title}</label>
                <img className="trashcan" src={trash} alt="" onClick={handleRemove} id={`${props.id}`} />
            </div>
        )
    } 

    // let myItems = []
    // const myItemsLocalStorage = JSON.parse(localStorage.getItem("myLocalList"))

    // if (myItemsLocalStorage){
    //     myItems = myItemsLocalStorage
    // }
    

    const[todoItems,setTodoItems] = useState(JSON.parse(localStorage.getItem("myLocalList")) || [])
    const[inputItem, setInputItem] =useState("")



    function handleSubmit(event) {
        event.preventDefault()
        const newItem = {id:(todoItems.length + 1), title:inputItem, completed:false}
        setTodoItems((prevItems) => {
            return (
                [...prevItems, newItem]
            )
        })
        setInputItem("")
    }

    useEffect(() => {
        localStorage.setItem("myLocalList", JSON.stringify(todoItems))

    }, [todoItems]) 

    


    function handleChangeCheck(event) {
        const{checked,id} = event.target
        setTodoItems((prevItems) => {
            return(
                prevItems.map((item) => item.id == id ? {...item,completed:checked} : item)
            )
        })  
    }

    function handleChange(event) {
        setInputItem(() => event.target.value)
    }

    function handleRemove(event) {
        //Get item with the same id as our trash btn
        //Get the index of that element in our array
        //Remove it from array with splice
        const {id} = event.target
        setTodoItems((prevItems) => prevItems.filter((item) => item.id != id ) )
    }

    const uncompletedItems = 
        todoItems.filter((item) => !item.completed)
            .map((item) => {
            return(
                <ListItem key={item.id} {...item} />
            )
            })


            
    //This does not return a list with the last checked item at the top        
    const completedItems = 
        todoItems.filter((item) => item.completed)
            .map((item) => {
            return(
                <ListItem key={item.id} {...item} />
            )
            })


    return(
       <div className="todo">
            <form className="todo__form" onSubmit={handleSubmit}>
                <input type="text" name="item" value={inputItem} onChange={handleChange} placeholder="Add item to list..." autoComplete="off"/>
                <button>+</button>
            </form>
            <main className="todo__list">
                {uncompletedItems}

            </main>
            <footer className="todo__completed">
                <div></div>
                <h3>Completed</h3>
                <hr />
                <div className="todo__list">
                    {completedItems}
                </div>
            </footer>
       </div>
    )
}