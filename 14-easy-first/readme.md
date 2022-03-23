<h1>
第一个元素 easy-first
<img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/> 
<img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1>

实现一个通用`First<T>`，它接受一个数组`T`并返回它的第一个元素的类型。

例如：

```ts
type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];
type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
```
