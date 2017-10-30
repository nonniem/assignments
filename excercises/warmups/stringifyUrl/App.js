const endpoint = "http://localhost:9099/";


function stringifyURL(endpoint, query){
    let url = endpoint + "?";
    for(let key in query){
        url+=`${key}=${query[key]}&`
    }
    return url.slice(0, -1);
}

module.exports = stringifyURL;


let objectifyUrl = function(url){
    let query = {};
    url = url.slice(url.indexOf("?")+1).split(/[&=]/);
    console.log(url);
    for(let i = 0; i < url.length; i+=2){
        query[url[i]] = url[i++]

    }
    return query;
}

objectifyUrl("http://localhost:9099/bounties")
