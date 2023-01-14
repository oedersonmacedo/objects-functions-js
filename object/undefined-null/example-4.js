const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
book.available = null;
console.log(book);
//expect output: { title: 'Clean Code', author: 'Robert C. Martin',
// pages: 464, language: 'English', available: null }

console.log("available" in book);
//expect output: true