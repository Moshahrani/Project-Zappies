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
import Saucony from './BrandLogos/Saucony.png';
import Skechers from './BrandLogos/Skechers.png';
import SkechersPerformance from './BrandLogos/SkechersPerformance.png';
import Sperry from './BrandLogos/Sperry.png';
import SteveMadden from './BrandLogos/SteveMadden.png';
import Ugg from './BrandLogos/Ugg.png';
import UnderArmour from './BrandLogos/UnderArmour.png';
import Vans from './BrandLogos/Vans.png';

function Brands(props) {

    return (
        <div className="brandsContainer" >
            <img className="brand" id='8466374' src={Adidas} onClick={props.getSpecificShoe}/>
            <img className="brand" src={Asics} />
            <img className="brand" src={Clarks} />
            <img className="brand" src={Columbia} />
            <img className="brand" src={Converse} />
            <img className="brand" src={CoolPlanet} />
            <img className="brand" src={Crocs} />
            <img className="brand" src={DCShoes} />
            <img className="brand" src={Lacoste} />
            <img className="brand" src={NewBalance} />
            <img className="brand" src={Puma} />
            <img className="brand" src={Reebok} />
            <img className="brand" src={Saucony} />
            <img className="brand" src={Skechers} />
            <img className="brand" src={SkechersPerformance} />
            <img className="brand" src={Sperry} />
            <img className="brand" src={SteveMadden} />
            <img className="brand" src={Ugg} />
            <img className="brand" src={UnderArmour} />
            <img className="brand" src={Vans} />
        </div>
    );
}

export default Brands;
