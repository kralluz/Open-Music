/* Desenvolva sua lógica aqui */
function showModalButton(){
    const button = document.querySelector(".button--showModal");
    const modalContainer = document.querySelector(".modalContainer");

    button.addEventListener("click", () =>{
        modalContainer.showModal();

        closeModalButton();
        cancelModalButton(); 
    });
}


function closeModalButton(){
    const button = document.querySelector(".modal__closeButton");
    const modalContainer = document.querySelector(".modalContainer");

    button.addEventListener("click", () =>{
        modalContainer.close();
    });
}

function cancelModalButton(){
    const button = document.querySelector(".cancel");
    const modalContainer = document.querySelector(".modalContainer");
    button.addEventListener("click", () =>{
        modalContainer.close();
    });
}



showModalButton();
