import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    const styles = {
        container: {
            textAlign: 'center',
            marginTop: '50px',
            fontFamily: 'Arial, sans-serif',
        },
        heading: {
            fontSize: '3rem',
            color: count >= 0 ? '#4CAF50' : '#F44336', // Green for positive, red for negative
            marginBottom: '20px',
        },
        button: {
            padding: '10px 20px',
            margin: '0 10px',
            fontSize: '1rem',
            fontWeight: 'bold',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
        },
        incrementButton: {
            backgroundColor: '#4CAF50',
            color: '#fff',
        },
        decrementButton: {
            backgroundColor: '#F44336',
            color: '#fff',
        },
        hoverEffect: {
            transform: 'scale(1.05)',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>{count}</h1>
            <button
                style={{ ...styles.button, ...styles.incrementButton }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                onClick={increment}
            >
                Increment
            </button>
            <button
                style={{ ...styles.button, ...styles.decrementButton }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                onClick={decrement}
            >
                Decrement
            </button>
        </div>
    );
}

export default Counter;
