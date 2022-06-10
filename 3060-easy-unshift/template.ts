type Unshift<T extends unknown[], U> = [U, ...T];

// js

function Unshift(T, U) {
	return [U, ...T];
}
