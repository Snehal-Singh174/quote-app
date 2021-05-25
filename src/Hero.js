import React, {useState, useEffect, useRef } from 'react'

export default function Hero({handleLogout}) {
    const [quotes,setQuotes] = useState("");
    const textRef = useRef();
    // eslint-disable-next-line
    let colors_ref = ["#ffff00", "#90ee90", "#ff68ff", "#ffa500", "#a9a9e7"];

    const getQuotes = () => {
        fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then(data => {
            let randomNum = Math.floor(Math.random() * data.length);
            setQuotes(data[randomNum]);
        })
    };
    useEffect(() => {
        getQuotes();
    },[])

    useEffect(() => {
        // eslint-disable-next-line
        textRef.current.style.color = colors_ref[Math.floor(Math.random() * colors_ref.length)]
    },[quotes])
    return (
        <section className="hero">
            <nav>
                <h2>
                    Random Quote App 
                </h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <center>
            <div className="quote">
                <p ref={textRef}>{quotes.text}</p>
                <p>Author: {quotes.author}</p>
                <div className="btnContainer">
                <button onClick={getQuotes} className="btn">Get Quote</button>
                <a href={`https://twitter.com/intent/tweet?text=${quotes.text}`} target="_blank" rel="noopener noreferrer" className="btn"> Tweet</a>
                </div>
                
            </div>
            </center>
        </section>
    )
}
