function addToDo(){
    // read the input
    //var text = document.getElementById('txt-task').value; JS
    var text = $('#txt-task').val();
    var x=0;

if(text!=""){
    //clean the input
    //document.getElementById('txt-task').value = ""; JS
    $('#txt-task').val("");
    console.log(text);
    //create the string (HTML)
    //var li = "<li>" + text+"</li>";
    var li = `<li id='${x}'>${text} <button onclick="deleteToDo('${x}');">-</button> </li>`;
    //display the todo
    $('#pending-list').append(li);
    //set the focus to the input again

    $(`#txt-task`).focus();
    }

    
if(text==""){
    $('#txt-task').val("");
    console.log("You have not created a new task yet!");
    alert("You have not created a new task yet!");
    }
   
} 

function deleteToDo(id){
    console.log("delete");
    $('#' + id).remove();
}

 function init(){
    console.log("Init the todo App");
    $("#btn-add").click(addToDo);
}  

 function alertMe(){
     if(text==""){
     $('#txt-task').val("");
     console.log("You have not created a new task yet!");
     alert("You have not created a new task yet!");
    }
}

 //when the browser finish
 window.onload=init;

 //alert message if nothing is inserted into new task


