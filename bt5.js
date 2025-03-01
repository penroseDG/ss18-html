let year = Number(prompt(" Nhap so nam kinh nghiem lam viec cua ban : "));
if (year <= 1) {
    alert(" ban la nhan vien moi vao nghe ");
} else if (year >= 1 && year <= 3) {
    alert(" ban la nhan vien co kinh nghiem  ");
} else if (year >= 4 && year <= 6) {
    alert(" ban la Chuyen vien  ");
} else if (year > 6) {
    alert(" ban la Quan ly  ");
}
