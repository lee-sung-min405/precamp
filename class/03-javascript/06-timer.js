let auth = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("target").innerText = token;
    document.getElementById("target").style.color = "#" + token;

    let time = 180;

    setInterval(function(){
        if(time >= 0){
            let min = Math.floor(time/60);
            let sec = String(time%60).padStart(2,"0");
            document.getElementById("timer_f").innerText=min + ":" + sec;
            time-=1;
        }
        else{
            document.getElementById("but").disabled=true;
            
        }
    },1000);
}
