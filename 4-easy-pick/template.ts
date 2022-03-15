// ts 联合类型 union  "title" | "completed"

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
// 3.todo[key]取值
// 4.看看key在不在todo里面
