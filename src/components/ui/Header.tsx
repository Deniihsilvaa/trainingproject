import {Button} from 'primereact/button'
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import {useAuth} from '../../Hooks/AuthContext';

interface HeaderProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}
const Header: React.FC<HeaderProps> = ({ isOpen, setIsOpen }) =>{
    const {logout} = useAuth();
    return (
        <div className="sticky top-0 w-full bg-gray-900 p-2 max-w-full h-12" >
            <div className="flex justify-between">
                <div className={`${isOpen ? "hidden" : ""}`}>
                    {/* Abrir sidebar */}
                    <button onClick={() => setIsOpen(true)}>
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
                <div className="flex gap-2 h-10">
                    <Link to="/home">
                        <Button label="Home" icon="pi pi-home" className="h-8" />
                    </Link>
                </div>  
                <div className="flex gap-2 h-10">
                    <Link to="/">
                        <Button label="logout" icon="pi pi-user" onClick={logout} className="h-8" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header