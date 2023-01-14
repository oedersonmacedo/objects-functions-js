const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
delete book.available;
console.log(book);
//expect output: { title: 'Clean Code', author: 'Robert C. Martin', pages: 464, language: 'English' }

console.log("available" in book);
//expect output: false