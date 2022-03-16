type MyReadonly<T> = {
	readonly [P in keyof T]: T[P];
};

// interface Todo {
// 	a: String;
// 	b: String;
// }

// type r = keyof Todo; // ["a","b"]

// const rv : r = "a"

// interface User {
// 	readonly name: String;
// }

// const xiaohong: User = {
// 	name: "xiaohong",
// };

// // 修改属性
// // 属性增加readonly限制后，修改时报错
// xiaohong.name = "123";

// js

function readonly(obj) {
	const result = {};

	for (const key in obj) {
		result["readonly" + key] = obj[key];
	}
	return result;
}

// 1.返回一个对象
// 2.遍历 obj (js 对象  ts 接口)
//    in -> mapped   keyof -> lookup
// 3.加上 readonly 关键字   新的知识点
//
// 4.通过 key 获取 obj(接口) 里面的值 indexed
//
