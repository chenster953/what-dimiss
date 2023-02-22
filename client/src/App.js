import './App.scss';
import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');
  const [passcode, setPasscode] = useState('');
  const [transcript, setTranscript] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3001/getTranscripts?url=${url}&passcode=${passcode}`
    );
    const data = await response.json();
    setTranscript(data);
  };

  return (
    <div className="App">
      <div className="input">
        <form onSubmit={handleSubmit}>
          <label>
            URL:
            <input
              placeholder="Enter zoom recording URL..."
              type="text"
              className="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>
          <br />
          <label>
            Passcode:
            <input
              placeholder="Enter meeting passcode"
              type="text"
              className="passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Get Transcripts</button>
        </form>
        <br />
      </div>
      <div className="transcript">
        <p className='transcriptText'>{transcript}</p>
      </div>
    </div>
  );
}

export default App;
