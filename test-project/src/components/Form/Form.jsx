import React from "react";

export default function Form({ setIsReview, setFormData, formData }) {
    function handleSubmit(e) {
        e.preventDefault();
        setIsReview((prev) => !prev);
    }
    function handleInput(e) {
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">First Name: </label>
                <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleInput}
                />
                <label htmlFor="lastname">Last Name: </label>
                <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleInput}
                />
                <label htmlFor="age">Age: </label>
                <select
                    name="age"
                    id="age"
                    value={formData.age}
                    onChange={handleInput}
                >
                    <option value="child">0-15</option>
                    <option value="teenager">16-18</option>
                    <option value="adult">19-25</option>
                    <option value="adult">26-40</option>
                    <option value="adult">40+</option>
                </select>
                <label htmlFor="freetext">
                    Free Text
                </label>
                <textarea
                    name="freetext"
                    id="freetext"
                    cols="30"
                    rows="10"
                    onChange={handleInput}
                    value={formData.freetext}
                ></textarea>
                <input type="submit" value="Continue" />
            </form>
        </div>
    );
}
