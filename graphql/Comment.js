const { gql } = require("apollo-server")
const { Comment } = require("../db")

const typeDefs = gql`
    type Comment {
        content: String
        post: Post
    }

    extend type Query {
        comments: [Comment]
    }

    extend type Mutation {
        addComment(comment: CommentInput): Comment
    }

    input CommentInput {
        postId: ID
        content: String
    }
`

const resolvers = {
    Query: {
        comments: () => {
            return Comment.find()
        },
    },
    Mutation: {
        addComment: (parent, args) => {
            const {
                comment: { postId, content },
            } = args
            return new Comment({ post: postId, content }).save()
        },
    },
}

exports.typeDefs = typeDefs
exports.resolvers = resolvers
