import { Component, createSignal } from 'solid-js';

import logo from './assets/images.jpeg';
import cover from "./assets/cover.jpg"
import BaseWidth from './component/BaseWidth';
import { TodoController } from './component/TodoController';
export type Todo = {
  name: string,
  status: StatusAlias,
  tags?: ("Job" | "private" | undefined)[]
}
type StatusAlias = "ALL" | "WIP" | "TODO"
export type Status =  {status: StatusAlias, name: string}

export const status: Status[] = [
  {status: "TODO", name: "未着手"},
  {status: "WIP", name: "進行中"},
  {status: "ALL", name: "全て"}
]

export const [todos, setTodos] = createSignal<Todo[]>([
  {
    name: "仕事のメールを返信する",
    status: "TODO",
    tags: ["Job"]
  },
  {
    name: "仕事のメールを返信する",
    status: "TODO",
    tags: ["Job"]
  },
  {
    name: "仕事のメールを返信する",
    status: "WIP",
    tags: ["Job"]
  },
  {
    name: "仕事のメールを返信する",
    status: "TODO",
    tags: ["private"]
  },
])

const App: Component = () => {
  return (
    <div class={"w-full min-h-screen flex flex-col"}>
      <header class={"relative w-full h-64 flex justify-center items-center"}>
        <img src={cover} class={"max-h-full w-full object-cover"} alt="logo" />
        <div class='absolute flex justify-start bottom-0 translate-y-[50%] w-full mx-0'>
          <BaseWidth>
            <img src={logo} class=" bg-white w-24 h-24 md:w-40 md:h-40 rounded-[50%] border border-white object-cover"/>
          </BaseWidth>
        </div>
      </header>
      <main class='w-full flex-1 mt-16 md:mt-24'>
        <BaseWidth>
          <h1 class="font-bold text-2xl md:text-4xl">My task</h1>
          <article class="overflow-x-scroll my-12">
            <TodoController />
          </article>
        </BaseWidth>
      </main>
    </div>
  );
};

export default App;
