import React from "react";
import makeNewPosition from "./makeNew.js";
import calcSpeed from "./calcSpeed.js";

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = '${styles}'.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    '${styles}'.animate({ top: newq[4], left: newq[1] }, speed, function(){
      animateDiv();
    });

};

export default animateDiv
