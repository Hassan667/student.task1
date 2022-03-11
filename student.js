const fs = require("fs");

const reternStudents = () => {
    try {
        const studentBuffer = fs.readFileSync("data.json").toString();
        return JSON.parse(studentBuffer);
    } catch (e) {
        return [];
    }
};

const save = (students) => {
    const saveData = JSON.stringify(students);
    fs.writeFileSync("data.json", saveData);
};

const reternstudents = () => {
    try {
        const studentBuffer = fs.readFileSync("data.json").toString();
        return JSON.parse(studentBuffer);
    } catch (e) {
        return [];
    }
};

const saveStudent = (students) => {
    const saveData = JSON.stringify(students);
    fs.writeFileSync("data.json", saveData);
};

//add
const addStudent = (id, name, grade) => {
    const students = reternstudents();
    const dupricateID = students.filter((student) => {
        return student.id === id;
    });
    console.log(dupricateID);

    if (dupricateID.length === 0) {
        students.push({
            id,
            name,
            grade,
        });
        save(students);
        console.log("Successful");
    } else {
        console.log("Error Duplicate !!! ");
    }
};

// delete
const deleteStudent = (id) => {
    const students = reternstudents();
    const studentStay = students.filter((student) => {
        return student.id !== id;
    });
    console.log(studentStay);
    save(studentStay);
};

//read

const readstudents = (id) => {
    const students = reternstudents();
    const studentInfo = students.find((student) => {
        return student.id === id;
    });

    if (studentInfo) {
        console.log(studentInfo);
        console.log(studentInfo.id);
        console.log(studentInfo.name);
    }
};

//list

const listStudent = () => {
    const students = reternstudents();
    students.forEach((student) => {
        console.log(student.id);
        console.log(student.name);
    });
};

const reternstuden = () => {
    try {
        const studentBuffer = fs.readFileSync("data.json").toString();
        return JSON.parse(studentBuffer);
    } catch (e) {
        return [];
    }
};

const sav = (students) => {
    const saveData = JSON.stringify(students);
    fs.writeFileSync("data.json", saveData);
};

module.exports = {
    addStudent,
    deleteStudent,
    readstudents,
    listStudent,
};