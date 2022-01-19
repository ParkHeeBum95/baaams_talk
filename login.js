const log_in_form = document.querySelector("#log-in-form");
const id = document.getElementById("id");
const pw = document.getElementById("pw");

function login1(event){
    event.preventDefault();
    const id_value = id.value;
    const pw_value =  pw.value;
    console.log(id_value)
    if ((id_value === "박희범" ) && (pw_value == 9596)){
        console.log("반갑습니다!!");
        location.href = "lobby.html";
    }
    else {
        alert("요원이 아닙니다!")
    }
}
console.log("hi");
log_in_form.addEventListener("submit", login1);