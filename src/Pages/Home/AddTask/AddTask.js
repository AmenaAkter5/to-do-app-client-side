import React from 'react';
import { toast } from 'react-toastify';
import './AddTask.css';


const AddTask = () => {

    const handleTaskForm = event => {

        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;

        const task = { name, description };
        // console.log(task)

        fetch(' http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);

                // using toast
                // toast('Booking is Successful')

                // task added success হলে
                if (data.insertedId) {
                    toast.success('Task is added successfully')
                }

                // task added success না হলে
                else {
                    toast.error('Task Addition Failed')
                }
            })

        event.target.reset();
    }

    return (
        <section className='task-form-container'>
            <div className='task-container'>
                <form onSubmit={handleTaskForm} className='task-form mx-auto'>
                    <h2 className='task-title'>Add Your Task</h2>

                    <input className='task-input-field' type="text" name="name" id="" placeholder='Task name' required />

                    <textarea className='task-input-field' name="description" id="" cols="30" rows="3" placeholder='Task description' required></textarea>

                    <input className='add-task-button' type="submit" value="Add Task" />

                </form>
            </div>
        </section>
    );
};

export default AddTask;