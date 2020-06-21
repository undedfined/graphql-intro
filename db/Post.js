const { Schema, Types, model } = require("mongoose")

const PostSchema = new Schema({
    title: String,
    description: String,
    user: {
        type: Types.ObjectId,
        ref: "User",
    },
})

const Post = model("Post", PostSchema)

module.exports = Post
