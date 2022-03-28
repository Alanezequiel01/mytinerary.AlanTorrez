import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import commentsAction from "../redux/actions/commentsActions";

const Comments = (props) => {
  const reload = props.reload;
  const setReload = props.setReload;

  const { id } = useParams()
  const [itinerario, setItinerario] = useState()
  const [inputText, setInputText] = useState()
  const [modifi, setModifi] = useState()

  console.log(props)

  async function cargarComentario(event) {
    const commentData = {
      itinerario: event.target.id,
      comment: inputText,
    };
    await props
      .addComment(commentData)
      .then(
        (response) => setItinerario(response.data.response.nuevoComment),
        setInputText("")
      );
  }

  async function modificarComentario(event) {
    const commentData = {
      commentID: event.target.id,
      comment: modifi,
    };
    await props.modifiComment(commentData);
    setReload(!reload);
  }
  async function eliminarComentario(event) {
    await props.deleteComment(event.target.id);
    setReload(!reload);
  }

  return (
    <>

            {props?.comments.map(comment =>
                  <>
                    {comment.userId?._id !== props.user?.id ?
                      <div class="card cardComments " key={comment._id}>
                        <div class="card-header">
                          {comment.userID?.fullName}
                        </div>
                        <div class="card-body">
                          <p class="card-text">{comment.comment}</p>
                        </div>
                      </div> :

                      <div class="card cardComments">
                        <div class="card-header">
                          {comment.userID.fullName}
                        </div>
                        <div class="card-body ">
                          <textarea type="text" className="card-text textComments" onChange={(event) => setModifi(event.target.value)} defaultValue={comment.comment} />
                          <button id={props.id} onClick={modificarComentario} class="btn btn-primary">Modificar</button>
                          <button id={props.id} onClick={eliminarComentario} class="btn btn-primary">Eliminar</button>
                        </div>
                      </div>

                    }
                  </>
                )}

                {props.user ?
                  <div class="card cardComments">
                    <div class="card-header">
                      DEJANOS TU COMENTARIO
                    </div>
                    <div class="card-body ">
                      <textarea onChange={(event) => setInputText(event.target.value)} className="card-text textComments" value={inputText} />
                      <button id={props.id} onClick={cargarComentario} class="btn btn-primary">Cargar</button>
                    </div>
                  </div> :
                  <h1>Realiza singIn y dejanos tu comentario</h1>
                }
    {/* <div class="accordion" id={itinerario?.name}>
          <div class="accordion-item">
            <h2 class="accordion-header " id={"heading" + itinerario?.name}>
              <button class="accordion-button collapsed acordion " type="button" data-bs-toggle="collapse" data-bs-target={"#" + itinerario?.name.replace(/ /g, "").slice(0, 5)} aria-expanded="false" aria-controls={itinerario?.name.replace(/ /g, "").slice(0, 5)}>
                Comentarios
                <span class="material-icons ml-auto arrow collapsed " data-bs-toggle="collapse" aria-controls={itinerario?.name.replace(/ /g, "").slice(0, 5)} data-bs-target={"#" + itinerario?.name.replace(/ /g, "").slice(0, 5)}>
                  keyboard_arrow_down
                </span>
              </button>
            </h2>
            <div id={itinerario?.name.replace(/ /g, "").slice(0, 5)} class="accordion-collapse collapse " aria-labelledby={"heading" + itinerario?.name} data-bs-parent={"#" + itinerario?.name}>
              <div class="accordion-body  ">

              
                {itinerario?.comments.map(comment =>
                  <>
                    {comment.userID?._id !== props.user?.id ?
                      <div class="card cardComments " key={comment._id}>
                        <div class="card-header">
                          {comment.userID?.fullName}
                        </div>
                        <div class="card-body">
                          <p class="card-text">{comment.comment}</p>
                        </div>
                      </div> :

                      <div class="card cardComments">
                        <div class="card-header">
                          {comment.userID.fullName}
                        </div>
                        <div class="card-body ">
                          <textarea type="text" className="card-text textComments" onChange={(event) => setModifi(event.target.value)} defaultValue={comment.comment} />
                          <button id={comment._id} onClick={modificarComentario} class="btn btn-primary">Modificar</button>
                          <button id={comment._id} onClick={eliminarComentario} class="btn btn-primary">Eliminar</button>
                        </div>
                      </div>

                    }
                  </>
                )}

                {props.user ?
                  <div class="card cardComments">
                    <div class="card-header">
                      DEJANOS TU COMENTARIO
                    </div>
                    <div class="card-body ">
                      <textarea onChange={(event) => setInputText(event.target.value)} className="card-text textComments" value={inputText} />
                      <button onClick={cargarComentario} class="btn btn-primary">Cargar</button>
                    </div>
                  </div> :
                  <h1>Realiza singIn y dejanos tu comentario</h1>
                }
              </div>
            </div>
          </div>
        </div> */}
      
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
