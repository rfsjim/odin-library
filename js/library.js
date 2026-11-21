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

// setup modal dialog for book entry form
const dialog = document.getElementById('addBooksModal');
document.getElementById('addBooksBtn').onclick = () => dialog.showModal();
document.getElementById('closeBtn').onclick = () => dialog.close();

// setup form behaviour
const addBookForm = document.getElementById('addBooksForm');
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(addBookForm);
    const title = formData.get('title');
    const author = formData.get('author');
    const pageCount = Number(formData.get('pages'));
    const hasBeenRead = formData.get('read')  ===  'true';

    addBookToLibrary(
        title.trim(),
        author.trim(),
        pageCount,
        hasBeenRead
    );

    addBookForm.reset();

    clearBooksFromCatalogue();
    displayBooksFromLibrary();
});

/**
 * Creates a Book Object
 * 
 * @param {string} title 
 * @param {string} author 
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
    this.id = crypto.randomUUID();
}

/**
 * Gets information about the book
 * 
 * @returns {string} 
 */
Book.prototype.info = function () {
    const readYet = this.hasBeenRead ? 'have already' : 'have not';
    return `${this.title} by ${this.author}, is ${this.pageCount} pages long. I ${readYet} read it`;
}

/**
 * Add Book Object to Library Array
 * 
 * @param {string} title 
 * @param {string} author 
 * @param {number} pageCount 
 * @param {boolean} hasBeenRead
 * @param {Book[]} libraryArray
 * @returns {void}
 */
function addBookToLibrary(title, author, pageCount, hasBeenRead, libraryArray = myLibrary) {
    if (
        typeof title !== "string"  ||
        typeof author !== "string" ||
        typeof pageCount !== "number" ||
        !Number.isFinite(pageCount) ||
        pageCount <= 0 ||
        typeof hasBeenRead !== "boolean"
    ) {
        throw new Error("Invalid arguments");
    }
    if (
        !title.trim() ||
        !author.trim()
    ) {
        throw new Error("Title and author cannot be empty");
    }
    
    const book = new Book(title, author, pageCount, hasBeenRead);
    libraryArray.push(book);
}

/**
 * Iterates through Books From the Library Array
 * Renders each into a HTML Card
 * 
 * @param {Book[]} libraryArray 
 */
function displayBooksFromLibrary(libraryArray = myLibrary) {
    const libraryCatalogue = document.querySelector("#catalogue");
    const fragment = document.createDocumentFragment();

    libraryArray.forEach(
        (book) => {
            const cardWrapper = document.createElement("div");
            cardWrapper.dataset.bookId = book.id;
            cardWrapper.classList.add("card");

            const cardTitle = document.createElement("h4");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = book.title;

            const cardText = document.createElement("p");
            cardText.classList.add("card-text");
            cardText.textContent = book.info();

            cardWrapper.append(cardTitle, cardText);
            fragment.appendChild(cardWrapper);
        } 
    );

    libraryCatalogue.appendChild(fragment);
}

/**
 * Clears the Books in the Render of the Catalogue
 * 
 * @returns {void}
 */
function clearBooksFromCatalogue() {
    const libraryCatalogue = document.querySelector("div#catalogue");
    libraryCatalogue.replaceChildren();
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