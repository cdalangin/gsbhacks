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

    // Styles
    const stylesjs = [material, sass, bootstrap, tailwind, css]
    const randStylejs = stylesjs[Math.floor(Math.random() * stylesjs.length)]

    const frontOptions = [html]
    const randFront = frontOptions[Math.floor(Math.random() * frontOptions.length)]

    const designs = [matdes, figma, framer, invision]
    const randDes = designs[Math.floor(Math.random() * designs.length)]

    if (JSON.parse(item).name === "HTML/CSS" || JSON.parse(item).name === "React.js" || JSON.parse(item).name === "Vuejs" || JSON.parse(item).name === "Angular") {
        document.getElementById("desDesc").innerHTML = randDes.description
        document.getElementById("desName").innerHTML = randDes.name
        document.getElementById("desLogo").setAttribute("src", randDes.logo)
        document.getElementById("desDoc").setAttribute("href", randDes.documentation)
        document.getElementById("desTutoriala").setAttribute("href", randDes.tutorialA)
        document.getElementById("desTutorialb").setAttribute("href", randDes.tutorialB)

        // Styles
        document.getElementById("stylesDesc").innerHTML = randStylejs.description
        document.getElementById("stylesName").innerHTML = randStylejs.name
        document.getElementById("stylesLogo").setAttribute("src", randStylejs.logo)
        document.getElementById("stylesDoc").setAttribute("href", randStylejs.documentation)
        document.getElementById("stylesTutoriala").setAttribute("href", randStylejs.tutorialA)
        document.getElementById("stylesTutorialb").setAttribute("href", randStylejs.tutorialB)

        // Backend
        const backendjs = [node, express, jquery]
        const randBackendjs = backendjs[Math.floor(Math.random() * backendjs.length)]

        document.getElementById("backDesc").innerHTML = randBackendjs.description
        document.getElementById("backName").innerHTML = randBackendjs.name
        document.getElementById("backLogo").setAttribute("src", randBackendjs.logo)
        document.getElementById("backDoc").setAttribute("href", randBackendjs.documentation)
        document.getElementById("backTutoriala").setAttribute("href", randBackendjs.tutorialA)
        document.getElementById("backTutorialb").setAttribute("href", randBackendjs.tutorialB)
    } else if (JSON.parse(item).name === "Java") {
        document.getElementById("desDesc").innerHTML = randDes.description
        document.getElementById("desName").innerHTML = randDes.name
        document.getElementById("desLogo").setAttribute("src", randDes.logo)
        document.getElementById("desDoc").setAttribute("href", randDes.documentation)
        document.getElementById("desTutoriala").setAttribute("href", randDes.tutorialA)
        document.getElementById("desTutorialb").setAttribute("href", randDes.tutorialB)

        document.getElementById("frontendBox").style.display = ""

        document.getElementById("frontDesc").innerHTML = randFront.description
        document.getElementById("frontName").innerHTML = randFront.name
        document.getElementById("frontLogo").setAttribute("src", randFront.logo)
        document.getElementById("frontDoc").setAttribute("href", randFront.documentation)
        document.getElementById("frontTutoriala").setAttribute("href", randFront.tutorialA)
        document.getElementById("frontTutorialb").setAttribute("href", randFront.tutorialB)
        // Styles
        document.getElementById("stylesDesc").innerHTML = randStylejs.description
        document.getElementById("stylesName").innerHTML = randStylejs.name
        document.getElementById("stylesLogo").setAttribute("src", randStylejs.logo)
        document.getElementById("stylesDoc").setAttribute("href", randStylejs.documentation)
        document.getElementById("stylesTutoriala").setAttribute("href", randStylejs.tutorialA)
        document.getElementById("stylesTutorialb").setAttribute("href", randStylejs.tutorialB)

        const backendjava = [blade, dropwizard, gwt]
        const randBackendjava = backendjava[Math.floor(Math.random() * backendjava.length)]

        document.getElementById("backDesc").innerHTML = randBackendjava.description
        document.getElementById("backName").innerHTML = randBackendjava.name
        document.getElementById("backLogo").setAttribute("src", randBackendjava.logo)
        document.getElementById("backDoc").setAttribute("href", randBackendjava.documentation)
        document.getElementById("backTutoriala").setAttribute("href", randBackendjava.tutorialA)
        document.getElementById("backTutorialb").setAttribute("href", randBackendjava.tutorialA)

    } else if (JSON.parse(item).name === "Python") {
        document.getElementById("desDesc").innerHTML = randDes.description
        document.getElementById("desName").innerHTML = randDes.name
        document.getElementById("desLogo").setAttribute("src", randDes.logo)
        document.getElementById("desDoc").setAttribute("href", randDes.documentation)
        document.getElementById("desTutoriala").setAttribute("href", randDes.tutorialA)
        document.getElementById("desTutorialb").setAttribute("href", randDes.tutorialB)

        document.getElementById("frontendBox").style.display = "flex"

        document.getElementById("frontDesc").innerHTML = randFront.description
        document.getElementById("frontName").innerHTML = randFront.name
        document.getElementById("frontLogo").setAttribute("src", randFront.logo)
        document.getElementById("frontDoc").setAttribute("href", randFront.documentation)
        document.getElementById("frontTutoriala").setAttribute("href", randFront.tutorialA)
        document.getElementById("frontTutorialb").setAttribute("href", randFront.tutorialB)

        // Styles
        document.getElementById("stylesDesc").innerHTML = randStylejs.description
        document.getElementById("stylesName").innerHTML = randStylejs.name
        document.getElementById("stylesLogo").setAttribute("src", randStylejs.logo)
        document.getElementById("stylesDoc").setAttribute("href", randStylejs.documentation)
        document.getElementById("stylesTutoriala").setAttribute("href", randStylejs.tutorialA)
        document.getElementById("stylesTutorialb").setAttribute("href", randStylejs.tutorialB)

        const backendpy = [flask, django, cherrypy]
        const randBackendpy = backendpy[Math.floor(Math.random() * backendpy.length)]

        document.getElementById("backDesc").innerHTML = randBackendpy.description
        document.getElementById("backName").innerHTML = randBackendpy.name
        document.getElementById("backLogo").setAttribute("src", randBackendpy.logo)
        document.getElementById("backDoc").setAttribute("href", randBackendpy.documentation)
        document.getElementById("backTutoriala").setAttribute("href", randBackendpy.tutorialA)
        document.getElementById("backTutorialb").setAttribute("href", randBackendpy.tutorialB)
    }
}