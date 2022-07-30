import React,{useState, useEffect} from 'react'
import { audioClips } from './audioClips'

const Pad = ({clip, volume, setRecording}) =>{

  const [active, setActive] = useState(false)

  useEffect(() =>{
    document.addEventListener("keydown", handleKeyPress)
    return()=>{
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [])

  const handleKeyPress = e =>{
    if(e.keyCode===clip.keyCode){
      return playSound()
    }
  }

  const playSound = () =>{
    const audioTag= document.getElementById(clip.keyTrigger)
    setActive(true)
    setTimeout(()=> setActive(false), 200)
    audioTag.volume = volume
    audioTag.currentTime=0
    audioTag.play()
    setRecording(prev => prev + clip.keyTrigger + " ")
  }

  return(
    <div className={`btn btn-secondary p-4 m-3 ${active && 'btn-warning'}`} onClick={playSound}>
      <audio id={clip.keyTrigger} src={clip.url} className="clip"/> 
      {clip.keyTrigger}
    </div>
  )
}

export default Pad