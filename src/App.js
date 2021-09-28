import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState(
    "I attribute my success to this: I never gave or took any excuse."
  );
  const [currentAuthor, setCurrentAuthor] = useState("Wayne Gretzky");
  const [color, setColor] = useState("27ae60");
  let [progress, setProgress] = useState(100);
  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  const getQuotes = async () => {
    try {
      await fetch(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
        .then((res) => res.json())
        .then((data) => setQuotes(data.quotes));
    } catch (error) {
      console.log(error.message);
    }
  };

  const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const changeColor = () => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  const getQuote = () => {
    const transitionText = setInterval(() => {
      setProgress((progress -= 10));
      console.log(progress);
      if (progress === 10) {
        clearInterval(transitionText);
        setTimeout(() => {
          setCurrentQuote(getRandomQuote().quote);
          setCurrentAuthor(getRandomQuote().author);
          changeColor();
          setProgress(100);
        }, 500);
      }
      if (progress <= 0) {
        clearInterval(transitionText);
      }
    }, 50);
  };

  // const changeColor = () => {
  //   const updateColor = setInterval(() => {
  //     setProgress((progress -= 10));
  //     console.log(progress);
  //     if (progress === 10) {
  //       clearInterval(updateColor);
  //       setTimeout(() => {
  //         setProgress(100);
  //       }, 500);
  //     }
  //     if (progress <= 0) {
  //       clearInterval(updateColor);
  //     }
  //   }, 100);
  // };

  useEffect(() => {
    getQuotes();
  }, []);

  // console.log(colors[0]);
  return (
    <div className="App" style={{ background: color, transition: "background 1.2s" }}>
      <div className="change-color">
        <button
          className="btn float-end"
          style={{ background: "transparent" }}
          onClick={changeColor}
        >
          <i className="fa fa-refresh" aria-hidden="true" title="Change color"></i>
        </button>
      </div>
      <div id="quote-box">
        <div
          className="quote-text"
          style={{ opacity: progress / 100, color, transition: "opacity 1.2s, color 1.2s" }}
        >
          <i className="fa fa-quote-left"></i>
          <span id="text">{currentQuote}</span>
        </div>
        <div
          className="author-text"
          style={{ opacity: progress / 100, color, transition: "opacity 1.2s, color 1.2s" }}
        >
          <span id="author">- {currentAuthor}</span>
        </div>
        <div className="btns">
          <button
            id="new-quote"
            className="btn"
            style={{ background: color, transition: "background 1.2s" }}
            onClick={getQuote}
          >
            New Quote
          </button>
          <div>
            <a
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${encodeURIComponent(
                currentQuote
              )}" ${currentAuthor}`}
              className="btn"
              id="tweet-quote"
              title="Tweet this quote!"
              target="_top"
              style={{ background: color, transition: "background 1.2s" }}
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(
                currentAuthor
              )}&content=${encodeURIComponent(
                currentQuote
              )}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
              className="btn"
              id="tumblr-quote"
              title="Post this quote on tumblr!"
              target="_blank"
              rel="noreferrer"
              style={{ background: color, transition: "background 1.2s" }}
            >
              <i className="fa fa-tumblr"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer mt-3">
        <span className="text-white">Created by Sabil</span>
      </div>
    </div>
  );
}

export default App;
