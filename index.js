$("#btn").on("click", function () {
  if (!!$("#task-input").val()) {
    $(".tasksBox").append(
      "<div class='task2'><div class='task'>" +
        $("#task-input").val() +
        "</div>" +
        "<button class='done' >Done</button> <button class='delete' >Delete</button><br></div>"
    );
    $("#task-input").val("");
  } else {
    console.error("Empty value");
  }
});
$(document).on("click", ".delete", function () {
  $(this).parent(".task2").remove();
});

$(document).on("click", ".done", function () {
  $(this).parent(".task2").toggleClass("TaskDone");
});
