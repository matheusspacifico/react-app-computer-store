import React from "react";
import "./ProductsList.css";

import hpImage from '../../images/hp.webp';
import dellImage from '../../images/dell.png';
import positivoImage from '../../images/positivo.png';
import asusImage from '../../images/asus.png';
import terceirosImage from '../../images/terceiros.png';

import SectionList from "../SectionList/SectionList";

function ProductsList(props) {

    function chooseImage(brand) {
        let image;
        switch (brand) {
            case "HP":
                image = hpImage;
                break;
            case "Dell":
                image = dellImage;
                break;
            case "Positivo":
                image = positivoImage;
                break;
            case "Asus":
                image = asusImage;
                break;
            default:
                image = terceirosImage;
                break;
        }
        return image;
    }

    const sections = ["Computadores", "Acessórios", "Impressoras", "Games", "Gadgets"];

    return (
        <div className="ProductsList">
            {sections.map(section => (
                <SectionList 
                    key={section} 
                    section={section} 
                    products={props.objects} 
                    chooseImage={chooseImage} 
                />
            ))}
        </div>
    );
}

export default ProductsList;
