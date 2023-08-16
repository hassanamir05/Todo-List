document.querySelector(".add").addEventListener("click", function() {
    Valid();
});

document.body.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        Valid();
    }
});

function Valid() {
    var paragraph = document.querySelector("#paragraph").value;
    if (paragraph.trim() === "") {
        document.querySelector("#paragraph").value = "";
        document.querySelector(".inp").classList.add("warning");
        setTimeout(function() {
            document.querySelector(".inp").classList.remove("warning");
        }, 300);
    } else {
        AddTask(paragraph);
    }
}

function AddTask(paragraph) {
    document.querySelector("#paragraph").value = "";
    // create a new div to add a new task
    const newDiv = document.createElement("div");
    newDiv.className = "task";

    // create a new p tag
    const newP = document.createElement("p");
    newP.className = "container-p";
    newP.innerHTML = paragraph;

    const deleteButton = document.createElement("button");
    deleteButton.className = "box red delete";
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';

    // Add event listener to delete button
    deleteButton.addEventListener("click", function() {
        newDiv.remove(); // Remove the entire task (div)
    });

    newDiv.appendChild(newP);
    newDiv.appendChild(deleteButton);
    document.querySelector(".container").appendChild(newDiv);
}
