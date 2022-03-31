import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import commentsAction from "../redux/actions/commentsActions";
import "../styles/comments.css";
import deleteComment from '../assets/remove.png'
import editComment from '../assets/edit.png'
import swal from 'sweetalert';

const Comments = (props) => {
  const reload = props.reload;
  const setReload = props.setReload;

  const { id } = useParams()
  const [itinerario, setItinerario] = useState()
  const [inputText, setInputText] = useState()
  const [modifi, setModifi] = useState()
  const itinerarios = props.itinerario

  async function cargarComentario(event) {
    const commentData = {
      itinerario: event.target.id,
      comment: inputText,
    };
    await props
    .addComment(commentData)
    setReload(!reload)
      .then(
        (response) => setItinerario(response.data.response.nuevoComment),
        setInputText("")
        );
  }

  async function eliminarComentario(event) {
    swal({
      title: "Are you sure?",
      text: "If you accept the comment it will disappear",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })

    .then((willDelete) => {
      if (willDelete) {
        swal("Your comment has been deleted!", {
          icon: "success",
        });
        props.deleteComment(event.target.id).then( res =>{
          if(res.data.success) {
            setItinerario(res.data.response.deleteComment.comments)
            setReload(!reload)
          }
        }
        )
      } else {
        swal("Ok, your comment is safe!");
      }
    });
  }


  async function modificarComentario(event) {
    const commentData = {
      commentID: event.target.id,
      comment: modifi,
    };
    swal({
      title: "Are you sure?",
      text: "If you do this you can't undo it",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willModify) => {
      if (willModify) {
        swal("Your comment has been modify!", {
          icon: "success",
        });
        props.modifiComment(commentData).then( res =>{
          if(res.data.success) {
            setItinerario(res.data.response.modifiComment.comments)
            setReload(!reload)
          }
        }
        )
      } else {
        swal("Ok, your comment is safe!");
      }
    });
  }

  return (
    <>

                  <div className="scroll">
            {(itinerarios.comments).map(comment =>
                  <>
                    {comment.userId?._id!== props.user?.id ?
                      <div className="card cardComments " key={comment._id}>
                        <div className="card-header">
                          <div>
                          <img src={process.env.PUBLIC_URL + `${comment.userId.urlImage}`} className='userImage imgUser'/>
                          </div>
                          <h4>{comment.userId.fullName}</h4>
                        </div>
                        <div className="card-body">
                          <p className="card-text">{comment.comment}</p>
                        </div>
                      </div> :

                      <div className="card cardComments">
                        <div className="card-header">
                          <div>
                          <img src={process.env.PUBLIC_URL + `${comment.userId.urlImage}`} className='userImage imgUser'/>
                          </div>
                          <h4>{comment.userId.fullName}</h4>
                        </div>
                        <div className="card-body ">
                          <textarea type="text" className="card-text textComments" onChange={(event) => setModifi(event.target.value)} defaultValue={comment.comment} />
                          <div>
                          <img src={editComment} id={comment._id} onClick={modificarComentario}  className="iconosEditYDelete"/>
                          <img src={deleteComment} id={comment._id} onClick={eliminarComentario}  className="iconosEditYDelete"/>
                          </div>
                        </div>
                      </div>
                    }
                  </>
                )}
                    </div>
                    <div className="comentar">

                {props.user ?
                  <div className="card cardComments cardPrincipal">
                    <div className="card-header comentarPrincipal">
                      <h4>Comment</h4>
                    </div>
                    <div className="card-body bodyPrincipal">
                      <textarea onChange={(event) => setInputText(event.target.value)} className="card-text textComments" value={inputText} />
                      <button className="botonEnviar" id={props.id} onClick={cargarComentario}>
                          <div class="svg-wrapper-1">
                            <div class="svg-wrapper">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" id={props.id} onClick={cargarComentario}></path>
                              </svg>
                            </div>
                          </div>
                          <span>Send</span>
                      </button>
                    </div>
                  </div> :
                  <h3 className="mensajeLogin">Please login to comment</h3>
                }
                </div>
    </>
  );
};

const mapDispatchToProps = {
  addComment: commentsAction.addComment,
  modifiComment: commentsAction.modifiComment,
  deleteComment: commentsAction.deleteComment,
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
