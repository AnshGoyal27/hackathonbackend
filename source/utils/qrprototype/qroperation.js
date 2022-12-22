const QRCode = require('qrcode')

const QR = {
    generator(){
        return(
            QRCode.toDataURL('I am a pony!')
            .then(url => {
                console.log('HERE',url);
                return(url)
            })
            .catch(err => {
                console.error(err)
            })
        )
        
    }
}

module.exports=QR;
