import React,{useState, useEffect} from "react"
import "../style.css"




export default function ToDo(props) {
    
    function ListItem(props) {
        return(
            <div className="todo__list--item">
                <input type="checkbox" id={`${props.id}`} checked={props.completed} onChange={handleChangeCheck} name="completed"/>
                <label className={props.completed ? "crossed" : ""} htmlFor={`item${props.id}`}>{props.title}</label>
            </div>
        )
    }

    const[todoItems,setTodoItems] = useState(props.todoList)
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

    const uncompletedItems = 
        todoItems.filter((item) => !item.completed)
            .map((item) => {
            return(
                <ListItem key={item.id} {...item} />
            )
            })

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