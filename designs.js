// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
//declaring the variables
let inputHeight, inputWidth, penColor, grid, drag = false;

$('#submit1').click(function (e) {
    e.preventDefault();                         //preventing default form submit behaviour

    
    inputHeight = $('#inputHeight').val();
    inputWidth = $('#inputWidth').val();
    penColor = $('#colorPicker').val();
    grid = $('#pixelCanvas');
    grid.children().remove();                   //Reset the canvas on submit click

    makeGrid();
});


console.log(inputHeight);
console.log(inputWidth);
console.log(penColor);




function makeGrid() {

// Your code goes here!

//creating rows of the grid
    for(let r = 0; r < inputHeight; r++){

        grid.append('<tr></tr>')

        // creating columns/cells
        for(let c = 0; c < inputWidth; c++){
            
            $('tr:last').append('<td class="cell"></td>')

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
    
    penColor = $('#colorPicker').val();
});


$('#fill').click(function() {
    table.children().find('td').css('background-color', color);
  });













