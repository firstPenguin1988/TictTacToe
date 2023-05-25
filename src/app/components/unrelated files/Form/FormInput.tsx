"use client";

import React, {useState} from "react";

const FormInput = () => {
    return (
        <form>
            <div>
                <label>Food Name: </label>
                <input type="text" />
            </div>
            <div>
                <label>Serving Id: </label>
                <input type="number" />
            </div>
            <div>
                <label>Serving Description: </label>
                <input type="text" />
            </div>
            <div>
                <label>Serving Size: </label>
                <input type="number" />
            </div>
            <div>
                <label>Protein: </label>
                <input type="number" />
            </div>
            <div>
                <label>Calorie: </label>
                <input type="number" />
            </div>
        </form>
    )
}

export default FormInput;