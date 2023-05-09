var btn = document.getElementById('login-btn');
console.log(btn);
function LogOut() {
    if (btn.textContent == "Login") {
        btn.textContent = "LogOut"
    }else {
        btn.textContent = "Login"
    }
}
function btnText(btn) {
    alert('This post have ' + btn.textContent)
}

function RemoveItem(somthing) {
    somthing.remove();
}