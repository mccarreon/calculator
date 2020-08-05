const buttons = [
    {
        id: 'clear',
        content: 'C'
    },
    {
        id: 'negative',
        content: '±'
    },
    {
        id: 'percent',
        content: '%'
    },
    {
        id: 'divide',
        content: '÷',
        class: 'operator'
    },
    {
        id: 'multiply',
        content: '×',
        class: 'operator'
    },
    {
        id: 'subtract',
        content: '-',
        class: 'operator'
    },
    {
        id: 'add',
        content: '+',
        class: 'operator'
    },
    {
        id: 'equals',
        content: '=',
        class: 'operator'
    },
    {
        id: 'decimal',
        content: '.'
    },
];
const num_order = [7,8,9,
                   4,5,6,
                   1,2,3,
                   0]

num_order.forEach((i) => {
    let btn = {
        id: 'num'+i,
        content: i,
        class: "number"
    }
    buttons.push(btn);
});

buttons.forEach(btn => {
    let btns = document.getElementById("buttons");
    let node = document.createElement("button");
    node.setAttribute("id", btn.id);
    if (btn.class) {
        node.classList.add(btn.class);
        if (btn.class == "number") {
            node.addEventListener('click', updateDisplay);
        }
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

let operate = (op, x, y) => {
    return op(x,y);
};

function updateDisplay(){
    let display = document.getElementById("display");
    display.innerHTML += this.innerHTML;
    display_value = display.innerHTML;
}
/**
 * TODO:
 *  - add decimal checking
 *  - add javascript to buttons
 *  - add number selection storage
 *  - make it look good
 *  - add back space
 *  - add keyboard support
 */