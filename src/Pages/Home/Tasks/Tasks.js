import React from 'react';
import useTasks from '../../../hooks/useTasks';
import Task from './../Task/Task';
import './Tasks.css';



const Tasks = () => {

    const [tasks] = useTasks();


    return (
        <section className='tasks-bg'>
            <div className='tasks-container'>
                {
                    tasks.map(task =>
                        <Task
                            key={task._id}
                            task={task}
                        >
                        </Task>)
                }
            </div>

            {/* <button onClick={handleTaskComplete} className='task-complite-btn'>Task Complite</button> */}
        </section>
    );
};

export default Tasks;