const clock  =  document.querySelector(".clock");
const start = document.getElementById('startTimer');
const stop = document.getElementById('stopTimer');
const reset = document.getElementById('reset');
const lap = document.getElementById('lap');
const lapList = document.getElementById('lapList');

const  seconds =0; 
const  minuts = 0;
const  hours = 0;

let lapTimes = [];




let second= 0; let min=0; let hr=0;
let setIntervalid;
start.addEventListener('click',()=>{
   setIntervalid= setInterval(()=>{
    if(second<59){
      second++;
    }
    else if(min>=59){
        hr++;
        min=0;
    }
    else {
        second=0;
        min++;
    }

  var  seconds = String(second).padStart(2,"0");
  var  minuts = String(min).padStart(2,"0");
  var  hours = String(hr).padStart(2,"0");
     clock.innerText = `${hours} : ${minuts}: ${seconds}`;
    },1000);
     });

    stop.addEventListener('click', () => {
      clearInterval(setIntervalid);
      saveLapTime();
    });



    reset.addEventListener('click', () => {
      second = 0;
      min = 0;
      hr = 0;
      lapTimes = [];
      clearInterval(setIntervalid);
    
      var seconds = String(second).padStart(2, "0");
      var minuts = String(min).padStart(2, "0");
      var hours = String(hr).padStart(2, "0");
      clock.innerText = `${hours} : ${minuts}: ${seconds}`;
    
      clearLapList();
    });
    
    function saveLapTime() {
      var lapTime = `${hr} : ${min} : ${second}`;
      lapTimes.push(lapTime);
    
      var lapItem = document.createElement('li');
      lapItem.innerText = lapTime;
      lapList.appendChild(lapItem);
    }
    
    function clearLapList() {
      lapList.innerHTML = '';
    }

    lap.addEventListener('click',()=>{
      saveLapTime() ;
    });
    


  







 
