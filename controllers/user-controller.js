"use strict";
const models_1 = require("../models");
const userController = {
    async getAllUsers(req, res) {
        try {
            const users = await models_1.User.find({}).populate("thoughts");
            res.json(users);
        }
        catch (err) {
            if (err)
                throw err;
        }
    },
    async getUser({ params }, res) {
        try {
            const user = await models_1.User.findById(params.id).populate("thoughts");
            if (!user) {
                res.status(404).send(`User Not Found`);
                return;
            }
            res.json(user);
        }
        catch (err) {
            if (err)
                throw err;
        }
    },
    async createUser({ body }, res) {
        try {
            const newUser = await models_1.User.create(body);
            res.status(201).send(`User ${newUser.username} created`);
        }
        catch (err) {
            if (err)
                throw err;
        }
    },
    async updateUser({ params, body }, res) {
        try {
            const user = await models_1.User.findByIdAndUpdate(params.id, body);
            if (!user) {
                res.status(404).send(`User Not Found`);
                return;
            }
            res.status(200).send(`User ${user} updated`);
        }
        catch (err) {
            if (err)
                throw err;
        }
    },
    async deleteUser({ params }, res) {
        try {
            const user = await models_1.User.findById(params.id);
            user.thoughts.map(async (thought) => {
                await models_1.Thoughts.findByIdAndDelete(thought);
            });
            const deletedUser = await models_1.User.findByIdAndDelete(params.id);
            res.status(200).send(`User #${params.id} deleted`);
        }
        catch (err) {
            if (err)
                throw err;
        }
    },
    async addFriend({ params }, res) {
        try {
            const user = await models_1.User.findById(params.id);
            user.friends.push(params.friendId);
            user.save();
            res.status(200).send(`Friend Added`);
        }
        catch (err) { }
    },
    async removeFriend({ params }, res) {
        try {
            const user = await models_1.User.findByIdAndUpdate(params.id, {
                $pull: { friends: params.friendId },
            });
            res.status(200).send(`Friend Removed`);
        }
        catch (err) { }
    },
};
module.exports = userController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbnRyb2xsZXJzL3VzZXItY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBRTNDLE1BQU0sY0FBYyxHQUFHO0lBRXJCLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDeEIsSUFBSTtZQUNGLE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdkQsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osSUFBSSxHQUFHO2dCQUFFLE1BQU0sR0FBRyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUdELEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxHQUFHO1FBQzNCLElBQUk7WUFDRixNQUFNLElBQUksR0FBRyxNQUFNLGFBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNULEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3ZDLE9BQU87YUFDUjtZQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLElBQUksR0FBRztnQkFBRSxNQUFNLEdBQUcsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFHRCxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRztRQUM1QixJQUFJO1lBQ0YsTUFBTSxPQUFPLEdBQUcsTUFBTSxhQUFJLENB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IHsgVGhvdWdodHMsIFVzZXIgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5jb25zdCB1c2VyQ29udHJvbGxlciA9IHtcclxuICAvLyBnZXQgYWxsIHVzZXJzIGRhdGFcclxuICBhc3luYyBnZXRBbGxVc2VycyhyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBVc2VyLmZpbmQoe30pLnBvcHVsYXRlKFwidGhvdWdodHNcIik7XHJcbiAgICAgIHJlcy5qc29uKHVzZXJzKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8gZ2V0IHNpbmdsZSB1c2VyIGRhdGEgZnJvbSBpZFxyXG4gIGFzeW5jIGdldFVzZXIoeyBwYXJhbXMgfSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZChwYXJhbXMuaWQpLnBvcHVsYXRlKFwidGhvdWdodHNcIik7XHJcbiAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKGBVc2VyIE5vdCBGb3VuZGApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICByZXMuanNvbih1c2VyKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8gY3JlYXRlIG5ldyB1c2VyXHJcbiAgYXN5bmMgY3JlYXRlVXNlcih7IGJvZHkgfSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgVXNlci5jcmVhdGUoYm9keSk7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5zZW5kKGBVc2VyICR7bmV3VXNlci51c2VybmFtZX0gY3JlYXRlZGApO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvLyB1cGRhdGUgdXNlciBkYXRhXHJcbiAgYXN5bmMgdXBkYXRlVXNlcih7IHBhcmFtcywgYm9keSB9LCByZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkQW5kVXBkYXRlKHBhcmFtcy5pZCwgYm9keSk7XHJcbiAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKGBVc2VyIE5vdCBGb3VuZGApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChgVXNlciAke3VzZXJ9IHVwZGF0ZWRgKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8gZGVsZXRlIHVzZXIgZGF0YVxyXG4gIGFzeW5jIGRlbGV0ZVVzZXIoeyBwYXJhbXMgfSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZChwYXJhbXMuaWQpO1xyXG4gICAgICB1c2VyLnRob3VnaHRzLm1hcChhc3luYyAodGhvdWdodCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IFRob3VnaHRzLmZpbmRCeUlkQW5kRGVsZXRlKHRob3VnaHQpO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgZGVsZXRlZFVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkQW5kRGVsZXRlKHBhcmFtcy5pZCk7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGBVc2VyICMke3BhcmFtcy5pZH0gZGVsZXRlZGApO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvLyBhZGQgZnJpZW5kXHJcbiAgYXN5bmMgYWRkRnJpZW5kKHsgcGFyYW1zIH0sIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQocGFyYW1zLmlkKTtcclxuICAgICAgdXNlci5mcmllbmRzLnB1c2gocGFyYW1zLmZyaWVuZElkKTtcclxuICAgICAgdXNlci5zYXZlKCk7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGBGcmllbmQgQWRkZWRgKTtcclxuICAgIH0gY2F0Y2ggKGVycikge31cclxuICB9LFxyXG5cclxuICAvLyByZW1vdmUgZnJpZW5kXHJcbiAgYXN5bmMgcmVtb3ZlRnJpZW5kKHsgcGFyYW1zIH0sIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWRBbmRVcGRhdGUocGFyYW1zLmlkLCB7XHJcbiAgICAgICAgJHB1bGw6IHsgZnJpZW5kczogcGFyYW1zLmZyaWVuZElkIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChgRnJpZW5kIFJlbW92ZWRgKTtcclxuICAgIH0gY2F0Y2ggKGVycikge31cclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0ID0gdXNlckNvbnRyb2xsZXI7XHJcbiJdfQ==