// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
  
  {
    sectionNum: 1,
    roomNum: "STC 353",
    enrolled: 26,
    days: "TTh",
    instructor: "Bro T",
  },
  {
    sectionNum: 2,
    roomNum: "STC 347",
    enrolled: 28,
    days: "TTh",
    instructor: "Sis A",
  },
],

changeEnrollment: function (sectionNum, add = true) {
    const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
        if (add) {
            this.sections[sectionIndex].enrolled++;
        } else {
            this.sections[sectionIndex].enrolled--;
        }
        createSections(this.sections);
    }
}

enrollStudent: function (sectionNum) {
    //get the section using Array.findIndex//
    const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
     );
    if (sectionIndex >= 0) {
        this.section[sectionIndex].enrolled++;
        createSections(this.sections);
    }
},
dropStudent: function (sectionNum){
    //get the section using Array.findIndex//
    const sectionIndex = this.sections.findIndex(
       (section) => section.sectionNum == sectionNum 
    );
    if (sectionIndex >= 0) {
        this.sections[sectionIndex].enrolled --;
        createSections(this.sections);
    }
  },
};

//create function to set the name and number of the course in the HTML.//
  function courseInfo(course){
    //retrieve from HTML//
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;

  }
  //create section function with the table indentified by #sections//
  function createSections(sections) {
    const html = sections.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
  }

  document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
  });
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
  });

  courseInfo(aCourse);
  createSections(aCourse.sections);