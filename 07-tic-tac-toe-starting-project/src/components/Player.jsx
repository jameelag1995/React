import { useState } from "react";
export default function Player({
    initialName,
    symbol,
    isActive,
    onChangeName,
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }
    function handleChange(e) {
        setPlayerName(e.target.value);
    }

    let EditablePlayerName = <span className="player-name">{playerName}</span>;
    // let btnCaption = "Edit";
    if (isEditing) {
        EditablePlayerName = (
            <input
                id="player-name"
                type="text"
                required
                value={playerName}
                onChange={handleChange}
            />
        );
        // btnCaption = "Save";
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {EditablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    );
}
