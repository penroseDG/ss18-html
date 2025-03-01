let a = Number(prompt("nhap diem so mon Toan : "));
let b = Number(prompt("nhap diem so mon Van  : "))
let c = Number(prompt("nhap diem so mon Anh  : "))

let dtb = (a + b + c) / 3;
if (dtb >= 8.0) {
    alert(" Xep loai hoc luc Gioi ");
} else if (6.5 <= dtb && dtb <= 7.9) {
    alert(" Xep loai hoc luc Kha ");
} else if (5.0 <= dtb && dtb <= 6.4) {
    alert(" Xep loai hoc luc Trung Binh ");
} else {
    alert(" Xep loai hoc luc Yeu ");
}
