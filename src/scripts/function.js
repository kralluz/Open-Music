

function createCard(taskInfo, index) {
    const taskItem = document.createElement("li");
    const div = document.createElement("div");
    const span = document.createElement("span");
    span.classList.add("category__id");
    const p = document.createElement("p");

    p.innerText = 'R$ ' + taskInfo.value;

    if (taskInfo.categoryID == 0) {
        span.innerText = "Entrada";
    } else if (taskInfo.categoryID == 1) {
        span.innerText = "Saída";
    }

    div.appendChild(p);

    const button = document.createElement("button");

    const trashimg = document.createElement("img");
    button.appendChild(trashimg);

    trashimg.src = "../src/img/trash.png"
    button.addEventListener("mouseover", () =>{
        trashimg.src = "../src/img/trash hover.png"
console.log("test");
    })

    button.addEventListener("mouseout", () =>{
        trashimg.src = "../src/img/trash.png"
    })


    button.addEventListener('click', () => {
        insertedValues.splice(index, 1);
        renderElements(insertedValues);

        const soma = somaTotal(insertedValues);
        showvalues.innerHTML = "R$ "+ soma + ",00";

    });

    taskItem.appendChild(div);
    taskItem.appendChild(span);
    taskItem.appendChild(button);
return taskItem;
}


function renderElements(taskList) {
    const htmlList = document.querySelector('.tasks');
    htmlList.innerHTML = '';

    if (taskList.length === 0) {
        
        const addItems = document.createElement('div');
        addItems.classList.add('now');
        htmlList.appendChild(addItems);
        
        const message = document.createElement('p');
        message.classList.add('status');
        message.innerHTML = 'Nenhum valor encontrado.';
        addItems.appendChild(message);

    return;
    }

    taskList.forEach((task, index) => {
    let card = createCard(task, index);
    htmlList.appendChild(card);
    });

    somaTotal(taskList);
}


renderElements(insertedValues);


let botaoAtivo;
    function ativarBotao(botao) {
        if (botao === botaoAtivo) {
            return;
        }

        if (botao === 1) {
            document.getElementById('botao1').classList.add('ativo');
            document.getElementById('botao2').classList.remove('ativo');
            botaoAtivo = 1;
        } else {
            document.getElementById('botao1').classList.remove('ativo');
            document.getElementById('botao2').classList.add('ativo');
            botaoAtivo = 2;
        }
    }

    Submit.addEventListener("click", (event) => {
        event.preventDefault();
    
        const newValue = document.querySelector(".value__input");
    
        
        if (newValue.value.trim() === "") {
            alert("Por favor, insira um valor válido.");
            return;
        }
    
        newValue.addEventListener("keydown", permitirApenasNumerosEVirgula);
    
        let type;
        if (document.getElementById("botao1").classList.contains("ativo")) {
            type = 0;
        } else {
            type = 1;
        }
    
        const newTask = {
            id: insertedValues.length + 1,
            value: parseFloat(newValue.value),
            categoryID: type,
        };
    
        if (document.querySelector(".value__input").classList.contains("ativo")) {
            insertedValues.forEach(function (task) {
                task.categoryID = 1;
            });
        }
    
        insertedValues.push(newTask);
    
        renderElements(insertedValues);
    
        const soma = somaTotal(insertedValues);
    
        showvalues.innerHTML = "R$ "+ soma + ",00";

    });


function somaTotal(values) {
    const soma = values.reduce((total, task) => total + (task.categoryID === 1 ? Math.abs(task.value) * -1 : task.value), 0);
    return soma;
}

const soma = somaTotal(insertedValues);

const subtitle = document.createElement("p");
subtitle.classList.add("subtitle");

subtitle.innerHTML = "Soma de valores"

const showvalues = document.createElement('p');
showvalues.classList.add("showvalues");
showvalues.innerHTML = "R$ "+ soma + ",00";

valuesSum.appendChild(subtitle);
valuesSum.appendChild(showvalues);


function permitirApenasNumerosEVirgula(event) {
    var tecla = event.key;
    if (
        (tecla >= "0" && tecla <= "9") ||
        tecla === "," ||
        tecla === "." ||
        tecla === "Backspace" ||
        tecla === "Delete" ||
        tecla === "ArrowLeft" ||
        tecla === "ArrowRight"
    ) {
        return true;
    } else {
        return false;
    }
}