function intOf(x) {
    if (x.endsWith("px")) {
        //    return parseInt(x.substring(0, x.length() - 2));
    }
    return parseInt(x);
}

function floatOf(x) {
    return parseFloat(x);
}


const acceptedMultiples = [0 , .5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 44, 48, 52, 56, 60, 64, 72, 80, 96]
function twSuffixVal(val) {
  return Math.round(val / 3) / 2;
}

function twRadiusVal(val) {
    var num = intOf(val);
    const radiusChart = {0 : "none", 2: "sm", 4: "", 6: "md", 8: "lg", 12: "xl", 16: "2xl", 24: "3xl", 9999: "full"}
    var returnVal = radiusChart[num];
    if (returnVal !== undefined) {
        return returnVal;
    } else {
        // Could figure out which relative value it is
        return "[" + val + "]";
    }
    
}

function twBWVal(val) {
    var num = intOf(val);
    if (num <= 8 && num % 2 == 0) {
        return num.toString();
    } else if (num == 1) {
        return "";
    } else {
        return "[" + val + "]";
    }
}

function twSpacingVal(val) {
    const base = 4;
    const multiple = val/base;
    if (acceptedMultiples.includes(multiple)) {
        return multiple.toString();
    } else {
        if (val == 1) {
            return "px"
        }
        return null;
    }
}

const acceptedBasisMultiples = [0 , .5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 44, 48, 52, 56, 60, 64, 72, 80, 96];

function twBasisVal(val) {
    const base = 4;
    const multiple = val/base;
    if (acceptedBasisMultiples.includes(multiple)) {
        return multiple.toString();
    } else {
        if (val == 1) {
            return "px";
        }
        return null;
        // Account for percentages and ratios
    }

}

function colorOf(color) {
    colorVals = color.slice(color.indexOf("(") + 1, -1);
    allVals = colorVals.split(", ");
    colorOnly = "rgb(" + allVals.slice(0, 3).join(", ") + ")";
    returnVal = "";
    switch(colorOnly) {
        case "rgb(0, 0, 0)":
	        returnVal = "black";
	        break;
        case "rgb(255, 255, 255)":
            returnVal = "white";
            break;
        case "rgb(248, 250, 252)":
            returnVal = "slate-50";
            break;
        case "rgb(241, 245, 249)":
            returnVal = "slate-100";
            break;
        case "rgb(226, 232, 240)":
            returnVal = "slate-200";
            break;
        case "rgb(203, 213, 225)":
            returnVal = "slate-300";
            break;
        case "rgb(148, 163, 184)":
            returnVal = "slate-400";
            break;
        case "rgb(100, 116, 139)":
            returnVal = "slate-500";
            break;
        case "rgb(71, 85, 105)":
            returnVal = "slate-600";
            break;
        case "rgb(51, 65, 85)":
            returnVal = "slate-700";
            break;
        case "rgb(30, 41, 59)":
            returnVal = "slate-800";
            break;
        case "rgb(15, 23, 42)":
            returnVal = "slate-900";
            break;
        case "rgb(2, 6, 23)":
            returnVal = "slate-950";
            break;
        case "rgb(249, 250, 251)":
            returnVal = "gray-50";
            break;
        case "rgb(243, 244, 246)":
            returnVal = "gray-100";
            break;
        case "rgb(229, 231, 235)":
            returnVal = "gray-200";
            break;
        case "rgb(209, 213, 219)":
            returnVal = "gray-300";
            break;
        case "rgb(156, 163, 175)":
            returnVal = "gray-400";
            break;
        case "rgb(107, 114, 128)":
            returnVal = "gray-500";
            break;
        case "rgb(75, 85, 99)":
            returnVal = "gray-600";
            break;
        case "rgb(55, 65, 81)":
            returnVal = "gray-700";
            break;
        case "rgb(31, 41, 55)":
            returnVal = "gray-800";
            break;
        case "rgb(17, 24, 39)":
            returnVal = "gray-900";
            break;
        case "rgb(3, 7, 18)":
            returnVal = "gray-950";
            break;
        case "rgb(250, 250, 250)":
            returnVal = "zinc-50";
            break;
        case "rgb(244, 244, 245)":
            returnVal = "zinc-100";
            break;
        case "rgb(228, 228, 231)":
            returnVal = "zinc-200";
            break;
        case "rgb(212, 212, 216)":
            returnVal = "zinc-300";
            break;
        case "rgb(161, 161, 170)":
            returnVal = "zinc-400";
            break;
        case "rgb(113, 113, 122)":
            returnVal = "zinc-500";
            break;
        case "rgb(82, 82, 91)":
            returnVal = "zinc-600";
            break;
        case "rgb(63, 63, 70)":
            returnVal = "zinc-700";
            break;
        case "rgb(39, 39, 42)":
            returnVal = "zinc-800";
            break;
        case "rgb(24, 24, 27)":
            returnVal = "zinc-900";
            break;
        case "rgb(9, 9, 11)":
            returnVal = "zinc-950";
            break;
        case "rgb(250, 250, 250)":
            returnVal = "neutral-50";
            break;
        case "rgb(245, 245, 245)":
            returnVal = "neutral-100";
            break;
        case "rgb(229, 229, 229)":
            returnVal = "neutral-200";
            break;
        case "rgb(212, 212, 212)":
            returnVal = "neutral-300";
            break;
        case "rgb(163, 163, 163)":
            returnVal = "neutral-400";
            break;
        case "rgb(115, 115, 115)":
            returnVal = "neutral-500";
            break;
        case "rgb(82, 82, 82)":
            returnVal = "neutral-600";
            break;
        case "rgb(64, 64, 64)":
            returnVal = "neutral-700";
            break;
        case "rgb(38, 38, 38)":
            returnVal = "neutral-800";
            break;
        case "rgb(23, 23, 23)":
            returnVal = "neutral-900";
            break;
        case "rgb(10, 10, 10)":
            returnVal = "neutral-950";
            break;
        case "rgb(250, 250, 249)":
            returnVal = "stone-50";
            break;
        case "rgb(245, 245, 244)":
            returnVal = "stone-100";
            break;
        case "rgb(231, 229, 228)":
            returnVal = "stone-200";
            break;
        case "rgb(214, 211, 209)":
            returnVal = "stone-300";
            break;
        case "rgb(168, 162, 158)":
            returnVal = "stone-400";
            break;
        case "rgb(120, 113, 108)":
            returnVal = "stone-500";
            break;
        case "rgb(87, 83, 78)":
            returnVal = "stone-600";
            break;
        case "rgb(68, 64, 60)":
            returnVal = "stone-700";
            break;
        case "rgb(41, 37, 36)":
            returnVal = "stone-800";
            break;
        case "rgb(28, 25, 23)":
            returnVal = "stone-900";
            break;
        case "rgb(12, 10, 9)":
            returnVal = "stone-950";
            break;
        case "rgb(254, 242, 242)":
            returnVal = "red-50";
            break;
        case "rgb(254, 226, 226)":
            returnVal = "red-100";
            break;
        case "rgb(254, 202, 202)":
            returnVal = "red-200";
            break;
        case "rgb(252, 165, 165)":
            returnVal = "red-300";
            break;
        case "rgb(248, 113, 113)":
            returnVal = "red-400";
            break;
        case "rgb(239, 68, 68)":
            returnVal = "red-500";
            break;
        case "rgb(220, 38, 38)":
            returnVal = "red-600";
            break;
        case "rgb(185, 28, 28)":
            returnVal = "red-700";
            break;
        case "rgb(153, 27, 27)":
            returnVal = "red-800";
            break;
        case "rgb(127, 29, 29)":
            returnVal = "red-900";
            break;
        case "rgb(69, 10, 10)":
            returnVal = "red-950";
            break;
        case "rgb(255, 247, 237)":
            returnVal = "orange-50";
            break;
        case "rgb(255, 237, 213)":
            returnVal = "orange-100";
            break;
        case "rgb(254, 215, 170)":
            returnVal = "orange-200";
            break;
        case "rgb(253, 186, 116)":
            returnVal = "orange-300";
            break;
        case "rgb(251, 146, 60)":
            returnVal = "orange-400";
            break;
        case "rgb(249, 115, 22)":
            returnVal = "orange-500";
            break;
        case "rgb(234, 88, 12)":
            returnVal = "orange-600";
            break;
        case "rgb(194, 65, 12)":
            returnVal = "orange-700";
            break;
        case "rgb(154, 52, 18)":
            returnVal = "orange-800";
            break;
        case "rgb(124, 45, 18)":
            returnVal = "orange-900";
            break;
        case "rgb(67, 20, 7)":
            returnVal = "orange-950";
            break;
        case "rgb(255, 251, 235)":
            returnVal = "amber-50";
            break;
        case "rgb(254, 243, 199)":
            returnVal = "amber-100";
            break;
        case "rgb(253, 230, 138)":
            returnVal = "amber-200";
            break;
        case "rgb(252, 211, 77)":
            returnVal = "amber-300";
            break;
        case "rgb(251, 191, 36)":
            returnVal = "amber-400";
            break;
        case "rgb(245, 158, 11)":
            returnVal = "amber-500";
            break;
        case "rgb(217, 119, 6)":
            returnVal = "amber-600";
            break;
        case "rgb(180, 83, 9)":
            returnVal = "amber-700";
            break;
        case "rgb(146, 64, 14)":
            returnVal = "amber-800";
            break;
        case "rgb(120, 53, 15)":
            returnVal = "amber-900";
            break;
        case "rgb(69, 26, 3)":
            returnVal = "amber-950";
            break;
        case "rgb(254, 252, 232)":
            returnVal = "yellow-50";
            break;
        case "rgb(254, 249, 195)":
            returnVal = "yellow-100";
            break;
        case "rgb(254, 240, 138)":
            returnVal = "yellow-200";
            break;
        case "rgb(253, 224, 71)":
            returnVal = "yellow-300";
            break;
        case "rgb(250, 204, 21)":
            returnVal = "yellow-400";
            break;
        case "rgb(234, 179, 8)":
            returnVal = "yellow-500";
            break;
        case "rgb(202, 138, 4)":
            returnVal = "yellow-600";
            break;
        case "rgb(161, 98, 7)":
            returnVal = "yellow-700";
            break;
        case "rgb(133, 77, 14)":
            returnVal = "yellow-800";
            break;
        case "rgb(113, 63, 18)":
            returnVal = "yellow-900";
            break;
        case "rgb(66, 32, 6)":
            returnVal = "yellow-950";
            break;
        case "rgb(247, 254, 231)":
            returnVal = "lime-50";
            break;
        case "rgb(236, 252, 203)":
            returnVal = "lime-100";
            break;
        case "rgb(217, 249, 157)":
            returnVal = "lime-200";
            break;
        case "rgb(190, 242, 100)":
            returnVal = "lime-300";
            break;
        case "rgb(163, 230, 53)":
            returnVal = "lime-400";
            break;
        case "rgb(132, 204, 22)":
            returnVal = "lime-500";
            break;
        case "rgb(101, 163, 13)":
            returnVal = "lime-600";
            break;
        case "rgb(77, 124, 15)":
            returnVal = "lime-700";
            break;
        case "rgb(63, 98, 18)":
            returnVal = "lime-800";
            break;
        case "rgb(54, 83, 20)":
            returnVal = "lime-900";
            break;
        case "rgb(26, 46, 5)":
            returnVal = "lime-950";
            break;
        case "rgb(240, 253, 244)":
            returnVal = "green-50";
            break;
        case "rgb(220, 252, 231)":
            returnVal = "green-100";
            break;
        case "rgb(187, 247, 208)":
            returnVal = "green-200";
            break;
        case "rgb(134, 239, 172)":
            returnVal = "green-300";
            break;
        case "rgb(74, 222, 128)":
            returnVal = "green-400";
            break;
        case "rgb(34, 197, 94)":
            returnVal = "green-500";
            break;
        case "rgb(22, 163, 74)":
            returnVal = "green-600";
            break;
        case "rgb(21, 128, 61)":
            returnVal = "green-700";
            break;
        case "rgb(22, 101, 52)":
            returnVal = "green-800";
            break;
        case "rgb(20, 83, 45)":
            returnVal = "green-900";
            break;
        case "rgb(5, 46, 22)":
            returnVal = "green-950";
            break;
        case "rgb(236, 253, 245)":
            returnVal = "emerald-50";
            break;
        case "rgb(209, 250, 229)":
            returnVal = "emerald-100";
            break;
        case "rgb(167, 243, 208)":
            returnVal = "emerald-200";
            break;
        case "rgb(110, 231, 183)":
            returnVal = "emerald-300";
            break;
        case "rgb(52, 211, 153)":
            returnVal = "emerald-400";
            break;
        case "rgb(16, 185, 129)":
            returnVal = "emerald-500";
            break;
        case "rgb(5, 150, 105)":
            returnVal = "emerald-600";
            break;
        case "rgb(4, 120, 87)":
            returnVal = "emerald-700";
            break;
        case "rgb(6, 95, 70)":
            returnVal = "emerald-800";
            break;
        case "rgb(6, 78, 59)":
            returnVal = "emerald-900";
            break;
        case "rgb(2, 44, 34)":
            returnVal = "emerald-950";
            break;
        case "rgb(240, 253, 250)":
            returnVal = "teal-50";
            break;
        case "rgb(204, 251, 241)":
            returnVal = "teal-100";
            break;
        case "rgb(153, 246, 228)":
            returnVal = "teal-200";
            break;
        case "rgb(94, 234, 212)":
            returnVal = "teal-300";
            break;
        case "rgb(45, 212, 191)":
            returnVal = "teal-400";
            break;
        case "rgb(20, 184, 166)":
            returnVal = "teal-500";
            break;
        case "rgb(13, 148, 136)":
            returnVal = "teal-600";
            break;
        case "rgb(15, 118, 110)":
            returnVal = "teal-700";
            break;
        case "rgb(17, 94, 89)":
            returnVal = "teal-800";
            break;
        case "rgb(19, 78, 74)":
            returnVal = "teal-900";
            break;
        case "rgb(4, 47, 46)":
            returnVal = "teal-950";
            break;
        case "rgb(236, 254, 255)":
            returnVal = "cyan-50";
            break;
        case "rgb(207, 250, 254)":
            returnVal = "cyan-100";
            break;
        case "rgb(165, 243, 252)":
            returnVal = "cyan-200";
            break;
        case "rgb(103, 232, 249)":
            returnVal = "cyan-300";
            break;
        case "rgb(34, 211, 238)":
            returnVal = "cyan-400";
            break;
        case "rgb(6, 182, 212)":
            returnVal = "cyan-500";
            break;
        case "rgb(8, 145, 178)":
            returnVal = "cyan-600";
            break;
        case "rgb(14, 116, 144)":
            returnVal = "cyan-700";
            break;
        case "rgb(21, 94, 117)":
            returnVal = "cyan-800";
            break;
        case "rgb(22, 78, 99)":
            returnVal = "cyan-900";
            break;
        case "rgb(8, 51, 68)":
            returnVal = "cyan-950";
            break;
        case "rgb(240, 249, 255)":
            returnVal = "sky-50";
            break;
        case "rgb(224, 242, 254)":
            returnVal = "sky-100";
            break;
        case "rgb(186, 230, 253)":
            returnVal = "sky-200";
            break;
        case "rgb(125, 211, 252)":
            returnVal = "sky-300";
            break;
        case "rgb(56, 189, 248)":
            returnVal = "sky-400";
            break;
        case "rgb(14, 165, 233)":
            returnVal = "sky-500";
            break;
        case "rgb(2, 132, 199)":
            returnVal = "sky-600";
            break;
        case "rgb(3, 105, 161)":
            returnVal = "sky-700";
            break;
        case "rgb(7, 89, 133)":
            returnVal = "sky-800";
            break;
        case "rgb(12, 74, 110)":
            returnVal = "sky-900";
            break;
        case "rgb(8, 47, 73)":
            returnVal = "sky-950";
            break;
        case "rgb(239, 246, 255)":
            returnVal = "blue-50";
            break;
        case "rgb(219, 234, 254)":
            returnVal = "blue-100";
            break;
        case "rgb(191, 219, 254)":
            returnVal = "blue-200";
            break;
        case "rgb(147, 197, 253)":
            returnVal = "blue-300";
            break;
        case "rgb(96, 165, 250)":
            returnVal = "blue-400";
            break;
        case "rgb(59, 130, 246)":
            returnVal = "blue-500";
            break;
        case "rgb(37, 99, 235)":
            returnVal = "blue-600";
            break;
        case "rgb(29, 78, 216)":
            returnVal = "blue-700";
            break;
        case "rgb(30, 64, 175)":
            returnVal = "blue-800";
            break;
        case "rgb(30, 58, 138)":
            returnVal = "blue-900";
            break;
        case "rgb(23, 37, 84)":
            returnVal = "blue-950";
            break;
        case "rgb(238, 242, 255)":
            returnVal = "indigo-50";
            break;
        case "rgb(224, 231, 255)":
            returnVal = "indigo-100";
            break;
        case "rgb(199, 210, 254)":
            returnVal = "indigo-200";
            break;
        case "rgb(165, 180, 252)":
            returnVal = "indigo-300";
            break;
        case "rgb(129, 140, 248)":
            returnVal = "indigo-400";
            break;
        case "rgb(99, 102, 241)":
            returnVal = "indigo-500";
            break;
        case "rgb(79, 70, 229)":
            returnVal = "indigo-600";
            break;
        case "rgb(67, 56, 202)":
            returnVal = "indigo-700";
            break;
        case "rgb(55, 48, 163)":
            returnVal = "indigo-800";
            break;
        case "rgb(49, 46, 129)":
            returnVal = "indigo-900";
            break;
        case "rgb(30, 27, 75)":
            returnVal = "indigo-950";
            break;
        case "rgb(245, 243, 255)":
            returnVal = "violet-50";
            break;
        case "rgb(237, 233, 254)":
            returnVal = "violet-100";
            break;
        case "rgb(221, 214, 254)":
            returnVal = "violet-200";
            break;
        case "rgb(196, 181, 253)":
            returnVal = "violet-300";
            break;
        case "rgb(167, 139, 250)":
            returnVal = "violet-400";
            break;
        case "rgb(139, 92, 246)":
            returnVal = "violet-500";
            break;
        case "rgb(124, 58, 237)":
            returnVal = "violet-600";
            break;
        case "rgb(109, 40, 217)":
            returnVal = "violet-700";
            break;
        case "rgb(91, 33, 182)":
            returnVal = "violet-800";
            break;
        case "rgb(76, 29, 149)":
            returnVal = "violet-900";
            break;
        case "rgb(46, 16, 101)":
            returnVal = "violet-950";
            break;
        case "rgb(250, 245, 255)":
            returnVal = "purple-50";
            break;
        case "rgb(243, 232, 255)":
            returnVal = "purple-100";
            break;
        case "rgb(233, 213, 255)":
            returnVal = "purple-200";
            break;
        case "rgb(216, 180, 254)":
            returnVal = "purple-300";
            break;
        case "rgb(192, 132, 252)":
            returnVal = "purple-400";
            break;
        case "rgb(168, 85, 247)":
            returnVal = "purple-500";
            break;
        case "rgb(147, 51, 234)":
            returnVal = "purple-600";
            break;
        case "rgb(126, 34, 206)":
            returnVal = "purple-700";
            break;
        case "rgb(107, 33, 168)":
            returnVal = "purple-800";
            break;
        case "rgb(88, 28, 135)":
            returnVal = "purple-900";
            break;
        case "rgb(59, 7, 100)":
            returnVal = "purple-950";
            break;
        case "rgb(253, 244, 255)":
            returnVal = "fuchsia-50";
            break;
        case "rgb(250, 232, 255)":
            returnVal = "fuchsia-100";
            break;
        case "rgb(245, 208, 254)":
            returnVal = "fuchsia-200";
            break;
        case "rgb(240, 171, 252)":
            returnVal = "fuchsia-300";
            break;
        case "rgb(232, 121, 249)":
            returnVal = "fuchsia-400";
            break;
        case "rgb(217, 70, 239)":
            returnVal = "fuchsia-500";
            break;
        case "rgb(192, 38, 211)":
            returnVal = "fuchsia-600";
            break;
        case "rgb(162, 28, 175)":
            returnVal = "fuchsia-700";
            break;
        case "rgb(134, 25, 143)":
            returnVal = "fuchsia-800";
            break;
        case "rgb(112, 26, 117)":
            returnVal = "fuchsia-900";
            break;
        case "rgb(74, 4, 78)":
            returnVal = "fuchsia-950";
            break;
        case "rgb(253, 242, 248)":
            returnVal = "pink-50";
            break;
        case "rgb(252, 231, 243)":
            returnVal = "pink-100";
            break;
        case "rgb(251, 207, 232)":
            returnVal = "pink-200";
            break;
        case "rgb(249, 168, 212)":
            returnVal = "pink-300";
            break;
        case "rgb(244, 114, 182)":
            returnVal = "pink-400";
            break;
        case "rgb(236, 72, 153)":
            returnVal = "pink-500";
            break;
        case "rgb(219, 39, 119)":
            returnVal = "pink-600";
            break;
        case "rgb(190, 24, 93)":
            returnVal = "pink-700";
            break;
        case "rgb(157, 23, 77)":
            returnVal = "pink-800";
            break;
        case "rgb(131, 24, 67)":
            returnVal = "pink-900";
            break;
        case "rgb(80, 7, 36)":
            returnVal = "pink-950";
            break;
        case "rgb(255, 241, 242)":
            returnVal = "rose-50";
            break;
        case "rgb(255, 228, 230)":
            returnVal = "rose-100";
            break;
        case "rgb(254, 205, 211)":
            returnVal = "rose-200";
            break;
        case "rgb(253, 164, 175)":
            returnVal = "rose-300";
            break;
        case "rgb(251, 113, 133)":
            returnVal = "rose-400";
            break;
        case "rgb(244, 63, 94)":
            returnVal = "rose-500";
            break;
        case "rgb(225, 29, 72)":
            returnVal = "rose-600";
            break;
        case "rgb(190, 18, 60)":
            returnVal = "rose-700";
            break;
        case "rgb(159, 18, 57)":
            returnVal = "rose-800";
            break;
        case "rgb(136, 19, 55)":
            returnVal = "rose-900";
            break;
        case "rgb(76, 5, 25)":
            returnVal = "rose-950";
            break;
        default:
            //Check if inherits or other keyword

            //End case
            vals = color.slice(4, -1).split(", ");
            endString = "[#"
            vals.forEach((e) => {
                endString += (+e).toString(16).padStart(2, "0");
            })
           returnVal = endString + "]";
             // TODO: validate!
    }
    if (allVals.length > 3) {
        if (+allVals[3] != 1 && +allVals[3] != 0) {
            return returnVal + "/["  + allVals[3] + "]";
        } else {
            return null;
        }
    } else {
        return returnVal;
    }
}

function hw_css(dom) {
    var computed = window.getComputedStyle(dom);
    var classes = [];
    // THE MEAT

    //---- LAYOUT ----

    //Aspect Ratio
    //Todo 

    //Container
    //Todo

    //Columns
    var columnChart = {"auto":"auto","256px" : "3xs", "288px": "2xs", "320px":"xs","384px":"sm","448px":"md","512px":"lg","576px":"xl","672px":"2xl","768px":"3xl","896px":"4xl", "1024px":"5xl", "1152px":"6xl", "1280px":"7xl"}
    var columns = computed["columns"];
    if (!isNaN(columns) && +columns <= 12) {
        classes.push("columns-" + columns)
    } else if (columnChart[columns] !== undefined) {
        classes.push("columns-" + columnChart[columns]);
    } else {
        classes.push("columns-[" + columns + "]");
    }

    // Break After
    var breakAfter = computed["breakAfter"];
    classes.push("break-after-" + breakAfter);

    // Break Before
    var breakBefore = computed["breakBefore"];
    classes.push("break-before-" + breakBefore);
    

    //Break Inside
    var breakInside = computed["breakInside"];
    classes.push("break-inside-" + breakInside);

    //Box Decoration Break
    var boxDecorationBreak = computed["boxDecorationBreak"];
    classes.push("box-decoration-" + boxDecorationBreak);

    //Box Sizing
    var boxSizing = computed["boxSizing"];
    classes.push("box-" + boxSizing.split("-")[0]);

    //Display
    var display = computed["display"];
    classes.push(display);

    //Float
    var float = computed["float"];
    classes.push("float-" + float);
    

    //Clear
    var clear = computed["clear"];
    classes.push("clear-" + clear);

    //Isolation
    var isolation = computed["isolation"];
    if (isolation == "isolation") {
        classes.push("isolate");
    } else {
        classes.push("isolation-auto")
    }
    
    //Object-fit
    var objectFit = computed["objectFit"];
    classes.push("object-" + objectFit);

    //Object Position
    var objectPosition = computed["objectPosition"]
    //TODO

    //Overflow
    var overflowX = computed["overflowX"];
    var overflowY = computed["overflowY"];
    if (overflowX == overflowY) {
        classes.push("overflow-" + overflowX);
    } else {
        classes.push("overflow-x-" + overflowX);
        classes.push("overflow-y-" + overflowY);
    }

    //Overscroll Behavior
    var overscrollX = computed["overscrollBehaviorX"];
    var overscrollY = computed["overscrollBehaviorY"];
    if (overscrollX == overscrollY) {
        classes.push("overscroll-" + overscrollX);
    } else {
        classes.push("overscroll-x-" + overscrollX);
        classes.push("overscroll-y-" + overscrollY);
    }

    //Position
    var position = computed["position"];
    classes.push(position);

    //Top Left Bottom Right
    //TODO

    //Visibility
    //TODO: INHERITED
    var visibility = computed["visibility"];
    var visibleRes;
    switch (visibility) {
        case "hidden":
            visibleRes = "invisible";
            break;
        case "collapse":
            visibleRes = "collapse";
            break;
        default: 
            visibleRes = "visible";
    }
    classes.push(visibleRes)

    //Z-Index
    var zIndex = computed["zIndex"];
    if (zIndex !== "auto") {
        zIndex = intOf(zIndex);
        if (zIndex <= 50 && zIndex % 10 == 0) {
            classes.push("z-" + zIndex)
        } else {
            classes.push("z-[" + zIndex +"]");
        } 
    } else {
        classes.push("z-auto");
    }
    

    // ---- FLEXBOX & GRID ---- 
    // A lot of these should only be enabled if flex/grid is the display...
    //Flex-Basis
    var flexBasis = computed["flexBasis"];
    if (flexBasis !== "auto") {
        var flexBasisVal = twBasisVal(intOf(flexBasis));
        if (flexBasisVal !== null) {
            classes.push("basis-" + flexBasisVal);
        }
    } else {
        classes.push("basis-auto");
    }
    
    //Flex-Direction
    var flexDirection = computed["flexDirection"];
    switch (flexDirection) {
        case "column":
            classes.push("flex-col");
            break;
        case "column-reverse":
            classes.push("flex-col-reverse");
            break;
        default:
            classes.push("flex-" + flexDirection);
    }

    //Flex Wrap
    var flexWrap = computed["flexWrap"];
    classes.push("flex-" + flexWrap);

    //Flex
    var flex = computed["flex"];
    // This depends on the grow shrink and basis, if this is set then basis,grow, and shrink should not have any classes
    switch (flex) {
        case "0 1 auto":
            classes.push("flex-initial");
            break;
        case "1 1 auto":
            classes.push("flex-auto");
            break;
        case "1 1 0%":
            classes.push("flex-1");
            break;
        case "0 0 auto":
            classes.push("none");
            break;
    }

    //Flex Grow
    var flexGrow = computed["flexGrow"];
    if (flexGrow == "0") {
        classes.push("grow-0");
    } else if (flexGrow == "1") {
        classes.push("grow")
    } else {
        classes.push("grow-[" + flexGrow + "]");
    }

    //Flex Shrink
    var flexShrink = computed["flexShrink"];
    if (flexShrink == "0") {
        classes.push("shrink-0");
    } else if (flexShrink == "1") {
        classes.push("shrink")
    } else {
        classes.push("shrink-[" + flexShrink + "]");
    }


    
    //Order
    var order = computed["order"];
    if (+order <= 12 && +order > 0 ) {
        classes.push("order-" + order);
    } else if (order == "-9999"){
        classes.push("order-first")
    } else if (order == "9999") {
        classes.push("order-last")
    } else if (order == "0") {
        classes.push("order-none")
    } else {
        classes.push("order-[" + order +"]");
    }

    var gridTemplate = computed["gridTemplate"];
    var gridTemplateRows = "none";
    var gridTemplateCols = "none";
    if (gridTemplate !== "none") {
        [gridTemplateRows, gridTemplateCols] = gridTemplate.split(" / ");
    }
    var gridTemplateRe = /repeat\((\d{1,2}), minmax\(0px, 1fr\)\)/;

    //Grid Template Columns
    var gridTemplateColAmount = gridTemplateRe.exec(gridTemplateCols);
    if (gridTemplateCols == "none") {
        console.log("none")
    } else if (gridTemplateColAmount !== null) {
       if (+gridTemplateColAmount <= 12) {
            classes.push("grid-cols-" + gridTemplateColAmount);
       }
    } else {
        classes.push("grid-cols-[" + gridTemplateCols.split(" ").join("_") + "]");
    }

    //Grid Column Start / End
    var gridColumn = computed["gridColumn"];
    var gridSpanRe = /span (\d{1,2}) \/ span \1/;
    switch (true) {
        case (gridSpanRe.test(gridColumn)):
            var num = gridSpanRe.exec(gridColumn)[1];
            if (+num > 0 && +num <= 12) {
                classes.push("col-span-" + num);
            }
            break;
        case (gridColumn == "1 / -1"):
            classes.push("col-span-full")
            break;
        case (gridColumn == "auto"):
            break;
        default:
            var gridColumnStart = computed[gridColumnStart];
            var gridColumnEnd = computed[gridColumnEnd];
            var custom = false;
            if (gridColumnStart !== "auto") {
                if (+gridColumnStart <= 13 && +gridColumnStart > 0) {
                    classes.push("col-start-" + gridColumnStart);
                } else {
                    custom = true;
                }
            }
            if (gridColumnEnd !== "auto" && !custom) {
                if (+gridColumnEnd <= 13 && +gridColumnEnd > 0) {
                    classes.push("col-end-" + gridColumnEnd)
                } else {
                    custom = true;
                }
            }
            if (custom) {
                classes.push("col-[" + gridColumn.split(" ").join("_") +"]")
            }
    }

    //Grid Template Rows
    var gridTemplateRowAmount = gridTemplateRe.exec(gridTemplateRows);
    if (gridTemplateRows == "none") {
        console.log("none")
    } else if (gridTemplateRowAmount !== null) {
       if (+gridTemplateRowAmount <= 6) {
            classes.push("grid-rows-" + gridTemplateRowAmount);
       }
    } else {
        classes.push("grid-rows-[" + gridTemplateRows.split(" ").join("_") + "]");
    }

    //Grid Row Start / End
    var gridRow = computed["gridRow"];
    var gridSpanRe = /span (\d{1,2}) \/ span \1/;
    switch (true) {
        case (gridSpanRe.test(gridRow)):
            var num = gridSpanRe.exec(gridRow)[1];
            if (+num > 0 && +num <= 12) {
                classes.push("row-span-" + num);
            }
            break;
        case (gridRow == "1 / -1"):
            classes.push("row-span-full")
            break;
        case (gridRow == "auto"):
            break;
        default:
            var gridRowStart = computed[gridRowStart];
            var gridRowEnd = computed[gridRowEnd];
            var custom = false;
            if (gridRowStart !== "auto") {
                if (+gridRowStart <= 13 && +gridRowStart > 0) {
                    classes.push("row-start-" + gridRowStart);
                } else {
                    custom = true;
                }
            }
            if (gridRowEnd !== "auto" && !custom) {
                if (+gridRowEnd <= 13 && +gridRowEnd > 0) {
                    classes.push("row-end-" + gridRowEnd)
                } else {
                    custom = true;
                }
            }
            if (custom) {
                classes.push("row-[" + gridRow.split(" ").join("_") +"]")
            }
    }

    //Grid Auto Flow
    var gridAutoFlow = computed["gridAutoFlow"];
    switch (gridAutoFlow) {
        case "column":
            classes.push("grid-flow-col");
            break;
        case "column dense":
            classes.push("grid-flow-col-dense");
            break;
        default:
            classes.push("grid-flow-" + gridAutoFlow.split(" ").join("-"));
    }

    //Grid Auto Columns
    var gridAutoCols = computed["gridAutoColumns"];
    switch (gridAutoCols) {
        case "auto":
            classes.push("auto-cols-auto");
            break;
        case "min-content":
            classes.push("auto-cols-min");
            break;
        case "max-content":
            classes.push("auto-cols-max");
            break;
        case "minmax(0px, 1fr)":
            classes.push("auto-cols-fr");
            break;
        default:
            classes.push("auto-cols-[" + gridAutoCols.split(" ").join("_") + "]");
    }

    //Grid Auto Rows
    var gridAutoRows = computed["gridAutoRows"];
    switch (gridAutoRows) {
        case "auto":
            classes.push("auto-rows-auto");
            break;
        case "min-content":
            classes.push("auto-rows-min");
            break;
        case "max-content":
            classes.push("auto-rows-max");
            break;
        case "minmax(0px, 1fr)":
            classes.push("auto-rows-fr");
            break;
        default:
            classes.push("auto-rows-[" + gridAutoRows.split(" ").join("_") + "]");
    }

    //Gap
    var gap = computed["gap"];
    var rowGap = computed["rowGap"];
    var colGap = computed["columnGap"];
    var twRowGap = twBasisVal(intOf(rowGap));
    var twColGap = twBasisVal(intOf(colGap));

    if (twRowGap !== null && twRowGap == twColGap && gap !== "normal") {
        classes.push("gap-" + twRowGap);
    } else {
        if (twRowGap !== null && rowGap !== "normal")  {
            classes.push("gap-y-" + twRowGap);
        } else if (rowGap !== "normal") {
            classes.push("gap-y-[" + rowGap + "]")
        }

        if (twColGap !== null) {
            classes.push("gap-x-" + twColGap);
        } else if (colGap !== "normal") {
            classes.push("gap-x-[" + colGap + "]");
        }
    }


    //Justify Content
    var justContent = computed["justifyContent"];
    classes.push("justify-" + justContent.split("-").slice(-1));
    //Justify Items
    var justItems = computed["justifyItems"];
    if (justItems !== "normal") {
        classes.push("justify-items-" + justItems);
    }

    //Justify Self
    var justSelf = computed["justifySelf"];
    classes.push("justify-self-" + justSelf);

    //Align Content
    var alignContent = computed["alignContent"];
    classes.push("content-" + alignContent.split("-").slice(-1));

    //Align Items
    var alignItems = computed["alignItems"];
    if (alignItems !== "normal") {
        classes.push("items-" + alignContent.split("-").slice(-1));
    }

    //Align Self
    var alignSelf = computed["alignSelf"];
    classes.push("self-" + alignSelf.split("-").slice(-1));

    //Margin
    var marginTop = intOf(computed['marginTop']);
    var marginLeft = intOf(computed['marginLeft']);
    var marginRight = intOf(computed['marginRight']);
    var marginBottom = intOf(computed['marginBottom']);

    // what about negatives?
    if (marginTop == marginBottom && marginLeft == marginRight && marginLeft == marginTop && marginLeft > 0) {
        classes.push("m-" + twSpacingVal(marginTop));
    } else {
        if (marginTop == marginBottom && marginTop > 0) {
            classes.push("my-" + twSpacingVal(marginTop));
        } else {
            if (marginTop > 0) {
                classes.push("mt-" + twSpacingVal(marginTop));
            }
            if (marginBottom > 0) {
                classes.push("mb-" + twSpacingVal(marginBottom));
            }
        }

        if (marginLeft == marginRight && marginLeft > 0) {
            classes.push("mx-" + twSpacingVal(marginLeft));
        } else {
            if (marginLeft > 0) {
                classes.push("ml-" + twSpacingVal(marginLeft));
            }
            if (marginRight > 0) {
                classes.push("mr-" + twSpacingVal(marginRight));
            }
        }
    }

    //Padding (For now, exact copy of margins)
    var paddingTop = intOf(computed['paddingTop']);
    var paddingLeft = intOf(computed['paddingLeft']);
    var paddingRight = intOf(computed['paddingRight']);
    var paddingBottom = intOf(computed['paddingBottom']);

    if (paddingTop == paddingBottom && paddingLeft == paddingRight && paddingLeft == paddingTop && paddingLeft > 0) {
        classes.push("p-" + twSpacingVal(paddingTop));
    } else {
        if (paddingTop == paddingBottom && paddingTop > 0) {
            classes.push("py-" + twSpacingVal(paddingTop));
        } else {
            if (paddingTop > 0) {
                classes.push("pt-" + twSpacingVal(paddingTop));
            }
            if (paddingBottom > 0) {
                classes.push("pb-" + twSpacingVal(paddingBottom));
            }
        }

        if (paddingLeft == paddingRight && paddingLeft > 0) {
            classes.push("px-" + twSpacingVal(paddingLeft));
        } else {
            if (paddingLeft > 0) {
                classes.push("pl-" + twSpacingVal(paddingLeft));
            }
            if (paddingRight > 0) {
                classes.push("pr-" + twSpacingVal(paddingRight));
            }
        }
    }

    // ---- SIZING ----

    // Min-Width
    var minWidth = computed["minWidth"];
    const minWidthChart = {"100%" : "full", "min-content" : "min", "max-content": "max", "fit-content": "fit"}
    // TODO : 0 depends on parent and other factors
    var curMinWidth = minWidthChart[minWidth];
    if (curMinWidth !== undefined) {
        classes.push("min-w-" + curMinWidth);
    }

    // Max-Width
    var maxWidth = computed["maxWidth"];
    //TODO: none depends on other factors
    const maxWidthChart = {"0px": "0", "320px" : "xs", "384px" : "sm", "448px" : "md", "512px" : "lg", "576px" : "xl", "672px" : "2xl", "768px" : "3xl", "896px" : "4xl", "1024px" : "5xl", "1152px" : "6xl", "1280px" : "7xl", "max-content": "max", "min-content":  "min" , "fit-content" :  "fit" , "100%" : "full", "640px" : "screen-sm", "768px" : "screen-md", "1024px" : "screen-lg", "1280px": "screen-xl", "1536px": "screen-2xl"}
    //TODO: Prose mode depends on text size.
    var curMaxWidth = maxWidthChart[maxWidth];
    if (curMaxWidth !== undefined) {
        classes.push("max-w-" + curMaxWidth);
    }

    // Min-Height
    var minHeight = computed["minHeight"];
    // TODO: Screen depends on screen size
    // TODO: 0 depends on other factors
    var curMinHeight = minWidthChart[minHeight];
    if (curMinHeight !== undefined) {
        classes.push("min-h-" + curMinHeight);
    }

    //Max-Height
    var maxHeight = computed["maxHeight"];
    const maxHeightChart = {"100%" : "full", "min-content" : "min", "max-content": "max", "fit-content": "fit"}
    //TODO: Screen depends on screen size
    //TODO: none depends on other factors
    var curMaxHeight = maxHeightChart[maxHeight];
    if (curMaxHeight !== undefined) {
        classes.push("max-h-" + curMaxHeight)
    } else {
        var spaceValue = twSpacingVal(intOf(maxHeight));
        if (spaceValue !== null) {
            classes.push("max-h-" + spaceValue)
        }
    }

    // ---- TYPOGRAPHY ----

    //Font-Family
    //Very specific for only 3 classes, arbitrary comes in clutch
    var fontFamily = computed["fontFamily"];
    console.log(fontFamily)
    var fontFamilyTable = {
        "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"" : "sans", 
        "ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif" : "serif",
        "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace" : "mono"
    }
    var curFontFamily = fontFamilyTable[fontFamily];
    if (curFontFamily !== undefined) {
        if (curFontFamily !== "sans") {
            //TODO: Default value basically, but does depend on inheritence and all
            classes.push("font-" + curFontFamily)
        }
    } else {
        classes.push("font-['" + fontFamily + "']")
    }

    //Font Size and Line Height
    var fontSize = intOf(computed['fontSize']);
    var lineHeight = intOf(computed['lineHeight']);
    var fontClass = false
    var sizeChart = {
        12 : {"lineHeight" : 16, "size" : "xs"},
        14 : {"lineHeight": 20, "size": "sm"},
        16 : {"lineHeight": 24, "size": "base"},
        18 : {"lineHeight" : 28, "size": "lg"},
        20 : {"lineHeight" : 28, "size": "xl"},
        24 : {"lineHeight" : 32, "size": "2xl"},
        30 : {"lineHeight" : 36, "size": "3xl"},
        36 : {"lineHeight" : 40, "size": "4xl"},
        48 : {"lineHeight" : 48, "size": "5xl"},
        60 : {"lineHeight" : 60, "size": "6xl"},
        72 : {"lineHeight" : 72, "size": "7xl"},
        96 : {"lineHeight" : 96, "size": "8xl"},
        128 : {"lineHeight" : 128, "size": "9xl"}
    }
    var sizeVal = sizeChart[fontSize];
    if (sizeVal !== undefined) {
        if (sizeVal["lineHeight"] == lineHeight) {
            //TODO: Allow for different line heights
            classes.push("text-" + sizeVal["size"]);
            fontClass = true;
        }
    }

    //Font-Smoothing
    //TBA

    //Font-Style
    if (computed["fontStyle"] == "italic") {
        // Add for not-italic, but depends on parent and inheritance values...
        classes.push("italic");
    }

    //Font Weight
    var fontWeight = intOf(computed['font-weight']);
    switch (fontWeight) {
        case 100:
            classes.push("font-thin");
            break;
        case 200:
            classes.push("font-extralight");
            break;
        case 300:
            classes.push("font-light");
            break;
        case 400:
            // TODO: Depends on parent, but should normally not be pushed.
            classes.push("font-normal");
            break;
        case 500:
            classes.push("font-medium");
            break;
        case 600:
            classes.push("font-semibold");
            break;
        case 700:
            classes.push("font-bold");
            break;
        case 800:
            classes.push("font-extrabold");
            break;
        case 900:
            classes.push("font-black");
            break;
        default:

    }

    //Font-Variant-Numeric
    var fontVariantNumeric = computed["fontVariantNumeric"]
    switch (fontVariantNumeric) {
        //TODO: Default case
        case "normal":
            classes.push("normal-nums")
        default:
            classes.push(fontVariantNumeric);
    }

    //Letter Spacing
    var letterSpacing = computed['letterSpacing'];
    var letterSpacingVal = floatOf(letterSpacing);
    //TODO:  May be best to precalculate all the relative values
    var fontSize = intOf(computed["fontSize"]);
    if (letterSpacing !== "normal") {
        console.log(parseFloat((letterSpacingVal/fontSize).toFixed(3)));
        switch (parseFloat((letterSpacingVal/fontSize).toFixed(3))) {
            case -.05:
                classes.push("tracking-tighter");
                break;
            case -.025:
                classes.push("tracking-tight");
                break;
            case 0:
                classes.push("tracking-normal");
                break;
            case .025:
                classes.push("tracking-wide")
            case .05:
                classes.push("tracking-wider");
                break;
            case .1:
                classes.push("tracking-widest");
                break;
        }
    }
    
    //Line-Clamp
    //TBA 

    //Line-Height
    // Do today
    // Only do so if font-size has not been touched...
    const lineHeightChart = {12 : "3", 16 : "4", 20: "5", 24 : "6", 28: "7", 32: "8", 36 : "9", 40 : "10"};
    var curLineHeight = lineHeightChart[lineHeight];
    if (!fontClass) {
        if (curLineHeight !== undefined) {
            classes.push("leading-" + curLineHeight);
        } else {
            // Fix for none case
            switch (parseFloat((lineHeight/fontSize).toFixed(3))) {
                case 1:
                    classes.push("leading-none");
                    break;
                case 1.25:
                    classes.push("leading-tight");
                    break;
                case 1.375:
                    classes.push("leading-snug");
                    break;
                case 1.5:
                    classes.push("leading-normal");
                    break;
                case 1.625:
                    classes.push("leading-relaxed");
                    break;
                case 2:
                    classes.push("leading-loose");
                    break;
            }
         }  
    }

    //List style Image
    //TBA

    //List style position
    //TBA 

    //List Style Type
    // TBA 

    //Text Align
    // TODO: hange for default and inherited
    var textAlign = computed["textAlign"];
    //TODO: Should check if not inherited or default 
    classes.push("text-" + textAlign);

    //Text Color
    var color = colorOf(computed['color']);
    if (color != null) {
        classes.push("text-" + color);
    }

    //Text Decoration
    //Handle default and inherited later
    var textDecoration = computed["textDecorationLine"];
    if (textDecoration !== "none") {
        classes.push(textDecoration);
    } else {
        classes.push("no-underline");
    }

    //Text Decoration Color
    var textDecorationColor = colorOf(computed["textDecorationColor"]);
    // Color of element is the default color
    classes.push("decoration-" + textDecorationColor);
    

    //Text Decoration Style
    var textDecorationStyle = computed["textDecorationStyle"];
    classes.push("decoration-" + textDecorationStyle);
    

    //Text Decoration Thickness
    var textDecorationThickness = computed["textDecorationThickness"];
    const acceptedPx = [0,1,2,4,8];
    if (textDecorationThickness == "from-font" || textDecorationThickness == "auto") {
        classes.push("decoration-" + textDecorationThickness);
    } else {
        var intThickness = intOf(textDecorationThickness);
        if (acceptedPx.includes(intThickness)) {
            classes.push("decoration-" + intThickness);
        }
        
    }
    

    //Text Underline Offset
    var textUnderlineOffset = computed["textUnderlineOffset"];
    if (textUnderlineOffset != "auto") {
        var intOffset = intOf(textUnderlineOffset);
        if (acceptedPx.includes(intOffset)) {
            classes.push("underline-offset-" + intOffset);
        }
    } else {
        classes.push("underline-offset-auto")
    }

    //Text Transform
    var textTransform = computed["textTransform"];
    if (textTransform != "none") {
        classes.push(textTransform);
    } else {
        classes.push("normal-case");
    }

    //Text Overflow
    var textOverflow = computed["textOverflow"];
    if (textOverflow == "ellipse") {
        if (computed["overflow"] == "hidden" && computed["whiteSpace"] == "nowrap") {
            classes.push("truncate");
        } else {
            classes.push("text-ellipse")
        }
    } else if (textOverflow == "clip") {
        classes.push("text-clip");
    }
    //Text Indent
    var textIndent = intOf(computed["textIndent"]);
    var textIndentVal = twSpacingVal(textIndent);
    if (textIndentVal !== null) {
        classes.push("indent-" + textIndentVal);
    }

    //Vertical Align
    var verticalAlign = computed["verticalAlign"];
    classes.push("align-" + verticalAlign);
    

    //White Space
    var whiteSpace = computed["whiteSpace"];
    classes.push("whitespace-" + whiteSpace);
    

    //Word Break
    var wordBreak = computed["wordBreak"];
    if (wordBreak == "break-all") {
        classes.push(wordBreak);
    } else if (wordBreak == "keep-all") {
        classes.push("break-keep")
    } else if (computed["overflowWrap"] == "break-word") {
        classes.push("break-words");
    }
    // Normal case is default...

    //Hyphens
    var hyphens = computed["hyphens"];
    classes.push("hyphens-"+hyphens);
    

    // Content
    // TBA

    // ---- BACKGROUNDS ----
    
    //Background Attachment
    var backgroundAttachment = computed["backgroundAttachment"];
    classes.push("bg-" + backgroundAttachment);
    

    //Background Clip
    var backgroundClip = computed["backgroundClip"];
    classes.push("bg-clip-" + backgroundClip.split("-")[0]);
    

    // Background Color and Opacity
    var bgColor = colorOf(computed['backgroundColor']);
    // TODO: Color includes opacity for background, must change
    if (bgColor !== null) {
        classes.push("bg-" + bgColor);
    }

    //Background Origin
    var backgroundOrigin = computed["backgroundOrigin"];
    classes.push("bg-origin-" + backgroundOrigin.split("-")[0]);
    

    //Background Position
    var backgroundPosition = computed["backgroundPosition"];
    //TODO: Different computation 

    //Background Repeat
    var backgroundRepeat = computed["backgroundRepeat"];
    //TODO: Set combinations

    //Background Size
    var backgroundSize = computed["backgroundSize"];
    classes.push("bg-" + backgroundSize);
    

    //Background Image
    //TODO: Get image...

    //Gradient Color Stops
    //TODO: A LOT of different combinations

    // ---- BORDERS ----


    // Should come out to sizes
    var bTopLeftR = twRadiusVal(computed["borderTopLeftRadius"]);
    var bTopRightR = twRadiusVal(computed["borderTopRightRadius"]);
    var bBotLeftR = twRadiusVal(computed["borderBottomLeftRadius"]);
    var bBotRightR = twRadiusVal(computed["borderBottomRightRadius"]);

    if (bTopLeftR == bBotRightR && bTopLeftR == bBotLeftR && bTopLeftR == bTopRightR && bTopLeftR !== "none") {
        classes.push(bTopLeftR != "" ? "rounded-" + bTopLeftR : "rounded");
    } else {
        // Better way then to keep the combos
        var roundL = false
        var roundT = false
        var roundR = false
        var roundB = false
        // Rearranging if statements can make this better

        if (bTopLeftR !== "none") {
            if (bTopLeftR == bTopRightR) {
                roundT = true;
                classes.push(bTopLeftR != "" ? "rounded-t-" + bTopLeftR : "rounded-t");
            } else if (bBotLeftR == bTopLeftR) {
                roundL = true;
                classes.push(bTopLeftR !== "" ? "rounded-l-" + bTopLeftR : "rounded-l");
            } else {
                classes.push(bTopLeftR !== "" ? "rounded-tl-" + bTopLeftR : "rounded-tl");
            }
        }
        if (bTopRightR !== "none") {
            if (bTopRightR == bBotRightR) {
                roundR = true;
                classes.push(bTopRightR !== "" ? "rounded-r-" + bTopRightR : "rounded-r");
            } else if (!roundT) {
                classes.push(bTopRightR !== "" ? "rounded-tr-" + bTopRightR : "rounded-tr");
            }
        }
        if (bBotRightR !== "none") {
            if (bBotRightR == bBotLeftR) {
                roundB = true;
                classes.push(bBotRightR !== "" ? "rounded-b-" + bBotRightR : "rounded-b");
            } else if (!roundR) {
                classes.push(bBotRightR !== "" ? "rounded-br-" + bBotRightR : "rounded-br");
            }
        }
        if (bBotLeftR !== "none" && ((roundB || roundL) == false)) {
            classes.push(bBotLeftR !== "" ? "rounded-bl-" + bBotLeftR : "rounded-bl");
        }
    }
    
    //Border Width
    var bTopW = twBWVal(computed["borderTopWidth"]);
    var bBotW = twBWVal(computed["borderBottomWidth"]);
    var bLeftW = twBWVal(computed["borderLeftWidth"]);
    var bRightW = twBWVal(computed["borderRightWidth"]);
    //TODO add case for 0...

    var borderY = false;
    var borderX = false;
    if (bTopW !== "0" && bTopW == bBotW && bTopW == bRightW && bTopW == bLeftW) {
        classes.push(bTopW == "" ? "border" : "border-" + bTopW);
    } else {
        if (bTopW !== "0") {
            if (bTopW == bBotW) {
                borderY = true;
                classes.push(bTopW == "" ? "border-y" : "border-y-" + bTopW)
            } else {
                classes.push(bTopW == "" ? "border-t" : "border-t-" + bTopW);
            }
        } 
        if (bLeftW !== "0") {
            if (bLeftW == bRightW) {
                borderX = true;
                classes.push(bLeftW == "" ? "border-x" : "border-x-" + bLeftW);
            } else {
                classes.push(bLeftW == "" ? "border-l" : "border-l-" + bLeftW);
            }
        }
        if (bRightW !== "0") {
            if (!borderX) {
                classes.push(bRightW == "" ? "border-r" : "border-r-" + bRightW);
            }
        }
        if (bBotW !== "0") {
            if (!borderY) {
                classes.push(bBotW == "" ? "border-b" : "border-b-" + bBotW);
            }
        }
    }

    
    //Border Color
    var bTopC = colorOf(computed["borderTopColor"]);
    var bBotC = colorOf(computed["borderBottomColor"]);
    var bLeftC = colorOf(computed["borderLeftColor"]);
    var bRightC = colorOf(computed["borderRightColor"]);

    borderY = false;
    borderX = false;
    //TODO: Check if default color
    if (computed["borderWidth"] == "0px") {
       console.log("nothing...")
    } else if (bTopC != color && bTopC == bBotC && bTopC == bRightC && bTopC == bLeftC) {
        classes.push("border-" + bTopC);
    } else {
        //TODO: Check if default color
        if (bTopC != color) {
            if (bTopC == bBotC) {
                borderY = true;
                classes.push("border-y-" + bTopC)
            } else {
                classes.push("border-t-" + bTopC);
            }
        }
        if (bLeftC != color) {
            if (bLeftC == bRightC) {
                borderX = true;
                classes.push("border-x-" + bLeftC);
            } else {
                classes.push("border-l-" + bLeftC);
            }
        }
        if (bRightC != color) {
            if (!borderX) {
                classes.push("border-r-" + bRightC);
            }
        }
        if (bBotC != color) {
            if (!borderY) {
            classes.push("border-b-" + bBotC);
            }
        }
    }
    

    //Border Style
    //TODO: get default and inherited
    classes.push("border-" + computed["borderStyle"])

    //Divide Width
    // Handled by border-width
    
    //Divide Color
    //Handled by border-color
    
    //Divide Style
    //Handled by Border-style
    
    //Outline Width
    var outline = twBWVal(computed["outlineWidth"]);
    classes.push("outline-" + (outline == "" ? "1" : outline))

    
    //Outline Color
    var outlineColor = colorOf(computed["outlineColor"]);
    classes.push("outline-" + outlineColor)
    
    //Outline Style
    var outlineStyle = computed["outlineStyle"];
    if (outlineStyle != "solid") {
        classes.push("outline-" + outlineStyle);
    } else {
        classes.push("outline")
    }
    
    //Outline Offset
    var outlineOffset = twBWVal(computed["outlineOffset"])
    classes.push("outline-offset-" + outlineOffset == "" ? "1" : outlineOffset);

    //Ring Width
    
    //Ring Color
    
    //Ring Offset Width
    
    //Ring Offset Color

    // ---- EFFECTS ----
    
    //Box Shadow
    
    //Box Shadow Color
    
    //Opacity
    
    //Mix Blend Mode
    
    //Background Blend Mode


    var result = classes.join(" ");

    console.log(dom.getAttribute('class') + "::" + dom.getAttribute('style') + "-->" + result);
    console.log(computed);

    /* Temporary Idea: Clone the element and compare it to it's raw clone, if it is different then save the differences, and use that as the new classes.*/

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
    var testCloneElem = document.createElement(dom.tagName);
    dom.parentElement.appendChild(testCloneElem);
    var emptyClazz = hw_css(testCloneElem);
    var emptyClazzSplit = emptyClazz.split(" ");
    testCloneElem.remove();
    console.log("Original Class:" + clazz);
    console.log("Cloned Empty Classes: " + emptyClazz);
    var newClazzArr = []
    clazz.split(" ").forEach((e, i, ar) => {
        if (!emptyClazzSplit.includes(e)) {
            newClazzArr.push(e);
        }
    });
    console.log("New Real Class: " + newClazzArr.join(" "));
    var trueClasses = newClazzArr.join(" ");
    if (clazz != "") {
        next.setAttribute('class', trueClasses);
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