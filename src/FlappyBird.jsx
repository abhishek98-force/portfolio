import React, { useEffect, useRef } from 'react';
import "./flappy-bird.css"

const FlappyBird = () => {
  const gameCanvasRef = useRef(null);
  let width = 1000;
  let height = 350;
  let birdX = width / 16;
  let birdY = height / 3;
  let birdHeight = 100
  let birdWidth = 100;
  let context;
  let bird = {
    x : birdX,
    y : birdY,
    width :  birdWidth,
    height : birdHeight
  }
  useEffect(() => {
  
    if(gameCanvasRef.current) {
        gameCanvasRef.current.width = width;
        gameCanvasRef.current.height = height;
        context = gameCanvasRef.current.getContext('2d');
        const img = new Image();
        img.src = "./assets/charizard.png"
        img.onload = () => {
            context.drawImage(img, bird.x, bird.y, bird.width, bird.height);
        }
    }
  },[]);
 
  return (
    <canvas ref={gameCanvasRef} className="gameCanvas">
  =
    </canvas>
  )
}

export default FlappyBird
