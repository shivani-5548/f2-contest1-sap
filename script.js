const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 25, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    let developers = data.filter(
      (employee) => employee.profession === "developer"
    );
    for (let developer of developers) {
      console.log(developer);
    }
  }
  
  // 2. Add Data
  function addData() {
    const inputData = window.prompt(
      "Enter name,age,profession comma seperated values"
    );
  
    if (inputData.length == 0) {
      return;
    }
    const dataArray = inputData.split(",");
  
    if (dataArray.length != 3) {
      alert("insufficient data");
    } else {
      const newDataObject = {
        name: dataArray[0],
        age: dataArray[1],
        profession: dataArray[2],
      };
  
      data.push(newDataObject);
    }
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    for (let i = 0; i < data.length; i++) {
      if (data[i].profession === "admin") {
        data.splice(i, 1);
        i--;
      }
    }
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let dummyArray = [
      { name: "sam", age: 22, profession: "teacher" },
      { name: "aravind", age: 33, profession: "datascience" },
    ];
  
    const combinedArray = data.concat(dummyArray);
    for (let employee of combinedArray) {
      console.log(employee);
    }
  }
  
  // 5. Average Age
  function averageAge() {
    let ageSum = 0;
    for (let employee of data) {
      ageSum += employee.age;
    }
    console.log("average age :", ageSum / data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    for (let i = 0; i < data.length; i++) {
      if (data[i].age > 25) {
        console.log("person found older than 25 years");
        return;
      }
    }
    console.log("no person found older than 25 years");
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const map = new Map();
  
    for (let employee of data) {
      if (!map.has(employee.profession)) {
        map.set(employee.profession, 0);
      }
    }
  
    let keys = map.keys();
    for (let profession of keys) {
      console.log(profession);
    }
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a.age - b.age);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    for (let employee of data) {
      if (employee.name === "john") {
        employee.profession = "manager";
      }
    }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let count = 0;
  
    for (let employee of data) {
      if (
        employee.profession === "developer" ||
        employee.profession === "admin"
      ) {
        count += 1;
      }
    }
    console.log(count);
  }
  
  // added this just to make it easy to see outputs for functions which are not logging to console
  function printAll() {
    for (let employee of data) {
      console.log(employee);
    }
  }