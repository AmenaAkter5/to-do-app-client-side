import { useEffect, useState } from "react";


const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // fetch('task.json')
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks])

    return [tasks, setTasks];
};

export default useTasks;