/**
 * An Odin Library Collection
 * 
 * Book objects should have
 *  - the book’s title,
 *  - author,
 *  - the number of pages, and
 *  - whether or not you have read the book.
 *  - function info() that can report the book info
 */

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
 * @returns {void}
 */
function addBookToLibrary(title, author, pageCount, hasBeenRead) {
    if (
        !title ||
        !author ||
        !pageCount ||
        !hasBeenRead
    ) {
        
        throw new Error("Invalid arguments");
    }
    
    const book = new Book(title, author, pageCount, hasBeenRead);
    myLibrary.push(book);
}