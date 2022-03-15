// ts 联合类型 union  "title" | "completed"

// title
// 循环
// [title,completed]
// [title,completed,description]
// 上下一一对比
type MyPick<T, K extends keyof T> = {
	[P in K]: T[P];
};

// js=》ts
// 对比学习法

function muPick(todo, keys) {
	let obj = {};
	keys.forEach(key => {
		if (key in todo) {
			obj[key] = todo[key];
		}
	});
	return obj;
}

// 1.返回一个对象
// 2.遍历foreach   ts遍历的是union    "title" | "completed"  mapped
// -https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// 3.todo[key]取值  indexed
// -https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// 4.看看key在不在todo里面
//    1.keyof lookup
//      -https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types
//    2.extends 在<>内表示约束
//      -https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
