import { Component } from "solid-js";
import { Todo } from "../App";

export const TodoCell: Component<{todo: Todo}> = (props) => {
    const prevent = (e: MouseEvent) => {
        e.preventDefault()
    }
    return (
        <div onMouseMove={prevent} class="rounded-sm w-80 shadow-md border border-slate-200 py-4 px-3 grid grid-cols-[auto_1fr] gap-2 hover:cursor-grab active:cursor-grabbing">
            <input class="[grid-column:1] [grid-row:1/3]" type="checkbox"/>
            <p class="[grid-colimn:2] [grid-row:1] [line-height:13px] ">{props.todo.name}</p>
            <div class="[grid-colimn:2] [grid-row:2] flex flex-wrap gap-1">{
                props.todo.tags?.map((tag, index) => {
                    const color = tag == "Job" ? "bg-red-400" : "bg-blue-400"
                    return <span class={"rounded-[50px] font-semibold text-sm text-white py-[1px] px-2 " + color}>{tag}</span>
                })
            }</div>
        </div>
    )
}