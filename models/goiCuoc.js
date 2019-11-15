const mongoose = require('mongoose');

const goiCuocSchema = mongoose.Schema({
    tenGoiCuoc: String,
    dungLuong: String,
    cuocPhi: String,
    thoiGianSuDung: String,
    chiTietGoiCuoc: String,
    doiTuongApDung: String,
    loaiGoiCuoc: String,
    uuDai: String,
    huongDanDangKi: String,
    cuPhap: String,
    cuPhapHoTro: String,
});
const goiCuoc = mongoose.model("goiCuoc", goiCuocSchema, 'goiCuoc');

module.exports = goiCuoc;