// node-graphql/src/resolvers.js
const Query =  require('./query.js');
const Mutation =  require('./mutations.js');

const resolvers = {
    // Post: {
    //     id: (parent) => parent.id,
    //     filename: (parent) => parent.filename,
    //     thumbnail_filename: (parent) => parent.thumbnail_filename,
    //     content_type: (parent) => parent.content_type,
    //     user: (parent) => parent.user,
    //     upvoted: (parent) => parent.upvoted,
    //     score: (parent) => parent.score,
    //     created_at: (parent) => parent.created_at,
    //     updated_at: (parent) => parent.updated_at,
    //     deleted_at: (parent) => parent.deleted_at,

    // },

    Query: {
      posts: Query.findPosts,
      post: Query.findPost
    },

    Mutation: {
      createPost: Mutation.createPost
    }
  }

  module.exports = {
    resolvers,
  }
