import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Login from '../../Login/Login';
import AddTask from '../AddTask/AddTask';
import Tasks from './../Tasks/Tasks';

const Home = () => {

    const [user] = useAuthState(auth);

    return (
        <main className='bg pb-5'>
            {!user && <Login></Login>}
            {
                user && <><Tasks></Tasks>
                    <AddTask></AddTask></>
            }
        </main>
    );
};

export default Home;