import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { option, output } from "framer-motion/client";
import { title } from "process";
import language from "react-syntax-highlighter/dist/esm/languages/hljs/1c";

export default defineSchema({
    users:defineTable({
        userId: v.string(),
        email : v.string(),
        name : v.string(),
        isPro : v.boolean(),
        proSince : v.optional(v.number()),
        lemonSqueezyCustomerId : v.optional(v.string()),
        lemonSqueezyOrderId : v.optional(v.string()),
}).index("by_user_Id", ["userId"]),

codeExecutions:defineTable({
        userId: v.string(),
        language: v.string(),
        code: v.string(),
        output: v.optional(v.string()),
        error : v.optional(v.string()),
}).index("by_user_Id", ["userId"]), 


snippets:defineTable({
    userId: v.string(),
    title: v.string(),
    language: v.string(),
    code: v.string(),
    userName: v.string(), 
}).index("by_user_Id", ["userId"]), // store users name for easy access

snippetComments:defineTable({
    snippetId: v.id("snippets"),
    userId: v.string(),
    userName: v.string(),
    content: v.string(),
}).index("by_snippet_Id", ["snippetId"]), // this will store html contnent

stars : defineTable({
    userId: v.id("users"),
    snippetId: v.id("snippets"),

})
.index("by_user_Id", ["userId"]) 
.index("by_snippet_Id", ["snippetId"]) 
.index("by_user_Id_and_snippet_Id", ["userId", "snippetId"]),


});