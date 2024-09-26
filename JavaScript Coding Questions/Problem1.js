
let str = "secret_key_one";
let s = str.split("_");
console.log(s);
let ans = "";

for(let i = 0;i<s.length;i++){
  if(i!=0){
    ans+=s[i].substring(0, 1).toUpperCase();
    ans+=s[i].substring(1);
  }
  else{
    ans+=s[i];
  }
}

console.log(ans);