const express = require("express");
const app = express();
const charAPI = "https://hp-api.onrender.com/api/characters";
const spellAPI = "https://hp-api.onrender.com/api/spells";
const hogStaffAPI = "https://hp-api.onrender.com/api/characters/staff";
const hogStudentAPI = "https://hp-api.onrender.com/api/characters/students";

app.get("/getData/characters", async (req, res) => {
  try {
    let response = await fetch(charAPI);
    let characters = await response.json();
    res.send(characters);
  } catch (err) {
    console.log(err);
  }
});

app.get("/getData/spells", async (req, res) => {
  try {
    let response = await fetch(spellAPI);
    let spells = await response.json();
    res.send(spells);
  } catch (err) {
    console.log(err);
  }
});

app.get("/getData/hogStaff", async (req, res) => {
  try {
    let response = await fetch(hogStaffAPI);
    let hogStaff = await response.json();
    res.send(hogStaff);
  } catch (err) {
    console.log(err);
  }
});

app.get("/getData/hogStudent", async (req, res) => {
  try {
    let response = await fetch(hogStudentAPI);
    let hogStudent = await response.json();
    res.send(hogStudent);
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, (req, res) => {
  console.log("Server is connected");
});
