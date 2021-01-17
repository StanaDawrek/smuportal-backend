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
        res.send({msg: "Failed to get users"})
    }
});
router.delete("/deleteFirm/:registration", async(req, res, next) => {
    try {
        const registration = req.params.registration;
        await UserService.deleteUser(universityID);
        res.send({ success: true, msg: "User deleted"})
    } catch (error) {
        res.send({ success: false, msg: "User not Added!"})
    }
});
module.exports = router;