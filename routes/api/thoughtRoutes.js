const router = require("express").Router();
const {
  getUserThoughts,
  getAUserThought,
  createUserThought,
  updateAUserThought,
  deleteAUserThought,
  addReaction,
  removeReaction,
} = require("../../controllers/userControllers");

router.route("/").get(getUserThoughts).post(createUserThought);

router
  .route("/:thoughtId")
  .get(getAUserThought)
  .put(updateAUserThought)
  .delete(deleteAUserThought);

router.route("/:thoughtId/reactions").post(addReaction);
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
