const { ApolloServer, gql } = require("apollo-server")
const { Post } = require("./db")

const server = new ApolloServer({
    modules: [
        // Post
        require("./graphql/Post"),
        // Comment
        require("./graphql/Comment"),
    ],
})

server.listen().then(({ url }) => console.log("Listening in " + url))
