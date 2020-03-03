var powerOn = false;
var tempo = 0;
var beat = 0;
var playing = false;
var animateNeedle;

function metrocolor(){
    var m = Snap("#Metronome .st0")
    m.attr({fill:'magenta'})
}
//bpm = tempo
var beatPerSecond = (bpm) => {
    return bpm / 60
}

//want to map st6 path color...
function activate(){
    var power = [Snap("#PowerBttn"),Snap("#PowerBttnOn")]
    var tempoCount = Snap("#TempoCount")
    if (!powerOn){    
        console.log('hi')
        powerOn = true;
        power[0].attr({display:'none'})
        power[1].attr({display:'inline-block'})
        tempoCount.attr({display:'inline-block'})
        //Snap("#PowerBttn .st0").attr({display:'none'})

    }
    else{
        console.log("off")
        console.log("000"+1)
        power[0].attr({display:'inline-block'})
        power[1].attr({display:'none'})
        if (playing){
            playToggle()
        }
        powerOn = false;
    }
}

function setScreenColor(){
    let screens = [Snap(".st15"),Snap("#BeatTempoGroup .st8")]
        screens.forEach(screen => { 
            screen.attr({fill: powerOn ? "green" : "orange"})
        });
}
function play(){
    let animateTime = 1000 / beatPerSecond(240)
    animateNeedle = setInterval(function(){
    if (powerOn && playing)
        {    
        let p = Snap("#Needle")
        p.animate({x2: 218.5}, animateTime, mina.bounce(),function(){
        p.animate({x2:418.5}, animateTime,)})
        }
    },animateTime*2)
}

function playToggle(){
    if (powerOn){
        let p = [Snap('#PlayBttn'),Snap('#PauseBttn')]
        if (playing){
            p[1].attr({display:'none'})
            p[0].attr({display:'inline-block'})
            playing=false
            clearInterval(animateNeedle)
        }
        else{
            p[0].attr({display:'none'})
            p[1].attr({display:'inline-block'})
            play()
            playing=true
        }
    }
}