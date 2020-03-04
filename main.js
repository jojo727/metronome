
//need to decide how to work with tempo
//tempo inc/dec function needed plus how to display this in the associated box..
//ALSO GET THAT ALARM CLOCK FONT!
var powerOn = false;
var tempo = 30;
var beat = 0;
var playing = false;
var animateNeedle;
var tempoCount;
//bpm = tempo
var beatPerSecond = (bpm) => {
    return bpm / 60
}



function activate(){
    var power = [Snap("#PowerBttn"),Snap("#PowerBttnOn")]
    if (!powerOn){

        console.log('hi')
        powerOn = true;
        power[0].attr({display:'none'})
        power[1].attr({display:'inline-block'})
        tempoCount = Snap("#TempoCount");
        tempoCount.attr({display:'inline-block'})
        console.log(tempoCount.innerSVG)
        //Snap("#PowerBttn .st0").attr({display:'none'})

    }
    else{
        console.log("off")
        console.log("0"+31)
        power[0].attr({display:'inline-block'})
        power[1].attr({display:'none'})
        tempoCount.attr({display:'none'})
        if (playing){
            playToggle()
        }
        powerOn = false;
    }
}
function updateTempo(button){
    if (powerOn){
        console.log(tempo)
        if (button == 'inc'){
            if (tempo < 240){
                tempoCount.innerSVG = tempo++
            }
 //           return tempo;
        }

        else if (button == 'dec'){
            if (tempo > 30){
                tempoCount.innerSVG = tempo--
            }
//            return tempo
        }
        console.log(tempo)
        displayTempo(tempo)
    }
}

function play(){
    let animateTime = 1000 / beatPerSecond(tempo)
    animateNeedle = setInterval(function(){
    if (powerOn && playing)
        {    
        let p = Snap("#Needle")
        p.animate({x2: 218.5}, animateTime, mina.easeinout(),function(){
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

function displayTempo(bpm){
    tempoCount.innerSVG = (bpm < 100) ? ("0" + bpm + "") : ("" + bpm + "")
    return tempoCount.innerSVG
}