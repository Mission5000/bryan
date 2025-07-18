var allTasks = [];

var taskCompleted = [];

function loadList() {
  var listHtml = "";
  for (var i = 0; i < allTasks.length; i++) {
    listHtml +=
      '<div class="tasks">' +
      allTasks[i]["name"] +
      ' <span class="priority-pill ' +
      allTasks[i]["priority"].toLowerCase() +
      '">' +
      allTasks[i]["priority"] +
      "</span>" +
      '<div class="icons"><i class="fa fa-check checkButton" onclick="completeTask(' +
      i +
      ')" aria-hidden="true"></i> <i class="fa fa-trash deleteButton" onclick="deleteTask(' +
      i +
      ')" aria-hidden="true"></i></div></div>';
  }
  $("#inputtedTasks").html(listHtml);
}

loadList();

function addTasks() {
  var typedTask = $("#inputTask").val();
  var selectedPriority = $("#importanceSelector").val();
  if (
    typedTask === "" ||
    (selectedPriority != "Critical" &&
      selectedPriority != "High" &&
      selectedPriority != "Medium" &&
      selectedPriority != "Low")
  ) {
    alert("Please Enter Your Task / Select Your Priority");
  } else {
    var task = {
      name: typedTask,
      priority: selectedPriority,
    };
    allTasks.push(task);
    $("#inputTask").val("");
    loadList();
  }
}

function completeTask(i) {
  var tempTask = [];
  for (var k = 0; k < allTasks.length; k++) {
    if (k == i) {
      var date = new Date();
      var options = { hour: "numeric", minute: "numeric", hour12: true };
      var time = new Intl.DateTimeFormat("en-US", options).format(date);
      var formattedDate =
        time +
        " " +
        date.getDate() +
        " " +
        date.toLocaleString("en-US", { month: "long" }) +
        " " +
        date.getFullYear();
      var completedTask = {
        ...allTasks[k],
        completedDate: formattedDate,
      };
      taskCompleted.push(completedTask);
    } else {
      tempTask.push(allTasks[k]);
    }
  }
  allTasks = tempTask;
  loadList();
}

function deleteTask(i) {
  var filteredTasks = [];
  for (var j = 0; j < allTasks.length; j++) {
    if (j != i) {
      filteredTasks.push(allTasks[j]);
    }
  }
  allTasks = filteredTasks;
  loadList();
}

function listTasks() {
  var tableHtml = "";
  for (var i = 0; i < taskCompleted.length; i++) {
    tableHtml +=
      "<tr><td>" +
      taskCompleted[i].name +
      "</td><td>" +
      taskCompleted[i].priority +
      "</td><td>" +
      taskCompleted[i].completedDate +
      "</td></tr>";
  }
  $("#completedTasksTable").html(tableHtml);
  $("#completedTasksModal").css("display", "block");
}

function closeModal() {
  $("#completedTasksModal").css("display", "none");
}

$(".close").click(function () {
  $("#myModal").css("display", "none");
});
