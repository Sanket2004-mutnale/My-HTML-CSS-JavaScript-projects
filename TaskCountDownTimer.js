let countdown;
let initialTime;

function startTimer(){
    const timeinput =document.getElementById("timeinput").value;
    let time = parseInt(timeinput);

    if (isNaN(time) || time<=0){
        alert("please enter the number greater than 0 ")
        return;
    }


clearInterval(countdown);

countdown = setInterval(()=>{
    document.getElementById('Coundowndisplay').innerText =time;
    time--;

    if(time<0){
        clearInterval(countdown)
        document.getElementById('Coundowndisplay')=innerText ='time up'
    }
},1000);
}

function stop(){
    clearInterval(countdown);
}



