// BUTTON TO CHANGE TEXT--------------------------------------------------
let changeText = document.createElement("div");
changeText.id = "changeText";

// tell user what to do
let changeTextInfo = document.createElement("h5");
changeTextInfo.textContent = "Click the button!";
changeText.appendChild(changeTextInfo);

// paragraph with changing text
let para = document.createElement("p");
para.textContent = "Welcome :)";
para.id = "my-paragraph";
changeText.appendChild(para);

// change paragraph text button
let paraBtn = document.createElement("button");
paraBtn.textContent = "Change Text";
paraBtn.className = "btn btn-primary";
changeText.appendChild(paraBtn);

document.body.appendChild(changeText)

// function to change paragraph text
function changeParaText() {
    if (para.textContent === "Welcome :)") {
        para.textContent = "Farewell :(";
    }
    else {
        para.textContent = "Welcome :)";
    }
}

// when button clicked, call function
paraBtn.addEventListener("click", changeParaText);

// INPUT FORM-------------------------------------------------------
let helloName = document.createElement("div");
helloName.id = "helloName"

// tell user what to do
let helloNameInfo = document.createElement("h5");
helloNameInfo.textContent = "Enter your name to get a fun message!";
helloName.appendChild(helloNameInfo);

// text input field
let input = document.createElement("input");
input.type = "text";
input.id = "nameInput";
input.placeholder = "Enter your name";
helloName.appendChild(input);

// submit button
let submitInputBtn = document.createElement("button");
submitInputBtn.textContent = "Submit";
submitInputBtn.className = "btn btn-primary";
helloName.appendChild(submitInputBtn);

// hello message
let helloMsg = document.createElement("p");
helloName.appendChild(helloMsg);

document.body.appendChild(helloName);

function hello() {
    let name = input.value.trim();

    if (name) {
        helloMsg.textContent = `Hello, ${name}!`;
    }
    else {
        helloMsg.textContent = '';
    }
}

submitInputBtn.addEventListener("click", hello);

// FAVORITE FOODS---------------------------------------------------
let favFoods = document.createElement("div");
favFoods.id = "favFoods";

// tell user what this is
let favFoodsInfo = document.createElement("h5");
favFoodsInfo.textContent = "These are some of my favorite foods:";
favFoods.appendChild(favFoodsInfo);

// collapsing div
let collapseDiv = document.createElement("div");
collapseDiv.className = "collapse";
collapseDiv.id = "collapseExample";

// collapsible Bootstrap button to see list
let collapseBtn = document.createElement("button");
collapseBtn.className = "btn btn-primary";
collapseBtn.textContent = "Click to see my favorite foods!"
collapseBtn.setAttribute("data-bs-toggle", "collapse");
collapseBtn.setAttribute("data-bs-target", "#collapseExample");
collapseBtn.setAttribute("aria-expanded", "false");
collapseBtn.setAttribute("aria-controls", "collapseExample");
favFoods.appendChild(collapseBtn);

// list of favorite foods
let favFoodsList = ['Burger', 'Fries', 'Onion Rings'];

// iterate through list, display each
for (let i = 0; i < favFoodsList.length; i++) {
    let food = document.createElement("p");
    food.textContent = favFoodsList[i];
    collapseDiv.appendChild(food);
}

favFoods.appendChild(collapseDiv);
document.body.appendChild(favFoods);

// QUEST COURSES---------------------------------------------------
let courses = document.createElement("div");
courses.id = "courses";

// list of quest courses
let questCourses = ['BMGT290H', 'BMGT390H', 'BMGT438A', 'BMGT490H', 'BMGT408C'];

// tell user what to do
let coursesInfo = document.createElement("h5");
coursesInfo.textContent = "Select the courses you have taken:";
courses.appendChild(coursesInfo);

// checkboxes
for (let i = 0; i < questCourses.length; i++) {
    let questCourse = document.createElement("input");
    let courseName = questCourses[i];
    questCourse.type = "checkbox";
    questCourse.name = "course";
    questCourse.value = courseName;

    let courseLabel = document.createElement("label");
    courseLabel.textContent = courseName;

    courses.appendChild(questCourse);
    courses.appendChild(courseLabel);
    courses.appendChild(document.createElement("br"));
}

// submit button
let submitCoursesBtn = document.createElement("button");
submitCoursesBtn.textContent = "Submit";
submitCoursesBtn.className = "btn btn-primary";
courses.appendChild(submitCoursesBtn);

document.body.appendChild(courses);

function courseAlert() {
    let checkboxes = document.querySelectorAll('input[name="course"]');
    let selectedCourses = "";

    for (let i = 0; i < checkboxes.length; i++) {
        let checkbox = checkboxes[i];
        if (checkbox.checked) {
            selectedCourses = selectedCourses + " " + checkbox.value;
        }
    }

    if (selectedCourses === "") {
        alert("You have not selected any courses.");
    }
    else {
        alert("You have taken:" + selectedCourses);
    }
}

submitCoursesBtn.addEventListener("click", courseAlert);

// BOOTSTRAP---------------------------------------------------
let bootstrap = document.createElement("div");
bootstrap.id = "bootstrap";

// tell user what to do
let bootstrapInfo = document.createElement("h5");
bootstrapInfo.textContent = "Why Bootstrap Collapse Button?";
bootstrap.appendChild(bootstrapInfo);

let bootstrapExpl = document.createElement("p");
let expl = "I realized the list of my favorite foods was taking up a bit of space on the screen, " +
    "and my content would fit on one page without it. I decided to implement a collapsible button so the " +
    "user can view the list if they want, and hide it for improved site readability if not."
bootstrapExpl.textContent = expl;
bootstrap.appendChild(bootstrapExpl);

document.body.appendChild(bootstrap);