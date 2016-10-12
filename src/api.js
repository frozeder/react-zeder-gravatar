import fetchJSONP from 'fetch-jsonp';
import md5 from 'blueimp-md5';

const URL = '//gravatar.com/';

class GravatarApi
{
    static getAvatar = ( email ) => {
        return fetchJSONP(URL + `${ md5(email) }.json`, {
            timeout: 1000
        }).then(response => {
            return response.json();
        }).then(response => {
            return response.entry[0];
        }).catch(response => {
            return false;
        });
    }
}

export default GravatarApi;