let myLibrary=[];
function Book(Title,Author,Pages,Read){
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
}
addEventListener('DOMContentLoaded',(event) => {
function addBookToLib(Title,Author,Pages,Read){
    let book = new Book(Title,Author,Pages,Read);
    myLibrary.push(book);
    displayBookOnPage();
}
function displayBookOnPage(){
    const books= document.querySelector(".books");
    const removeDivs = document.querySelectorAll(".card");
    for ( let i=0; i<removeDivs.length; i++){
        removeDivs[i].remove();
    }

    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);
        for( let key in myLibrary){
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);
        }
    })
}
<<<<<<< HEAD
const addBookBtn= document.querySelector(".addbookbtn");
addBookBtn.addEventListener("click",displayForm);
function displayForm(){
    document.getElementById("add-book-form").style.display="";
}
const submitbtn= document.querySelector("#submit");
submitbtn.addEventListener("click", intakeData);
function intakeData(){
    debugger;
    let Title= document.getElementById("Title").value;
    let Author= document.getElementById("Author").value;
    let Pages= document.getElementById("Pages").value;
    let Read= document.getElementById("Read").value;

    if((Title == "") || (Author =="") || (Pages =="") ||(Read == "")){
        return;
    }
    addBookToLib(Title,Author,Pages,Read);
    document.getElementById("add-book").reset();
}

const cleardata = document.querySelector("#reset");
cleardata.addEventListener("click",clearForm);
function clearForm(){
    document.getElementById("add-book").reset();
}
}
);
=======

addEventListener('DOMContentLoaded', (event) => {
    const addBookBtn = document.querySelector(".addbookbtn");
    addBookBtn.addEventListener("click", displayForm);
    function displayForm() {
        document.getElementById("add-book-form").style.display = "";
    }
    const submitbtn = document.querySelector("#submit");
    submitbtn.addEventListener("click", intakeData);
    function intakeData() {
        let title = document.getElementById("Title").value;
        let author = document.getElementById("Author").value;
        let pages = document.getElementById("Pages").value;
        let read = document.getElementById("Read").value;

        if ((title == "") || (author == "") || (pages == "") || (read == "")) {
            return;
        }
        addBookToLib(title, author, pages, read);
        document.getElementById("add-book").reset();
    }

    const cleardata = document.querySelector("#reset");
    cleardata.addEventListener("click", clearForm);
    function clearForm() {
        document.getElementById("add-book").reset();
    }
});
>>>>>>> 031eecb6cd1c46d700a7b43399bcf8cd39d6bf48
