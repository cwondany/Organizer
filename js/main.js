var counterForLinks = 0;
var numOfSubmenus = 0;


const tabWrapper = document.createElement("DIV");
const tabHeading = document.createElement("H5");
tabHeading.innerHTML = "Aufgaben";


function addMenu() {


    if (document.getElementById('taskTitle').value === "") {
        alert("Die Eingabe ist nicht vollstaendig! Bitte versuchen Sie es erneut.");
        return;
    }
    if (document.getElementById('taskDescription').value === "") {
        alert("Die Eingabe ist nicht vollständig! Bitte versuchen Sie es erneut.");
        return;
    }

    if (counterForLinks == 0) {

        tabWrapper.className = "tab";
        document.body.appendChild(tabWrapper);
        tabWrapper.appendChild(tabHeading);

    }
    const menuBtn = document.createElement("BUTTON");
    menuBtn.className = "tablinks";
    menuBtn.id = "task" + counterForLinks;
    menuBtn.innerHTML = "" + document.getElementById("taskTitle").value;
    tabWrapper.appendChild(menuBtn);
    counterForLinks++;

    //const addSubmenuBtn2 = document.createElement("BUTTON");
    //addSubmenuBtn2.id = (counterForLinks);
    //addSubmenuBtn2.innerHTML = "-";
    //menu.appendChild(addSubmenuBtn2);

    const tabContentWrapper = document.createElement("DIV");
    tabContentWrapper.id = "t" + counterForLinks;
    tabContentWrapper.className = "tabcontent";
    document.body.appendChild(tabContentWrapper);

    const title = document.createElement("H3");
    title.innerHTML = "" + document.getElementById("taskTitle").value;
    tabContentWrapper.appendChild(title);

    const description = document.createElement("P");
    description.innerHTML = "" + document.getElementById("taskDescription").value;
    tabContentWrapper.style.display = "none";
    tabContentWrapper.appendChild(description);


    //  Add event handler
    menuBtn.addEventListener("click", function (event) {
        createTask(event, "t" + counterForLinks);
    });

    // addSubmenuBtn2.addEventListener("click", function () {
    //     toggleSubmenu(addSubmenuBtn2.id);
    // });

    clearText();
}

function toggleSubmenu(clickedId) {
    var x = document.getElementById('item' + clickedId);
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function addSubmenu(clickedId) {

    //    //alert(clickedId);
    //    numOfSubmenus += 5;
    //    var item = document.getElementById('item'+clickedId  );
    //
    //    var input = document.createElement('input'),      
    //    div = document.createElement('div');
    //    input.type = "text";
    //    input.setAttribute("name", "item[]");
    //    input.setAttribute("class", "item");
    //
    //    
    //    div.appendChild(input);
    //    item.appendChild(div);


    numOfSubmenus += 5;
    var item = document.getElementById('item' + clickedId);

    var subLinkElement = document.createElement('A'),
        subDiv = document.createElement('div');
    subDiv.className = "subNav";

    subLinkElement.id = "menuID" + clickedId + clickedId;
    subLinkElement.setAttribute("href", "/html" + clickedId + clickedId);

    const menuName = document.createTextNode("SUB-HTML ");
    subLinkElement.appendChild(menuName);
    subDiv.appendChild(subLinkElement);
    item.appendChild(subDiv);


}

function clearText() {
    document.getElementById('taskTitle').value = "";
    document.getElementById('taskDescription').value = "";
}

function createTask(event, taskId) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(taskId).style.display = "block";
    event.currentTarget.className += " active";



}



