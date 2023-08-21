let but_count = 0
let but_count2 = 0
let time = 180;

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
                document.getElementById("butt").style="color:white; background-color:#0068FF"

                if(but_count===2){
                    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
                    document.getElementById("num").innerText = token;
                    document.getElementById("num").style.color = "#" + token; 
    
                    setInterval(function(){
                        if(time >= 0){
                            let min = Math.floor(time/60);
                            let sec = String(time%60).padStart(2,"0");
                            document.getElementById("time").innerText=min + ":" + sec;
                            time-=1;
                        }
                        else{
                            /*end=document.getElementById("end").disabled=false*/
                            document.getElementById("end").style="color:white; background-color:#0068FF"
                            but_count2=2;
                            console.log(but_count2)
                            console.log(time)
                        }
                    },1000);
                }   
            }
        }
    }
}

let changeFocus1 = () => {
    if(time <= 0){
        document.getElementById("end").disabled = false;
        alert('요청을 완료하였습니다.');
    }
    else{
        alert('인증을 완료하지 않았습니다.')
    }
}

let login=()=>{
    let id1=document.getElementById("id1").value
    let name1=document.getElementById("name1").value
    let pw1=document.getElementById("pw1").value
    let pw2=document.getElementById("pw2").value
    let p1=document.getElementById("p1").value
    let p2=document.getElementById("p2").value
    let p3=document.getElementById("p3").value
    let gender_input1=document.getElementById("gender-input1").value
    let gender_input2=document.getElementById("gender-input2").value
    let result_button=document.getElementById("result_button")
    if(id1 !== "" && name1 !== "" && pw1 !== "" &&pw2 !== "" && p1 !== "" && p2 !== "" && p3 !== "" && (gender_input1 || gender_input2) &&
    pw1 === pw2){
        result_button.disabled=false;
        alert("회원가입을 완료하였습니다.");
    }
    else{
        alert("빈칸을 전부 입력해주세요.")
    }
}