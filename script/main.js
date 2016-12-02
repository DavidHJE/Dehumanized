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
    }
});


function setDisplay( obj, option ){
    obj.css("display", option)
}
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
        var IDinterval = setInterval(function() {
            $('.test p.underscore').toggleClass('change-letter-1');
        }, 1000);     //Anime underscore

    });

}

//$('.test').hides();

$(document).ready(function(){
    
    playIntro()

    $( "#go" ).click(function() {
        $( ".hr" ).toggleClass("hr-anim-stop").toggleClass("hr-anim-start");
    });

});




