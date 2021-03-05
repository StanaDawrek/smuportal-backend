const Router = require("express").Router;
const firmService = require("../../services/firm.service")();
const firm = require("../../models/Firm");
const storage = require("../../helpers/storage")
const router = Router({
    mergeParams: true,
  });

router.get("/getFirms", async(req, res, next) => {
    try{
        const firms = await firmService.getFirms();
        res.send(firms)
    }
    catch(err) {
        res.send({msg: "Failed to get firms"})
    }
});
router.get("/getFirmsByPrivateSector", async(req, res, next) => {
    try{
        const FirmsBySector = await firmService.getfirmsBySector("private");
        res.send(FirmsBySector);
    }
    catch(err) {
        res.send({msg: "Failed to get firms"})
    }
});
router.get("/getFirmsByPublicSector", async(req, res, next) => {
    try{
        const FirmsBySector = await firmService.getfirmsBySector("public");
        res.send(FirmsBySector);
    }
    catch(err) {
        res.send({msg: "Failed to get firms"})
    }
});
router.delete("/deleteFirm/:registration", async(req, res, next) => {
    try {
        const registration = req.params.Registration;
        await firmService.deleteFirm(registration);
        res.send({ success: true, msg: "firm deleted"})
    } catch (error) {
        res.send({ success: false, msg: "firm not deleted!"})
    }
});
router.post("/addFirm",storage, async(req, res, next) => {
    try {
        const {Name,Sector,Industry,PublicPrivate,Address,Registration,Email} = req.body;
        const imagePath = 'http://localhost:3000/images/'+ req.body.imagePath.slice(12);
        //const imagePath = '';
        await firmService.addFirm(Name,Sector,Industry,PublicPrivate,Address,Registration,Email,imagePath);
        const firms = new firm({
            Name,Sector,Industry,PublicPrivate,Address,Registration,Email,imagePath
           }) 
        res.send({ success: true, msg: "Firm Added"});
    } catch (err) {
        res.send({ success: false, msg: "Firm not Added!", err})
    }
});


module.exports = router;