
    const main = document.createElement("main");
    main.id = 'root';
    document.body.appendChild(main);
    
    const financialSectionMain = document.createElement("div");
    financialSectionMain.classList.add("financialSectionMain");
    main.appendChild(financialSectionMain);

    const financialSummarySection = document.createElement('section');
    financialSummarySection.classList.add('form_section');
    financialSectionMain.appendChild(financialSummarySection);

    const financialSummaryTitle = document.createElement('h2');
    financialSummaryTitle.innerHTML = 'Resumo financeiro';
    financialSummarySection.appendChild(financialSummaryTitle);

    const valuesSum = document.createElement('div');
    valuesSum.classList.add('valuesSum');
    financialSectionMain.appendChild(valuesSum);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');
    financialSummarySection.appendChild(buttonContainer);

    const showAll = document.createElement('button');
    showAll.innerHTML = 'Todos';
    showAll.classList.add('filter');
    showAll.classList.add('show--all');
    buttonContainer.appendChild(showAll);

    const showAllButton = document.querySelector('.show--all');
    showAllButton.addEventListener('click', () => {
        renderElements(insertedValues);

        showAll.classList.add('selected');
        inflows.classList.remove('selected');
        outflows.classList.remove('selected');
    });

    const inflows = document.createElement('button');
    inflows.innerHTML = 'Entradas';
    inflows.classList.add('filter');
    inflows.classList.add('inflows');
    buttonContainer.appendChild(inflows);

    const inflowsButton = document.querySelector('.inflows');
    inflowsButton.addEventListener('click', () => {
        const inflowTasks = insertedValues.filter(task => task.categoryID === 0);
        renderElements(inflowTasks);

        inflows.classList.add('selected');
        showAll.classList.remove('selected');
        outflows.classList.remove('selected');
    });

    const outflows = document.createElement('button');
    outflows.innerHTML = 'Saídas';
    outflows.classList.add('filter');
    outflows.classList.add('outflows');
    buttonContainer.appendChild(outflows);

    const outflowsButton = document.querySelector('.outflows');
    outflowsButton.addEventListener('click', () => {
        const outflowTasks = insertedValues.filter(task => task.categoryID === 1);
        renderElements(outflowTasks);

        outflows.classList.add('selected');
        inflows.classList.remove('selected');
        showAll.classList.remove('selected');
    });

    const form = document.createElement('form');
    financialSummarySection.appendChild(form);

    const formContainer = document.createElement('div');
    form.appendChild(formContainer);










    const section2 = document.createElement('section');
    section2.classList.add( 'task_section');
    main.appendChild(section2);

    const ul = document.createElement('ul');
    ul.classList.add( 'tasks');
    section2.appendChild(ul);

    const Submit = document.querySelector(".Submit");
    