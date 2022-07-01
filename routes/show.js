const router = require("express").Router();
const File = require('../models/file');

router.get('/:uuid', async function (req, res) {
    try {
        const file = await File.findOne({ uuid: req.params.uuid });

        if (!file) {
            return res.render('download', { error: "There is No such File Found" });
        }

        return res.render('download', {
            uuid: file.uuid,
            fileName: file.filename,
            fileSize: file.size,
            downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`

            //download link 
            //http://localhost:3000/files/download/dgeoisdbds24oif09dhsdfb-sakdja
        });

    } catch (err) {
        return res.render('download', { error: "Something went wrong." });
    }

});

module.exports = router;