function findPosts(parent, args, ctx, info) {
    return ctx.prisma.posts.findMany({
      skip: 0,
      take: 20,
      select: postsSelect
    })
}

function findPost(parent, args, ctx, info) {
    return ctx.prisma.posts.findFirst({
        where: { id: Number(args.id)}
    })
}



module.exports = {
    findPosts, findPost
}