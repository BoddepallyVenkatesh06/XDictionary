import React, { useState } from "react";

function DictionaryApp() {
  // Define a dictionary using state
  const [dictionary, setDictionary] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
    // Add more words and meanings as needed
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");

  // Function to handle word search
  const handleSearch = () => {
    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    if (foundWord) {
      setSearchResult(foundWord.meaning);
    } else {
      setSearchResult("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          placeholder="Search for a word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <strong>Definition:</strong>
        <p>{searchResult}</p>
      </div>
    </div>
  );
}

export default DictionaryApp;
