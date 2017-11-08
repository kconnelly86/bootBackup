var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "list",
      message: "Would you like to post or bid?",
      choices: ["Post", "Bid"],
      name: "start"
    }
  ])
  .then(function(inquirerResponse) {
    if (inquirerResponse.start == 'Post') {
      console.log("\nYou've chosen post! ");
//--------------------------------SECOND NESTED QUESTION-------------------------
		inquirer
		  .prompt([
		    // Here we create a basic text prompt.
		    {
		      type: "list",
		      message: "Would you like to post or bid?",
		      choices: ["Post", "Bid"],
		      name: "start"
		    }
		  ])
		  .then(function(inquirerResponse) {

		  });
//-----------------------------------------------------------------------------
    }
    else {
      console.log("\nYou've chosen bid.\n");
//--------------------------------SECOND NESTED QUESTION-------------------------

//-----------------------------------------------------------------------------

    }
  });
