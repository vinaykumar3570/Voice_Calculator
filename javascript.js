let screen = document.getElementById("input");
let equalBtn = document.querySelector(".equal")

function input(x) {
    if(screen.value == "0"){
      screen.value=""
      screen.value = screen.value + x;
    } 
    else{
      screen.value = screen.value + x;

    }
} 



function Del() {
  if(screen.value== "0"){
    return
  }else if(screen.value == ""){
    screen.value = "0"
  }else{
    screen.value = screen.value.slice(0, -1);
  }
}

function equal() {
  try {
    screen.value = eval(screen.value);
  } catch {
    screen.value = "Error";
  }
}


// Buttons JavaScript


$(document).ready(function() {
  $(".button").mousedown(function() {
    $(this).css({
      "box-shadow": " inset 0 3px 2px rgb(0 0 0 / 50%)",
      background: "rgb(21, 32, 40)"
    });
  });
  $(".button").mouseup(function() {
    $(this).css({
      "box-shadow": " inset 0 3px 2px rgba(255, 255, 255, 0.25)",
      background: "rgb(36, 55, 69)",
    });
  });
  $(".clr").mousedown(function() {
    $(this).css({ background: "rgb(206, 63, 2)" });
  });
  $(".clr").mouseup(function() {
    $(this).css({ background: "rgb(247, 85, 16)" });
  });
  $(".equal").mousedown(function() {
    $(this).css({ background: "rgb(15, 124, 15)" });
  });
  $(".equal").mouseup(function() {
    $(this).css({ background: "rgb(38, 173, 38)" });
  });
  $(".del").mousedown(function() {
    $(this).css({ background: "rgb(198, 32, 32)" });
  });
  $(".del").mouseup(function() {
    $(this).css({ "background-color": "rgb(238, 38, 38)" });
  });
});

document.onkeydown = e => {
  if(e.key == "0" || e.key == "Num0"){
    if(screen.value == "0"){
      screen.value = "";
      screen.value = screen.value + 0;
    }else{
      screen.value = screen.value + 0;

    }
  }else if(e.key == "1" || e.key == "Num1"){
    if(screen.value == "0"){
      screen.value = "";
      screen.value = screen.value + 1;
    }else{
      screen.value = screen.value + 1;

    }
  }else if(e.key == "2" || e.key == "Num2"){
    if(screen.value == "0"){
      screen.value = "";
      screen.value = screen.value + 2;
    }else{
      screen.value = screen.value + 2;

    }
  }else if(e.key == "3" || e.key == "Num3"){
    if(screen.value == "0"){
      screen.value = "";
      screen.value = screen.value + 3;
    }else{
      screen.value = screen.value + 3;

    }
  }else if(e.key == "4" || e.key == "Num4"){
    if(screen.value == "0"){
      screen.value = "";
      screen.value = screen.value + 4;
    }else{
      screen.value = screen.value + 4;

    }
  }else if(e.key == "5" || e.key == "Num5"){
    if(screen.value == "0"){
      screen.value = "";
      screen.value = screen.value + 5;
    }else{
      screen.value = screen.value + 5;

    }
  }else if(e.key == "6" || e.key == "Num6"){
    if(screen.value == "0"){
      screen.value = "";
      screen.value = screen.value + 6;
    }else{
      screen.value = screen.value + 6;

    }
  }else if(e.key == "7" || e.key == "Num7"){
    if(screen.value == "0"){
      screen.value = "";
      screen.value = screen.value + 7;
    }else{
      screen.value = screen.value + 7;

    }
  }else if(e.key == "8" || e.key == "Num8"){
    if(screen.value == "0"){
      screen.value = "";
      screen.value = screen.value + 8;
    }else{
      screen.value = screen.value + 8;

    }
  }else if(e.key == "9" || e.key == "Num9"){
    if(screen.value == "0"){
      screen.value = "";
      screen.value = screen.value + 9;
    }else{
      screen.value = screen.value + 9;

    }
  }else if(e.key == "+" || e.key == "Num+"){
    if(screen.value == "0"){
      screen.value = "";
      screen.value = screen.value + "+";
    }else{
      screen.value = screen.value + "+";

    }
  }else if(e.key == "-" || e.key == "Num-"){
    if(screen.value == "0"){
      screen.value = "";
      screen.value = screen.value + "-";
    }else{
      screen.value = screen.value + "-";

    }
  }else if(e.key == "*" || e.key == "Num*"){
    if(screen.value == "0"){
      screen.value = "";
      screen.value = screen.value + "*";
    }else{
      screen.value = screen.value + "*";

    }
  }else if(e.key == "/" || e.key == "Num/"){
    if(screen.value == "0"){
      screen.value = "";
      screen.value = screen.value + "/";
    }else{
      screen.value = screen.value + "/";

    }
  }else if(e.key == "." || e.key == "Num."){
    if(screen.value == "0"){
      screen.value = "";
      screen.value = screen.value + ".";
    }else{
      screen.value = screen.value + ".";

    }
  }else if(e.key == "Enter" || e.key == "Numenter"){
    equal();
  }else if(e.key == "Delete" ){
    allclear();
  }else if(e.key == "Backspace"){
    Del();
  }
}

let sin = () => screen.value = Math.sin(screen.value * Math.PI / 180)
let cos = () => screen.value = Math.cos(screen.value * Math.PI / 180)
let tan = () => screen.value = Math.tan(screen.value * Math.PI / 180)
let root = () => screen.value = Math.sqrt(screen.value, 2 )
let square = () => screen.value = Math.pow(screen.value, 2 )
let log = () => screen.value = Math.log(screen.value)



const micBtn = document.getElementById("mic");
const outputTextarea = document.getElementById("output");
let recognition;

micBtn.addEventListener("click", startVoiceInput);

function startVoiceInput() {
  if (recognition && recognition.continuous) {
    recognition.stop();
    return;
  }

  recognition = new (
    window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition
  )();

  recognition.lang = "en-US";
  recognition.start();

  recognition.onresult = function (event) {
    const voiceInput = event.results[0][0].transcript.trim();
    outputTextarea.value = voiceInput;
    performCalculation(voiceInput);
  };

  recognition.onend = function () {
    recognition.stop();
  };
}

function performCalculation(input) {
  input = input.replace(/plus/gi, "+");
  input = input.replace(/minus/gi, "-");
  input = input.replace(/multiply|multiply by|into|x/gi, "*");
  input = input.replace(/divide|divided by|divide by/gi, "/");
  screen.value = input;
  calculate();
}

function calculate() {
  try {
    const result = eval(screen.value);
    screen.value = result;
    speak(result.toString());
  } catch (error) {
    screen.value = "Error";
    speak("Error");
  }
}

function speak(message) {
  const utterance = new SpeechSynthesisUtterance(message);
  utterance.lang = "en-US";
  utterance.volume = 1;
  utterance.rate = 1;
  utterance.pitch = 1;
  speechSynthesis.speak(utterance);
}

equalBtn.addEventListener("click", calculate);


let mic = document.querySelector(".microphone")
let textarea = document.getElementById("output")

mic.addEventListener("click", function(){
  mic.classList.add("record");
  setTimeout(() => {
    mic.classList.remove("record");
  }, 7000);
})

function allclear() {
  screen.value = "0";
  textarea.value = "";

}
