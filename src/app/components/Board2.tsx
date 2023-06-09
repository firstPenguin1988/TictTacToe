"use client";

import React, { useState } from "react";
import styles from './Board.module.css';
import Head from "next/head";
import useMouseClickPosition from "./useMouseCoordinates";

const calculateWinner = (tileArr: null[]) => {
    const winCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for(let i=0; i< winCombination.length; i++) {
        const [a,b,c] = winCombination[i];
        if(tileArr[a] && tileArr[a] === tileArr[b] && tileArr[a] === tileArr[c]) {
            return tileArr[a]
        }
    }

    if(tileArr.indexOf(null) === -1) {
        return 'Game-Tied';
    }

    return null;
}

const Board2 = () =>{
    const [nextIsX, setNextIsX] = useState(true);
    const [tileArr, setTileArr] = useState(Array(9).fill(null));
    const [toggleColor, setToggleColor] = useState(false);

    logger("tiles",tileArr);

    const nextTileArr = [...tileArr];

    const handleColorSwitch = () => {
        setToggleColor(prevToggleColor => !prevToggleColor);
    }
    
    const handleClick = (i: number) => {
        const winner = calculateWinner(tileArr);
        if(winner) {
            console.log("winner is: " + winner);
            return;
        }

        if (nextTileArr[i] === null && nextIsX===true) {
            nextTileArr[i] = "X";
            setNextIsX(!nextIsX);
        } else if (nextTileArr[i] === null && nextIsX===false) {
            nextTileArr[i] = "O";
            setNextIsX(!nextIsX);
        }
        setTileArr(nextTileArr);

        /*
        // -----ANIMATION--------
        setScale(0.5);

        setTimeout(() => {
            setScale(1);
        }, 500)
        */
        
        // setAnimation(true);

        // setTimeout(() => {
        //     setAnimation(false);
        // }, 200)

        // setRipple(true);

        // setTimeout(() => {
        //   setRipple(false);
        // }, 300);
        
    }

    const winner = calculateWinner(tileArr);
    console.log('winner: ' + winner);
    
    let result;
    
    if (winner === 'Game-Tied') {
        result = "GAME TIED..."
    } else if (winner === "X" || winner === 'O') {
        result = "Winner: " + winner
    } else {
        result = "Next player: " + (nextIsX ? "X" : "O");
    }

    return (
        <>
            <Head>
                <link 
                    href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@800;900&display=swap" 
                    rel="stylesheet"
                />
            </Head>
            <h1>Tic-Tac-Toe</h1>
            <h3>{result}</h3>

            <div className={styles.board_style}>
                {
                    tileArr.map((item, index) => <Tile onTileClick={() => handleClick(index)} toggleColor={toggleColor} key={index} value={item} />)
                }
            </div>

            <div style={bottomButtonDiv}>
                <button onClick={() => setTileArr(Array(9).fill(null))} style={{...bottomBtnStyle, backgroundColor: toggleColor ? '#C3D5FF' : '#FFBDBD'}}>Reset Game</button>
                <button onClick={handleColorSwitch} style={{...bottomBtnStyle, float: 'right', backgroundColor: toggleColor ? '#FFBDBD' : '#C3D5FF'}}>Switch Color</button>
            </div>
        </>
    )
}

const logger = (title:string,smth:any) =>{
    console.log(`${title}:${smth}`)
}

export default Board2

interface TileProps {
    toggleColor: boolean;
    value: string;
    onTileClick: () => void;
}

const Tile = ({toggleColor, value, onTileClick}: TileProps) =>{  
    const [animation, setAnimation] = useState(false);
    const mousePosition = useMouseClickPosition();
    
    const handleClick = () => {
        onTileClick();
        setAnimation(true);

        setTimeout(() => {
            setAnimation(false);
        }, 300)

        console.log(`mouseX: ${mousePosition.x}  mouseY: ${mousePosition.y}`);
    }
    
    
    
    const rippleKeyframe = `
        @keyframes ripple {
            0% {
                opacity: 1;              
                transform: scale(0)
            }
        
            100% {
                opacity: 0;
                transform: scale(1)
            }
        }
    `;
        

    const styleWithRipple: React.CSSProperties = {
        position: 'absolute',
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        width: '100px',
        height: '100px',
        animation: 'ripple 1s',
        overflow: 'hidden',
        top: mousePosition.y,
        left: mousePosition.x,
    }

    return (
        <div>
            <button 
                //className={ animation ? Styles.btnModuleStyle : "" } 
                //className={`btn ${animation ? 'scaled' : ''}`}
                style={{ 
                    ...btnStyle, 
                    position: 'relative',
                    userSelect: 'none',
                    pointerEvents: ((value==='X' || value==='O') || animation) ? 'none' : 'auto',
                    transform: ((value==='X' || value==='O') && animation) ? 'scale(0.8)' : 'none',
                    color: (toggleColor) ? ((value === 'X') ? '#FF5656' : '#5888FF') : ((value === 'X') ? '#5888FF' : '#FF5656') , 
                    backgroundColor: (toggleColor) ? ( (value === 'X') ? '#FFBDBD' : value === 'O' ? '#C3D5FF' : '#eee' ) : ( (value === 'X') ? '#C3D5FF' : value === 'O' ? '#FFBDBD' : '#eee' ) 
                }} 
                onClick={handleClick}
            >
                {value}
                {
                    animation && <span style={{...styleWithRipple }}/>
                }    
            </button>
        </div>
    )
    //console.log('animation: ' + animation);
    
    /*
    return (
        <>
            {
                animation ? 
                    <button className={Styles.btnModuleStyle} style={{ ...btnStyle, color: (toggleColor) ? ((value === 'X') ? '#FF5656' : '#5888FF') : ((value === 'X') ? '#5888FF' : '#FF5656') , backgroundColor: (toggleColor) ? ( (value === 'X') ? '#FFBDBD' : value === 'O' ? '#C3D5FF' : '#eee' ) : ( (value === 'X') ? '#C3D5FF' : value === 'O' ? '#FFBDBD' : '#eee' ) }} onClick={onTileClick}>{value}</button>
                :   <button style={{ ...btnStyle, color: (toggleColor) ? ((value === 'X') ? '#FF5656' : '#5888FF') : ((value === 'X') ? '#5888FF' : '#FF5656') , backgroundColor: (toggleColor) ? ( (value === 'X') ? '#FFBDBD' : value === 'O' ? '#C3D5FF' : '#eee' ) : ( (value === 'X') ? '#C3D5FF' : value === 'O' ? '#FFBDBD' : '#eee' ) }} onClick={onTileClick}>{value}</button>
            }
        </>
    )
    */
    
}

const btnStyle = {
    border:"none",
    borderRadius:'10px',
    height:'100px',
    width:'100px',
    fontSize: '52px',
    fontWeight: 900,
    transition: 'transform 0.3s' 
}

const bottomButtonDiv = {
    display: 'inline-block',
    width: 300
}

const bottomBtnStyle = {
    width: 140,
    height: 40,
    borderRadius: 10,
    fontWeight: '800',
    fontSize: 16 
}

// const rippleStyle = {
//     position: "absolute",
//     width: 100,
//     height: 100,
//     borderRadius: '50%',
//     background: 'rgba(0, 0, 0, 0.3)',
//     opacity: 0,
//     top: -50,
//     left: -50,
//     animation: 'ripple 1s',
// }

/* ------------------------------Animation---------------------------------------
 
import React, {useState} from 'react';

export function App() {
  const [animation, setAnimation] = useState(false);

  return (
    <div className='App'>
      <button className={`animation`}} onClick={() => setAnimation(true)}>Click Me!!!</button>
    </div>
  );
}

button {
  background-color: lightblue;
  width: 150px;
  height: 70px;
  font-size: 20px;
}

.button {
  animation-name: example;
  animation-duration: 5s;
}

@keyframes example {
  from{transform: scale(0.5);}
  to{transform: scale(1);}
}

----------------------------------------------------------------------------------------------*/



/*
// Custom Hooks Call =>  const {count,incrementor,decrementor} = useCounter()

const useCounter = () =>{
    const [count,setCount] = useState(0)

    const incrementor = () =>{
        setCount(p=>p+1)
    }
    const decrementor = () =>{
        setCount(p=>p-1)
    }

    return {count,incrementor,decrementor} as {count:number;incrementor:()=>void;decrementor:()=>void}
}
*/