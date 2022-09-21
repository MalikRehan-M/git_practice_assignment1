let n=17;  
let factors;
  for(let i=0;i<=n;i++){
    if(n%i==1){
      factors++
    }
  }
  if(factors==2){
    console.log(n,"is a prme nnumber");
  }else{
    console.log(n,"is not a prime number");
  }