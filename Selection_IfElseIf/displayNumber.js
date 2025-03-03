const num =Number(process.argv[2]);
if(num === 1){
    console.log("unit");
}
else if(num === 10){
    console.log("ten");
}
else if(num === 100){
    console.log("hundred");
}
else if(num === 1000){
    console.log("thousands");
}
else if(num === 100000){
    console.log("Hundred Thousand");
  }
  else if(num === 1000000){
    console.log("Thousand Thousand");
  }
else{
    console.log("please enter valid number");
}
