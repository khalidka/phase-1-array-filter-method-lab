// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(driverNames, letters) {
  const toLowerCaseLetter = letters.toLowerCase();
  return driverNames.filter((driver) =>
    driver.toLowerCase().includes(toLowerCaseLetter)
  );
}
const matchingDrivers = findMatching(drivers, "bob");
console.log(matchingDrivers);

const fuzzyMatch = (driverNames, query) => {
  const lowercaseQuery = query.toLowerCase();
  return driverNames.filter((driver) =>
    driver.toLowerCase().startsWith(lowercaseQuery)
  );
};

const query = "sa";
const firstMatchingLetter = fuzzyMatch(drivers, query);
console.log(firstMatchingLetter);

const matchName = (drivers, name) => {
  return drivers.filter(
    (driver) => driver.name.toLowerCase() === name.toLowerCase()
  );
};

const driverMatchNames = matchName(drivers, "Bobby");
console.log(driverMatchNames);
