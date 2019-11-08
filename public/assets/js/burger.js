$(function() {
    $(".burgerAvailable").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("devoured");
        console.log(newDevoured );
        console.log(id);
      var newDevouredState = {
        devoured: newDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed state to", newDevoured);
    
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    $(".create-form").on("click", function(event) {
        
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var newBurger = {
          burger_name: $("#name").val().trim(),
          devoured: $("[name=devoured]:checked").val().trim()
        };
    console.log(newBurger);
        
        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
          }).then(
            function() {
              console.log("created new burger");
            
              // Reload the page to get the updated list
              location.reload();
            }
            );
        }
    );
  });