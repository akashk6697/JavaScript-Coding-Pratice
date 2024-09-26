///// (1) async function example
// const getData = async () => {
//     let y = "Hello World";
//     console.log(y);
// }

// console.log(1);
// getData();
//console.log(2);

////// (2) Promise example
//  let promise= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//   console.log("promise started")
//   let error=false;
//   if(!error){
//     resolve({user:"raiyan",address:"mewatipur"})
//   }
//   else{
//     reject("error aa gya hai")
//   }

//     },2000)
//   })
//   promise.then((data)=>{
//     console.log(data)
//     return data.user

//   }).then((username)=>{
//   console.log(username)
//   })
//   .catch((err)=>{
//   console.log(err);

//   })

/////// (3) Fetch data

//     fetch("https://jsonplaceholder.typicode.com/posts")

//   .then((response)=>{

//    return response.json()

//   })
//   .then((data)=>{
//   console.log(data);

//   })

///// (4) async function

//   async function promiseConsume() {
//            try{
//             let a= await promise
//             console.log(a)
//             console.log(a.user);
//            }
//            catch(err){
//             console.log(err);

//            }
//   }
//   promiseConsume()

////// (5) Fetch data Api using async await
async function fetchApi() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();
  console.log(data);
}
fetchApi();

////// (6)  asyncc function example

//   async function handlingData(){
//     return new Promise((resolve, reject) => {
//       setTimeout(()=>{
//   resolve("45")
//       },2000)
//     })
//   }
//     async function main(){
//       let a=await handlingData()

//     console.log(a);

//     }
//     main()
