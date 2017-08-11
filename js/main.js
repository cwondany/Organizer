var menuCounter = 0;

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

    if (menuCounter == 0) {
        tabWrapper.className = "tab";
        document.body.appendChild(tabWrapper);
        tabWrapper.appendChild(tabHeading);
    }

    menuCounter++;


    const menuBtn = document.createElement("BUTTON");
    menuBtn.className = "tablinks";
    menuBtn.id = "task" + menuCounter;
    menuBtn.innerHTML = "" + document.getElementById("taskTitle").value + ".......";
    tabWrapper.appendChild(menuBtn);

    var deleteX = document.createElement("SPAN");
    var txtX = document.createTextNode("\u00D7");
    deleteX.className = "close";
    deleteX.appendChild(txtX);
    menuBtn.appendChild(deleteX);

    const menuWrapper = document.createElement("DIV");
    menuWrapper.id = "m" + menuCounter;
    tabWrapper.appendChild(menuWrapper);

    const tabContentWrapper = document.createElement("DIV");
    tabContentWrapper.id = "t" + menuCounter;
    tabContentWrapper.className = "tabcontent";
	tabContentWrapper.contentEditable="true";
    document.body.appendChild(tabContentWrapper);

	if (menuCounter == 1) {
	const textBar = document.createElement("DIV");
    textBar.id = "textBar";
	textBar.style.display ="none";
	textBar.contentEditable="false";
    tabContentWrapper.appendChild(textBar);
	createEditorBar();
	
	}
    const tabContentTitle = document.createElement("H3");
    tabContentTitle.innerHTML = "" + document.getElementById("taskTitle").value;
    tabContentWrapper.appendChild(tabContentTitle);

    const taskDescription = document.createElement("P");
    taskDescription.innerHTML = "" + document.getElementById("taskDescription").value;
    tabContentWrapper.style.display = "none";
    tabContentWrapper.appendChild(taskDescription);

	
    tabContentWrapper.addEventListener("mouseOut", function mouseOut() {
		this.contentEditable = false;
		 });

    menuBtn.addEventListener("mousedown", function mouseDown(e) {
        e = e || window.event;
        switch (e.which) {
            case 1:
                createTask(event, tabContentWrapper.id);
                break;
            case 3:
                alert('right');
                addSubmenu(menuWrapper.id);
                break;
        }
    });

    //  Add event handler
    // menuBtn.addEventListener("click", function () {
    //   toggleDiv();
    //});

    var closeSpan = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < closeSpan.length; i++) {

        // Gelöscht wird immer das letzte Element:
        closeSpan[i].onclick = function () {
            var a = document.getElementById(menuBtn.id);
            a.style.display = "none";
            tabContentWrapper.style.display = "none";

            var b = document.getElementById(menuWrapper.id);
            b.style.display = "none";
        }
    }

    clearInputTags();
}

function deleteDiv(clickedId) {
    var a = document.getElementById(menuBtn.id);
    a.style.display = "none";
    tabContentWrapper.style.display = "none";

    var b = document.getElementById(menuWrapper.id);
    b.style.display = "none";
}

function toggleDiv(clickedId) {
    var divToFade = document.getElementById('item' + clickedId);
    if (divToFade.style.display === 'none') {
        divToFade.style.display = 'block';
    } else {
        divToFade.style.display = 'none';
    }
}

function addSubmenu(clickedId) {

    var subMenu = document.getElementById(clickedId);
    const subMenuBtn = document.createElement("BUTTON");
    subMenuBtn.className = "subtablinks";
    subMenuBtn.id = "subtask" + menuCounter;
    subMenuBtn.innerHTML = "sub" + document.getElementById("taskTitle").value;
    subMenu.appendChild(subMenuBtn);
}

function clearInputTags() {
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
	textBar.style.display ="block";
}

function createEditorBar() {
    const barBtn = document.createElement("BUTTON");
    barBtn.className = "btn-group";
	barBtn.innerHTML = "B";
	
	const barBtn2 = document.createElement("BUTTON");
    barBtn2.className = "btn-group";
	barBtn2.innerHTML = "U";
	
	const barBtn3 = document.createElement("BUTTON");
    barBtn3.className = "btn-group";
	barBtn3.innerHTML = "I";
	
	const img = document.createElement("BUTTON");
    img.className = "btn-group";
	img.innerHTML = "IMG";
	
	textBar.appendChild(barBtn);
	textBar.appendChild(barBtn2);
	textBar.appendChild(barBtn3);
	//textBar.appendChild(img);
	
	 barBtn.onclick = function makeBold() {
	 document.execCommand('bold',false,null);
	 }
	 barBtn2.onclick = function makeUnderline() {
     document.execCommand ('underline', false, null);
     }
	 barBtn3.onclick = function makeItalic() {
     document.execCommand ('italic', false, null);
     } 
	 img.onclick = function addImage() {
     document.execCommand("insertImage", false, imageUrl);
     }
}