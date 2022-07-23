"use strict";


let id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };

    fetch("/login", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href ="/";
        }else {
            alert(res.msg);
        }
    })
    .catch((err)=> {
        console.error=(new Error("로그인중에러"));
    })
}

