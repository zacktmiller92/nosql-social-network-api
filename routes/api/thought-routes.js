const router = require('express').Router();

const { getAllThoughts, getThoughtById, createThought, createReaction, deleteReaction } = require('../../controllers/thought-controllers');

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

router
    .route('/:id')
    .get(getThoughtById);


router
    .route('/:thoughtId/reactions')
    .post(createReaction);


router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;