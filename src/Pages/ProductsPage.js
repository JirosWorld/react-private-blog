import React from 'react';
import {useHistory} from "react-router-dom";

function ProductsPage() {

    const history = useHistory();

    function buyProduct() {
        console.log("Besteld!");

        //gebruiker doorlinken naar de andere pagina
        // history.push("/producten/sok")
    }

    return (
        <div>
            <p>Producten</p>
            <ul>
                <li>i</li>
                <li>j</li>
                <li>k</li>
                <li>l</li>
                <li>m</li>
            </ul>

            <button type="button" onClick={buyProduct}>Koop dit ding!</button>
        </div>
    );
}

export default ProductsPage;