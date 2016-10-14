import fetchJSONP from 'fetch-jsonp';
import md5 from 'blueimp-md5';

const URL = '//gravatar.com/';

class GravatarApi
{
    /**
     * Requrest for gravatar profile data
     * @param email
     * @param {number} [imageSize]
     * @returns {Promise.<object>}
     */
    getProfile = ( email, imageSize = 50 ) => {
        const requestURL = URL + `${ md5(email) }.json`;
        return fetchJSONP( requestURL, {
            timeout: 1000
        }).then(response => {
            return response.json();
        }).then(/** @var {{displayName, thumbnailUrl}} */ response => {
            const data = response.entry[0];
            return {
                initials    : this.prepareInitials( data.displayName ),
                avatar      : this._prepareAvatarURL( data.thumbnailUrl, imageSize )
            }
        }).catch(response => {
            return {};
        });
    }

    /**
     * Returns initials build from name
     * @param {string} name
     * @returns {string|undefined}
     */
    prepareInitials = ( name ) => {
        if (name) {
            const parts = name.split(' ');
            if (parts.length > 1) {
                return (parts[0][0] + parts[1][0]).toUpperCase();
            } else if ( parts[0].length > 1) {
                return parts[0][0] + parts[0][1];
            }
        }
    }

    /**
     * Returns avatar url with size param
     * @param {string} url
     * @param {number} size
     * @returns {string|undefined}
     * @private
     */
    _prepareAvatarURL = ( url, size ) => {
       if (url && size) {
           return url + `?s=${size}`;
       }
    }
}

export default new GravatarApi;