function addTask(){

    const date = document.getElementById("date").value;
    const task = document.getElementById("task").value;

    if(task === "") return;

    const li = document.createElement("li");
    li.textContent = date + " : " + task;

    document.getElementById("taskList").appendChild(li);

    document.getElementById("task").value = "";

}
