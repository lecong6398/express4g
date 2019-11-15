const goiCuoc = require("../../models/goiCuoc");

module.exports.getIndex = (req, res, next) => {
    goiCuoc.find().then((result) => {
        let diDongViettel = [];
        let dComViettel = [];
        let comBoViettel = [];
        for (let i = 0; i < result.length; i++) {
            if (result[i].loaiGoiCuoc == "simDiDongViettel") {
                diDongViettel.push(result[i])
            }
            if (result[i].loaiGoiCuoc == "simDcomViettel") {
                dComViettel.push(result[i])
            }
            if (result[i].loaiGoiCuoc == "simComBoViettel") {
                comBoViettel.push(result[i])
            }
        }
        res.render('shops/index', {
            diDongViettel: diDongViettel,
            dComViettel: dComViettel,
            comBoViettel: comBoViettel
        });
    }).catch((err) => {
        console.log(err);
    });
}

module.exports.getGoiCuoc = (req, res, next) => {
    const id = req.params.id;
    goiCuoc.findOne({tenGoiCuoc: id}).then((result) => {
        console.log(result);
        goiCuoc.find({loaiGoiCuoc: result.loaiGoiCuoc}).then((goiCuocLienQuan) => {
            // console.log(goiCuocLienQuan);
            res.render("shops/goiCuoc", {
                goiCuocDangKi: result,
                goiCuocLienQuan: goiCuocLienQuan
            }); 
        }).catch((err) => {
            console.log("co loi1!");
        });
    }).catch((err) => {
        console.log("co loi2!");
    });
}