let myLibrary=[];
function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function addBookToLib(title,author,pages,read){
    let book = new Book(title,author,pages,read);
    myLibrary.push(book);
    displayBookOnPage();
}
function displayBookOnPage(){
    const books= document.querySelector(".books");
    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        card.classList.add(".card");
        books.appendChild(card);
        for( let key in myLibrary){
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);
        }
    })
}
const addBookBtn= document.querySelector(".addbookbtn");
addBookBtn.addEventListener("click", displayForm);
function displayForm(){
    document.getElementById("add-book-form").style.display="";
}