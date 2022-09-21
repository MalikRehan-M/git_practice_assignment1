let n=17;  
let factors=0;
  for(let i=0;i<=n;i++){
    if(n%i==0){
      factors++
    }
  }
  if(factors==2){
    console.log(true);
  }else{
    console.log(false);
  }