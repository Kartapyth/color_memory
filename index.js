var com = [];
var player = [];
var colorList = ["green", "red", "yellow", "blue"];
$("body").on("click keydown", game)
function game() {
    $("body").off("click keydown")
    player = []
    com = []
    comSelect()
    
    
    
    $("h1").text("follow the pattern");
    $(".btn").click(function () { 
        var theId = $(this).attr("id");
        pressAnimtion(theId)
        if (player.length < com.length) {
            player.push(theId)
            if (player[player.length - 1] === com[player.length - 1]) {
                if (player.length == com.length) {
                player = []
                setTimeout (function() {comSelect()}, 1000)
            
        }
            } else {
                
                var wrong = new Audio("./sounds/wrong.mp3")
                wrong.play()
                $("h1").text("wrong box, your score is: "+ (com.length - 1) +", to restart refresh the page ");
                $(".btn").off("click")
                $("body").addClass("wrong");
    setTimeout(() => {
        $("body").removeClass("wrong");
    }, 100);
               
                
            }
            
        } 
        
        
        
           
            
    })

        
};

// this will be used for random number generation and also for selecting colors of boxes randomly from array
function pressAnimtion(id) {
    $("#" + id).addClass("pressed");
    setTimeout(() => {
        $("#" + id).removeClass("pressed");
    }, 100);
    var audio = new Audio("./sounds/" + id + ".mp3");
    audio.play();
};

function comSelect() {
    $("h1").text("wait");
    colorToAdd = colorList[Math.floor(Math.random() * colorList.length)];
    com.push(colorToAdd)
    for (let index = 0; index < com.length; index++) {
        setTimeout(() => { pressAnimtion(com[index]) },index*500+500)
    }
   setTimeout(() => {
    $("h1").text("Your turn");
   }, com.length*500 + 500);
    
    
}
