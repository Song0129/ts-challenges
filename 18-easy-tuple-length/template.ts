type Length<T extends readonly unknown[]> = T["length"];

// js

function getLength(arr) {
	if (!Array.isArray(arr)) return;
	return arr.length;
}

// 知识点：
// 什么是 tuple 类型
// tuple和普通的数组有什么区别
