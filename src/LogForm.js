/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 23/04/2023 - 20:10:01
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 23/04/2023
    * - Author          : mario
    * - Modification    : 
**/

import { useState } from 'react';
import { createLog } from './salesforce';

const LogForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const log = {
            name,
            description,
            date,
        };

        await createLog(log);

        setName('');
        setDescription('');
        setDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="description">Description:</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

            <label htmlFor="date">Date:</label>
            <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </form>
    )
}

export default LogForm;