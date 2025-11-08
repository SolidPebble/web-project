let fetchdata=(pd,nd)=>{
    console.log(pd);
    setTimeout(()=>{
        console.log(nd);
    },2000)
}
fetchdata(1,fetchdata(3,4));
