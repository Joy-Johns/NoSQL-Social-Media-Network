const router = require("express").Router();

const {
  get_All_the_Thoughts,
  get_a_Thought_ById,
  add_new_Thought,
  add_new_Reaction,
  update_the_Thought,
  delete_the_Thought,
  delete_the_Reaction,
} = require("../../controllers/thought-controller");

// Set up GET all and POST at /api/thoughts
router.route("/").get(get_All_the_Thoughts).post(add_new_Thought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route("/:id")
  .get(get_a_Thought_ById)
  .put(update_the_Thought)
  .delete(delete_the_Thought);


//delete a specific reaction using the id
router.route("/:thoughtId/reactions/:reactionId").delete(delete_the_Reaction);
//add a new reation to a specidfic thought (we use the thought id)
router.route("/:thoughtId/reactions").post(add_new_Reaction);

module.exports = router;