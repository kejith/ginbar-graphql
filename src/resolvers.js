// node-graphql/src/resolvers.js

const { posts } =  require('./database.js');

const resolvers = {
    Post: {
        id: (parent) => parent.id,
        filename: (parent) => parent.filename,
        thumbnail_filename: (parent) => parent.thumbnail_filename,
        content_type: (parent) => parent.content_type,
        user: (parent) => parent.user,
        upvoted: (parent) => parent.upvoted,
        score: (parent) => parent.score,
        created_at: (parent) => parent.created_at,
        updated_at: (parent) => parent.updated_at,
        deleted_at: (parent) => parent.deleted_at,

    },

    Query: {
      posts: (parent, args) => {
        return posts
      },
      post: (parent, args) => {
        var post = posts.filter((post) => post.id == Number(args.id))
        return post.length > 0 ? post[0] : null;
      }
    },



  }


  module.exports = {
    resolvers,
  }
