/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 27/04/2023 - 23:25:10
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/04/2023
    * - Author          : mario
    * - Modification    : 
**/

import axios from "axios";

// const axios = require('axios');
// var qs = require('qs');

// require('dotenv').config();
// const { SF_USERNAME, SF_PASSWORD, SF_SECURITY_TOKEN, SF_CONSUMER_KEY, SF_CONSUMER_SECRET } = process.env;

// const SF_USERNAME = 'mariojg@triscal.com.br'
// const SF_PASSWORD = 'cOV3i586Db9WQPEM8W'
// const SF_SECURITY_TOKEN = 'Zz6rTMA0RKzWeMuLY8QxjZWD'
// const SF_CONSUMER_KEY = '3MVG95jctIhbyCppxhUUbM5T6kfhIYQayxUMLDkpiNLPzS2EdHw4DJnFUFqr5iA7.SlD8LC2SSbRA9dYaUHal'
// const SF_CONSUMER_SECRET = 'FF908EDEF3600B7D3E607B8BAFE9B20FF2C04B3BF72591A2E52AC4E98B88640C'

// const body = new URLSearchParams();
// body.append('grant_type', 'password');
// body.append('client_id', SF_CONSUMER_KEY);
// body.append('client_secret', SF_CONSUMER_SECRET);
// body.append('username', SF_USERNAME);
// body.append('password', `${SF_PASSWORD}${SF_SECURITY_TOKEN}`);

const SFConnect = async () => {
    // console.log('body: ', body);
    // return new Promise((resolve, reject) => {
    //     axios.post('https://login.salesforce.com/services/oauth2/token', {
    //         'grant_type': 'password',
    //         'client_id': SF_CONSUMER_KEY,
    //         'client_secret': SF_CONSUMER_SECRET,
    //         'username': SF_USERNAME,
    //         'password': `${SF_PASSWORD}${SF_SECURITY_TOKEN}`
    //     }, {
    //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    //     }).then(response => {
    //         console.log('Access token:', response);
    //         resolve(response);
    //     }).catch(error => {
    //         console.error('Erro ao obter o access token:', error);
    //         reject(error);
    //     });
    // })


    // =========================================


    // return new Promise((resolve, reject) => {
    // var data = qs.stringify({
    //     'grant_type': 'password',
    //     'client_id': '3MVG95jctIhbyCppxhUUbM5T6kfhIYQayxUMLDkpiNLPzS2EdHw4DJnFUFqr5iA7.SlD8LC2SSbRA9dYaUHal',
    //     'client_secret': 'FF908EDEF3600B7D3E607B8BAFE9B20FF2C04B3BF72591A2E52AC4E98B88640C',
    //     'username': 'mariojg@triscal.com.br',
    //     'password': 'cOV3i586Db9WQPEM8WZz6rTMA0RKzWeMuLY8QxjZWD'
    // });

    // var config = {
    //     method: 'post',
    //     maxBodyLength: Infinity,
    //     url: 'https://login.salesforce.com/services/oauth2/token',
    //     headers: {},
    //     data: data
    // };
    // console.log('config: ', config);

    // axios(config)
    //     .then(function (response) {
    //         console.log(JSON.stringify(response, null, 2));
    //         // resolve(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //         // reject(error);
    //     });
    // })

    // =============================================

    // const axios = require('axios');

    const data = new URLSearchParams();
    data.append('grant_type', 'password');
    data.append('client_id', '3MVG95jctIhbyCppxhUUbM5T6kfhIYQayxUMLDkpiNLPzS2EdHw4DJnFUFqr5iA7.SlD8LC2SSbRA9dYaUHal');
    data.append('client_secret', 'FF908EDEF3600B7D3E607B8BAFE9B20FF2C04B3BF72591A2E52AC4E98B88640C');
    data.append('username', 'mariojg@triscal.com.br');
    data.append('password', 'cOV3i586Db9WQPEM8WZz6rTMA0RKzWeMuLY8QxjZWD');

    // const data = new URLSearchParams();
    // data.append('grant_type', 'password');
    // data.append('client_id', this.options.clientId);
    // data.append('client_secret', this.options.clientSecret);
    // data.append('username', this.options.username);
    // data.append('password', `${this.options.password}${this.options.securityToken}`);

    try {
      const response = await axios.post(`https://login.salesforce.com/services/oauth2/token`, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Connection': 'keep-alive'
        }
      });

      this.accessToken = response.data.access_token;
      this.instanceUrl = response.data.instance_url;

      console.log('accessToken: ', this.accessToken);
      console.log('instanceUrl: ', this.instanceUrl);

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }

    // =========================================================================

    // axios.defaults.baseURL = 'https://api.salesforce.com';
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    // axios.defaults.headers.common['Accept'] = '*/*';
    // axios.defaults.headers.common['Accept-Encoding'] = 'gzip, deflate, br';
    // axios.defaults.headers.common['Connection'] = 'keep-alive';
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

    // axios.post('https://login.salesforce.com/services/oauth2/token', data)
    //     .then(response => {
    //         console.log(response);
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     });

}

export default SFConnect;