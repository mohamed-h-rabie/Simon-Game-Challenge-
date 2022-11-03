var  userClickedPattern = []
var buttoncolors = ["red", "blue", "green", "yellow"]
var gamePattern = []
var level = 0
var started = false
function nextsequence(){
    userClickedPattern = []
    level++
    $("#level-title").text("level"+level)
    var randomnumber = Math.floor(Math.random()*4)
    var randomChosenColour  = buttoncolors[randomnumber]
    gamePattern.push(randomChosenColour)
    $("."+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playsound(randomChosenColour)
}
$(".btn").click(function(){
    var userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour)
    animatePress(userChosenColour)
    playsound(userChosenColour)
    checkAnswer(userClickedPattern.length-1)
})
function playsound(name){
    var audio = new Audio('sounds/'+ name +'.mp3');
    audio.play(name);
}
function animatePress(currentcolor){
    $("#"+currentcolor).addClass("pressed")
    
    setTimeout(function(){
    $("#"+currentcolor).removeClass("pressed")
    
}, 100);
}
$(document).keypress(function(){
    if(!started){
        $("#level-title").text("level"+level)
        nextsequence()
        started=true
    }})
    function checkAnswer(currentLevel){
        if(userClickedPattern[currentLevel]===gamePattern[currentLevel]
            ){console.log("ssuuuuc")
            
           if(userClickedPattern.length===gamePattern.length){
            setTimeout(function()  {
                nextsequence()
            }, 1000);
           }}
            else{console.log("drrra");
            startOver()
            playsound("wrong")
            $("body").addClass("game-over")
            setTimeout(function() {
                $("body").removeClass("game-over")    
            }, 200);
            $("h1").text("Game Over, Press Any Key to Restart")
       
        } }
function startOver(){
     gamePattern = []
level = 0
started = false
}