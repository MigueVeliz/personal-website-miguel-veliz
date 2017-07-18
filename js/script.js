$(document).ready(function() {





    // var options = {
    //     strings: ["I ^2000 am a ", "Second sentence."],
    //     typeSpeed: 65
    // }




    setTimeout(function() {
        var typed = new Typed("#name", {
            strings: ["I ^1000 am a", "Hi!, I am Angel Veliz"],
            typeSpeed: 65
        });

    }, 500)


    setTimeout(function() {
        var typed = new Typed("#typed", {
            strings: ["I \^1000 am a", "I am a Full Stack Developer In Brooklyn"],
            typeSpeed: 65
        });

    }, 3000)





});
