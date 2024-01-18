const button = document.querySelector("#btn");

button.addEventListener('click', clickModular);

let p = document.querySelector("#jokes");

const audio = new Audio("./door.mp3");
function clickModular(){
    let joke = " ";

    const xhr = new XMLHttpRequest();
    xhr.open('GET', "https://api.api-ninjas.com/v1/dadjokes?limit=1");
    xhr.setRequestHeader('x-Api-key', "/kKbBkDCP6NzStP5TmuARQ==weULnBZuaArhNg8n");
    xhr.send();

    button.innerText = "Fetching jokes...";

    xhr.onload = function(){
        if(xhr.status === 200){
            const result = JSON.parse(xhr.responseText);
            joke = result[0].joke;
            
            // update the jokes inside dome

            p.innerText = joke;

            button.innerText = "Tell Me A Joke";
        }
    };
    call();
}

function call(){
    audio.play();
}