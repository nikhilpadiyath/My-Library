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
    let index=0;
    myLibrary.forEach(myLibrarys => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);
        const removeBook= document.createElement("button");
        removeBook.classList.add("remove-Book");
        removeBook.textContent="Remove from Library";
        removeBook.dataset.linkedArray= index;
        card.appendChild(removeBook);
        removeBook.addEventListener("click",removeFromLibrary);

        function removeFromLibrary(){
            let bookToRemove= removeBook.dataset.linkedArray;
            console.log("The array index of book to be removed is",bookToRemove);
            myLibrary.splice(parseInt(bookToRemove),1);
            card.remove();
            displayBookOnPage();
        }
        const readStatusButton= document.createElement("button");
        readStatusButton.classList.add("read-status-btn");
        readStatusButton.textContent= "Read/Not Read";
        readStatusButton.dataset.linkedArray= index;
        card.appendChild(readStatusButton);
        readStatusButton.addEventListener("click",toggleReadStatus);
        function toggleReadStatus(){
            let getBookToToggle= readStatusButton.dataset.linkedArray;
            Book.prototype= Object.create(Book.prototype);
            const toggleBook= new Book();
            if((myLibrary[parseInt(getBookToToggle)].Read)=="Yes"){
                toggleBook.Read = "No";
                myLibrary[parseInt(getBookToToggle)].Read = toggleBook.Read;
                console.log("Book not read");
            } else if ((myLibrary[parseInt(getBookToToggle)].Read)== "No"){
                toggleBook.Read = "Yes";
                myLibrary[parseInt(getBookToToggle)].Read = toggleBook.Read;
                console.log("Book completed");
            }
            displayBookOnPage();
        }

        for( let key in myLibrarys){
            console.log(`${key}: ${myLibrarys[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrarys[key]}`);
            card.appendChild(para);
        }
        index++;
    })
    }
    const addBookBtn = document.querySelector(".addbookbtn");
    addBookBtn.addEventListener("click", displayForm);
    function displayForm() {
        document.getElementById("add-book-form").style.display = "";
    }
    const submitbtn = document.querySelector("#submit");
    submitbtn.addEventListener("click", intakeData);
    function intakeData() {
        let Title = document.getElementById("Title").value;
        let Author = document.getElementById("Author").value;
        let Pages = document.getElementById("Pages").value;
        let Read = document.getElementById("Read").value;

        if ((Title == "") || (Author == "") || (Pages == "") || (Read == "")) {
            error.innerHTML="*Please fill all the blanks";
            return;
        }
        else{
            error.innerHTML="";
        }
        addBookToLib(Title, Author, Pages, Read);
        document.getElementById("add-book").reset();
    }

    const cleardata = document.querySelector("#reset");
    cleardata.addEventListener("click", clearForm);
    function clearForm() {
        document.getElementById("add-book").reset();
    }
})