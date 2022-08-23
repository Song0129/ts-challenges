type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer X) => any
	? X
	: never;

// 知识点
// 1. infer
// 参考资料：https://github.com/Microsoft/Typescript/pull/24897
