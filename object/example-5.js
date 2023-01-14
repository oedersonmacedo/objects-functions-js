const key1 = "title";
const key2 = "author";
const key3 = "pages";
const key4 = "language";
const key5 = "available";
const book = {
    [key1]: "Clean Code",
    [key2]: "Robert C. Martin",
    [key3]: 464,
    [key4]: "English",
    [key5]: true
};

console.log(book);
//expect output: { title: 'Clean Code', author: 'Robert C. Martin', pages: 464, language: 'English', available: true }