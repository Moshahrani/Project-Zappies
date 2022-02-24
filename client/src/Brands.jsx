
import React from 'react'
import ReactDom from 'react-dom';
import Adidas from './BrandLogos/Adidas.png';
import Asics from './BrandLogos/Asics.png';
import Clarks from './BrandLogos/Clarks.png';
import Columbia from './BrandLogos/Columbia.png';
import Converse from './BrandLogos/Converse.png';
import CoolPlanet from './BrandLogos/Cool Planet by Steve Madden.png';
import Crocs from './BrandLogos/Crocs.png';
import DCShoes from './BrandLogos/DC.png';
import Lacoste from './BrandLogos/Lacoste.png';
import NewBalance from './BrandLogos/New Balance.png';
import Puma from './BrandLogos/Puma.png';
import Reebok from './BrandLogos/Reebok.png';
import Saucony from './BrandLogos/Saucony.png'




function Brands(props) {

    return (
        <div className="brandsContainer" >
            <img id="brand" src={Adidas} />
            <img id="brand" src={Asics} />
            <img id="brand" src={Clarks} />
            <img id="brand" src={Columbia} />
            <img id="brand" src={Converse} />
            <img id="brand" src={CoolPlanet} />
            <img id="brand" src={Crocs} />
            <img id="brand" src={DCShoes} />
            <img id="brand" src={Lacoste} />
            <img id="brand" src={NewBalance} />
            <img id="brand" src={Puma} />
            <img id="brand" src={Reebok} />
            <img id="brand" src={Saucony} />
        </div>
    );
}

export default Brands;
