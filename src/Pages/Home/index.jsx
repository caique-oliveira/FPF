/* eslint-disable react/prop-types */
import * as S from './Home.styles';

const HomeComponent = ({ data }) => {
    return (
        <S.Container>
            <h1>Dados Cadastrados</h1>
            {data && (
                <div>
                    {data.foto && <img src={data.foto} alt="Foto" style={{ width: '150px', height: '150px' }} />}
                    <p><strong>Nome:</strong> {data.nome}</p>
                    <p><strong>Endereço:</strong> {data.endereco}</p>
                    <p><strong>E-mail:</strong> {data.email}</p>
                    <p><strong>Telefone:</strong> {data.telefone}</p>
                    <p><strong>Data de Nascimento:</strong> {data.dataNascimento}</p>
                    <p><strong>Gênero:</strong> {data.genero}</p>
                </div>
            )}
        </S.Container>
    );
};

export default HomeComponent;
