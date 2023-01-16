let count=0;
let n = 23
for(let i=1;i<=n;i++){
	if(n%i==0){
		count++
	}
}
if(count == 2){
	console.log("prime")
else{
	console.log("not a prime")
}