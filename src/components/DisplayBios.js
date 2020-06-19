import React from 'react'
import DeveloperBio from './DeveloperBio';

function DisplayBios(props){
    return (
        props.developers.map(
            (dev) => <DeveloperBio key={dev.id} developer={dev} />
        )
    );
}

export default DisplayBios;