const fs = require("fs");
// const dummy = require("mongoose-dummy");
const dataFolder = "./dummy-data";
const User = require("../models/user");
// const {
//  User,
//  Project,
//  Email,
//  Blog,
//  Post,
//  Resume,
//  Skill,
//  MailingList,
//  Gallery,
// } = require("../models");
const ignored = ["_id"];

generateFiles(User, "user");
// generateFiles(Project, "project");
// generateFiles(Email, "email");
// generateFiles(Blog, "blog");
// generateFiles(Post, "post");
// generateFiles(Resume, "resume");
// generateFiles(Skill, "skill");
// generateFiles(MailingList, "mailingList");
// generateFiles(Gallery, "gallery");

function generateFiles(Model, fileName) {
 const location = `${dataFolder}/${fileName}.json`;
 const data = JSON.stringify(getModelData(Model));

 fs.writeFile(location, data, function (err) {
  if (err) throw err;
  console.log("Generated dummy data for", fileName);
 });
}

function getModelData(Model) {
 return dummy(Model, {
  ignore: ignored,
  returnDate: true,
  applyFilter: true,
  //   custom: {
  //    phone: "String",
  //    email: "String",
  //    password: "String",
  //   },
 });
}
