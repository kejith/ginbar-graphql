const { gql } = require('apollo-server')

const typeDefs = gql`

  type Post {
    id: ID!
    filename: String
    thumbnail_filename: String!
    content_type: String!
    user: String!
    upvoted: Boolean
    score: Int
    created_at: String!
    updated_at: String
    deleted_at: String
  }

  type Query {
    posts: [Post!]!
    post(id: ID!): Post
  }


  `
module.exports = {
  typeDefs,
}