var allTasks = [
  {
    name: "I Gonna Earn 1M This Year",
    priority: "Critical",
  },
];

var taskCompleted = [];

function loadList() {
  var listHtml = "";
  for (var i = 0; i < allTasks.length; i++) {
    listHtml +=
      '<div class="tasks">' +
      allTasks[i]["name"] +
      "" +
      " [" +
      allTasks[i]["priority"] +
      ']<div class="icons"><i class="fa fa-check checkButton" onclick="completeTask(' +
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
  }
}

function completeTask(i) {
  loadList();
  var tempTask = [];
  for (var k = 0; k < allTasks.length; k++) {
    if (k == i) {
      taskCompleted.push(allTasks[k]);
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
  var html = "";
  for (var i = 0; i < taskCompleted.length; i++) {
    html += taskCompleted[i].name + " " + taskCompleted[i].priority + "\n";
  }
  $("#completedTasksList").text(html);
  $("#myModal").css("display", "block");
}

$(".close").click(function () {
  $("#myModal").css("display", "none");
});
