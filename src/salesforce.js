/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 23/04/2023 - 20:07:18
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 23/04/2023
    * - Author          : mario
    * - Modification    : 
**/

import SFConnect from './sfConnect/sfConnection';

// const axios = require('axios');

// const BASE_URL = 'https://your-salesforce-url.com/api';

// const instance = axios.create({
//     baseURL: BASE_URL,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

export const createLog = async (log) => {
    // try {
    //     const response = await instance.post('/logs', log);
    //     return response.data;
    // } catch (error) {
    //     console.error(error);
    // }

    SFConnect();
        // .then(res => console.log('SALESFORCE RES: ', res))
        // .catch(err => console.log('SALESFORCE ERR: ', err));
};
