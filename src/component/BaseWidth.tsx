import { Accessor, Component, ComponentProps, JSX, children } from "solid-js";

export default function BaseWidth(props: { children: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) {
    return <div class="w-full flex justify-center">
        <div class="max-w-4xl w-full px-12">
            {props.children}
        </div>
    </div>
}