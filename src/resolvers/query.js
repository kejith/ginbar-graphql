const SelectNoPHash = {
    id: true,
    created_at: true,
    updated_at: true,
    deleted_at: true,
    url: true,
    filename: true,
    user_name: true,
    user_level: true,
    score: true,
    content_type: true,
    thumbnail_filename: true,
    user_level: true,
    uploaded_filename: true,
    comments: true,
    tags: true,

}


function findPosts(parent, args, ctx, info) {
    return ctx.prisma.posts.findMany({
      skip: 0,
      take: 20,
      select: SelectNoPHash
    })
}

async function findPost(parent, args, ctx, info) {

    var post =  await ctx.prisma.post.findFirst({
        //select: SelectNoPHash,
        include: {
            user: true,
            comments: {
                include: {
                    user: true
                }
            },
            tags: {
                include: {
                    tag: true,
                    user: true,
                }
            }
        },
        where: { id: Number(args.id)},
        
    })

    console.log(post)

    return post
} 



module.exports = {
    findPosts, findPost
}