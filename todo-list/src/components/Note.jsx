import { IoCheckmarkSharp } from "react-icons/io5";
import { AiOutlineMinus } from "react-icons/ai";
export default function Note({ index, noteContent,isDone, handleData, data,handleChangeNote }) {
    const handleNoteDelete = (noteIndex) => {
        const updatedNotes = [...data];
        updatedNotes.splice(noteIndex, 1);
        handleData(updatedNotes);
    };
    
    return (
        <div className="noteContainer">
            <div className="Note">
                <input type="checkbox" name="note-check" id="note-check" checked={isDone} onChange={()=>handleChangeNote(index)}/>
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
