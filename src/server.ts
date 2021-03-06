import * as express from "express";
import * as mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./routes"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/koko-connect"
);
mongoose.set("debug", true);

app.listen(PORT, () => console.log(`Connected to Port: ${PORT}`));
