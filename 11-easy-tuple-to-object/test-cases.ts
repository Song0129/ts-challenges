import { Equal, Expect } from "@type-challenges/utils";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type cases = [Expect<Equal<TupleToObject<typeof tuple>, { tesla: "tesla"; "model 3": "model 3"; "model X": "model X"; "model Y": "model Y" }>>];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;

// const let  js世界
// type interface type世界

// 1.typeof
// const tupleA = ["a", "b", "c"] as const;
// type r = typeof tupleA;

// 2.字面量类型
// let str = "123";
// type s = typeof str;

// str = "111";

// const strConst = "456";
// type sc = typeof strConst;

// strConst = "222";

// 3. @ts-expect-error 注释
// 等价于下面
// expect(() => {
// 	type error = TupleToObject<[[1, 2], {}]>;
// });
