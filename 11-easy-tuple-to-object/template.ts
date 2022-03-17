type TupleToObject<T extends readonly (string | number | symbol)[]> = {
	[P in T[number]]: P;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

// keyof array -> 索引
type r = TupleToObject<typeof tuple>;

// js
function TupleToObject(array) {
	// 1.首先判断array中的key是不是string类型、number类型、symbol类型
	// 都不是 直接error
	const obj = {};
	array.forEach(val => {
		obj[val] = val;
	});
	return obj;
}

// 1. 返回一个对象
// 2. 遍历array T[number]
