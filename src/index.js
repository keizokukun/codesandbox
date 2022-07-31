// var val1 = "var変数";

// console.log(val1);

// // varは再代入可能
// val1 = "var変数を上書き";
// console.log(val1);

// // varは再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // let変数は再代入可能
// val2 = "let変数に再代入";
// console.log(val2);

// // let変数は再宣言不可
// let val2 = "let変数を再宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// // const変数は再代入不可
// val3 = "const変数に再代入";
// console.log(val3);

// // const変数は再宣言不可
// const val3 = "const変数を再宣言";
// console.log(val3);

// constで定義したオブジェクトのプロパティは変更可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 33,
// }

// console.log(val4);

// val4.name = "aaaaaaa";
// val4.age = 22;
// val4.address = "fff";

// console.log(val4);

// // constで定義した配列は変更可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monky");
// console.log(val5);

// /**
//  * テンプレート文字列
//  */

//  const name = "じゃけぇ";
//  const age = 22;

// // 「わたしの名前はじゃけぇです。年齢は22歳です。」

// // 従来の方法
// const message1 = "「わたしの名前は"　+ name + "です。年齢は" + age + "です。」";
// console.log(message1);

// // テンプレート文字列を用いる方法
// const message2 = `「わたしの名前は${name}です。年齢は${age}です。」`;
// console.log(message2);

// /**
//  * アロー関数
//  */

// // 通常の関数
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"));
// //  アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(1,55));

// /**
//  * 分割代入
//  */

//  const myProfile = {
//    name: "じゃけぇ",
//    age: 22,
//  }

//  const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
//  console.log(message1);

// //  オブジェクトの分割代入
//  const { name, age } = myProfile;
//  const message2 = `名前は${name}です。年齢は${age}歳です。`;
//  console.log(message2);

// //  配列の分割代入
// const myProfile2 = ["じゃけぇ", 22];
// const [ name2, age2 ] = myProfile2;
// const message3 = `名前は${name2}です。年齢は${age2}歳です。`;
// console.log(message3);

// /**
//  * デフォルト値
//  */

//  const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// //  引数無しの場合=で設定した値が初期値になる
//  sayHello();

// /**
//  * スプレッド構文
//  */

// //  配列の展開
// const arr1 = [1, 2, 3];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// // 配列をまとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);

// // 配列の結合・コピー
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4, ...arr5];
// console.log(arr6);

// const arr7 = [...arr4];
// console.log(arr7);
// arr7[0] = 100000;
// console.log(arr4);
