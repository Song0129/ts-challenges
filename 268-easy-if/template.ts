type If<C extends boolean, T, F> = C extends true ? T : F;

//  js

function If(C, T, F) {
	return C ? T : F;
}

// 知识点
// 类型兼容性  |  分配原则
// null 严格模式与非严格模式的区别
// https://www.typescriptlang.org/docs/handbook/type-compatibility.html
