type MyExclude<T, U> = T extends U ? never : T;

// jS

// ["a","b","c"]
// ["a"]

function MyExclude(T, U) {
	const result = [];
	for (let i = 0; i < T.length; i++) {
		const t = T[i];
		let boo = false;
		// for (let j = 0; j < U.length; j++) {
		// 	const u = U[j];
		// 	if (t === u) {
		// 		boo = true;
		// 	}
		// }
		// if (!boo) {
		// 	result.push(t);
		// }
		if (!U.includes(t)) {
			result.push(t);
		}
	}
	return result;
}
