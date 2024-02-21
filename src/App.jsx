import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductPageDesign1 from "./pages/ProductPageDesign1";
import ProductPageDesign2 from "./pages/ProductPageDesign2";
import LandingSite from "./pages/LandingSite";
import ProductListingDesign1 from "./pages/ProductListingDesign1";
import ProductListingDesign2 from "./pages/ProductListingDesign2";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="landing-site" element={<LandingSite />} />{" "}
                    <Route
                        path="/product-listing-design1"
                        element={<ProductListingDesign1 />}
                    />{" "}
                    <Route
                        path="/product-listing-design2"
                        element={<ProductListingDesign2 />}
                    />{" "}
                    <Route
                        path="/product-page-design1"
                        element={<ProductPageDesign1 />}
                    />{" "}
                    <Route
                        path="/product-page-design2"
                        element={<ProductPageDesign2 />}
                    />{" "}
                </Routes>{" "}
            </BrowserRouter>
        </>
    );
}

export default App;
