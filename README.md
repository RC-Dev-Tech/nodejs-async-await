# ![](https://drive.google.com/uc?id=10INx5_pkhMcYRdx_OO4rXNXxcsvPtBYq) NodeJs - async/await
> ##### 理論請自行找，網路上有很多相關的文章，這邊只關注於範例實作的部分.

<br>

<!--ts-->
## 目錄
* [簡介](#簡介)
* [操作說明](#操作說明)
* [切換範例](#切換範例)
* [延伸項目](#延伸項目)
* [參考資料](#參考資料)
* [備註](#備註)
<!--te-->

---
<br>

## 簡介
首先，在介紹實作範例之前，有幾個重點要先講清楚一下.
- JavaScript 是一個同步單執行緒（single thread）的程式語言，<br>
  用白話一點的方式解釋就是「JavaScript 一次只能做一件事情」，<br>
  因此 JS 中等待執行的任務會被放入 Call Stack。

<br>

- 但JavaScript可以藉由事件佇列(Event Quete)加上Callback Function來做到非同步的架構設計.<br>
  例如我們常用到的setTimout()方法.

<br>

- 但也因為一個龐大的非同步架構在設計上，難免會演變成是一個Callback Hell狀況. <br>
  所以在ES2015(ES6)中，發表介紹了一個新的物件，就是Promise. <br>
  - Promise — Callback以外的另一種方式來處理非同步事件，<br>
    且可讀性與可維護性比 Callback 好很多。<br>
  - Promise 是一個物件，代表著一個尚未完成，但最終會完成的一個動作，<br>
    在一個「非同步處理」的流程中，它只是一個暫存的值（Placeholder）。<br>
  - Promise 物件代表一個即將完成、或失敗的非同步操作，以及它所產生的值。<br>
  - Promise 物件會處於以下幾種狀態：
    - 擱置（pending）：初始狀態，不是 fulfilled 與 rejected。
    - 實現（fulfilled）：表示操作成功地完成。
    - 拒絕（rejected）：表示操作失敗了。

<br>

Promise使用流程圖：
![](https://drive.google.com/uc?id=1oT_SbVq45bgtod-riZV5LJc8BvJYUvIy)


<br>

- 但即便是有了Promise這麼方便的物件，卻難免還是有Promise Chain等複雜的寫法產生，<br>
  所以為了讓整個程式代碼看起來可以更加的直譯易懂，於是就有了Async/Await的語法.<br>
  - async 關鍵字，可以被放在任何的函式前面，<br>這樣等於告訴別人，“我們正宣告一個非同步的函式，而且會回傳一個Promise物件”. <br>
  - await 關鍵字，通常是被放在async函式中，<br>而這樣是告訴別人，“我們正在等這個非同步的函式作業完成後，才會執行後續的動作”. <br>
  - async/await 是針對promise-based寫法所進行包裝的一個新撰寫用法.<br>
    其骨子裡還是一樣使用promise，所以回傳的一樣是promise物件.<br>
    所以在學會async/await用法前，一定要先懂promise的用法，甚至還要可以一起混用.

實作範例:
- [Example1](https://github.com/RC-Dev-Tech/nodejs-async-await/blob/main/src/examples/example1.ts) - 標準非同步的實作.
- [Example2](https://github.com/RC-Dev-Tech/nodejs-async-await/blob/main/src/examples/example2.ts) - Promise非同步的基本實作.
- [Example3](https://github.com/RC-Dev-Tech/nodejs-async-await/blob/main/src/examples/example3.ts) - Promise資料的傳遞.
- [Example4](https://github.com/RC-Dev-Tech/nodejs-async-await/blob/main/src/examples/example4.ts) - Async/Await非同步的基本實作.
- [Example5](https://github.com/RC-Dev-Tech/nodejs-async-await/blob/main/src/examples/example5.ts) - Async/Await非同步的錯誤處理.
- [Example6](https://github.com/RC-Dev-Tech/nodejs-async-await/blob/main/src/examples/example6.ts) - Async/Await 搭配Promise.all()使用.

---
<br>

## 操作說明.
#### 1. 安裝套件
> npm install --save
#### 2. 編譯 & 運行
> npm run start

---
<br>

## 切換範例
> 編輯在app.json中的"exsample_mode"，填入的數字代表第幾個範例.

---
<br>

## 延伸項目
* [NodeJs 系列實作](https://github.com/RC-Dev-Tech/nodejs-index) <br>

---
<br>

## 參考資料
* [認識同步與非同步 — Callback + Promise + Async/Await](https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E5%BF%83%E5%BE%97-%E8%AA%8D%E8%AD%98%E5%90%8C%E6%AD%A5%E8%88%87%E9%9D%9E%E5%90%8C%E6%AD%A5-callback-promise-async-await-640ea491ea64) <br>
* [MDN - Promise](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise) <br>
* [MDN - 非同步的 JavaScript 介紹](https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/Asynchronous/Introducing) <br>
* [Heidi-Liu - 淺談 JavaScript：同步與非同步 & Callback Function & Event Loop](https://hackmd.io/@Heidi-Liu/note-javascript-callback) <br>
* [JavaScript 的同步與非同步 - 從 Callback function 到 Promise](https://nicolakacha.coderbridge.io/2020/09/11/sync-async/) <br>


---
<!--ts-->
#### [目錄 ↩](#目錄)
<!--te-->
---