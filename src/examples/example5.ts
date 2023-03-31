import { IExample } from "../core/base";

/* 
  Async/Await非同步的錯誤處理.
*/
export class Example5 extends IExample {

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

    funcError() {
      return new Promise((resolve, reject) => {
         console.log(`執行有錯誤的Function.`);
         reject(`error on funcError !`);
      });
    }    

   async runExample() {
     try {
         const funcA_info = await this.funcA();
         console.log(funcA_info);
   
         const funcB_info = await this.funcB();
         console.log(funcB_info);

         // 這邊來安插一個有錯誤的非同步方法.
         const funcError_info = await this.funcError();
         console.log(funcError_info);
   
         const funcC_info = await this.funcC();
         console.log(funcC_info);

         console.log("example run done.");
     } catch (error) {
        console.log(error);
     }
   }

   run() {
       this.runExample();
    }
}