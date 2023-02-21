import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [passcode, setPasscode] = useState('');
  const [transcript, setTranscript] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(
      `http://localhost:3001/getTranscripts?url=${encodeURIComponent(
        url
      )}&passcode=${encodeURIComponent(passcode)}`
    )
      .then((response) => response.json())
      .then((data) => setTranscript(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <br />
        <label>
          Passcode:
          <input
            type="text"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Get Transcripts</button>
      </form>
      <br />
      <pre>{transcript}</pre>
    </div>
  );
}

export default App;
