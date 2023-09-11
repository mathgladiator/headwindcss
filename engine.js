function intOf(x) {
    if (x.endsWith("px")) {
        //    return parseInt(x.substring(0, x.length() - 2));
    }
    return parseInt(x);
}

function twSuffixVal(val) {
  return Math.round(val / 3) / 2;
}

function colorOf(color) {
    switch(color) {
        case "rgb(30, 41, 59)":
            return "slate-800"; // TODO: validate!
    }
    return null;
}

function hw_css(dom) {
    var computed = window.getComputedStyle(dom);
    var classes = [];
    // THE MEAT

    var marginTop = intOf(computed['marginTop']);
    var marginLeft = intOf(computed['marginLeft']);
    var marginRight = intOf(computed['marginRight']);
    var marginBottom = intOf(computed['marginBottom']);

    // what about negatives?
    if (marginTop == marginBottom && marginLeft == marginRight && marginLeft == marginTop && marginLeft > 0) {
        classes.push("m-" + twSuffixVal(marginTop));
    } else {
        if (marginTop == marginBottom && marginTop > 0) {
            classes.push("my-" + twSuffixVal(marginTop));
        } else {
            if (marginTop > 0) {
                classes.push("mt-" + twSuffixVal(marginTop));
            }
            if (marginBottom > 0) {
                classes.push("mb-" + twSuffixVal(marginBottom));
            }
        }

        if (marginLeft == marginRight && marginLeft > 0) {
            classes.push("mx-" + twSuffixVal(marginTop));
        } else {
            if (marginLeft > 0) {
                classes.push("ml-" + twSuffixVal(marginLeft));
            }
            if (marginRight > 0) {
                classes.push("mr-" + twSuffixVal(marginRight));
            }
        }
    }

    var fontWeight = intOf(computed['font-weight']);
    if (fontWeight == 500) { // TODO: range this up
        classes.push("font-medium")
    }
    
    var color = colorOf(computed['color']);
    if (color != null) {
        classes.push("text-" + color);
    }



    var result = classes.join(" ");

    console.log(dom.getAttribute('class') + "::" + dom.getAttribute('style') + "-->" + result);
    console.log(computed);

    return result;
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