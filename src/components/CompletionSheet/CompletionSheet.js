import React, { useState } from "react";
import "./CompletionSheet.css";
import TextArea from "../TextArea/TextArea";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import RadioArea from "../RadioArea/RadioArea";
import NumberArea from "../NumberArea/NumberArea";
import SubmitButton from "../SubmitButton/SubmitButton";

function CompletionSheet(props){
    const sections = ["Computadores", "Acessórios", "Impressoras", "Games", "Gadgets"];
    const brands = ["HP", "Dell", "Positivo", "Asus", "Terceiros"];

    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [section, setSection] = useState("Computadores");
    const [brand, setBrand] = useState("HP");
    const [condition, setCondition] = useState("");

    function handleNameChange(e) {
        setProductName(e.target.value);
    }

    function handlePriceChange(e) {
        setPrice(e.target.value);
    }

    function handleSectionChange(e) {
        setSection(e.target.value);
    }

    function handleBrandChange(e) {
        setBrand(e.target.value);
    }

    function handleConditionChange(e) {
        setCondition(e.target.value);
    }

    function formSubmit(e){
        e.preventDefault();
        props.onAddProduct({
            "productName" : productName,
            "price" : price,
            "section" : section,
            "brand" : brand,
            "condition" : condition
        })

        setProductName("");
        setPrice("");
        setSection("");
        setBrand("");
        setCondition("");
    }

    return (
        <form className="CompletionSheet" onSubmit={formSubmit}>
            <h2>Dados do produto:</h2>

            <TextArea 
                label="Nome:" 
                placeholder="Digite o nome do produto..."
                value={productName}
                onChange={handleNameChange}
            ></TextArea>

            <NumberArea 
                label="Preço:" 
                placeholder="Digite o preço do produto..."
                value={price}
                onChange={handlePriceChange}
            ></NumberArea>

            <DropDownMenu 
                label="Seções" 
                itens={sections}
                value={section}
                onChange={handleSectionChange}
            ></DropDownMenu>
            <DropDownMenu 
                label="Marcas" 
                itens={brands}
                value={brand}
                onChange={handleBrandChange}
            ></DropDownMenu>

            <div className="RadioGroup">
                <RadioArea 
                    label="Novo" 
                    name="Condição"
                    value="Novo"
                    checked={condition === "Novo"}
                    onChange={handleConditionChange}
                ></RadioArea>
                <RadioArea 
                    label="Usado" 
                    name="Condição"
                    value="Usado"
                    checked={condition === "Usado"}
                    onChange={handleConditionChange}
                ></RadioArea>
            </div>

            <SubmitButton name="Enviar"></SubmitButton>   
        </form>
    );
}

export default CompletionSheet;
