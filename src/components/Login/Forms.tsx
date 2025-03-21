import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { ApiLogin } from '../../Api/ApiLogin';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
    showDialog: boolean;
    setShowDialog: (show: boolean) => void;
    description: string;
    setDescription: (description: string) => void;
}

export default function Forms({
    showDialog,
    setShowDialog,
    description,
    setDescription
}: LoginProps) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const result = ApiLogin(email, password);
            if (result && result.token) {
                setDescription('Login successful');
                navigate('/home');
                let verificarToken = document.cookie.split(';').find(cookie => cookie.startsWith('token='))?.split('=')[1];
                console.log("verificarToken",verificarToken)


            } else {
                setDescription('Invalid email or password');
            }
        } catch (error) {
            setDescription('Error logging in. Please try again.');
        }

        setShowDialog(true);
    };

    return (
        <form onSubmit={handleSubmit} className="grid gap-6 justify-center">
        <div className="flex ">
            <FloatLabel>
                <InputText 
                    id="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required
                />
                <label htmlFor="Email">Email</label>
            </FloatLabel>
        </div>

        <div className="flex">
            <FloatLabel>
                <Password 
                    id="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    toggleMask 
                    required
                />
                <label htmlFor="Password">Password</label>
            </FloatLabel>
        </div>

        <div className="flex ">
            <Button label="Login" type="submit" className="w-full" />
        </div>
    </form>
    )
}