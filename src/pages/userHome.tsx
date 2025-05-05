// import Header from '../components/header';
import UserTable from '../components/table';

const UserHome = () => {
    return (
        <div className="flex flex-col h-screen">
            {/* <div>
                <Header username="Cidadão" />
            </div> */}
            <div className="flex-grow flex items-center justify-center">
                <div className='bg-white w-11/12 h-11/12'>
                    <div className='h-1/12 flex items-center'>
                        <h1 className='text-[#077ABD] text-2xl font-bold'>PESQUISAS</h1>
                    </div>
                    <div className='border-1 border-gray-300 h-max'>
                        <UserTable />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;