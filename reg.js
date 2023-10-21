function halert(){
    var email = document.getElementById("email").value;
    if(email==""){
        document.getElementById("email").style.border="1px solid red";
        document.getElementById("nemail").innerHTML="*required";
        document.getElementById("nemail").style.color="red";
        event.preventDefault();
    }}














