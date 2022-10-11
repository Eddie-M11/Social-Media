const router = require("express").Router();
const {
  getUsers,
  getAUser,
  updateUser,
  createUser,
  addFriend,
  removeFriend,
  deleteUser,
} = require("../../controllers/userControllers");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getAUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
