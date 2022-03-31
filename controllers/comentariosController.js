const Itinerarios = require('../models/itinerarios')

const comentariosController = {

    addComment: async (req, res) => {
        const {itinerario,comment} = req.body.comment
        const user = req.user.id

        try {
            const nuevoComment = await Itinerarios.findOneAndUpdate({_id:itinerario}, {$push: {comments: {comment: comment, userId: user}}}, {new: true}).populate("comments.userId")

            res.json({ success: true, response:{nuevoComment}, message:"gracias por dejarnos tu comentario" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Algo a salido mal intentalo en unos minutos" })
        }

    },
    
    deleteComment: async (req, res) => {
        const id = req.params.id
        const user = req.user.id
        try {
            const deleteComment = await Itinerarios.findOneAndUpdate({"comments._id":id}, {$pull: {comments: {_id: id}}}, {new: true})
            res.json({ success: true, response:{deleteComment}, message: "has eliminado el comentario" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Algo a salido mal intentalo en unos minutos" })
        }

    },

    modifiComment: async (req, res) => {
        const {commentID,comment} = req.body.comment
        const user = req.user.id
        try {
            const newComment = await Itinerarios.findOneAndUpdate({"comments._id":commentID}, {$set: {"comments.$.comment": comment}}, {new: true})
            res.json({ success: true, response:{newComment}, message:"tu comentario a sido modificado" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: true, message: "Algo a salido mal intentalo en unos minutos" })
        }

    },
    
}
module.exports = comentariosController