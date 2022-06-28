"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thoughts = void 0;
const mongoose_1 = require("mongoose");
const ThoughtsSchema = new mongoose_1.Schema({
    thoughText: {
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
}, {
    id: false,
});
exports.Thoughts = (0, mongoose_1.model)("Thoughts", ThoughtsSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhvdWdodHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbW9kZWxzL3Rob3VnaHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUF5QztBQUV6QyxNQUFNLGNBQWMsR0FBRyxJQUFJLGlCQUFNLENBQy9CO0lBQ0UsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsMkJBQTJCO1FBQ3JDLFFBQVEsRUFBRTtZQUNSLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxNQUFNLElBQUksR0FBRztZQUM1QyxnREFBZ0Q7U0FDakQ7S0FDRjtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHO0tBQ2xCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsdUJBQXVCO0tBQ2xDO0NBQ0YsRUFDRDtJQUNFLEVBQUUsRUFBRSxLQUFLO0NBQ1YsQ0FDRixDQUFDO0FBRVcsUUFBQSxRQUFRLEdBQUcsSUFBQSxnQkFBSyxFQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSwgbW9kZWwgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IFRob3VnaHRzU2NoZW1hID0gbmV3IFNjaGVtYShcclxuICB7XHJcbiAgICB0aG91Z2hUZXh0OiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IGBUZXh0IGNvbnRlbnQgaXMgcmVxdWlyZWQuYCxcclxuICAgICAgdmFsaWRhdGU6IFtcclxuICAgICAgICAoeyBsZW5ndGggfSkgPT4gbGVuZ3RoID49IDEgJiYgbGVuZ3RoIDw9IDI4MCxcclxuICAgICAgICBgVGhvdWdodCBtdXN0IGJlIGJldHdlZW4gMS0yODAgY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZEF0OiB7XHJcbiAgICAgIHR5cGU6IERhdGUsXHJcbiAgICAgIGRlZmF1bHQ6IERhdGUubm93LFxyXG4gICAgfSxcclxuICAgIHVzZXJuYW1lOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IGBVc2VybmFtZSBpcyByZXF1aXJlZC5gLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBmYWxzZSxcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgVGhvdWdodHMgPSBtb2RlbChcIlRob3VnaHRzXCIsIFRob3VnaHRzU2NoZW1hKTtcclxuIl19