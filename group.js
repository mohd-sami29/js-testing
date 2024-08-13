let student = [
  { roll: 1, name: "John" },
  { roll: 2, name: "Jane" },
  { roll: 1, name: "Doe" },
  { roll: 2, name: "Smith" },
];

const sami = () => {
  let result = [];
  let obj = {};
  let output = [];
  let key1;
  let key2;
  for (let i = 0; i < student.length; i++) {
    if (student[i].roll == 1) {
      key1 = student[i].roll;
      result.push(student[i].name);
      obj[key1] = result;
    } else if (student[i].roll == 2) {
      key2 = student[i].roll;

      output.push(student[i].name);
      obj[key2] = output;
    }
  }
  // console.log(result);
  // console.log(output);
  console.log(obj);
  return result, output;
};
sami(student);
