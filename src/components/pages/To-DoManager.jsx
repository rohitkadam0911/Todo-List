import { FiDelete, FiEdit, FiCheck, FiX } from "react-icons/fi";
import React, { useState } from "react";

function TodoManager() {
    const [value, setValue] = useState("");
    const [todos, setTodos] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    const addTodo = () => {
        if (value.trim() === "") return;
        setTodos([...todos, value]);
        setValue("");
    }

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    }

    const startEdit = (index) => {
        setEditingIndex(index);
        setEditValue(todos[index]);
    }

    const saveEdit = () => {
        if (editValue.trim() === "") return;
        const newTodos = [...todos];
        newTodos[editingIndex] = editValue;
        setTodos(newTodos);
        setEditingIndex(null);
    }

    const cancelEdit = () => {
        setEditingIndex(null);
    }

    return (
        <>
            <div className="text-center mt-20 sm:w-90 h-126 m-auto">
                <h2>TO DO LIST</h2>
                <div className="flex justify-between items-center gap-3 mt-5">
                    <input
                        type="text"
                        className="border-1 p-2 rounded-md w-full"
                        value={value}
                        placeholder="add items..."
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button
                        className="cursor-pointer border-1 p-2 rounded-md bg-gray-700 text-white"
                        onClick={addTodo}
                    >
                        Add
                    </button>
                </div>

                <ul className="mt-2">
                    {todos.map((todo, index) => (
                        <li key={index} className="flex justify-between items-center mb-3 border bg-gray-200 px-2">
                            {editingIndex === index ? (
                                <>
                                    <input
                                        autoFocus
                                        className="border-1 p-1 rounded-md w-full mr-2"
                                        value={editValue}
                                        onChange={(e) => setEditValue(e.target.value)}
                                    />
                                    <button className="p-2 bg-green-500 my-2 text-white mr-1" onClick={saveEdit}>
                                        <FiCheck />
                                    </button>
                                    <button className="p-2 bg-gray-500 my-2 text-white" onClick={cancelEdit}>
                                        <FiX />
                                    </button>
                                </>
                            ) : (
                                <>
                                    {todo}
                                    <div className="flex">
                                        <button className="p-2 bg-blue-500 my-2 text-white mr-1" onClick={() => startEdit(index)}>
                                            <FiEdit />
                                        </button>
                                        <button className="p-2 bg-red-500 my-2 text-white" onClick={() => deleteTodo(index)}>
                                            <FiDelete />
                                        </button>
                                    </div>
                                </> 
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TodoManager;