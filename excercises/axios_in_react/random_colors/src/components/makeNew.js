import React from "react";


function makeNewPosition(){


    var h = (window).height() - 500;
    var w = (window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

export default makeNewPosition
