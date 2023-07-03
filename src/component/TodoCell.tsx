import { Component, createEffect } from "solid-js";
import { Todo } from "../App";
type Offset = {
    x: number,
    y: number
}
export const TodoCell: Component<{todo: Todo}> = (props) => {
    let cell: HTMLDivElement | undefined
    let parent: HTMLElement | null
    let clone: Node
    let mouseDownPoint: Offset | undefined 

    createEffect(() => {
        if (cell) {
            parent = cell.parentElement
        }
    })

    const prevent = (e: MouseEvent) => {
        e.preventDefault()
    }
    const onMouseDown = (e: MouseEvent) => {
        window.addEventListener("mousemove", onMouseMove)
        window.addEventListener("mouseup", onMouseUp)
        mouseDownPoint = {x: e.clientX, y: e.clientY}
        console.log("clientx : ",e.clientX)
        console.log("pageX : ",e.pageX)
        console.log("offsetX : ",e.offsetX)
        if (cell) {
            clone = cell.cloneNode(true)
            parent?.appendChild(clone)
            cell.style.position = "absolute"
            cell.style.zIndex = "15"
            cell.style.opacity = "0.5"
        }
    }
    const onMouseMove = (e: MouseEvent) => {
        e.preventDefault()
        const offsetX = e.clientX - (mouseDownPoint?.x ?? 0)
        const offsetY = e.clientY - (mouseDownPoint?.y ?? 0)
        if (cell) {
            cell.style.transform = `translate(${offsetX}px,${offsetY}px)`
        }
    }
    const onMouseUp = (e: MouseEvent) => {
        window.removeEventListener("mousemove", onMouseMove)
        if (cell) {
            parent?.removeChild(clone)
            cell.style.position = "relative"
            cell.style.transform = `translate(0px,0px)`
            cell.style.zIndex = "1"
            cell.style.opacity = "1"
        }
    }
    return (
        <div ref={cell} onMouseDown={onMouseDown} onMouseMove={prevent} class="backdrop-blur-sm rounded-sm w-80 shadow-md border border-slate-200 py-4 px-3 grid grid-cols-[auto_1fr] gap-2 hover:cursor-grab active:cursor-grabbing">
            <input onMouseDown={(e: MouseEvent) => {e.stopPropagation()}} class="[grid-column:1] [grid-row:1/3]" type="checkbox"/>
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