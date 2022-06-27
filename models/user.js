"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    thoughts: {
        type: [Number],
    },
    friends: {
        type: [Number],
    },
});
exports.User = (0, mongoose_1.model)("User", UserSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2RlbHMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBeUM7QUFTekMsTUFBTSxVQUFVLEdBQUcsSUFBSSxpQkFBTSxDQUFVO0lBQ3JDLFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLElBQUk7UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsSUFBSTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7S0FDZjtJQUNELE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztLQUNmO0NBQ0YsQ0FBQyxDQUFDO0FBRVUsUUFBQSxJQUFJLEdBQUcsSUFBQSxnQkFBSyxFQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vZGVsLCBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmludGVyZmFjZSB1c2VySW50IHtcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgdGhvdWdodHM6IG51bWJlcltdO1xyXG4gIGZyaWVuZHM6IG51bWJlcltdO1xyXG59XHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYTx1c2VySW50Pih7XHJcbiAgdXNlcm5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgZW1haWw6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgdGhvdWdodHM6IHtcclxuICAgIHR5cGU6IFtOdW1iZXJdLFxyXG4gIH0sXHJcbiAgZnJpZW5kczoge1xyXG4gICAgdHlwZTogW051bWJlcl0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlciA9IG1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKTtcclxuIl19