type First<T extends any[]> = T extends [] ? never : T[0];

let tuple = ["3", "2", "1"];

type r = First<typeof tuple>;
