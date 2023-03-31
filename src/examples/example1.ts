import { IExample } from "../core/base";

/*
 標準非同步的實作.
 但是因為執行的時間不一樣，所以最後結果出來的順序不會是ABC.
 */
export class Example1 extends IExample {

    funcA() {
       console.log(`執行FunctionA.`);
    }

    funcB() {
       console.log(`執行FunctionB.`);
    }

    funcC() {
       console.log(`執行FunctionC.`);
    }

    run(): void {
       // 3秒後FuncA被執行.
       setTimeout(() => {
         this.funcA();
       }, 3000);

       // 2秒後FuncA被執行.
       setTimeout(() => {
         this.funcB();
       }, 2000);

       this.funcC();
    }
}