import { useState } from 'react';
import Logo1 from '../../assets/logo/Logo1.png';
import './styles.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <section id="Login">
            <div className='container'>
                <div className='container-login'>
                    <div className='wrap-login'>
                        <form className='login-form'>
                            <spa className='login-form-title'>
                                Bem vindo
                            </spa>
                            <spa className='login-form-title'>
                                <img src={Logo1} alt='logo login' />
                            </spa>

                            <div className='wrap-input'>
                                <input
                                    className={email !== '' ? 'has-val input' : 'input'}
                                    type='email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <span className='focus-input' data-placeholder='Email'></span>
                            </div>

                            <div className='wrap-input'>
                                <input
                                    className={password !== '' ? 'has-val input' : 'input'}
                                    type='password'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <span className='focus-input' data-placeholder='Password'></span>
                            </div>

                            <div className='container-login-form-btn'>
                                <button className='login-form-btn'>Login</button>
                            </div>

                            <div className='text-center'>
                                <span className='txt1'>Não possui conta?</span>
                                <a className='txt2' href='#'>Criar conta</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;