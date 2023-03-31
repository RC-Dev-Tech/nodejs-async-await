import { IExample } from "../core/base";

/* 
  Async/Await非同步的基本實作.
*/
export class Example4 extends IExample {

    funcA() {
      return new Promise((resolve, reject) => {
         // 3秒後FuncA被執行.
         setTimeout(() => {
            console.log(`執行FunctionA.`);
            resolve(`run funcA resolve done.`);
         }, 3000);
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

    funcC() {
      return new Promise((resolve, reject) => {
         console.log(`執行FunctionC.`);
         resolve(`run funcC done.`);
      });
    }

   async runExample() {
     const funcA_info = await this.funcA();
     console.log(funcA_info);

     console.log("測試執行的順序！");

     const funcB_info = await this.funcB();
     console.log(funcB_info);

     const funcC_info = await this.funcC();
     console.log(funcC_info);

     console.log("example run done.");
   }

   run() {
       this.runExample();
       console.log("範例結束 (測試執行的順序!)");
    }
}