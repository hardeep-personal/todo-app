import { useState } from 'react';

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id} className='text-white'>
                    <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
                </li>
            ))}
        </ul>
    );
}

function Task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    className='form-control'
                    value={task.text}
                    onChange={(e) => {
                        onChange({
                            ...task,
                            text: e.target.value,
                        });
                    }}
                />
                <button onClick={() => setIsEditing(false)} className='btn btn-success mx-2'>Save</button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)} className='btn btn-warning mx-2'>Edit</button>
            </>
        );
    }
    return (
        <label className='d-flex pt-2'>
            
            {taskContent}
            <button onClick={() => onDelete(task.id)} className='btn btn-danger'>Delete</button>
        </label>
    );
}
