function checkprimenumber(n){
    var flag=true
    for(let i=2;i<n;i++){
        if(n%i==0){
            flag=false
        }
        
    }
    if(flag==true){
        console.log("prime number")
    }
    else{
        console.log("not prime number")
    }

}
checkprimenumber(5);