// conexión
const mongoose = require("mongoose")

const User = require("./User")
const Post = require("./Post")
const Comment = require("./Comment")

// connection
mongoose.connect(`mongodb://localhost/graphql_example_2`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

const db = mongoose.connection
db.once("open", () => console.log(`Mongo DB ... OK`))

exports.User = User
exports.Post = Post
exports.Comment = Comment
