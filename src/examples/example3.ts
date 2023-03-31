import { IExample } from "../core/base";

/*
 Promise資料的傳遞.
 resolve({data})  => .then()
 reject({error})  => .catch()
 */
export class Example3 extends IExample {
    funcPromise() {
      return new Promise((resolve, reject) => {
         // 非同步相關的code ...

         let hasError: boolean = false;
         if(hasError) {
            // 執行失敗!
            return reject('非同步失敗，因為有錯誤!')
         } 

         // 執行成功.
         resolve({
            data1: 'test',
            data2: 1234
         })
      });
    }

    run(): void {
      this.funcPromise()
      // 使用 then 方法，並將成功訊息印出來.
      .then(data => {
        // 這邊的寫法是為了要幫帶過來的結構資料進行轉型，否則編譯器會報錯.
        let promise_data: {
          data1: string,
          data2: number
        } = data as {
          data1: string,
          data2: number
        };

        console.log(`data1: ${promise_data.data1}, data2: ${promise_data.data2}`);
        return promise_data.data1 + promise_data.data2 + ' done'
      })
      // 獲得前一個 then() 回傳的結果.
      .then(data => {
        console.log(data)
        return data + ', hi!'
      })
      // 獲得前一個 then() 回傳的結果.
      .then(data => {
        console.log(data)
      })
      // 使用 catch 方法，並將錯誤訊息印出來.
      .catch(error => console.log('錯誤訊息', error))
    }
}