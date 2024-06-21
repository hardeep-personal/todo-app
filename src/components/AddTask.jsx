import { useState } from 'react';

export default function AddTask({onAddTask}) {
  const [text, setText] = useState('');
  return (
    <div className='d-flex'>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='form-control'
      />
      <button
      className='btn btn-secondary'
        onClick={() => {
          setText('');
          onAddTask(text);
        }}>
        Add
      </button>
    </div>
  );
}
