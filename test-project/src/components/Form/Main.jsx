import React, { useState } from "react";
import Form from "./Form";
import Review from "./Review";
export default function Main() {
    const [isReview, setIsReview] = useState(true);
    const [formData, setFormData] = useState({
        firstname:"",
        lastname:"",
        age:"0-15",
        freetext:""
    });
    
    return (
        <div>
            Main
            {isReview ? (
                <Form
                    setIsReview={setIsReview}
                    setFormData={setFormData}
                    formData={formData}
                />
            ) : (
                <Review setIsReview={setIsReview} setFormData={setFormData} formData={formData} />
            )}
        </div>
    );
}
