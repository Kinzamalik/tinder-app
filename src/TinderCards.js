import { SwipeableDrawer } from '@material-ui/core';
import React,{useState} from 'react';
import TinderCard from 'react-tinder-card'
import './TinderCards.css';

function TinderCards() {
    const [people,setPeople] = useState([
        {
            name:"Elon Musk",
            url:"https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
        },
        {
            name:"jeff Bezoz",
            url:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/icGViej8Oqlg/v1/1000x-1.jpg"
        },
    ]);
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map((person) =>{
                <h1>{person.name}</h1> ,
                <TinderCard 
                className="swipe"
                key={CharacterData.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir) => swiped(dir,character.name)}
                onCardLeftScreen={() => outOfFrame(character.name)}>
                </TinderCard>
                
            })}
            </div>
        </div>
    );
}

export default TinderCards;
