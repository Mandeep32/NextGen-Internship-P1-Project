import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import FormInput from './FormInput';
//import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError('Invalid email format');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        setLoading(true);
        const hashedPassword = bcrypt.hashSync(password, 10);
        // try {
        //     const { data } = await axios.post('http://localhost:5000/api/auth/register', { username, email, password: hashedPassword });

        //     // Save user data in local storage
        //     localStorage.setItem('user', JSON.stringify(data));
        //     navigate('/dashboard');
        // } catch (err) {
        //     setError('Registration failed. Please try again.');
        // } finally {
        //     setLoading(false);
        // }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">Register</h3>
                            <form onSubmit={handleRegister}>
                                <FormInput
                                    label="Username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                                <FormInput
                                    label="Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <FormInput
                                    label="Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                {error && <div className="alert alert-danger">{error}</div>}
                                <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                                    {loading ? 'Registering...' : 'Register'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;