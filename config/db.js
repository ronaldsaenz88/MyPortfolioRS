module.exports = 
{
    //"URI": "mongodb://localhost/book_store"
    //"URI": "mongodb+srv://testing:r3zh8LgUGYJxugv@cluster0.qqhoz.mongodb.net/myportfolio?retryWrites=true&w=majority"
    "URI":  `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.qqhoz.mongodb.net/myportfolio?retryWrites=true&w=majority`
}