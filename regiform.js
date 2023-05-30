let display_name = document.getElementById("display_name");
let display_CollegeName = document.getElementById("display_CollegeName");
let display_Gender = document.getElementById("display_Gender")
let display_Email = document.getElementById("display_Email");
let display_PhoneNo = document.getElementById("display_PhoneNo");
let display_CurrentCourse = document.getElementById("display_CurrentCourse");
let display_skill = document.getElementById("display_skill");

function showDetails() {
    var nameE1 = document.getElementById("name").value;
    var CollegeNameE1 = document.getElementById("CollegeName").value;
    var GenderE1 = document.getElementById("Gender").value;
    var EmailE1 = document.getElementById("Email").value;
    var PhoneNoE1 = document.getElementById("PhoneNo").value;
    var CurrentCourseE1 = document.getElementById("CurrentCourse").value;
    var skillE1 = document.getElementById("skill").value;
    display_name.innerHTML = nameE1;
    display_CollegeName.innerHTML = CollegeNameE1;
    display_Gender.innerHTML = GenderE1;
    display_Email.innerHTML = EmailE1;
    display_PhoneNo.innerHTML = PhoneNoE1;
    display_CurrentCourse.innerHTML = CurrentCourseE1;
    display_skill.innerHTML = skillE1;
}