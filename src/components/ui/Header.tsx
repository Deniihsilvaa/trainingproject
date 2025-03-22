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
        <div className="sticky top-0 w-full bg-gray-100 p-2 max-w-full " >
            <div className="flex justify-between">
                <div className={`${isOpen ? "hidden" : ""}`}>
                    {/* Abrir sidebar */}
                    <button onClick={() => setIsOpen(true)}>
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
                <div>
                    <Link to="/home">
                        <Button label="Home" icon="pi pi-home" />
                    </Link>
                </div>  
                <div>
                    <Link to="/">
                        <Button label="logout" icon="pi pi-user" onClick={logout} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header