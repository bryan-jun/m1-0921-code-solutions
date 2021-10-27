/* exported getStudentNames */

function getStudentNames(students) {
  var array = [];
  for (var x in students) {
    var name = students[x].name;
    array.push(name);
  }

  return array;
}
