//Check of specific todos by clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){ //span.parent is equal to li
        $(this).remove();
    });
    event.stopPropagation();//this makes li's method not to trigger by click the span
});

$("input[type='text']").keypress(function(event){
    if(event.which===13){
        let todoText = $(this).val(); //gets the value of the text input
        $(this).val("");
        //create a new li an add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
    }
});

$(".fa-plus").on("click",function(){
   $("input[type='text']").fadeToggle();
});