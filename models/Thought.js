const { Schema, model, Types } = require('mongoose');


const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },

        reactionBody: {
            type: String,
            required: true,
            maxLength: 180
        },

        username: {
            type: String,
            required: true
        },

        createdAt: {
            type: Date,
            default: Date.now,
            //Use a getter method to format the timestamp on query
        }
    }
);


const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },

        createdAt: {
            type: Date,
            default: Date.now,
            //Use a getter method to format the timestamp on query
        },

        username: {
            type: String,
            required: true
        },

        reactions: [ReactionSchema]
    }
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

module.exports = Thought;