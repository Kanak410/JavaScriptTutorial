const n=Number(process.argv[2]);
let ans=1;
for(let i=1;i<=n;i++){
    ans=ans+(1/i);
    console.log("Harmonic number = ",Math.round((ans)*100)/100)

}
