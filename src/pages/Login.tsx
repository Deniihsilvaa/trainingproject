import { Button } from 'primereact/button';
import { useState } from 'react';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Dialog } from 'primereact/dialog';
import { ApiLogin } from '../Api/ApiLogin';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showDialog, setShowDialog] = useState(false);
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const result = await ApiLogin(email, password);
            
            if (result) {
                setDescription('Login successful');
                navigate('/home');
            } else {
                setDescription('Invalid email or password');
            }
        } catch (error) {
            setDescription('Error logging in. Please try again.');
        }

        setShowDialog(true);
    };

    return (
        <div className="flex justify-center items-center h-screen rounded-4xl p-5">
            <div className="card p-2 shadow-lg rounded-lg bg-white w-full max-w-md">
                <Dialog 
                    visible={showDialog} 
                    onHide={() => setShowDialog(false)} 
                    header="Login Status"
                    footer={<Button label="OK" onClick={() => setShowDialog(false)} />}
                >
                    {description}
                </Dialog>

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
            </div>
        </div>
    );
}
