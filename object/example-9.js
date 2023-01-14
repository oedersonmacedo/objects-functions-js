const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
for (let key in book) {
    console.log(book[key]);
}
/** expect output: 
 * 'Clean Code'
 * 'Robert C. Martin'
 * 464
 * 'English'
 * true
*/