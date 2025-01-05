// Timer.js

import React, {
    useState,
    useEffect
} from "react";
import "./Timer.css";

const Timer = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editHours, setEditHours] = useState(0);
    const [editMinutes, setEditMinutes] = useState(0);
    const [editSeconds, setEditSeconds] = useState(0);

    useEffect(() => {
        let interval = null;
        if (isActive && (hours > 0 ||
            minutes > 0 || seconds > 0)) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        if (hours === 0) {
                            clearInterval(interval);
                            setIsActive(false);
                        } else {
                            setHours(hours - 1);
                            setMinutes(59);
                            setSeconds(59);
                        }
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, hours, minutes, seconds]);

    const toggleTimer = () => {
        setIsActive(!isActive);
        // Exit editing mode when starting the timer
        setIsEditing(false);
    };

    const resetTimer = () => {
        if (!isEditing) {
            setHours(editHours);
            setMinutes(editMinutes);
            setSeconds(editSeconds);
            setIsActive(!isActive);
        }
        setIsActive(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "hours") {
            setEditHours(parseInt(value));
        } else if (name === "minutes") {
            setEditMinutes(parseInt(value));
        } else if (name === "seconds") {
            setEditSeconds(parseInt(value));
        }
    };

    const toggleEdit = () => {
        if (isEditing) {
            setHours(editHours);
            setMinutes(editMinutes);
            setSeconds(editSeconds);
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className="timer-container">
            {
                isEditing ? (
                    <div className="editing-container">
                        <div className="input-group">
                            <label>HH:</label>
                            <input
                                type="number"
                                name="hours"
                                value={editHours}
                                onChange={handleInputChange}
                                min="0"
                            />
                        </div>
                        <div className="input-group">
                            <label>MM:</label>
                            <input
                                type="number"
                                name="minutes"
                                value={editMinutes}
                                onChange={handleInputChange}
                                min="0"
                                max="59"
                            />
                        </div>
                        <div className="input-group">
                            <label>SS:</label>
                            <input
                                type="number"
                                name="seconds"
                                value={editSeconds}
                                onChange={handleInputChange}
                                min="0"
                                max="59"
                            />
                        </div>
                        <button className="start-btn"
                            onClick={toggleEdit}>
                            Start Timer
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="timer-display">
                            <span>
                                {
                                    hours.toString()
                                        .padStart(2, "0")
                                }:
                            </span>
                            <span>
                                {
                                    minutes.toString()
                                        .padStart(2, "0")
                                }:
                            </span>
                            <span>
                                {
                                    seconds.toString()
                                        .padStart(2, "0")
                                }
                            </span>
                        </div>
                        <div className="timer-controls">
                            <button onClick={toggleTimer}>
                                {
                                    isActive ?
                                        "Pause" :
                                        "Start"
                                }
                            </button>
                            <button onClick={resetTimer}>
                                Reset
                            </button>
                            <button onClick={toggleEdit}>
                                Edit
                            </button>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default Timer;