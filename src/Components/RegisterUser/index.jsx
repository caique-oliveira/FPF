/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import * as S from './RegisterUser.styles';

const CONFIG = {
  localStoreName: 'commentor-uzor'
};

const RegisterUser = ({ onSave, onCommentAdded }) => {
  const [formData, setFormData] = useState({
    foto: '',
    nome: '',
    endereco: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    genero: '',
  });

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

  // const handleChange = (event) => {
  //   setName(event.target.value);
  // };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'foto') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, foto: reader.result });
      };
      if (files[0]) {
        reader.readAsDataURL(files[0]);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(formData);
  };

  return (
    <>
      <div className="commentAddBtn1" onClick={toggleModal}>
        <span>Cadastrar novo Usuário</span>
      </div>
      <div className="commentAddWrapper">

        <div className={modalClasses}>
          <h2>Cadastrar Novo usuário</h2>
          <S.Form onSubmit={handleSubmit}>
            <S.Input type="file" name="foto" accept="image/*" onChange={handleChange} />
            <S.Input type="text" name="nome" placeholder="Nome" onChange={handleChange} />
            <S.Input type="text" name="endereco" placeholder="Endereço" onChange={handleChange} />
            <S.Input type="email" name="email" placeholder="E-mail" onChange={handleChange} />
            <S.Input type="tel" name="telefone" placeholder="Telefone" onChange={handleChange} />
            <S.Input type="date" name="dataNascimento" onChange={handleChange} />
            <select name="genero" onChange={handleChange}>
              <option value="">Selecione o Gênero</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
            </select>
            <S.Button type="submit">Salvar</S.Button>
          </S.Form>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
