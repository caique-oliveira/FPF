/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './styles.css';

const CONFIG = {
  localStoreName: 'commentor-uzor'
};

const RegisterUser = () => {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = () => {
    let storedComments = JSON.parse(window.localStorage.getItem(CONFIG.localStoreName));
    console.log(storedComments, 'storedComments aqui')

    if (!(storedComments instanceof Array)) {
      storedComments = [{ text: "Cadastrar novo usuário" }];
      window.localStorage.setItem(CONFIG.localStoreName, JSON.stringify(storedComments));
    }

    setComments(storedComments);
  };

  const addToComments = (data) => {
    setComments(prevComments => [...prevComments, data]);
    // Uncomment the below code if you want to update localStorage after adding a comment
    setTimeout(() => {
      window.localStorage.setItem(CONFIG.localStoreName, JSON.stringify([...comments, data]));
    }, 100);
  };

  return (
    <div id="comments-list">
      {comments.map((comment, index) => (
        <CommentViewComponent key={index} comment={comment} />
      ))}
      <CommentAddComponent onCommentAdded={addToComments} />
    </div>
  );
};

const CommentViewComponent = ({ comment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [shouldHide, setShouldHide] = useState(false);
  const [commentState, setCommentState] = useState(comment);

  const toggleEditComment = () => {
    setIsEditing(!isEditing);
  };

  const deleteComment = () => {
    setShouldHide(true);
  };

  const updateComment = (e) => {
    const textElement = e.target.closest('.commentWrapper').getElementsByTagName('textarea')[0];
    const updatedComment = { ...commentState, text: textElement.value };
    setCommentState(updatedComment);
    setIsEditing(false);
  };

  if (shouldHide) {
    return null;
  }

  return (
    <div className="commentWrapper">
      <div className="commentText">
        <span>{commentState.image}</span>
        <p>{commentState.name}</p>
        <p>{commentState.email}</p>
        <p>{commentState.telefone}</p>
        <p>{commentState.endereco}</p>
        <p>{commentState.date}</p>
        {!isEditing ? <p>{commentState.text}</p> : <textarea defaultValue={commentState.text}></textarea>}
      </div>
      {!isEditing ? (
        <div className="commentBtns">
          <button onClick={deleteComment} className="btnDanger">Deletar</button>
        </div>
      ) : (
        <div className="commentBtns">
          <button onClick={toggleEditComment} className="btnDefault">Cancel</button>
          <button onClick={updateComment} className="btnSuccess">Update</button>
        </div>
      )}
    </div>
  );
};

const CommentAddComponent = ({ onCommentAdded }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const addComment = (e) => {
    e.preventDefault();
    const textElements = document.querySelectorAll('form input');
    const textValues = Array.from(textElements).map(input => input.value.trim());
    const [image, name, email, telefone, endereco, date] = textValues;
    onCommentAdded({ image, name, email, telefone, endereco, date });
    setModalOpen(false);
    // Limpar os inputs
    textElements.forEach(input => input.value = '');
  };


  const modalClasses = 'commentAddModal ' + (modalOpen ? 'opened ' : 'closed ');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <div className="commentAddBtn1" onClick={toggleModal}>
        <span>Cadastrar novo Usuário</span>
      </div>
      <div className="commentAddWrapper">

        <div className={modalClasses}>
          <h2>Cadastrar Novo usuário</h2>
          <form onSubmit={addComment}>
            <label className='picture' tabIndex='0'>
              <input type="file" className="input-file" accept="image/*" name='image' />
            </label>
            <label>
              <span>Nome Completo</span>
              <input id='InputFormId' className='InputForm' type="text" name="input"
                onChange={handleChange}
                required
              />
            </label>
            <br />

            <label>
              <span>Email</span>
              <input className='InputForm' type="text" name="email" required />
            </label>
            <label>
              <span>Telefone</span>
              <input className='InputForm' type="text" name="telefone" required />
            </label>
            <label>
              <span>Endereço</span>
              <input className='InputForm' type="text" name="endereco" required />
            </label>
            <label>
              <span>Data de nascimento</span>
              <input className='InputForm' type="date" name="date" required />
            </label>
            <button type="button" className="btnDefault" onClick={toggleModal}>Cancelar</button>
            <button type="submit" className="btnSuccess">Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
