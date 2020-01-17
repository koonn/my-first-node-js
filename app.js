'use strict';
const number = process.argv[2] || 0; // コマンドライン引数の値が設定されていなければ0を使う
let sum = 0;
for (let i = 1; i <= number; i++) {
	  sum = sum + i;
}
console.log(sum);
