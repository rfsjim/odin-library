/**
 * @fileoverview An Odin Library Collection
 * @author James
 * @version 0.1
 * @date 21st November 2026
 * 
 * @description
 * Book objects should have
 *  - the book’s title,
 *  - author,
 *  - the number of pages, and
 *  - whether or not you have read the book.
 *  - function info() that can report the book info
 */

// array to hold book objects
const myLibrary = [];

/**
 * Book Object
 * 
 * @param {text} title 
 * @param {text} author 
 * @param {number} pageCount 
 * @param {boolean} hasBeenRead 
 */
function Book(title, author, pageCount, hasBeenRead) {
    if (!new.target) {
        throw new Error("Need to use a new object assignment");
    }
    
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.hasBeenRead = hasBeenRead;
    this.id = self.crypto.randomUUID();
}

/**
 * Displays information about the book
 * 
 * @returns {text} 
 */
Book.prototype.info = function () {
    return `${title} by ${author}, ${pageCount} pages, read yet ${hasBeenRead}`;
}

/**
 * Add Book Object to Library Array
 * 
 * @param {text} title 
 * @param {text} author 
 * @param {number} pageCount 
 * @param {boolean} hasBeenRead
 * @param {Object[]} libraryArray
 * @returns {void}
 */
function addBookToLibrary(title, author, pageCount, hasBeenRead, libraryArray = myLibrary) {
    if (
        !title ||
        !author ||
        !pageCount ||
        !hasBeenRead
    ) {
        
        throw new Error("Invalid arguments");
    }
    
    const book = new Book(title, author, pageCount, hasBeenRead);
    libraryArray.push(book);
}

/**
 * Gets Books From the Library Array
 * @param {Object[]} libraryArray 
 */
function getBooksFromLibrary(libraryArray) {
    libraryArray.forEach(
        (book) => {
            const rowWrapper = document.createElement("div");
            rowWrapper.classList.add("row");
            rowWrapper.textContent = book.info();
        } 
    );
}