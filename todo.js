// Initializing the array that will hold the todo objects
let list = [];

// Declaring and inializing buttons for user events
let showBtn = document.getElementById("show");
let removeBtn = document.getElementById("remove");
let addBtn = document.getElementById("insert");

// Stores the first todo to be added to the list
let todo = prompt("What would you like to do?");

// Checks that the user presses cancel or adds an actual value before pressing enter
while (todo === "") {
    alert("Please enter a valid item to the task list");
    todo = prompt("What would you like to do?");
};

// If there is a valid todo, add it to the list array
if (todo !== null) {
    list.push(todo);
    // Removes the disabled attribute from the remove button
    removeBtn.removeAttribute("disabled");
};




/* ============================================================================================ */
/* |||||||||||||||||||||||||||||||||   Button Functionality   |||||||||||||||||||||||||||||||||
/*============================================================================================= */

//Adds a todo to the Todo List
addBtn.addEventListener("click", function(){
    // Stores new todo item in todo variable
    todo = prompt("Please Enter A Todo Item", "Todo Item");
    
    // Checks that the user presses cancel or adds an actual value before pressing enter
    while (todo === "Todo Item" || todo === "") {
        alert("Please enter a valid item to the task list");
        todo = prompt("What would you like to do?");
    };
    
    // If there is a valid todo, add it to the list array
    if (todo !== null) {
        list.push(todo);
        console.log(list);

        // After adding a todo, if the removed but was disabled, removed the disabled attribute
        if(removeBtn.hasAttribute("disabled") === true){
            removeBtn.removeAttribute("disabled");
        }

    };
 
});

//Displays the items in the Todo List at the console
showBtn.addEventListener("click", function(){
    // initializes empty string that will display the list and specified index
    let listDisplay = "";

    // Loops through array and builds string of list
    for (let i = 0; i < list.length; i++) {
        // adds 1 to i so that the list begins count from 1 instead of 0.
        listDisplay += (i + 1) + ". " + list[i] + "\n";
    };

    
    if(list.length === 0) {
        console.log("There are currently no tasks in the list");
    } else {
        // Outputs list items with their list number if there are items in the list
        console.log("You Have " + (list.length) + " Unfinished Todos");
        console.log(listDisplay);
    };
    
});



// Declares variables to be used in removeBtn even listener
let removeIndex;
let trashBin;

//Removes the todo at the specified index
removeBtn.addEventListener("click", function(){
    // Takes a string as an input and converts it to a number type before storing in the removeIndex variable
    removeIndex = Number(prompt("Please specify the number of the item you'd like to delete"));

    // Checks that the user enter a valid number
    while(removeIndex === NaN) {
        alert("please enter a number greater than 0");
        removeIndex = Number(prompt("Please specify the number of the item you'd like to delete"));
    };
    
    // Removes the item at the specified index value which must be greater than 0
    if(removeIndex > 0 && list.length > 0) {
        
        // Subtracts 1 from removed index so that the proper item is removed, also adds the removed item into the trashBin array.
        trashBin = list.splice(removeIndex - 1, 1);

        // displays a message of the item that was removed from the list.
        alert("You removed " + (trashBin[trashBin.length - 1]) + " from the list"); 
    };

    // Disables the remove button if all that items in the list has been removed
    if(list.length === 0) {
        removeBtn.setAttribute("disabled", "");
    } else {
        removeBtn.removeAttribute("disabled");
    };
    
});


