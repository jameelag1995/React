import { IoCheckmarkSharp } from "react-icons/io5";
import { AiOutlineMinus } from "react-icons/ai";
export default function Note({ index, noteContent, handleData, data }) {
    const handleNoteDelete = (noteIndex) => {
        const updatedNotes = [...data];
        updatedNotes.splice(noteIndex, 1);
        handleData(updatedNotes);
    };
    return (
        <div className="noteContainer">
            <div className="Note">
                <input type="checkbox" name="note-check" id="note-check" />
                <p className="note-content">{noteContent}</p>
                <IoCheckmarkSharp className="checked-icon" />
                <AiOutlineMinus className="unchecked-icon" />
                <button
                    className="delete-note-btn"
                    onClick={() => handleNoteDelete(index)}
                >
                    delete
                </button>
            </div>
        </div>
    );
}
