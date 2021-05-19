// const printString = (string) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       () => {
//         console.log(string)
//         resolve()
//         reject(new Error("Request is failed"));
//       },
//       Math.floor(Math.random() * 100 ) + 1
//     )
//   })
// }

// const printAll = () => {
//   printString("A")
//   .then(() => {
//     return printString("B")
//   })
//   .then(() => {
//     return printString("C")
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// }
// printAll()

// 마지막 체이닝에서 .catch()를 통해 error handling 가능 
// callback은 처리 시 마다 error 처리 함수 필요

const printString = (string) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        console.log(string);
        if (something) {
          resolve();
        } else {
          reject(new Error("Request is failed"));
        }
      },
      Math.floor(Math.random() * 100 ) + 1
    )
  });
}


const printAll = async () => {
  try {
  const printA = await printString("A");
  const printB = await printString("B");
  const printC = await printString("C");
  } catch (err) {
    console.log(err);
  }
}
printAll()