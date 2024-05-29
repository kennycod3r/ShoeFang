import React from "react";

export default function Products({result}){
    return(
        <>
            <section className="category-section">
                {result}
            </section>
        </>
    )
}