import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const create = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const identify = await ctx.auth.getUserIdentity();
    if (!identify)
    {
       throw new Error('Unauthorized');
    }
    await ctx.db.insert('projects', {
      name: args.name,
      ownerId: identify?.subject,
    });
  },
});

export const get = query({
  args: {},
  handler: async (ctx) => {
    const identify = await ctx.auth.getUserIdentity();

    if (!identify){
      return []
    }
    return await ctx.db.query('projects')
    .withIndex("by_owner",(q)=>q.eq("ownerId",identify.subject))
    .collect();
  },
});
