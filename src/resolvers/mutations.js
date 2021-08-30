async function createPost (parent, args, context, info)  {
    var createdPost = await ctx.prisma.post.create({
      data: {
        url: args.url,
        user: args.user,
      }
    });

    return createdPost
}

module.exports = {
    createPost
}