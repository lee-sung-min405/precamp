let but_count = 0
let changeFocus = ()=>{
    let p1=document.getElementById("p1").value
    let p2=document.getElementById("p2").value
    let p3=document.getElementById("p3").value

    if(p1.length===3){
        document.getElementById("p2").focus()
        if(p2.length===4){
            document.getElementById("p3").focus()
            if(p3.length===4){
                but_count++;
                console.log(but_count)
                document.getElementById("butt").disabled=false
                if(but_count===2){
                    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
                    document.getElementById("num").innerText = token;
                    document.getElementById("num").style.color = "#" + token;
    
                    let time = 180;
    
                    setInterval(function(){
                        if(time >= 0){
                            let min = Math.floor(time/60);
                            let sec = String(time%60).padStart(2,"0");
                            document.getElementById("time").innerText=min + ":" + sec;
                            time-=1;
                        }
                        else{
                            document.getElementById("end").disabled=false
                        }
                    },1000);
                }   
            }
        }
    }
}