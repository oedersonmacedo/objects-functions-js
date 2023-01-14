const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
console.log("title" in book);
// expect output: true

console.log("author" in book);
// expect output: true

console.log("pages" in book);
// expect output: true

console.log("language" in book);
// expect output: true

console.log("available" in book);
// expect output: true

console.log("publisher" in book);
// expect output: false

