let listItems = document.getElementsByClassName("list-item");

for(let i=0;i<listItems.length;i++){
    listItems[i].onclick = function(){
        this.getElementsByClassName.backgroundColor = "gray";
    }
}
