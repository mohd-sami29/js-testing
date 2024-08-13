// monday - 7am
// tue to thurs - 4am
// fri - 9am
// sat to sub - 8am

// const alarm = (day) => {
//   if (day == "monday") {
//     console.log("ring alarm at 7am");
//   } else if (day == "tue" || day == "wed" || day == "thurs") {
//     console.log("ring alarm at 4am");
//   } else if (day == "fri") {
//     console.log("ring alarm at 9am");
//   } else if (day == "sat" || day == "sun") {
//     // document.write("ring alarm at 8am");
//     console.log("ring alarm at 8am");
//   }else console.log("pass valid day");
// };
// let day = "monday";
// alarm(day);

const alarm = (day) => {
  switch (day) {
    case "monday":
      console.log("ring alarm at 7AM");
      break;
    case "tue":
    case "wed":
    case "thurs":
      console.log("ring alarm at 4AM");
      break;
    case "fri":
      console.log("ring alarm at 9AM");
      break;
    case "sat":
    case "sun":
      console.log("ring alarm at 8Am");
      break;
    default:
      document.write("PASS valid DAY");
      console.log("PASS VALID DAY");
  }
};
let day = "anday";
alarm(day);
