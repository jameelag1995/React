import React from "react";

export default function Review({ setIsReview, formData, setFormData }) {
    const { firstname, lastname, age, freetext } = formData;
    return (
        <div>
            <div>First Name: {firstname}</div>
            <div>Last Name: {lastname}</div>
            <div>Age: {age}</div>
            <div>Text: {freetext}</div>
            <button onClick={() => setIsReview((prev) => !prev)}>Back</button>
            <button
                onClick={() => {
                    setFormData({
                        firstname: "",
                        lastname: "",
                        age: "0-15",
                        freetext: "",
                    });
                    setIsReview((prev) => !prev);
                }}
            >
                Send Survey
            </button>
        </div>
    );
}
