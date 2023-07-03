import { Component, For, JSX } from "solid-js";
import { Status, setTodos, todos } from "../App";
import { TodoCell } from "./TodoCell";

export const TodoColumn: Component<{status: Status}> = (props) => {
    const addTodo = () => {
        setTodos((prev) => {return prev.concat([{name: "", status: props.status.status}])})
    }
    return <>
        <h3 class="text-base font-semibold">{props.status.name}</h3>
        <ul class="flex flex-col gap-2 mt-4">
            <For each={todos().filter((todo) => (todo.status == props.status.status || props.status.status == "ALL"))}>
                {(todo, index) => {
                    return <li><TodoCell todo={todo}/></li>
                }}
            </For>
        </ul>
        <p onClick={addTodo} class="text-sm text-neutral-400 mt-4 cursor-pointer hover:opacity-60">+ 新規</p>
    </>
}