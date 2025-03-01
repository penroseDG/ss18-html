let year = Number(prompt(" nhap vao Nam bao nhieu de kirm tra co phai nam nhuan khong "));
if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
    alert("Nam nay la nam nhuan ");

} else {
    alert(" Nam nay khong phai nam nhuan  ");
}