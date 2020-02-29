var powerOn = false;
var tempo = 0;
var beat = 0;
var playing = false;

function metrocolor(){
    var m = Snap("#Metronome .st0")
    m.attr({fill:'magenta'})
}
//want to map st6 path color...
function activate(){
    console.log('hi')
    var power = Snap(".st6")
    if (!powerOn){
        console.log("yay")
        powerOn = true;
        power.stroke = "#FF0000"
        setScreenColor()

    }
    else{
        powerOn = false;
        console.log("why am i like this")
        power.attr({stroke:'#1D1D1B'})
    }
}

function setScreenColor(){
    let screens = [Snap(".st15"),Snap("#BeatTempoGroup .st8")]
        screens.forEach(screen => { 
            screen.attr({fill: powerOn ? "green" : "orange"})
        });
}
function animateNeedle(){
    if (powerOn && playing)
        {
        let p = Snap("#Needle")
        p.animate({x2: 418.5}, 500, function(){
            p.animate({x2:218.5}, 1000, function(){
                p.animate({x2:318.5}, 500)
            })
        })
    }
}

function playToggle(){
    if (powerOn){
        let p = [Snap('#PlayBttn'),Snap('#PauseBttn')]
        if (playing){
            p[1].attr({display:'none'})
            p[0].attr({display:'inline-block'})
            playing=false
        }
        else{
            p[0].attr({display:'none'})
            p[1].attr({display:'inline-block'})
            playing=true
            animateNeedle()
        }
    }
}