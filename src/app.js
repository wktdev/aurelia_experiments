var audioContext = new AudioContext();
var osc = false;
export class App {
  constructor() {
  this.transport = "Play";
  }

  playStopOsc(){

    if(!osc){
      osc = audioContext.createOscillator();
      osc.connect(audioContext.destination);
      osc.start(audioContext.currentTime);
      this.transport = "Stop";

    }else{
   
      osc.stop(audioContext.currentTime);
      osc = false;
      this.transport = "Play";
        
    }
  }

  setWaveform(waveform){
    osc.type = waveform

  }

  freqChange(){
    var sliderVal = this.slider.value;
    if (!osc) {

          console.log("Oscillator is stopped. Waiting for oscillator to start");

        } else {
            osc.frequency.value = +sliderVal;
            console.log("Oscillator is playing. Frequency value is " + sliderVal);
            // osc.type = selectedWaveform;
        }

  }
}

