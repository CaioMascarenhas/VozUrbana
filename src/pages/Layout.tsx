import { Outlet } from 'react-router-dom';
import NewHeader from '../components/newHeader';

const AppLayout = () => {
    return (
        <>
            <NewHeader />

            <Outlet /> {/* as outras rotas */}

        </>
    );
};

export default AppLayout;
