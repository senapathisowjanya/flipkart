let number=5;
let count=0;
for(let i=1;i<=number;i++){
if(number%i!=0){
count++;
}
}if(count==2){
console.log("prime")
}else{
console.log("not prime")
}