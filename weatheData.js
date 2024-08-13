// Find the location and there temperature from given array of object.

let weatherData = [
  { location: "delhi", temperature: -20 },
  { location: "mumbai", temperature: 30 },
  { location: "kolkata", temperature: -40 },
  { location: "pune", temperature: 50 },
  { location: "bangalore", temperature: -60 },
  { location: "hydrabad", temperature: 70 },
  { location: "ahmadabad", temperature: -80 },
  { location: "chennai", temperature: 90 },
];

let isTempPos = (item) => {
  if (item.temperature > 0) return true;
};

let celToFarConvt = (item) => {
  item.temperature = item.temperature * (9 / 5) + 32;
  return item;
};

let result = weatherData.filter(isTempPos).map(celToFarConvt);
console.log(result);
