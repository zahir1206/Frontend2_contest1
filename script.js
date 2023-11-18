const data=[
    {name:"john", age:24, profession:"developer"},
    {name:"jane", age:27, profession:"admin"},
    {name:"zahirul", age:23, profession:"developer"},
    {name:"Yazdan", age:22, profession:"admin"}
];

function printDeveloper(){
    data.forEach(function (developer) {
        if (developer.profession === "developer") {
            console.log(`Name: ${developer.name}, Age: ${developer.age}, Profession: ${developer.profession}`);
        }
    });
}

function addData(){
    const name = prompt("Enter name:");
    const age = prompt("Enter age:");
    const profession = prompt("Enter profession:");
    const newData = { name, age: parseInt(age), profession };
    data.push(newData);
    console.log("Data added:", newData);
    console.log("Updated data array:", data);
}

function removeAdmin(){
    const newData = data.filter(function (person) {
        return person.profession !== "admin";
    });
    console.log("Admins removed. Updated data array:", newData);
}

function concatenateArray(){
    const additionalData = [
        { name: "alex", age: 30, profession: "designer" },
        { name: "emma", age: 25, profession: "manager" },
    ];
    const concatenatedArray = data.concat(additionalData);
    console.log("Arrays concatenated. Resulting array:", concatenatedArray);
}

function averageAge(){
    const sumOfAges = data.reduce(function (total, person) {
        return total + person.age;
    }, 0);
    const average = sumOfAges / data.length;
    console.log("Average Age:", average);
}

function checkAgeAbove25(){
    const isAbove25 = data.some(function (person) {
        return person.age > 25;
    });
    if (isAbove25) {
        console.log("There is at least one person above the age of 25.");
    } else {
        console.log("No one is above the age of 25.");
    }
}

function uniqueProfessions(){
    const professionsSet = new Set(data.map(person => person.profession));
    const uniqueProfessionsArray = Array.from(professionsSet);
    console.log("Unique Professions:", uniqueProfessionsArray);
}

function sortByAge(){
    const sortedData = data.slice().sort(function (a, b) {
        return a.age - b.age;
    });
    console.log("Sorted Data By Age:", sortedData);
}

function updateJohnsProfession(){
    const johnIndex = data.findIndex(person => person.name === "john");

        if (johnIndex !== -1) {
            data[johnIndex].profession = "new profession";
            console.log("John's profession updated. Updated data array:", data);
        } else {
            console.log("John not found in the data array.");
        }
}

function getTotalProfession(){
    const professionCount = data.reduce(function (countMap, person) {
        const profession = person.profession;
        countMap[profession] = (countMap[profession] || 0) + 1;
        return countMap;
    }, {});
    console.log("Profession Count:", professionCount);
}