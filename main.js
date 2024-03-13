// buscar la extension de los colores
// extension Live Preview
// const title = document.querySelector("#title");
// const change = document.querySelector("#change");
// // #0478e0
// // #A9C2E0
// // #ff8b46
// // 
// change.addEventListener("click", () => {
//     // como cambiar el color a un elemento
//     // HTML
//     // usando javascript
//     title.children[0].style.color = "#0478e0";
//     title.children[1].style.color = "#ff8b46";
//     // console.log(title.childNodes)
// });
// title.innerHTML = "<span>Plaza</span> <span>Internacional</span>";

const modalToggler = document.querySelector("#open-custom-modal");
const modalContainer = document.querySelector("#modal_container");

const modal_mask = document.querySelector("#modal_mask");
const closeModal = document.querySelector("#closeModal");

const toggleModal = () => {
    const isVisible = modalContainer.classList.contains('show'); 
    isVisible ? modalContainer.classList.remove('show') : modalContainer.classList.add('show'); 
}

modalToggler.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);
modal_mask.addEventListener("click", toggleModal);