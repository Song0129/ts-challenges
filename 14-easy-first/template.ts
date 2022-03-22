// type First<T extends any[]> = T extends [] ? never : T[0];
type First<T extends any[]> = T["length"] extends 0 ? never : T[0];

let tuple = ["3", "2", "1"];

type r = First<typeof tuple>;

// js
const first = arr => {
	// arr 是不是一个空数组 如果是的话 那么返回 never
	if (arr.length === 0) return "never";
	return arr[0];
};

// 知识点：
// 1. extends 类型判断
// 2. 获取 tuple 的 length 属性
// 3. extends union 判断的规则
// 4. inter 的使用
