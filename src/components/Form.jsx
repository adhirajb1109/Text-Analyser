import React from "react";
import wordsCounter from "word-counting";
const Form = () => {
  return (
    <div className="container mb-5">
      <form className="mb-5">
        <div class="mb-3">
          <label for="text" class="form-label">
            <h4>Enter Text :</h4>
          </label>
          <textarea
            type="text"
            class="form-control"
            id="text"
            aria-describedby="text"
            rows="5"
          />
        </div>
        <button
          class="btn btn-primary"
          onClick={(event) => {
            event.preventDefault();
            let text = document.getElementById("text").value;
            let length = text.length;
            let words = wordsCounter(text).wordsCount;
            let avgwords = (length / words).toFixed(2);
            document.getElementById("characters").innerHTML =
              "Characters : " + length;
            document.getElementById("charactersperword").innerHTML =
              "Average Characters Per Word : " + avgwords;
            document.getElementById("words").innerHTML = "Words : " + words;
          }}
        >
          Calculate
        </button>
      </form>
      <h4 id="characters"></h4>
      <h4 id="charactersperword"></h4>
      <h4 id="words"></h4>
    </div>
  );
};

export default Form;
