let w: unknown;
w = {
  test(): void {
    console.log("Hello this is test!");
  },
} as { test: () => void };

// w.test(); -> w是unknown ，他不會有任何屬性可以用喔:)

//此時可以由我們自己判斷w的type 以及是否有值，再去手動改變他的type
if (typeof w === "object" && w !== null) {
  (w as { test: Function }).test;
  //Function/ 'function'/ () => void 全部都可以喔! 都一樣!
}
//Conclusion : Although we have to cast multiple times , we can do a check in the if to secure our type and have a safer casting
