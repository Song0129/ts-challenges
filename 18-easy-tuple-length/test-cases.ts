import { Equal, Expect } from "@type-challenges/utils";

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
const spaceX = ["FALCON 9", "FALCON HEAVY", "DRAGON", "STARSHIP", "HUMAN SPACEFLIGHT"] as const;

type cases = [
	Expect<Equal<Length<typeof tesla>, 4>>,
	Expect<Equal<Length<typeof spaceX>, 5>>,
	// @ts-expect-error
	Length<5>,
	// @ts-expect-error
	Length<"hello world">
];

// tuple和js数组区别

type StringNumberPair = [string, number];

type t2 = StringNumberPair["length"]; // 2 tuple长度是固定

type stringArr = string[];

type t3 = stringArr["length"]; // number 数据长度不固定
