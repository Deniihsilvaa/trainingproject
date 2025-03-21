import {Button} from 'primereact/button'
import { Link } from 'react-router-dom';

const HeaderLandig: React.FC = () =>{
    return (
        <header>
            <div className="flex justify-between">
                <div>
                    <Link to="/login">
                        <Button label="Login" icon="pi pi-user" />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default HeaderLandig