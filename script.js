TinyTurtle.apply(window, [undefined, 400, 400]);

function square(){
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
}

function triangle(y){
right(30);
forward(y);
right(120);
forward(y);
right(120);
forward(y);
right(120);
left(30);
}
function rectangle(x){
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
}

function house(){
forward(40);
right(35);
forward(20);
right(105);
forward(20);
right(125);
forward(25);
left(180);
forward(25);
right(90);
forward(40);
right(90);
forward(25);
}

function pentagon(size){
forward(size);
right(72);
forward(size);
right(72);
forward(size);
right(72);
forward(size);
right(72);
forward(size);
right(72);
}

// Type your function call below
rectangle(100);
triangle(100);
pentagon(100)
stamp();
