const { gql } = require("apollo-server")
const { Post, Comment } = require("../db")

const typeDefs = gql`
    type Post {
        _id: ID
        title: String
        description: String
        # user: User
        comments: [Comment]
    }

    extend type Query {
        posts: [Post]
    }

    extend type Mutation {
        addPost(post: PostInput): Post
    }

    input PostInput {
        title: String
        description: String
    }
`

const resolvers = {
    Query: {
        posts: () => {
            return Post.find()
        },
    },
    Mutation: {
        addPost: (parent, args) => {
            const {
                post: { title, description },
            } = args

            return new Post({ title, description }).save()
        },
    },
    Post: {
        comments: (parent, args) => {
            const { _id: postId } = parent
            return Comment.find({ post: postId })
        },
    },
}

exports.typeDefs = typeDefs
exports.resolvers = resolvers
