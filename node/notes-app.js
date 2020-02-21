const chalk = require("chalk");
const params = require("./modules/params.js");
const yargs = require("yargs");

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder:{
      title:{
          describe:'note title',
          demandOption:true,
          type:"string"
      },
      body:{
          describe:"body of the note",
          demandOption:true,
          type:'string'
      }
  },
  handler: function(argv) {
    console.log(chalk.green.inverse.bold("Adding a new note : ",argv.title));
    console.log(chalk.green.inverse("body of the note : ",argv.body));
  }
});

// create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    console.log("Removing a note !");
  }
});

// create list command
yargs.command({
  command: "list",
  describe: "list the notes",
  handler: function() {
    console.log("Listing notes !");
  }
});

// create read command
yargs.command({
  command: "read",
  describe: "read the notes",
  handler: function() {
    console.log("Reading notes !");
  }
});
yargs.parse();
