const startWord = () => {
    let mywInput = document.getElementById("myw").value;
    let word = document.getElementById("word").innerText;
    let wordResult = document.getElementById("result");

    if (word.length > 0) {
        let last = word[word.length - 1];
        let first = mywInput[0];

        if (last === first) {
            // 정답일 때
            wordResult.innerText = "정답입니다!";
            word.innerText = myw;
            mywInput.value = "";
        } else {
            wordResult.innerText = "오답입니다!";
        }
    }
}

const lottogame = () => {
    const randomNumber = []; // 배열을 초기화합니다.
    
    for (let i = 0; i < 6; i++) {
        const number = String(Math.floor(Math.random() * 45) + 1); // 1부터 45까지의 숫자를 생성합니다.
        randomNumber[i] = number;
    }

    document.getElementById("one").innerText = randomNumber[0];
    document.getElementById("two").innerText = randomNumber[1];
    document.getElementById("thre").innerText = randomNumber[2];
    document.getElementById("fou").innerText = randomNumber[3];
    document.getElementById("fiv").innerText = randomNumber[4];
    document.getElementById("six").innerText = randomNumber[5]; // 여섯 번째 숫자에 대한 ID를 수정합니다.
}
