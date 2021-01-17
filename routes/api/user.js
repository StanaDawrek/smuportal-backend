const Router = require("express").Router;
const UserService = require("../../services/user.service")();
const User = require("../../models/User");
const storage = require("../../helpers/storage")
const router = Router({
    mergeParams: true,
  });

router.get("/getUsers", async(req, res, next) => {
    try{
        const users = await UserService.getUsers();
        res.send(users)
    }
    catch(err) {
        res.send({msg: "Failed to get users"})
    }
});
router.delete("/deleteUser/:universityID", async(req, res, next) => {
    try {
        const universityID = req.params.universityID;
        await UserService.deleteUser(universityID);
        res.send({ success: true, msg: "User deleted"})
    } catch (error) {
        res.send({ success: false, msg: "User not Added!"})
    }
});
module.exports = router;