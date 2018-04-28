// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
//declaring the variables
let inputHeight, inputWidth, penColor, grid, drag = false;
var timerID;

$('#submit1').click(function (e) {
    e.preventDefault();                         //preventing default form submit behaviour

    
    inputHeight = $('#inputHeight').val();
    inputWidth = $('#inputWidth').val();
    penColor = $('#colorPicker').val();
    grid = $('#pixelCanvas');
    grid.children().remove();                   //Reset the canvas on submit click
    $('#randomSec').text("Funk It Up!");
    $('#randomFill').text("Randomize Grid!");
    $('#submit1').toggleClass('reset');
    clearInterval(timerID);

    if ($('#submit1').hasClass('reset')) {
        $('#submit1').text('Reset Grid!');
    }

    else {
        $('#submit1').text('Make Grid!');
    }
    // clearInterval(inter);
    makeGrid();
});



// console.log(inputHeight);
// console.log(inputWidth);
// console.log(penColor);




function makeGrid() {                   // Making Grid

// Your code goes here!

//creating rows of the grid
    for(let r = 0; r < inputHeight; r++){

        grid.append('<tr></tr>')

        // creating columns/cells
        for(let c = 0; c < inputWidth; c++){
            
            $('tr:last').append('<td class="cell"></td>');
            $('td').css('background-color', 'white');

        }
    }

    colorCells();
}


function colorCells() {
    
    grid.on('mousedown', 'td', function (e) {
         drag = true;
    });

    $(document).on('mouseup', function (e) {
        drag = false;
    });

    grid.on('click', 'td', function (e) {
        $(e.target).css('background-color', penColor);  
    })
    grid.on('mousemove', 'td', function (e) {
        if(drag)  {
            $(e.target).css('background-color', penColor);
        }
    });

}


$('#colorPicker').on('change', function (e) {
    
    clearInterval(timerID);
    penColor = $('#colorPicker').val();
});


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

  $('#erase').on('click', function (e) {
      e.preventDefault();
      clearInterval(timerID);
      penColor = 'white';
  })

  $('#randomSec').on('click', function (e) {
      e.preventDefault();
      $('#randomSec').text("Now Click and Drag");
      startRandomFill();
  });

  $('#randomFill').on('click', function (e) {
    e.preventDefault();
    $('#randomFill').text("Enjoy Art!");
    randomArt();
});


  function randomArt(){
	grid.find('td').each(function(){
        var r = getRandomInt(0, 255);
        var g = getRandomInt(0, 255);
        var b = getRandomInt(0, 255);
        
        penColor = "rgb(" + r + "," + g + "," + b + ")";
		$(this).css('background-color',penColor);
	});
}

function startRandomFill() {
    
    timerID =  setInterval(function() {
        var element = document.querySelector("box");
        var r = getRandomInt(0, 255);
        var g = getRandomInt(0, 255);
        var b = getRandomInt(0, 255);
        
        penColor = "rgb(" + r + "," + g + "," + b + ")";
        
    }, 1000);
}  
  












