// const fs = require('fs');
// const dummy = require("mongoose-dummy");
// const dataFolder = './dummy-data';
// const User = require('../models/user');

// function getModelData() {
// const ignored = ['_id'];
// return dummy(Model, {
//   ignore: ignored,
//   returnDate: true,
//   applyFilter: true
//   //   custom: {
//   //    phone: "String",
//   //    email: "String",
//   //    password: "String",
//   //   },
// });
// }

// function generateFiles(fileName) {
//   const location = `${dataFolder}/${fileName}.json`;
//   // const data = JSON.stringify(getModelData(Model));

//   fs.writeFile(location, data, (err) => {
//     if (err) throw err;
//     // eslint-disable-next-line no-console
//     console.log('Generated dummy data for', fileName);
//   });
// }

// generateFiles(User, 'user');
// generateFiles(Project, "project");
// generateFiles(Email, "email");
// generateFiles(Blog, "blog");
// generateFiles(Post, "post");
// generateFiles(Resume, "resume");
// generateFiles(Skill, "skill");
// generateFiles(MailingList, "mailingList");
// generateFiles(Gallery, "gallery");