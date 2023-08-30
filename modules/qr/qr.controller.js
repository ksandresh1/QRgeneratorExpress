const QRCode = require('qrcode');

const generateQR = async (QRurl) =>{
    try{
        const QR = await QRCode.toDataURL(QRurl);
        return QR;
    }catch(err){
        console.error(err);
    }

}

module.exports = {generateQR}
