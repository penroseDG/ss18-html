let name = prompt("nhap Ten nguoi dung :")
if (name === "ADMIN") {
    let password = prompt("nhap mat khau de kiem tra :");
    if (password == "TheMaster") {
        alert("Welcome");
    } else if (password == '') {
        console.log("Cancelled");
    } else {
        console.log("Wrong password ");
    }
} else if (name = '') {
    console.log("Cancelled");
} else {
    console.log(" I don't know you ");
}