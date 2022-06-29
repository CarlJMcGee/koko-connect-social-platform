"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thoughts = void 0;
const mongoose_1 = require("mongoose");
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
}, {
    id: false,
});
exports.Thoughts = (0, mongoose_1.model)("Thoughts", ThoughtsSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhvdWdodHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbW9kZWxzL3Rob3VnaHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUF5QztBQUV6QyxNQUFNLGNBQWMsR0FBRyxJQUFJLGlCQUFNLENBQy9CO0lBQ0UsV0FBVyxFQUFFO1FBQ1gsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsMkJBQTJCO1FBQ3JDLFFBQVEsRUFBRTtZQUNSLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxNQUFNLElBQUksR0FBRztZQUM1QyxnREFBZ0Q7U0FDakQ7S0FDRjtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHO0tBQ2xCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsdUJBQXVCO0tBQ2xDO0NBQ0YsRUFDRDtJQUNFLEVBQUUsRUFBRSxLQUFLO0NBQ1YsQ0FDRixDQUFDO0FBRVcsUUFBQSxRQUFRLEdBQUcsSUFBQSxnQkFBSyxFQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSwgbW9kZWwgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IFRob3VnaHRzU2NoZW1hID0gbmV3IFNjaGVtYShcclxuICB7XHJcbiAgICB0aG91Z2h0VGV4dDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiBgVGV4dCBjb250ZW50IGlzIHJlcXVpcmVkLmAsXHJcbiAgICAgIHZhbGlkYXRlOiBbXHJcbiAgICAgICAgKHsgbGVuZ3RoIH0pID0+IGxlbmd0aCA+PSAxICYmIGxlbmd0aCA8PSAyODAsXHJcbiAgICAgICAgYFRob3VnaHQgbXVzdCBiZSBiZXR3ZWVuIDEtMjgwIGNoYXJhY3RlcnMgbG9uZy5gLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWRBdDoge1xyXG4gICAgICB0eXBlOiBEYXRlLFxyXG4gICAgICBkZWZhdWx0OiBEYXRlLm5vdyxcclxuICAgIH0sXHJcbiAgICB1c2VybmFtZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiBgVXNlcm5hbWUgaXMgcmVxdWlyZWQuYCxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogZmFsc2UsXHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRob3VnaHRzID0gbW9kZWwoXCJUaG91Z2h0c1wiLCBUaG91Z2h0c1NjaGVtYSk7XHJcbiJdfQ==