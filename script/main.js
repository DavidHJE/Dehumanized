var consoleRunning = false;


function l ( obj = "Test") {
    console.log(obj)
}
function delay( f , time ) {

    function myFunc() {
        var id = setTimeout(f, time);        
    }
    myFunc();


}
$.fn.extend({
    callFadeUp: function( time = 2000 , animSpeed = 50 , duration = 1000){
        var self = this;

        var myVar;
        function myFunction(self, animSpeed, duration) {
            myVar = setTimeout(call, time);
        }
        function call() {
            fadeUp(self.selector, animSpeed, duration)
        }
        myFunction(self, animSpeed, duration)

        return this; // to allow for further chaining.
    },
    hasOverflow : function() {
        var $this = $(this);
        var $children = $this.find('*');
        var len = $children.length;

        if (len) {
            var maxHeight = 0
            $children.map(function(){
                maxHeight = Math.max(maxHeight, $(this).outerHeight(true));
            });

            return maxHeight > $this.height();
        }

        return false;
    }
});

function arrayMe(string) {

    // For all matching elements
    $(string).each(function() {

        // Get contents of string
        var myStr = $(this).html();

        // Split myStr into an array of characters
        myStr = myStr.split("");

        // Build an html string of characters wrapped in tags with classes
        var myContents = "";
        for (var i = 0, len = myStr.length; i < len; i++) {
            myContents += '<span class="single-letter letter-'+i+'">' + myStr[i] + '</span>';
        }

        // Replace original string with constructed html string
        $(this).html(myContents);
        $(".single-letter:contains(' ')").css("margin-left", "1.5rem");
    });
}
function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}
function fadeUp(selector, animSpeed = 45, duration = 1000) {

    $(selector).css("display","flex");

    delay(function() {
        var count = $(selector).children('.single-letter').length;
        var delOrder = [];
        for(var i=0;i<count;i++) {
            delOrder.push(i);
        }
        shuffle(delOrder);

        var i = 0;                     //  Set a counter to 0
        function myLoop (selector) {           //  Create a loop function
            setTimeout(function () {    //  Call a 30ms setTimeout when the loop is called
                var myClass = '.letter-' + delOrder[i];    //  Target a random character by class
                $(selector).children(myClass).css('height','2000px');
                i++;                     //  Increment the counter


                if (i == delOrder.length ) {
                    $(selector).remove();
                }
                else {            //  If the counter < array length, call the loop function
                    myLoop(selector);             //  ..  again which will trigger another 
                }                        //  ..  setTimeout()
            }, animSpeed)
        }
        myLoop(selector);                      //  Start the loop
    }, duration);
}
function showText (target, message, speed, index=0) {   
    if (index < message.length) {
        $(target).append(message[index++]);
        checkOverflow(target);
        setTimeout(function () {
            showText(target, message, speed, index);
        }, speed);
    }
}
function showDelayedText( curDelay, target, message, speed, pause = 250, index=0) {

    delay(function() {

        showText(target, message, speed);        

    }, curDelay);
    curDelay += message.length * speed + 50;
    delay(function() {

        $(target).append("<br/>");       

    }, curDelay);

    return curDelay + pause;
}
function checkOverflow(targetChild) {
    var $p = $(targetChild).parent("div");
    if ( $p.hasOverflow() ) {
        $p.scrollTop( $p.scrollTop() + 100 );
    }
}

function playIntro() {

    $(document).ready(function() {


        // On affiche le premier.
        var first = $(".test p.first");
        var second = $(".test p.second");
        var third = $(".test p.third");
        $("body").css('background-color', '')


        arrayMe(first);
        arrayMe(second);
        arrayMe(third);
        first.callFadeUp(0, 50, 2000);
        second.callFadeUp(3000, 25, 3500);
        third.callFadeUp(7500, 25, 3500);

        delay(function() {
            $(".test").css("min-height", "0vh").delay(2000).fadeOut(600);
        }, 12000); //Remonte l'écran


    });

}
function playConsole() {

    if ( !consoleRunning ) {
        consoleRunning = true;
        $( ".texte" ).empty();
        var t = ".texte";
        var speed = 65;
        var curDelay = 0;

        curDelay = showDelayedText( curDelay, t, "> Hey salut toi !", speed );
        curDelay = showDelayedText( curDelay, t, "> Je suis le doc.", speed, 800);
        curDelay = showDelayedText( curDelay, t, "> Ne crois pas ce qui est écrit sur ce site ...", speed, 500 );
        curDelay = showDelayedText( curDelay, t, "> Ne crois pas ce qui est écrit sur ce site ...", 30, 300 );
        curDelay = showDelayedText( curDelay, t, "> Ne crois pas ce qui est écrit sur ce site ...", 10, 50 );
        curDelay = showDelayedText( curDelay, t, "> Ne crois pas ce qui est écrit sur ce site ...", 5, 1 );
        curDelay = showDelayedText( curDelay, t, "> Ne crois pas ce qui est écrit sur ce site ...", 1, 1 );
        curDelay = showDelayedText( curDelay, t, "> Ne crois pas ce qui est écrit sur ce site ...", 1, 1 );
        curDelay = showDelayedText( curDelay, t, "> Ne crois pas ce qui est écrit sur ce site ...", 2, 1 );
        curDelay = showDelayedText( curDelay, t, "> Ne crois pas ce qui est écrit sur ce site ...", 3, 1 );
        curDelay = showDelayedText( curDelay, t, "> Ne crois pas ce qui est écrit sur ce site ...", 10, 500 );
        curDelay = showDelayedText( curDelay, t, "> Ne crois pas ce qui est écrit sur ce site ...", 40, 1000 );
        curDelay = showDelayedText( curDelay, t, "",0, 0 );
        curDelay = showDelayedText( curDelay, t, "> Ne crois pas ce qui est écrit sur ce site.", 80);
        curDelay = showDelayedText( curDelay, t, "> Ils m'ont repéré.", 30, 150);
        curDelay = showDelayedText( curDelay, t, "> Je dois y aller !", 30);
        delay( function() {
            consoleRunning = false;
        }, curDelay)
    }

}

$(document).ready(function(){
    
    playIntro();
    //    $('.test').hide();
    delay(function() {
        playConsole();  
    },13000)

    $( ".hr" ).toggleClass("hr-anim-stop").toggleClass("hr-anim-start");

    $( "#rerun" ).click(function() {
        playConsole();
    });
    
    $( "#skip" ).click(function() {
        $('.test').hide();
        playConsole();        
    });

    var IDinterval = setInterval(function() {
        $('.underscore').toggleClass('change-letter-1');
    }, 1000);     //Anime underscore

});



