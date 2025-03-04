const num=Number(process.argv[2]);
for(let i=2; i<=num;i++){
    let factor=0;
    for(let j=2;j<i;j++){
        if(i%j ==0){
            factor++;
            break
        }
    }
        if(factor ==0){
            console.log(i);
        }
    
}