const { Schema, Types, model } = require("mongoose")

const CommentSchema = new Schema({
    content: String,
    post: {
        type: Types.ObjectId,
        ref: "Post",
    },
})

const Comment = model("Comment", CommentSchema)

module.exports = Comment
