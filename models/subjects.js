// שלב 3- יצירת מודל דאטה בייס
//in mongo DB its collections and table its documents, 1 json its document

const mongoose = require('mongoose');  //משתנה מונגוס// התחברות למונגוס
var Schema= mongoose.Schema;  //משתנה סכמה שיצרנו

//יצירת והגדרת סכמה עם עמודות בדאטה בייס
const Subjects = mongoose.model('Subjects', new Schema({
    name:String,  // אות גדולה!
    pic: String
}))

module.exports = Subjects;   //ייצוא סכמה