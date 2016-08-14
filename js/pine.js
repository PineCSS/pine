/*
 * PineJS (http://pinecss.com)
 * Copyright 2016, Savas Can ALTUN <savascanaltun@gmail.com>
 * http://github.com/pineCSS/pine
 */
if (typeof jQuery === 'undefined') {
    throw new Error('PineCSS requires jQuery')
}



// PineBOX //

$.fn.pinebox = function(options) {


    var pinebox = $("#" + options.id);

    var escape = options.escape;


    this.click(function() {

        window.onclick = function(event) {

            if (event.target == document.getElementById(options.id)) {
                pinebox.hide();
            }
        }


        pinebox.show();

    });

    // Close box button 
    $('.pinebox-close').click(function() {
        pinebox.hide();

    });

    // Escape
    if (escape) {
        $(document).keyup(function(e) {

            if (e.keyCode === 27) pinebox.hide(); // escape

        });
    }


};

// PineTabs //

$('ul.pinetabs li').click(function() {
    var tab_id = $(this).attr('data-tab');

    $('ul.pinetabs li').removeClass('current');
    $('.pinetabs-content').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
});


// PineAccordion //

var accordion = document.getElementsByClassName("pineaccordion");
for (var i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

// Pine Navbar //



$("<select class='full-width'/>").appendTo(".pinenavbar");


$("<option />", {
    "selected": "selected",
    "value": "",
    "text": "MENU"
}).appendTo(".pinenavbar select");

$(".pinenavbar nav li a").each(function() {
    var el = $(this);


    $("<option />", {
        "value": el.attr("href"),
        "text": el.text()
    }).appendTo(".pinenavbar select");


    $(".pinenavbar select").change(function() {
        window.location = $(this).find("option:selected").val();
    });
});