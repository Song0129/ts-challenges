<h1>
Concat
<img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/>
<img src="https://img.shields.io/badge/-%23array-999" alt="#array"/>
</h1>

在类型系统里实现 JavaScript 内置的 `Array.concat` 方法，这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。

举例，

```ts
type Result = Concat<[1], [2]>; // expected to be [1, 2]
```
