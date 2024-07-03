var arr1=["music1","music2","music3","music4"];
var a=[];
var userClickedPattern=[];
var started=false;var level=0;

$(document).keydown(function (e) { 
    if(started==false)
    {
        $("h1").text("Level:"+level);
        nextSequence();started=true;
    }
    });

$(".btn").click(function()
{
    var userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    addPressed(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});
function checkAnswer(index)
{
    if(userClickedPattern[index]==a[index])
        {
            console.log("success");
            if(a.length==userClickedPattern.length)
                {
                    setTimeout(function()
                    {nextSequence();},1000);
                    
                }

        }
        else
        {
           playSound("wrong");
           $("body").addClass("game-over");
           setTimeout(function()
        {
            $("body").removeClass("game-over");
        },200);
            $("h1").text("Game-Over Press any Key to Restart");
            startOver();
        }
}


function nextSequence()
{
    userClickedPattern=[];
    level++;
    $("h1").text("Level:"+level);
    

    var randomNumber=Math.floor(Math.random()*4);
    var chosenColor=arr1[randomNumber];
    a.push(chosenColor);
    $("#"+chosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(chosenColor);

}

function playSound(name)
{
    var audio=new Audio('./sounds/'+name+'.mp3');
    audio.play();
}

function addPressed(name)
{
    $("#"+name).addClass("pressed");
    setTimeout(function()
{
    $("#"+name).removeClass("pressed");
},100);

}
function startOver()
{
    level=0;
    started=false;
    a=[];
}

