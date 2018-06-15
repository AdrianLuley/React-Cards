import React from 'react';

/*
 * CardGroup
 * This component takes Card components as children and renders them.
 * Example usage:
 *
 *      <CardGroup>
 *          <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
 *      </CardGroup>
 *
 * The above would render a card group with a single child in it.
 *
 */
const CardGroup = (props) => (
    <div className="cardGroup">
        {props.children}
        <Card price="Free!" description="Trail" icon="fa-thumbs-o-up"/>
        <Card price="$10.00" description="Basic tier" hint="(most popular)" icon="fa-trophy"/>
        <Card price="$6000.00" description="Advanced tier" hint="(only for enterprise-level professionals)" icon="fa-bolt"/>
        
    </div>
);

const Card = (props) => (
    
    <div className="card cardGroup__card">
             <div className="card__description cardGroup__description">
                <div className={"icon fa " + props.icon + " card__descriptionIcon" } />
                
                 <div className="card__descriptionText">
                     {props.description}
                     <br/>
                     {props.hint}
                 </div>
            </div>
             <div className="card__price">{props.price}</div>
         </div>
);

const App = () => (
    <CardGroup/>
   
);

export default App;
