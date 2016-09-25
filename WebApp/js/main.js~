

$(document).ready(function() {
    // jana's stuff
    
    $(".view").mouseenter(function() {
        $(this).css("box-shadow","10px 10px 5px #888" );
    });
    $(".list").mouseenter(function() {
        $(this).css("box-shadow","10px 10px 5px #888");
    });
    $(".view").mouseleave(function() {
        $(this).css("box-shadow","0px 0px 0px" );
    });
    $(".list").mouseleave(function() {
        $(this).css("box-shadow","0px 0px 0px");
    });
    // jana's stuff ^^



    $(".main-view").hide();
    $(document.getElementById("profile")).show();
    
    $("#tabs ul li a").click(function(){  
        var elem_id = $(this).attr("href").substring(1);
        var elem = document.getElementById(elem_id);
        
        if(!$(elem).hasClass("active-view")) {
            var hide_elem = document.getElementsByClassName("active-view")[0];
            $(elem).show();
            $(hide_elem).hide();
            $(hide_elem).removeClass("active-view");
            $(elem).addClass("active-view");
        }
        

    });
});
