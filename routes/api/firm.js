const Router = require("express").Router;
const firmService = require("../../services/firm.service")();
const firm = require("../../models/Firm");
const router = Router({
    mergeParams: true,
  });

router.get("/getFirms", async(req, res, next) => {
    try{
        const firms = await firmService.getFirms();
        res.send(firms)
    }
    catch(err) {
        res.send({msg: "Failed to get users"})
    }
});
router.delete("/deleteFirm/:registration", async(req, res, next) => {
    try {
        const registration = req.params.registration;
        await UserService.deleteUser(registration);
        res.send({ success: true, msg: "User deleted"})
    } catch (error) {
        res.send({ success: false, msg: "User not Added!"})
    }
});

router.post("/addFirm", async(req, res, next) => {
    try {
        const {Name,Sector,Industry,PublicPrivate,Address,Registration,Email} = req.body;
        await firmService.addFirm(Name,Sector,Industry,PublicPrivate,Address,Registration,Email);
        const firms = new firm({
            Name,Sector,Industry,PublicPrivate,Address,Registration,Email
           }) 
        res.send({ success: true, msg: "Firm Added"});
    } catch (err) {
        res.send({ success: false, msg: "Firm not Added!", err})
    }
});


module.exports = router;