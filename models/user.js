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
    thoughts: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Thoughts",
        },
    ],
    friends: {
        type: [String],
    },
}, {
    id: false,
    toJSON: { virtuals: true },
});
UserSchema.virtual("thoughtCount").get(function () {
    return this.thoughts.length;
});
UserSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});
exports.User = (0, mongoose_1.model)("User", UserSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2RlbHMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBeUM7QUFFekMsTUFBTSxVQUFVLEdBQUcsSUFBSSxpQkFBTSxDQUMzQjtJQUNFLFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLElBQUk7UUFDWixRQUFRLEVBQUUsSUFBSTtRQUNkLElBQUksRUFBRSxJQUFJO0tBQ1g7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxJQUFJO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELFFBQVEsRUFBRTtRQUNSO1lBQ0UsSUFBSSxFQUFFLGlCQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7WUFDM0IsR0FBRyxFQUFFLFVBQVU7U0FDaEI7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztLQUNmO0NBQ0YsRUFDRDtJQUNFLEVBQUUsRUFBRSxLQUFLO0lBQ1QsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtDQUMzQixDQUNGLENBQUM7QUFFRixVQUFVLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNyQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQzlCLENBQUMsQ0FBQyxDQUFDO0FBRUgsVUFBVSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDcEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztBQUM3QixDQUFDLENBQUMsQ0FBQztBQUVVLFFBQUEsSUFBSSxHQUFHLElBQUEsZ0JBQUssRUFBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb2RlbCwgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYShcclxuICB7XHJcbiAgICB1c2VybmFtZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIHRyaW06IHRydWUsXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB1bmlxdWU6IHRydWUsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHRob3VnaHRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICAgICAgcmVmOiBcIlRob3VnaHRzXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgZnJpZW5kczoge1xyXG4gICAgICB0eXBlOiBbU3RyaW5nXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogZmFsc2UsXHJcbiAgICB0b0pTT046IHsgdmlydHVhbHM6IHRydWUgfSxcclxuICB9XHJcbik7XHJcblxyXG5Vc2VyU2NoZW1hLnZpcnR1YWwoXCJ0aG91Z2h0Q291bnRcIikuZ2V0KGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy50aG91Z2h0cy5sZW5ndGg7XHJcbn0pO1xyXG5cclxuVXNlclNjaGVtYS52aXJ0dWFsKFwiZnJpZW5kQ291bnRcIikuZ2V0KGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy5mcmllbmRzLmxlbmd0aDtcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlciA9IG1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKTtcclxuIl19