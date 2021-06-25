import React from "react"

const Giflike = ({ videoSrcURL, videoTitle, ...props }) => {
  let vidRef = React.createRef()
  const playVideo = () => {
    vidRef.current.play()
  }

  const pauseVideo = () => {
    vidRef.current.pause()
  }

  return (
    <div className="giflike">
      <video
        ref={vidRef}
        loop
        onMouseOver={() => playVideo()}
        onMouseOut={() => pauseVideo()}
      >
        <source src={videoSrcURL} type="video/mp4" />
      </video>
    </div>
  )
}

export default Giflike
