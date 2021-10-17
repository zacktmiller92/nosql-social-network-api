const { User, Thought } = require('../models');

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find({})
            // .populate({
            //     path: 'comments',
            //     select: '-__v'
            // })
            // .select('-__v')
            // .sort({ _id: -1 })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
            // .populate({
            //     path: 'comments',
            //     select: '-__v'
            // })
            // .select('-__v')
            .then(dbThoughtData => {
                // If no Thought is found, send 404
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No Thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    
    createThought({ body }, res) {
        Thought.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },
};





module.exports = thoughtController;