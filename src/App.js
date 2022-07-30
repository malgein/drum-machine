import React, {useState} from 'react'
import {audioClips} from './components/audioClips'
import Pad from './components/Pad'
import './App.css';

const App = () => {

  const [volume, setVolume] = useState(1)
  const [recording, setRecording]= useState("")
  const [speed, setSpeed]= useState(0.5)

  const playRecording= () => {
    let index = 0
    let recordArray = recording.split(" ")
    const interval = setInterval(() =>{
      const audioTag= document.getElementById(recordArray[index])
      audioTag.volume = volume
      audioTag.currentTime=0
      audioTag.play()
      index++
      }, speed * 600)
    setTimeout(()=>{
      clearInterval(interval)
      }, 600 * speed *recordArray.length -1)
      console.log(recording)
    }
  

  return (
    <div className="bg-info min-vh-100 text-white">
      <div className="text-center">
        <h2>Drum machine</h2>
        {audioClips.map(clip => (
          <Pad clip={clip} key={clip.id} volume={volume} setRecording={setRecording} />
        ))}
        <br />
        <h4>Volume</h4>
        <input type="range" step="0.01" value={volume} max="1"
          min="0" className="w-50" onChange={(e) => setVolume(e.target.value)}/>
        <h3>{recording}</h3>
        {recording && (
          <>
            <button onClick={playRecording} className="btn btn-success">play</button>
            <button onClick={() => setRecording("")} className="btn btn-danger">clear</button>
          </>
        )}
        <br/>
        <h4>Speed</h4>
        <input type="range" step="0.01" value={speed} max="1.2"
          min="0.1" className="w-50" onChange={(e) => setSpeed(e.target.value)}/>
      </div>
    </div>
  );
}

export default App;
