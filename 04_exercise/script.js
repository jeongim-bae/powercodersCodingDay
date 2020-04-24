// Create an object called books. It should contain names of books for sale,
//  information if the book has been sold or not, and the price of the book. 
//  Add 3 books to the object. 


 var books = [
    { 
        bookName : "Harry Potter", 
        sold : true, 
        price : "10"
    }, {
        bookName : "Percy Jackson", 
        sold : false, 
        price : "13"
    }, {
        bookName : "The Lord of the Rings", 
        sold : true, 
        price : "12"
    }, {
        bookName : "Narnia", 
        sold : false, 
        price : "7"
    }];

//    Show the elements of this object in the HTML, 

function displayBooks(books) {
    for(key in books){
        for (el in books[key]) {
            let p = document.createElement("p");
            document.body.appendChild(p);
            p.innerText = books[key][el];
        }
    }
}

displayBooks(books);

//TO DO:
//  and add a way for the user to add books. Style the HTML using CSS flex.