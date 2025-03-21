import { Button } from 'primereact/button';
import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import Forms from '../components/Login/Forms';


export default function Login() {

    const [showDialog, setShowDialog] = useState(false);
    const [description, setDescription] = useState('');



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

                <Forms
                    showDialog={showDialog}
                    setShowDialog={setShowDialog}
                    description={description}
                    setDescription={setDescription}
                />
            </div>
        </div>
    );
}
