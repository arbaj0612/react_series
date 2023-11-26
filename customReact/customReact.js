function CustomRender(reactElement , container) {
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute("href" , reactElement.props.href)
    // domElement.setAttribute("target" , reactElement.props.target)
    // container.appendChild(domElement)

            // ******* Alternate way *********

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
       if(prop === "children") continue;
       domElement.setAttribute(prop , reactElement.props[prop])
    }
    container.appendChild(domElement)

}


const mainContainer = document.getElementById("root")

const reactElement = {
    type: "a",
    props : {
        href: "https://google.com",
        target : "_blank"
    },
    children: "Click to jump on google"
}

CustomRender(reactElement, mainContainer)