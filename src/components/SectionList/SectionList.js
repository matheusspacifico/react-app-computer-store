import React from "react";
import "./SectionList.css";

function SectionList(props) {
    const filteredProducts = props.products.filter(product => product.section === props.section);
    let conteudo;
    if (filteredProducts.length === 0) {
        conteudo = <p className="no-products-message">Nenhum produto adicionado!</p>
    } else {
        conteudo = (<ul>
            {filteredProducts.map((product, index) => (
                <li key={index}>
                    <div><strong>Nome:</strong> {product.productName}</div>
                    <div><strong>Preço:</strong> ${product.price}</div>
                    <div><strong>Marca:</strong> <img src={props.chooseImage(product.brand)} alt={product.brand} className="brand-image" /></div>
                    <div><strong>Condição:</strong> {product.condition}</div>
                </li>
            ))}
        </ul>)
    }

    return (
        <div className="SectionList">
            <h2>{props.section}</h2>
            {conteudo}
        </div>
    );
}

export default SectionList;
