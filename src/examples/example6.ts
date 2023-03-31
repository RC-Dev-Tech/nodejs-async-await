import { IExample } from "../core/base";

/* 
  Async/Await 搭配Promise.all()使用.
  有一種情境是當你需要拿方法A跟方法B的資料去做計算.
  卻不知道哪一個方法會先取得資料.
  這時候就可以使用下面的方式，讓兩筆資料都取得之後，才執行計算.
*/
export class Example6 extends IExample {

    funcA() {
      return new Promise((resolve, reject) => {
         // 5秒後FuncA被執行.
         setTimeout(() => {
            console.log(`執行FunctionA.`);
            resolve(`run funcA resolve done.`);
         }, 5000);
      });
    }

    funcB() {
      return new Promise((resolve, reject) => {
         // 2秒後FuncB被執行.
         setTimeout(() => {
            console.log(`執行FunctionB.`);
            resolve(`run funcB resolve done.`);
         }, 2000);
      });
    }

   async runExample() {
     try {
         const funcA_info = this.funcA();
         const funcB_info = this.funcB();

         // 同步發出非同步請求，並等到成功獲得兩筆回傳後，才印出結果.
         const [info_a, info_b] = await Promise.all([funcA_info, funcB_info])
         console.log(info_a, info_b);

         console.log("example run done.");
     } catch (error) {
        console.log(error);
     }
   }

   run() {
       this.runExample();
    }
}