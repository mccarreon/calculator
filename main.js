const buttons = [
    {
        id: 'clear',
        content: 'C',
        func: clearDisplay
    },
    {
        id: 'negative',
        content: '±',
        func: switchSign
    },
    {
        id: 'backspace',
        content: '←',
        func: backspace
    },
    {
        id: 'divide',
        content: '÷',
        class: 'operator',
        func: selectOperator
    },
    {
        id: 'multiply',
        content: '×',
        class: 'operator',
        func: selectOperator
    },
    {
        id: 'subtract',
        content: '-',
        class: 'operator',
        func: selectOperator
    },
    {
        id: 'add',
        content: '+',
        class: 'operator',
        func: selectOperator
    },
    {
        id: 'equals',
        content: '=',
        class: 'operator',
        func: operate
    },
    {
        id: 'decimal',
        content: '.',
        func: updateDisplay
    },
];
const display = document.getElementById("display");
const num_order = [7,8,9,
                   4,5,6,
                   1,2,3,
                   0]
let display_value = 0;
let first_number = 0;
let operator = '';

num_order.forEach((i) => {
    let btn = {
        id: 'num'+i,
        content: i,
        class: "number",
        func: updateDisplay
    }
    buttons.push(btn);
});

buttons.forEach(btn => {
    let btns = document.getElementById("buttons");
    let node = document.createElement("button");
    node.setAttribute("id", btn.id);
    if (btn.class) {
        node.classList.add(btn.class);
    }
    if (btn.func) {
        node.addEventListener('click', btn.func);
    }
    node.classList.add("btn");
    node.innerHTML = btn.content
    btns.appendChild(node)
})

let add = (x, y) => {
    return x + y;
};

let subtract = (x, y) => {
    return x - y;
};

let multiply = (x, y) => {
    return x * y;
};

let divide = (x, y) => {
    return x / y;
};

function operate () {
    if (operator == '+') {
        display.innerHTML = add(first_number, display_value);
    } else if (operator == '-') {
        display.innerHTML = subtract(first_number, display_value);
    } else if (operator == '-') {
        display.innerHTML = subtract(first_number, display_value);
    } else if (operator == '×') {
        display.innerHTML = multiply(first_number, display_value);
    } else if (operator == '÷') {
        display.innerHTML = divide(first_number, display_value);
    }
};

function checkDisplayForZero(){
    if (display.innerHTML == '0'){
        display.innerHTML = '';
    }
}

function updateDisplay(){
    if (display.innerHTML.length < 10) {
        if (this.innerHTML == '.' && !display.innerHTML.includes('.')) {
            display.innerHTML += this.innerHTML;
            display_value = Number(display.innerHTML);
        } else if (this.innerHTML != '.') {
            checkDisplayForZero()

            display.innerHTML += this.innerHTML;
            display_value = Number(display.innerHTML);
        }
    }
}

function clearDisplay(){
    display.innerHTML = '0';
}

function switchSign(){
    display.innerHTML = display_value*-1;
    display_value = Number(display.innerHTML);
}

function backspace(){
    display.innerHTML = display.innerHTML.slice(0,display.innerHTML.length-1)
    if (display.innerHTML == '' || display.innerHTML == '-') {
        display.innerHTML = 0;
    }
}

function selectOperator(){
    operator = this.innerHTML;
    first_number = display_value;
    display.innerHTML = '0';
}
/**
 * TODO:
 *  - add javascript to buttons
 *  - add number selection storage
 *  - make it look good
 *  - add back space
 *  - add keyboard support
 */