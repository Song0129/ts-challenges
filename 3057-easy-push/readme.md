<h1>
Push
<img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/>
<img src="https://img.shields.io/badge/-%23array-999" alt="#array"/>
</h1>

在类型系统里实现通用的 `Array.push` 。

举例如下，

```typescript
type Result = Push<[1, 2], "3">; // [1, 2, '3']
```
