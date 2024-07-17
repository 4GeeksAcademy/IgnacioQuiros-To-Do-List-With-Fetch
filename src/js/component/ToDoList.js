import React, { useState } from "react";
import NewTask from "./NewTask";

const ToDoList = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && todo !== "") {
            addToList();
        }
        else if(e.key === "Enter" && todo === "")
        {
            alert("Write something in the input field first");
            return;
        }
    };

    const addToList = () => {
        if (todo === "") {
            alert("Write something in the input field first");
            return;
        }
        setTodoList([...todoList, todo]);
        setTodo("");
    };

    const eraseTask = (index) => {
        setTodoList(todoList.filter((_, i) => i !== index));
    };

    return (
        <div className="mx-2 mb-5">
            <div className="text-center container mt-5 border border-5 border-dark rounded-4"
                style={{ backgroundColor: "#E5B762" }}>
                <div className="mb-3 mt-4 justify-content-center pb-4">
                    <label htmlFor="exampleInputEmail" className="form-label fs-1">My personal List</label>
                    <div className="row-flex">
                        <hr className="container col-8 col-sm-6 col-md-5" />
                        <hr className="container col-8 col-sm-6 col-md-5 mb-4" />
                    </div>
                    <div className="p-4 rounded-2 mx-0 mx-sm-4 pb-5" style={{
                        backgroundColor: "#F7F3CB",
                        position: "relative", zIndex: 2
                    }}>
                        <div>
                            <input type="text" className="form-control fs-3" id="exampleInputEmail" placeholder="What should I do?"
                                value={todo} onChange={(e) => setTodo(e.target.value)} onKeyDown={handleKeyDown} maxLength="40"
                            />
                            <button className="btn btn-success ms-2 mt-2 px-4" onClick={() => { addToList(); }}>Enter</button>
                            <button className="btn btn-danger ms-2 mt-2 px-4" onClick={() => { setTodo(""); }}>Clear</button>
                        </div>
                        {todoList.map((item, index) => (
                            <NewTask key={index} description={item} index={index + 1} eraseTask={() => eraseTask(index)} />
                        ))}
                        <p className="pt-5">Tasks left: {(todoList.length === 0) ?  "There are no more tasks" : todoList.length + 0}</p>
                    </div>

                    <div className="mx-1">
                        <div className="p-3 rounded-2 mx-0 mx-sm-4" style={{
                            backgroundColor: "#E7E2B8", marginTop: "-26px",
                            position: "relative", zIndex: 1
                        }}></div>
                        <div className="mx-1">
                            <div className="p-3 rounded-2 mx-0 mx-sm-4" style={{
                                backgroundColor: "#D3CEA2", marginTop: "-26px",
                                position: "relative", zIndex: 0
                            }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDoList;