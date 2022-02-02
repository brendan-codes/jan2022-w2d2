function joinBtn(element){
    element.remove();
}

function search(){
    var element = document.querySelector("#search");
    console.log(element.value);
    alert("You have searched for " + element.value);
}


function changeInput(){
    var element = document.querySelector("#search");
    console.log(element.value);
}


function like(id){
    var element = document.querySelector(id);
    element.innerText++;
}