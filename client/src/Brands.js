import React from 'react'
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
        <div className="brandsContainer" onClick={props.getSpecificShoe}>
            <img className="brand" id='8466374' src={Adidas} />
            <img className="brand" id='9514768' src={Asics} />
            <img className="brand" id='9617026' src={Clarks} />
            <img className="brand" id='8806722' src={Columbia} />
            <img className="brand" id='9467466' src={Converse} />
            <img className="brand" src={CoolPlanet} />
            <img className="brand" id='9479154' src={Crocs} />
            <img className="brand" id='7550798' src={DCShoes} />
            <img className="brand" src={Lacoste} />
            <img className="brand" id='9477716' src={NewBalance} />
            <img className="brand" id='9469154' src={Puma} />
            <img className="brand" id='9290811' src={Reebok} />
            <img className="brand" id='9518040' src={Saucony} />
            <img className="brand" id='9369965' src={Skechers} />
            <img className="brand" id='9140957' src={SkechersPerformance} />
            <img className="brand" id='9340979' src={Sperry} />
            <img className="brand"  src={SteveMadden} />
            <img className="brand" id='9469603' src={Ugg} />
            <img className="brand" id='9469603' src={UnderArmour} />
            <img className="brand" id='7213524' src={Vans} />
        </div>
    );
}

export default Brands;
