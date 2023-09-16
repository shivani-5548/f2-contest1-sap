let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer', salary: 1000 },
  { id: 2, name: 'jack', age: 20, profession: 'developer', salary: 1100 },
  { id: 3, name: 'karen', age: 17, profession: "admin", salary: 900 },
  { id: 4, name: "jane", age: 27, profession: "admin", salary: 800 }
];
console.log("The original/initial array is: ", arr);

// 1.(a) Print all developers from the array.

function PrintDeveloper() {
  //Write your code here , just console.log
  let dev_names = [];
  for(let i=0; i<arr.length; i++){
      if(arr[i].profession === "developer"){
          dev_names.push(arr[i].name);
      }
  }
  let ans = dev_names.join(", ");
  console.log(dev_names);
  console.log(ans);
}

// 2.(a) Add a new data object to the array arr.

  function addData() {
  const newEntry = {
      id: arr.length+1,
      name: prompt("Enter name: "),
      age: parseInt(prompt("Enter age: ")),
      profession: prompt("Enter profession: "),
      salary: parseInt(prompt("Enter salary: ")),
  };
  arr.push(newEntry);
  console.log("New entry in database: ", newEntry);
  console.log("New Database list: ", arr);
  }

// 3. Remove Admins
  function removeAdmin() {
     console.log("Original Array: ",arr);
      let deleted_list = [];

     for(let i=0; i<arr.length; i++){

      if(arr[i].profession === "admin"){
         deleted_list.push(arr.splice(i,1));// deletes 1 entry from arr from i index
          i--;
      }
     }

     console.log("Deleted objs: ",deleted_list);
     console.log("New arr after admins deleted",arr);
  }

// 4. Concatenate Array
  function concatenateArray() {
      let developers = ["john", "jack"];
      console.log("array of developers", developers);

      let admins = ["karen", "jane"];
      console.log("array of admins", admins);

      // let employed = [...admins, ...developers];// we may also use ... operator
      let employed = [].concat(admins,developers);

      console.log("array of employed person both admins and developers:", employed);

  }

// 5. Average Age
  function averageAge() {
      let age_sum = null;
      console.log("for all people in list:", arr);
      for( let i=0; i<arr.length; i++){
          age_sum += arr[i].age;
      }
      let avg_age = age_sum/arr.length;
      console.log("the Average Age is : ", avg_age, "years. ");
  }

// 6. Age Check
  function checkAgeAbove25() {
      let old_persons = [];

      for(let i=0; i<arr.length; i++){
          if(arr[i].age > 25){
              old_persons.push(arr[i].name);
          }
      }

      if( old_persons.length < 1){
          console.log("None of the people are older than 25");
      } else {
          console.log("The people who are older than 25 are: ", old_persons);
      }
  }

// 7. Unique Professions
  function uniqueProfessions() {
      let unique_professions = [];
      let map = {};
      for (const person of arr) {
          if(!map[person.profession]){
              unique_professions.push(person.profession);
              map[person.profession] = true;
          }
          
      }

      console.log("All unique professions in the arr are: ", unique_professions);
  }

// 8. Sort by Age
  function sortByAge() {
      console.log("Original arr: ", arr);
      arr.sort((a,b) =>a.age - b.age);
      console.log("New age-sorted arr: ", arr);
  }

// 9. Update Profession
  function updateJohnsProfession() {
      let ans = {};
      for (const person of arr) {
          if(person.name == "john"){
              person.profession = "manager";
              ans = person;
              break;
          }
      }
      console.log(ans);
      console.log("Updated arr: ", arr);
      
  }

// 10. Profession Count
  function getTotalProfessions() {
      map = {}
      for(const person of arr){
          if(map[person.profession]){
              map[person.profession]++;
          }else{
              map[person.profession] = 1;
          }
      }
      console.log("the profession and count of people in said profession is as follows:", map);
      
  }

// 11. Print all developers from the array whose salary is above the average salary of the array.
function PrintHighEarningDevelopers() {
  //Write your code here , just console.log
  let sum_salary = 0, dev_names=[];
  for(let i=0; i<arr.length; i++){
      sum_salary += arr[i].salary;
  }
  let avg_salary = sum_salary/n;
  for(let i=0; i<arr.length; i++){
      if(arr[i].salary > avg_salary ){
          dev_names.push(arr[i].name);
      }
  }
  let ans = dev_names.join(", ");
  console.log(ans);
}
