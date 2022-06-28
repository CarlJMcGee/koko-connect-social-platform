"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    thoughts: {
        type: [String],
    },
    friends: {
        type: [String],
    },
});
exports.User = (0, mongoose_1.model)("User", UserSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2RlbHMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBeUM7QUFTekMsTUFBTSxVQUFVLEdBQUcsSUFBSSxpQkFBTSxDQUFVO0lBQ3JDLFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLElBQUk7UUFDWixRQUFRLEVBQUUsSUFBSTtRQUNkLElBQUksRUFBRSxJQUFJO0tBQ1g7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxJQUFJO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztLQUNmO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO0tBQ2Y7Q0FDRixDQUFDLENBQUM7QUFFVSxRQUFBLElBQUksR0FBRyxJQUFBLGdCQUFLLEVBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9kZWwsIFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuaW50ZXJmYWNlIHVzZXJJbnQge1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICB0aG91Z2h0czogc3RyaW5nW107XHJcbiAgZnJpZW5kczogc3RyaW5nW107XHJcbn1cclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hPHVzZXJJbnQ+KHtcclxuICB1c2VybmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB0cmltOiB0cnVlLFxyXG4gIH0sXHJcbiAgZW1haWw6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgdGhvdWdodHM6IHtcclxuICAgIHR5cGU6IFtTdHJpbmddLFxyXG4gIH0sXHJcbiAgZnJpZW5kczoge1xyXG4gICAgdHlwZTogW1N0cmluZ10sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlciA9IG1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKTtcclxuIl19