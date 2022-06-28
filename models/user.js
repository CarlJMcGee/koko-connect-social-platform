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
UserSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});
exports.User = (0, mongoose_1.model)("User", UserSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2RlbHMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBeUM7QUFFekMsTUFBTSxVQUFVLEdBQUcsSUFBSSxpQkFBTSxDQUMzQjtJQUNFLFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLElBQUk7UUFDWixRQUFRLEVBQUUsSUFBSTtRQUNkLElBQUksRUFBRSxJQUFJO0tBQ1g7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxJQUFJO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztLQUNmO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO0tBQ2Y7Q0FDRixFQUNEO0lBQ0UsRUFBRSxFQUFFLEtBQUs7SUFDVCxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0NBQzNCLENBQ0YsQ0FBQztBQUVGLFVBQVUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3BDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7QUFDN0IsQ0FBQyxDQUFDLENBQUM7QUFFVSxRQUFBLElBQUksR0FBRyxJQUFBLGdCQUFLLEVBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9kZWwsIFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoXHJcbiAge1xyXG4gICAgdXNlcm5hbWU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB1bmlxdWU6IHRydWUsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB0cmltOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGVtYWlsOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB0aG91Z2h0czoge1xyXG4gICAgICB0eXBlOiBbU3RyaW5nXSxcclxuICAgIH0sXHJcbiAgICBmcmllbmRzOiB7XHJcbiAgICAgIHR5cGU6IFtTdHJpbmddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBmYWxzZSxcclxuICAgIHRvSlNPTjogeyB2aXJ0dWFsczogdHJ1ZSB9LFxyXG4gIH1cclxuKTtcclxuXHJcblVzZXJTY2hlbWEudmlydHVhbChcImZyaWVuZENvdW50XCIpLmdldChmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIHRoaXMuZnJpZW5kcy5sZW5ndGg7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXIgPSBtb2RlbChcIlVzZXJcIiwgVXNlclNjaGVtYSk7XHJcbiJdfQ==