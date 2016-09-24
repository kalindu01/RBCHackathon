

$(document).ready(function() {
    
    $(".main-view").hide();
    
    $("#tabs ul li a").click(function(){  
        var elem_id = $(this).attr("href").substring(1);
        var elem = document.getElementById(elem_id);
        var hide_elem = document.getElementsByClassName("active-view")[0];
        
        $(elem).show();
        $(hide_elem).hide();
        $(hide_elem).removeClass("active-view");
        $(elem).addClass("active-view");

    });
});
