import React from "react";
import "./CompletionSheet.css";
import TextArea from "../TextArea/TextArea";

function CompletionSheet(){
    return (
        <form className="CompletionSheet">
            <h2>Dados do produto:</h2>
            <TextArea label="Nome:" placeholder="Digite o nome do produto..."></TextArea>
            <TextArea label="Preço:" placeholder="Digite o preço do produto..."></TextArea>          
        </form>
    );
}

export default CompletionSheet;
