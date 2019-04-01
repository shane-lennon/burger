// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-eat").on("click", function(event) {
    var id = $(this).data("id");
    var newEatState = $(this).data("newEatState");

    var newEatState = {
      "devoured": true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      //data: newEatState, dataType:"json",
      //contentType: "application/json"
    }).then(
      function() {
        console.log("Was whole now devoured", newEatState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#burgerBTN").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burgerForm").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("A new tasty burger to DEVOUR");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
