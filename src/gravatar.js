import React from 'react';
import Api from './api';

class Gravatar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageURL : ''
        }
    }

    getTextAvatar = ( name ) => {
        const svg = document.createElement('svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('pointer-events', 'none');
        svg.setAttribute('width', 50);
        svg.setAttribute('height', 50);
        svg.setAttribute('style', 'background-color: red');

        const text = document.createElement('text');
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('y', '50%');
        text.setAttribute('x', '50%');
        text.setAttribute('dy', '0.35em');
        text.setAttribute('pointer-events', 'auto');
        text.setAttribute('fill', 'white');

        text.innerHTML = name;

        svg.appendChild(text);

        const hash = window.btoa(svg.outerHTML);
        
        return `data:image/svg+xml;base64,${hash}`;
    }

    componentWillMount() {
        Api.getAvatar( this.props.email ).then(data => {
            let image = null;

            if (!data) {
                data = {};
            }

            if ( data.thumbnailUrl ) {
                image = data.thumbnailUrl;

            } else if ( data.displayName ) {
                image = this.getTextAvatar( data.displayName );

            } else {
                image = this.getTextAvatar( this.props.name );
            }


            this.setState({
                imageURL : image
            });
        });
    }

    render() {
        return (
            <img
                src = {this.state.imageURL}
            />
        )
    }
}

export default Gravatar;