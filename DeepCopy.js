var student1 = {
    course: 1,
    name: "John Smith",
    exams: {
        math: 7,
        prog: 10,
        lang: 9
    },
    address: {
        town: "Vitebsk",
        street: "Lenina",
        number: 123
    },
};
 function cloning (oldObj) {
    var newObj = {};
     for (var att in oldObj) {
        if (typeof oldObj[att] == "object") {
            newObj[att] = cloning(oldObj[att]);
        }
        else {
            newObj[att] = oldObj[att];
        }
    }
     return newObj;
}
 var student2 = cloning(student1);
 student1.course = 2;
student1.address.town = "Grodno";
 console.log(student1);
console.log(student2);