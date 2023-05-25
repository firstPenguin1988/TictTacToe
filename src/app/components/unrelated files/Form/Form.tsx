"use client";

import React, {useState} from "react";
import FormInput from "./FormInput";


const FoodForm = () => {
    const [formData, setFormData] = useState({
        food_name: '',
        serving_id: '',
        serving_description: '',
        serving_size: '',
        protein: '',
        calorie: '',
    });

    return (
        <>
            <h1>Food Form</h1>
            <FormInput />
            <button>Submit</button>
        </>
    )
}

export default FoodForm;