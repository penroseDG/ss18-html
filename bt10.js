let so_don_vi = ["khong", "mot", "hai", "ba", "bon", "nam", "sau", "bay", "tam", "chin"];
let so_chuc = ["", "muoi", "hai muoi", "ba muoi", "bon muoi", "nam muoi", "sau muoi", "bay muoi", "tam muoi", "chin muoi"];

let so = Number(prompt("Nhap so (0 - 999):"));
let chuoi_so = String(so);
let do_dai = chuoi_so.length;
let ket_qua = "";

if (so < 0 || so > 999) {
    alert("So khong hop le!");
} else {
    if (do_dai === 1) {
        ket_qua = so_don_vi[so];
    }
    else if (do_dai === 2) {
        let hang_chuc = Number(chuoi_so[0]);
        let hang_don_vi = Number(chuoi_so[1]);

        ket_qua = so_chuc[hang_chuc];
        if (hang_don_vi !== 0) {
            if (hang_chuc === 1 && hang_don_vi === 5) ket_qua += " lam";
            else if (hang_chuc > 1 && hang_don_vi === 1) ket_qua += " mot";
            else ket_qua += " " + so_don_vi[hang_don_vi];
        }
    }
    else if (do_dai === 3) {
        let hang_tram = Number(chuoi_so[0]);
        let hang_chuc = Number(chuoi_so[1]);
        let hang_don_vi = Number(chuoi_so[2]);

        ket_qua = so_don_vi[hang_tram] + " tram";

        if (hang_chuc === 0 && hang_don_vi === 0) {
        } else if (hang_chuc === 0) {
            ket_qua += " linh " + so_don_vi[hang_don_vi];
        } else {
            ket_qua += " " + so_chuc[hang_chuc];
            if (hang_don_vi !== 0) {
                if (hang_chuc === 1 && hang_don_vi === 5) ket_qua += " lam";
                else if (hang_chuc > 1 && hang_don_vi === 1) ket_qua += " mot";
                else ket_qua += " " + so_don_vi[hang_don_vi];
            }
        }
    }
    alert(ket_qua);
}
