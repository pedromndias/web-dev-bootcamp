$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
// Note how we need to have $("ul") first in order to get changes
// for future <li> or <span>. These come as 2n argument on the ".on".
// They specifize <li>'s or <span>'s that may or not have been on the
// page when it was loaded.
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();

});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");

    }
});

$("#toggle-form").click(function(){
    $("input[type='text']").fadeToggle();
})