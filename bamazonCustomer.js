var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",
  password: "rootroot",
  database: "bamazon"
});

connection.connect(function(err) {

  if (err) {
    console.error("error connecting: " + err.stack);
  }
  displayItems();
});


function displayItems(){
  connection.query("SELECT * FROM items" + function(err, res) {
    if (err) throw err;
    console.log(res);
    // connection.end();
    promptItemID(res);
  });
}

function promptItemID(products) {
  inquirer
    .prompt([
      {
        type:"input",
        name:"choice",
        message:"What is the ID of the product you would like to buy?"
      }
    ])
    .then(function(val) {

      const itemID = parseInt(val.choice);
      const productName = checkProducts(itemID, products);




}
  

function beautySearch() {
  inquirer
    .prompt({
      name: "product",
      type: "input",
      message: "What beauty product are you looking for?"
    })
    .then(function(answer) {
      var query = "SELECT item_id, product_name, department_name, price, stock_quantity FROM products WHERE ?";
      connection.query(query, { product: answer.product }, function(err, res) {
        for (var i = 0; i < res.length; i++) {
        //   console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
        // }
        productSearch();
      });
    });
}

// function loadProducts() {
//   // Selects all of the data from the MySQL products table
//   connection.query("SELECT * FROM products", function(err, res) {
//     if (err) throw err;

//     // Draw the table in the terminal using the response
//     console.table(res);
