
function createTask(){
    alert("Hello! I am an alert box!!");
    //    document.getElementById("content").value = "Kyu";

    drawRect();
    textToRect();  
}


//////////////////////////////////////////////////////////////
//Variables//////////////////////////////////////////////////

var positionTop = 0;
var gapToTop= 0;
var constGap = 60;

/////////////////////////////////////////////////////////////
function drawRect() {
    var rect = new fabric.Rect({

        width: 150,
        height: 100,
        fill: '#eef',
        scaleY: 0.5,
        originX: 'center',
        originY: 'center'
    })};



function textToRect() {
    var text = new fabric.Text(document.getElementById("description").value, {  
        fontSize: 25,
        originX: 'center',
        originY: 'center'});

    var group = new fabric.Group([ rect, text ], {
        left: 0,
        top: positionTop+gapToTop,
        angle: 0
    })
    canvas.add(group);
    gapToTop +=constGap;
};

