let Person = require('./person')
// Write your code here
module.exports = function Student(name,age,xlass)
{
  Person.call(this,name,age);
 this.introduce=function()
{
     return "My name is "+name+". I am "+age+" years old. I am a Student. I am at Class "+xlass+".";
};
}

