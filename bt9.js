let h = Number(prompt("Nhập giờ (0-23):"));
let m = Number(prompt("Nhập phút (0-59):"));
let s = Number(prompt("Nhập giây (0-59):"));
let period = h < 12 ? "AM" : "PM";
h = h % 12 || 12;
if (h < 10) h = "0" + h;
if (m < 10) m = "0" + m;
if (s < 10) s = "0" + s;
let time = h + ":" + m + ":" + s + " " + period;
alert("Thời gian: " + time);
