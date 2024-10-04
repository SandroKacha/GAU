function roundNum(num,value){
    if(value){
        console.log(Math.ceil(num))
    } else{
        console.log(Math.floor(num))
    }
}

roundNum(4.1,true)