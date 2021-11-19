

function fortfolioProject() {
    
    let item = document.getElementById('codePortfolio');   
    item.innerHTML = "This website is my first try in the making of websites. <br> My code is maybe not the best but i will keep learning,<br> and try to get my code smoother and leaner in my upcomming projects.<br>Source code can be found on GitHub.<br>Languages used: Javascript, HTML, CSS"
 
};

function piRobotProject() {
    // get element by id tag
    let img = document.getElementById("rasperryRobotPic");
    // set element to block scope from none to appear on screen
    img.style.display = "block";

    // get id for the paragraph element 
    let txtElement = document.getElementById("piRobotText");
    // text for the p element
    txtElement.innerHTML = "This is my Rasperry pi Robot, which i have coded in Python. <br> Its an obstacle avoiding robot,<br> it have 1 ultra sound sensor placed in front of the robot,<br> and 2 IR sensors also placed in front but they are looking for obstacles to the left and right of the robot.<br>Languages used: Python.";
}