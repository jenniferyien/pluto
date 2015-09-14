var classroom = {
    'teacher': "Miss McGillucuddy",
    'class': "Grade 3",
    'students': [
        {
            'firstName': 'Joe',
            'lastName': 'Porfido',
            'age': 5,
            'hair': 'brown',
            'aspirations': ['Go to the moon', 'Meet George Clooney']
    },
        {
            'firstName': 'Sally',
            'lastName': 'Ray',
            'age': 6,
            'hair': 'brown',
            'aspirations': ['Eat a taco', 'Go to heaven']
    },
        {
            'firstName': 'Joey',
            'lastName': 'Bagadonuts',
            'age': 7,
            'hair': 'red',
            'aspirations': ['Drive a car', 'get an iPhone']
    },
        {
            'firstName': 'Larry',
            'lastName': 'Beans',
            'age': 10,
            'hair': 'black',
            'aspirations': ['Fly an airplane', 'Cancun for spring break']
    },
        {
            'firstName': 'Yvette',
            'lastName': 'Blahblahblah',
            'age': 8,
            'hair': 'brown',
            'aspirations': ['Get drunk this weekend', 'Go to General Assembly']
    }
 ]
}






/*
1) Use the map method to automatically create a 'fullname' field for each student in your class.

Solution:

classroom.students = classroom.students.map(
    function (item, index) {
        item.fullName = item.firstName + " " + item.lastName;
        return item;
    });

console.log(classroom);


2) Use foreach to write two report methods: 

    a) Miss McGillucuddy, Grade 3
       Joe Porfido
       ...
       Yvette Blahblahblah

Solution:
    console.log( classroom.teacher+",  "+classroom.class);
classroom.students.forEach(function(item, index){
    console.log(item.fullName);
});
       
    b) Miss McGillucuddy, Grade 3
    
       Joe Porfido
       Age: 5  Hair: brown
       Aspirations: 
        - Go to the moon
        - Meet George Clooney
       Grades: 100, 80, 90, ...
       ...
       
       Yvette Blahblahblah
       Age: 8  Hair: brown
       Aspirations:
        - Get drunk this weekend
        - Go to General Assembly
       Grades: 100, 90, 95, ...

Solution:

console.log( classroom.teacher+",  "+classroom.class);
classroom.students.forEach(function(item, index){
    console.log(item.fullName);
    console.log("Age: ",item.age," Hair: ",item.hair);
    console.log("Aspirations:")
    for(var  i=0; i<item.aspirations.length;i++)
        console.log("  -",item.aspirations[i]);
    var gradeList="";
    for(var i=0;i<item.grades.length-1;i++){
        gradeList+=grades[i]+", ";
    }
    gradesList+=grades[item.grades.length-1];
    console.log("Grades:", gradesList);
});



3) Use the filter method to create a new array of students with age grades < 8. Output the name of each of these students.

Solution:
var failList = classroom.students.filter(function(item){
    return item.age < 8;
});

failList.forEach(function(item, index){
    console.log(item.fullName);
});



*/