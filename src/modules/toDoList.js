//imports react Components
import React, { useState, useEffect, useCallback, useMemo } from 'react';

//create main function for add feature
const ToDoList = () => {
    const [toDoList, setToDoList] = useState([]);
    const [activity, setActivity] = useState('');
    const [price, setPrice] = useState(0);
    const [type, setType] = useState('education');
    const [bookings, setBookings] = useState(false);
    const [accesability, setAccesability] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newToDoList = {
            id: Date.now(),
            activity,
            price,
            type,
            bookings,
            accesability
        }
        setToDoList([...toDoList, newToDoList]);

        setActivity('');
        setPrice(0);
        setType('Select Type');
        setBookings(false);
        setAccesability(0);
    }

    const handleDelete = useCallback((id) => {
        setToDoList(prevToDoList => prevToDoList.filter((to) => todo.id !== id));
    }, []);

    return (
    <div>
      {/*handle form return*/}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          required
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          {/* Options for type selection */}
          <option value="education">Education</option>
          <option value="recreational">Recreational</option>
          <option value="social">Social</option>
          <option value="diy">DIY</option>
          <option value="charity">Charity</option>
          <option value="cooking">Cooking</option>
          <option value="relaxation">Relaxation</option>
          <option value="music">Music</option>
          <option value="busywork">Busywork</option>
        </select>
        <label>
          Booking Required:
          <input
            type="checkbox"
            checked={bookingRequired}
            onChange={(e) => setBookingRequired(e.target.checked)}
          />
        </label>
        <label>
          Accessibility:
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={accessibility}
            onChange={(e) => setAccessibility(Number(e.target.value))}
          />
        </label>
        <button type="submit">Add Todo</button>
      </form>
      
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.activity} - ${todo.price} - {todo.type} - Booking:{' '}
            {todo.bookingRequired ? 'Yes' : 'No'} - Accessibility:{' '}
            {todo.accessibility.toFixed(2)}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
    </div>
  );

};