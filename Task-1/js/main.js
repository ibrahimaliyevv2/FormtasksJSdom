function findParents(element){
    if(element.parentNode){
        console.log(element.parentNode);
        findParents(element.parentNode);
    }
}

let firstA = document.getElementsByTagName('a')[0];
findParents(firstA);