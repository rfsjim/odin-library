/**
 * @fileoverview An Odin Library Collection  📚
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
 * Gets information about the book
 * 
 * @returns {text} 
 */
Book.prototype.info = function () {
    const readYet = this.hasBeenRead ? 'have already' : 'have not';
    return `${this.title} by ${this.author}, is ${this.pageCount} pages long. I ${readYet} read it`;
}

/**
 * Gets Book Title
 * 
 * @returns {string}
 */
Book.prototype.getTitle = function() {
    return this.title;
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
        typeof title !== "string"  ||
        typeof author !== "string" ||
        typeof pageCount !== "number" ||
        typeof hasBeenRead !== "boolean"
    ) {
        
        throw new Error("Invalid arguments");
    }
    
    const book = new Book(title, author, pageCount, hasBeenRead);
    libraryArray.push(book);
}

/**
 * Iterates through Books From the Library Array
 * Renders each into a HTML Card
 * 
 * @param {Object[]} libraryArray 
 */
function displayBooksFromLibrary(libraryArray = myLibrary) {
    libraryArray.forEach(
        (book) => {
            const libraryCatalogue = document.querySelector("div#catalogue");

            const cardWrapper = document.createElement("div");
            cardWrapper.classList.add("card");

            const cardTitle = document.createElement("h4");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = book.title;
            cardWrapper.appendChild(cardTitle);

            const cardText = document.createElement("p");
            cardText.classList.add("card-text");
            cardText.textContent = book.info();
            cardWrapper.appendChild(cardText);

            libraryCatalogue.appendChild(cardWrapper);
        } 
    );
}

/**
 * Add dummy books into the library for testing
 */
function loadBooksIntoLibrary() {
    addBookToLibrary(
        'Project Hail Mary',
        'Andy Weir',
        496,
        false
    );
    addBookToLibrary(
        'Dune',
        'Frank Herbert',
        688,
        false
    );
    addBookToLibrary(
        'The Left Hand of Darkness',
        'Ursula K. Le Guin',
        288,
        false
    );
    addBookToLibrary(
        'Neuromancer',
        'William Gibson',
        304,
        false
    );
    addBookToLibrary(
        'The Three-Body Problem',
        'Liu Cixin',
        400,
        false
    );
    addBookToLibrary(
        'Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, Witch',
        'Terry Pratchett and Neil Gaiman',
        416,
        true
    );
    addBookToLibrary(
        'The Hobbit',
        'J.R.R. Tolkien',
        310,
        true
    );
    addBookToLibrary(
        'Code: The Hidden Language of Computer Hardware and Software',
        'Charles Petzold',
        400,
        false
    );
    addBookToLibrary(
        'Introduction to Algorithms',
        'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest and Clifford Stein',
        1312,
        false
    );
    addBookToLibrary(
        'Structure and Interpretation of Computer Programs',
        'Harold Abelson, Gerald Jay Sussman and Julie Sussman',
        657,
        false
    );
    addBookToLibrary(
        'The Mythical Man-Month',
        'Frederick P. Brooks Jr.',
        336,
        false
    );
    addBookToLibrary(
        'The Art of Computer Programming',
        'Donald E. Knuth',
        3168,
        false
    );
}

/**
 * Run the main function
 */
function runLibrary() {
    loadBooksIntoLibrary();

    displayBooksFromLibrary();
}

runLibrary();