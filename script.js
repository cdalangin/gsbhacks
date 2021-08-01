// In home page, when user clicks on item, it'll store the choice in local storage

function clickHandler(value) {
    window.location.href = "./results.html"
    localStorage.setItem('data', JSON.stringify(value));
}

// In results page, it will load the info through this

function load() {
    var item = localStorage.getItem('data');
    console.log(item)
    JSON.parse(item)

    document.getElementById("documentation").setAttribute("href", JSON.parse(item).documentation)
    document.getElementById("logo").setAttribute("src", JSON.parse(item).logo)

    document.getElementById("tutoriala").setAttribute("href", JSON.parse(item).tutorialA)
    document.getElementById("tutorialb").setAttribute("href", JSON.parse(item).tutorialB)
    document.getElementById("desc").innerHTML = JSON.parse(item).description
    document.getElementById("choice").innerHTML = JSON.parse(item).name
    document.getElementById("mainpill").innerHTML = JSON.parse(item).type
    // localStorage.clear();
}