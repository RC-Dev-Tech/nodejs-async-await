import { IExample } from "../core/base";

/* 
  Promise非同步的基本實作.
  new Promise((resolve, reject) => {
      resolve({data});       // 完成
      reject("error_msg");   // 拒絕
   });
*/
export class Example2 extends IExample {

    funcA() {
      return new Promise((resolve, reject) => {
         // 3秒後FuncA被執行.
         setTimeout(() => {
            console.log(`執行FunctionA.`);
            resolve(`run funcA done.`);
         }, 3000);
      });
    }

    funcB() {
      return new Promise((resolve, reject) => {
         // 2秒後FuncB被執行.
         setTimeout(() => {
            console.log(`執行FunctionB.`);
            resolve(`run funcB done.`);
         }, 2000);
      });
    }

    funcC() {
      return new Promise((resolve, reject) => {
         console.log(`執行FunctionC.`);
         resolve(`run funcC done.`);
      });
    }

    funcD() {
      return new Promise((resolve, reject) => {
         console.log(`執行有錯誤的FunctionD.`);
         reject(`error on funcD !`);
      });
    }

   runCase(id: number) {
      switch(id) {
         case 1: this.case1(); return;
         case 2: this.case2(); return;
         case 3: this.case3(); return;
         case 4: this.case4(); return;
         case 5: this.case5(); return;
         case 6: this.case6(); return;
         case 7: this.case7(); return;
         default: return;
      }
   }

   case1() {
       // 狀況1.
       // 用原本的老方式來執行這三個func.
       console.log(`狀況1:`);
       this.funcA();
       this.funcB();
       this.funcC();
   }
 
   case2() {
      // 狀況2.
      // 使用.then()來調整各func的順序.
      // A實作完才能實作B才能實作C.
      console.log(`狀況2:`);
      this.funcA().then(this.funcB).then(this.funcC);
   }

   case3() {
      // 狀況3.
      // 不管先後順序，只在乎這三個func是否完成，並且進行接下來要做的事情.
      console.log(`狀況3:`);
      Promise.all([this.funcA(), this.funcB(), this.funcC()]).then(() => {
         console.log(`after all func done todo...`);
      });
   }

   case4() {
      // 狀況4.
      // 當使用.then()來調整各func的順序，但其中有func是有錯誤的話.
      // 當運行到該方法時，則會跳出code: 'ERR_UNHANDLED_REJECTION'的錯誤並且崩壞.
      console.log(`狀況4:`);
      this.funcA().then(this.funcD).then(this.funcB).then(this.funcC);
   }

   case5() {
      // 狀況5.
      // 根據狀況4.我們可以用.catch()的方法來獲得錯誤訊息以及避免崩壞.
      console.log(`狀況5:`);
      this.funcA().then(this.funcD).then(this.funcB).then(this.funcC).catch(error => console.log('錯誤訊息', error));
   }

   case6() {
      // 狀況6.
      // 當使用Promise.all()的方法時，如果其中一個func有錯誤的話.
      // 當運行到該方法時，則會跳出code: 'ERR_UNHANDLED_REJECTION'的錯誤並且崩壞.
      console.log(`狀況6:`);
      Promise.all([this.funcA(), this.funcD(), this.funcB(), this.funcC()]).then(() => {
         console.log(`after all func done todo...`);
      });
   }

   case7() {
      // 狀況7.
      // 根據狀況6.我們可以用.catch()的方法來獲得錯誤訊息以及避免崩壞.
      console.log(`狀況7:`);
      Promise.all([this.funcA(), this.funcD(), this.funcB(), this.funcC()]).catch(error => console.log('錯誤訊息', error));
   }   

    run(): void {
       this.runCase(5);
    }
}