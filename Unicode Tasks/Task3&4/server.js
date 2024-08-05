const express = require("express");
const app = express();
const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/Student";
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(uri)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });
const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  house: {
    type: String,
    required: false,
  },
  wizard: {
    type: String,
    required: false,
  },
});

const Student = new mongoose.model("Student", userSchema);
app.post("/postData", async (req, res) => {
  const body = req.body;
  const result = await Student.create({
    id: body.id,
    firstName: body.firstName,
    gender: body.gender,
    house: body.house,
    wizard: body.wizard,
  });
  console.log(result);
  return res.status(201);
  json({ msg: success });
});

/* async function updateDocumentId(oldId, newId) {
  try {
    const ID = mongoose.Types.ObjectId(oldId);
    const latestId = mongoose.Types.ObjectId(newId);
    const OldDoc = await Student.findById(ID);

    if (!OldDoc) {
      console.log("Document not found");
      return;
    }
    const newDoc = new Student({
      _id: newId,
      id: OldDoc.id,
      firstName: OldDoc.firstName,
      gender: OldDoc.gender,
      house: OldDoc.house,
      wizard: OldDoc.wizard,
    });
    await newDoc.save();
    await Student.findByIdAndDelete(oldId);
    console.lof("id successfully updated");
  } catch (err) {
    console.error(err);
  }
}
updateDocumentId("66b0ee5bc27738a7de57847e", "1"); */
app.get("/getData/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
    console.log(student);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/deleteData/:id", async (req, res) => {
  try {
    const deleteid = await Student.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      res.status(400).send();
    }
    res.send(deleteid);
    console.log("deleted successfully");
  } catch (err) {
    res.status(500).send(e);
  }
});
app.listen(5000, (req, res) => {
  console.log("Server is connected");
});
