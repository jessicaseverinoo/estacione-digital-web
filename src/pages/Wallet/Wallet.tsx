import './Wallet.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/Constants';

function Wallet() {
    return (
        <main className='wallet'>
            <p>Page Wallet</p>
            <Link to={ROUTES.LOGIN}>Login</Link>
            <Link to={ROUTES.HOME}>Início</Link>
            <Link to={ROUTES.PROFILE}>Perfil</Link>
            <Link to={ROUTES.VEHICLE.LIST}>Lista de Veículos</Link>
            <Link to={ROUTES.VEHICLE.EDIT}>Editar Veículo</Link>
            <Link to={ROUTES.VEHICLE.NEW}>Novo Veículo</Link>
            <Link to={ROUTES.WALLET}>Carteira</Link>
            <Link to={ROUTES.HISTORY}>Histórico</Link>
        </main>
    )
}

export default Wallet