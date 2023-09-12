$("#userName").focus();
$('#Login').prop('disabled', true);

// name verication
$("#userName").keypress(function(){
   
    if($("#userPass").val()!="" && $("#userName").val()!="" && $("#floatingInput").val() !="")

    {
    
        $('#Login').prop('disabled', false);
    
    }
    if($("#userName").val()=="")
    {
        $('#Login').prop('disabled', true);
    }
   




});









// email verification
$("#floatingInput").keypress(function(){
   
    if($("#userPass").val()!="" && $("#userName").val()!="" && $("#floatingInput").val() !="")

    {
    
        $('#Login').prop('disabled', false);
    
    }

    if($("#floatingInput").val()=="")
    {
        $('#Login').prop('disabled', true);
    }
   
  

});





// password verification.
$("#userPass").keypress( function(){
    if($("#userPass").val()!="" && $("#userName").val()!="" && $("#floatingInput").val() !="")

{

    $('#Login').prop('disabled', false);

}

if($("#userPass").val()=="")
    {
        $('#Login').prop('disabled', true);
    }
   


}
)







