import React from "react";
import "./ProductsList.css";

import hpImage from '../../images/hp.webp';
import dellImage from '../../images/dell.png';
import positivoImage from '../../images/positivo.png';
import asusImage from '../../images/asus.png';
import terceirosImage from '../../images/terceiros.png';

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

    let conteudo;
    if (props.objects.length === 0) {
        conteudo = <p className="no-products-message">Nenhum produto adicionado!</p>
    } else {
        conteudo = (
            <ul>
                {props.objects.map((product, index) => (
                    <li key={index}>
                        <div><strong>Nome:</strong> {product.productName}</div>
                        <div><strong>Preço:</strong> ${product.price}</div>
                        <div><strong>Seção:</strong> {product.section}</div>
                        <div><strong>Marca:</strong> <img src={chooseImage(product.brand)} alt={product.brand} className="brand-image" /></div>
                        <div><strong>Condição:</strong> {product.condition}</div>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div className="ProductsList">
            <h2>Lista de Produtos:</h2>
            {conteudo}
        </div>
    );
}

export default ProductsList;
