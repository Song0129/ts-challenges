<h1>实现 Pick easy-pick
<img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/> 
<img src="https://img.shields.io/badge/-%23union-999" alt="#union"/> 
<img src="https://img.shields.io/badge/-%23built--in-999" alt="#built-in"/>
</h1>

实现 TS 内置的 `Pick<T, K>`，但不可以使用它。

**从类型 `T` 中选择出属性 `K`，构造成一个新的类型**。

例如：

```ts
interface Todo {
	title: string;
	description: string;
	completed: boolean;
}
type TodoPreview = MyPick<Todo, "title" | "completed">;
const todo: TodoPreview = {
	title: "Clean room",
	completed: false,
};
```
