const student = {
    name: "Zakee",
    age: 28,
    classes: [
        {
            className: "Literature 101",
            time: "10:00pm"
        },
        {
            className: "History",
            time: "1:00pm"
        },
        {
            className: "Movie about Gays",
            time: "2:00pm"
        },
        {
            className: "I love Asians",
            time: "4:00pm"
        },
        {
            className: "Coding is Gay",
            time: "3:00pm"
        }
    ]
    
    
}
console.log("Student Object:", student);

student.classes.forEach(item => console.log("Class Name: ", item.className,"\nClass Time: ", item.time));