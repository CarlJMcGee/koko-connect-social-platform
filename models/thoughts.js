"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thoughts = void 0;
const mongoose_1 = require("mongoose");
const reactions_1 = require("./reactions");
const ThoughtsSchema = new mongoose_1.Schema({
    thoughtText: {
        type: String,
        required: `Text content is required.`,
        validate: [
            ({ length }) => length >= 1 && length <= 280,
            `Thought must be between 1-280 characters long.`,
        ],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: `Username is required.`,
    },
    reactions: [reactions_1.default],
}, {
    id: false,
});
exports.Thoughts = (0, mongoose_1.model)("Thoughts", ThoughtsSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhvdWdodHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbW9kZWxzL3Rob3VnaHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUF5QztBQUN6QywyQ0FBeUM7QUFFekMsTUFBTSxjQUFjLEdBQUcsSUFBSSxpQkFBTSxDQUMvQjtJQUNFLFdBQVcsRUFBRTtRQUNYLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLDJCQUEyQjtRQUNyQyxRQUFRLEVBQUU7WUFDUixDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksTUFBTSxJQUFJLEdBQUc7WUFDNUMsZ0RBQWdEO1NBQ2pEO0tBQ0Y7SUFDRCxTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsSUFBSTtRQUNWLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRztLQUNsQjtJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLHVCQUF1QjtLQUNsQztJQUNELFNBQVMsRUFBRSxDQUFDLG1CQUFjLENBQUM7Q0FDNUIsRUFDRDtJQUNFLEVBQUUsRUFBRSxLQUFLO0NBQ1YsQ0FDRixDQUFDO0FBRVcsUUFBQSxRQUFRLEdBQUcsSUFBQSxnQkFBSyxFQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSwgbW9kZWwgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IFJlYWN0aW9uU2NoZW1hIGZyb20gXCIuL3JlYWN0aW9uc1wiO1xyXG5cclxuY29uc3QgVGhvdWdodHNTY2hlbWEgPSBuZXcgU2NoZW1hKFxyXG4gIHtcclxuICAgIHRob3VnaHRUZXh0OiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IGBUZXh0IGNvbnRlbnQgaXMgcmVxdWlyZWQuYCxcclxuICAgICAgdmFsaWRhdGU6IFtcclxuICAgICAgICAoeyBsZW5ndGggfSkgPT4gbGVuZ3RoID49IDEgJiYgbGVuZ3RoIDw9IDI4MCxcclxuICAgICAgICBgVGhvdWdodCBtdXN0IGJlIGJldHdlZW4gMS0yODAgY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZEF0OiB7XHJcbiAgICAgIHR5cGU6IERhdGUsXHJcbiAgICAgIGRlZmF1bHQ6IERhdGUubm93LFxyXG4gICAgfSxcclxuICAgIHVzZXJuYW1lOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IGBVc2VybmFtZSBpcyByZXF1aXJlZC5gLFxyXG4gICAgfSxcclxuICAgIHJlYWN0aW9uczogW1JlYWN0aW9uU2NoZW1hXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBmYWxzZSxcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgVGhvdWdodHMgPSBtb2RlbChcIlRob3VnaHRzXCIsIFRob3VnaHRzU2NoZW1hKTtcclxuIl19