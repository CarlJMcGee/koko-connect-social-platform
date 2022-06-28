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
}, {
    id: false,
    toJSON: { virtuals: true },
});
exports.User = (0, mongoose_1.model)("User", UserSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2RlbHMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBeUM7QUFFekMsTUFBTSxVQUFVLEdBQUcsSUFBSSxpQkFBTSxDQUMzQjtJQUNFLFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLElBQUk7UUFDWixRQUFRLEVBQUUsSUFBSTtRQUNkLElBQUksRUFBRSxJQUFJO0tBQ1g7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxJQUFJO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztLQUNmO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO0tBQ2Y7Q0FDRixFQUNEO0lBQ0UsRUFBRSxFQUFFLEtBQUs7SUFDVCxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0NBQzNCLENBQ0YsQ0FBQztBQUVXLFFBQUEsSUFBSSxHQUFHLElBQUEsZ0JBQUssRUFBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb2RlbCwgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYShcclxuICB7XHJcbiAgICB1c2VybmFtZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIHRyaW06IHRydWUsXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB1bmlxdWU6IHRydWUsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHRob3VnaHRzOiB7XHJcbiAgICAgIHR5cGU6IFtTdHJpbmddLFxyXG4gICAgfSxcclxuICAgIGZyaWVuZHM6IHtcclxuICAgICAgdHlwZTogW1N0cmluZ10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IGZhbHNlLFxyXG4gICAgdG9KU09OOiB7IHZpcnR1YWxzOiB0cnVlIH0sXHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXIgPSBtb2RlbChcIlVzZXJcIiwgVXNlclNjaGVtYSk7XHJcbiJdfQ==