let a = Number(prompt("Nhập vào số a:"));
let b = Number(prompt("Nhập vào số b:"));
let pheptinh = prompt("Mời bạn nhập vào phép tính (+, -, *, /):");

let ketqua;

switch (pheptinh) {
    case "+":
        ketqua = a + b;
        break;
    case "-":
        ketqua = a - b;
        break;
    case "*":
        ketqua = a * b;
        break;
    case "/":
        ketqua = b !== 0 ? a / b : "Không thể chia cho 0";
        break;
    default:
        ketqua = "Phép tính không hợp lệ";
}
alert(`Kết quả: ${ketqua}`);
