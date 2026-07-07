function saveTask(){

let task=document.getElementById("taskName").value;

if(task==""){
    alert("Enter a task");
    return;
}

document.getElementById("output").innerHTML="Latest Task : "+task;

}