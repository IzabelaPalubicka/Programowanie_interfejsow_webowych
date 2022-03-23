"use strict"

document.addEventListener("DOMContentLoaded", function() {

    //let deletedText;
    let savedTask; 
    let selectedText = ""; 
    let savedList;
    let i;

    // dodawanie tasku
    const addBtn = document.querySelector("#add");
    addBtn.addEventListener("click", adder);

    function adder () {
        const task = document.getElementById("add-task").value;
    
        if(task === "" || selectedText === "" || selectedText === "Select list") {
            console.warn("Zadanie musi zostać podane!!!");
        }
        else{
            addTask(task, false)
        }
    }

    function addTask(text, deleted){
    
        let findedList;
        for (i = 0; i < acc.length; i++) {
            if(acc[i].textContent  === selectedText && deleted === false){
                console.warn(acc[i].textContent);
                findedList = acc[i].nextElementSibling;
            }
            else if(deleted === true){
                findedList = document.getElementById(savedList);
            }
        } 
        const newDiv = document.createElement("div");
        newDiv.className = "task";
        const newBtn =  document.createElement("button");
        newBtn.textContent = "x";
        newBtn.className = "btn btn-remove btn-light";
        newBtn.addEventListener("click", deleteText);
        newDiv.append(newBtn);
        const newP =  document.createElement("p");
        newP.textContent = text;
        newP.addEventListener("click", greyCrossedText);
        const newSpan = document.createElement("span");
        newDiv.append(newP);
        newDiv.append(newSpan);
        findedList.append(newDiv);
    }
    
    // wyszrarzanie, przekreślanie i dopisywanie daty
    const tasks = document.querySelectorAll("#tasks p");

    for(let i = 0; i < tasks.length; i++){
        tasks[i].addEventListener("click", greyCrossedText);
    }

    function greyCrossedText()  {
        const date = this.nextSibling;

        if(this.style.color === "grey"){
            this.style.color = "black";
            this.style.textDecoration = "none";
            date.textContent = "";
        }
        else {
            this.style.color = "grey";
            this.style.textDecoration  = "line-through";

            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;

            date.textContent = " " + today;
        }
    }

    // usuwanie tasków z list

    $(".btn-remove").on("click", deleteText);

    function deleteText()
    {
        if ( $(this).parent().is( "div" ) ) {
            savedTask = $(this);
            if($(this).parents('#Urgent'))
                savedList = "Urgent";
            else if($(this).parents('#Today'))
                savedList = "Today";
            else if($(this).parents('#Outstanding'))
                savedList = "Outstanding";
            console.warn(savedList);
            $(".modal").show();
        }
    }

    // potwierdzenie na modalu
    $(".btn-yes").on("click", function() {
        console.warn(savedTask.next("p").text());
        savedTask.parent().remove();
        $(".btn-undelete").show();
        $(".modal").hide();
    })

    $(".btn-no").on("click", function() {
        $(".modal").hide();
    })

    // przywrócenie taska
    $(".btn-undelete").on("click", function() {
        addTask(savedTask.next("p").text(), true)
        $(this).hide();
    })

    // obsługa selectora list
    const sel = document.getElementById("selector");
    sel.addEventListener('change', update);

    function update() {
        var selected = document.getElementById('selector');
        var option = selected.options[selected.selectedIndex];

        selectedText = option.text;
    }

    // obsługa kart list
    const acc = document.getElementsByClassName("accordion");

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");

            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
            panel.style.display = "none";
            } else {
            panel.style.display = "block";
            }
        });
    }
});