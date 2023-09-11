function hw_css(dom) {
    var computed = window.getComputedStyle(dom);
    var classes = [];
    // THE MEAT

    return classes.join(" ");
}

// very simple clone, but intercept the style and class attributes to be replaced with the hw_css function
function hw_clone(dom) {
    var next = document.createElement(dom.tagName); // about about NS
    for (var i = 0; i < dom.attributes.length; i++) {
        var a = dom.attributes[i];
        if (a.name == "style" || a.name == "class") {
            continue;
        }
        if (a.specified) {
            // some things will not work in this model
            next.setAttribute(a.name, a.value);
        }
    }
    var clazz = hw_css(dom);
    if (clazz != "") {
        next.setAttribute('class', clazz);
    }
    // TODO: copy attributes
    dom.childNodes.forEach(function (node) {
        if (node.nodeType == Node.ELEMENT_NODE) {
            next.append(hw_clone(node));
        } else if (node.nodeType == Node.TEXT_NODE) {
            next.append(document.createTextNode(node.wholeText));
        } else if (node.nodeType == Node.COMMENT_NODE) {
            // ignore
        } else {
            console.log("huh?");
            console.log(node);
        }
    });
    return next;
}

// entry point
function headwindcss(dom) {
    // we clone the node and return the HTML
    return hw_clone(dom).outerHTML;
}