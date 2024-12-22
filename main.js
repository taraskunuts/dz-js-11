const giveMessage = () => {
  console.log("Hello World")}
giveMessage()
//
//
//
function makeRandomNumber(){
  const randomNumber = Math.random() * (100 - 1)
  return randomNumber
}
const value = makeRandomNumber()
let guessNumber = 0;
for (let i = 0;i < 5;i++ ) {//для вільної перевірки коду
  guessNumber = prompt("Вгадайте число(Впишіть число!)");
  if (guessNumber === value) {
    alert("Ви вгадали");
    if(i === 5){
      break
    }
  } else {
    alert("Ви НЕ вгадали");
    if(i === 5){
      break
    }
  }
}
//
//
//
let gettingNumber = confirm("Натискайте <OK>")
let countOfNumber = 0;
do{
    let gettingNumber = confirm("Продовжуйте натискайти <OK>")
    countOfNumber++
    if(countOfNumber >= 5){
      break
    }//if зробив для вільної перевірки коду щоб менше возився
}while(gettingNumber === true)
console.log(countOfNumber)
//
//
//
const applyCallbackToEachElement = (arr,callback) =>{
  let squaredArray = [];
  for(let i = 0; i < arr.length; i++){
    let number = arr[i]
    callback(number)
    squaredArray.push(number)
  }
  return squaredArray
}
const arr = [1,2,3,4,5]
const squareCallback = (number) => {
  const squareResult = number*number
  return squareResult
};
const result = applyCallbackToEachElement(arr,squareCallback)
console.log(result)
//
//
//
const calculateDiscountPrice = (price, discount, callback) => {
  const discountedPrice = price - (price * discount / 100)
  callback(discountedPrice)
};   
const showDiscountedPrice = (discountedPrice) => {
  console.log(`Дисконтна ціна ${discountedPrice} грн`)
};
calculateDiscountPrice(100, 10, showDiscountedPrice);
