// type First<T extends any[]> = T extends [] ? never : T[0];
type First<T extends any[]> = T[0];

let tuple = ["3", "2", "1"];

type r = First<typeof tuple>;

// js
const first = arr => {
	// arr 是不是一个空数组 如果是的话 那么返回 never
	return arr[0];
};
