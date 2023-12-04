import React from "react";
import "./Notepad.css";
import Note from "./Note";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export default function Notepad() {
    const noteRef = useRef();
    const [notesData, setNotesData] = useState([]);
    const handleClick = (e) => {
        if (noteRef.current.value === "") {
            alert("Please enter a valid note");
            return;
        }
        setNotesData([...notesData, noteRef.current.value]);
        noteRef.current.value = "";
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleClick(e);
        }
    };

    useEffect(() => {
        // Load notes from local storage when the component mounts
        const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        setNotesData(storedNotes);
        noteRef.current.focus();
    }, []);
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notesData));
    }, [notesData]);
    return (
        <div className="Notepad">
            <h1>Notes</h1>
            <div className="add-note-container">
                <label htmlFor="note-input"></label>
                <input
                    type="text"
                    name="note-input"
                    id="note-input"
                    ref={noteRef}
                    onKeyUp={handleKeyPress}
                />
                <button className="add-note-btn" onClick={handleClick}>
                    Add Note
                </button>
            </div>
            {notesData.map((note, index) => {
                return (
                    <Note
                        key={index}
                        index={index}
                        noteContent={note}
                        handleData={setNotesData}
                        data={notesData}
                    />
                );
            })}
        </div>
    );
}
