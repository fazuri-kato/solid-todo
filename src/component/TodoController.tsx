import { For } from "solid-js"
import { status, todos } from "../App"
import { TodoColumn } from "./TodoColumn"

export const TodoController = () => {
    return (
        <ul class="flex gap-4 pb-8">
            <For each={status}>
                {(props, index) => {
                    return <li>
                        <TodoColumn status={props} />
                    </li>
                }}
            </For>
        </ul>
    )
}