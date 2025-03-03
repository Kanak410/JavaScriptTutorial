const year=Number(process.argv[2]);
if(year >=1000){
    if(year %100===0){
        if(year %400===0){
            console.log("Its a leap year");

        }else{
            console.log("Its not a Leap year");
        }
    }
    else if(year %4===0){
        console.log("Its a leap year");
    }
    else{
        console.log("Its not a leap year")
    }


}
else{
    console.log("Its not a leap year")
}