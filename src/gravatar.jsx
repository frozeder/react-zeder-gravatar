import React from 'react';
import Api from './api';

class Gravatar extends React.Component {

    static propsTypes = {
        name : React.PropTypes.string,
        email : React.PropTypes.string.isRequired,
        width : React.PropTypes.number,
        height : React.PropTypes.number
    }

    constructor(props) {
        super(props);
        this.state = {
            imageURL : ''
        }
    }

    /**
     * Returns background color based on argument provided
     * @param {string} name
     * @returns {string}
     * @private
     */
    _getAvatarBackground = ( name ) => {
        const colors = [
            '#ff3333',
            '#AFFFD7',
            '#f4a460',
            '#996969',
            '#afffd7',
            '#ff3333',
            '#AFFFD7',
            '#f4a460',
            '#996969'
        ];
        return colors[ name.charCodeAt(0).toString()[0] ];
    }

    /**
     * Returns svg avatar based on name provided
     * @param {string} name
     * @returns {string}
     * @private
     */
    _getTextAvatar = ( name ) => {
        const svg = document.createElement('svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('pointer-events', 'none');
        svg.setAttribute('width', this.props.size);
        svg.setAttribute('height', this.props.size);
        svg.setAttribute('style', 'background-color: '+this._getAvatarBackground(name));

        const text = document.createElement('text');
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('y', '50%');
        text.setAttribute('x', '50%');
        text.setAttribute('dy', '0.35em');
        text.setAttribute('pointer-events', 'auto');
        text.setAttribute('fill', 'black');

        text.innerHTML = name;

        svg.appendChild(text);
        
        return `data:image/svg+xml;base64,${ window.btoa(svg.outerHTML) }`;
    }

    componentWillMount() {
        Api.getProfile( this.props.email, this.props.size ).then(data => {
            let image = null;

            switch(true) {
                case !!data.avatar :
                    image = data.avatar;
                    break;
                case !!data.name :
                    image = this._getTextAvatar( data.displayName );
                    break;
                case !!this.props.name :
                    image = this._getTextAvatar( Api.prepareInitials( this.props.name ) );
                    break;
            }

            this.setState({
                imageURL : image
            });
        });
    }

    render() {

        return (
            <div className={this.props.className}>
            { this.state.imageURL && <img src = {this.state.imageURL}/> }
            </div>
        )
    }
}

export default Gravatar;