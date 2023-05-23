"use client";

import React, { useState } from "react";
import './Board.css'
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
    //const [animation, setAnimation] = useState(false);
    //const [ripple, setRipple] = useState(false);

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

            <div className={'board_style'}>
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
    //scale: number;
    //ripple: boolean;
    //animation: boolean;
    toggleColor: boolean;
    value: string;
    onTileClick: () => void;
}

const Tile = ({toggleColor, value, onTileClick}: TileProps) =>{  
    const [animation, setAnimation] = useState(false);
    //const { mousePosition, handleMouseClick } = useMouseClickPosition();
    //const { clientX, clientY } = useMousePosition();
    const mousePosition = useMouseClickPosition();
    
    const handleClick = () => {
        console.log(`X: ${mousePosition.clientX}, Y:${mousePosition.clientY}`)
        onTileClick();
        setAnimation(true);

        setTimeout(() => {
            setAnimation(false);
        }, 300)
    }
    //console.log(`left: ${bounding.left}, top: ${bounding.top}, width: ${bounding.width}, height: ${bounding.height}`);
    
    
    const rippleKeyframe = `
        @keyframes ripple {
            0% {
                opacity: 1;
                transform: translate(0, 0);
                transform: scale(0)
            }
        
            100% {
                opacity: 0;
                transform: translate(20, 20);
                transform: scale(1)
            }
        }
    `;
        
    /*
    const rippleKeyframe = `
        @keyframes ripple {
            from {
                opacity: 1;
                transform: scale(0);
            }
        
            to {
                opacity: 0;
                transform: scale(1);
            }
        }
    `;
    */

    const styleWithRipple: React.CSSProperties = {
        position: 'absolute',
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        width: 100,
        height: 100,
        // top: -1,
        // left: -1,
        animation: 'ripple 1s',
        opacity: 1,


        // width:20,
        // height:20,
        top: mousePosition.clientY,
        left: mousePosition.clientX,
        // transform: animation ? 'scale(1)' : 'scale(0)',
        // opacity: animation ? 1 : 0,
        // transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
        //top: mousePosition.clientY - 50, // Adjust the values according to your needs
        //left: mousePosition.clientX - 50, // Adjust the values according to your needs
    }

    return (
        <div>
            <button 
                //className={ animation ? Styles.btnModuleStyle : "" } 
                //className={`btn ${animation ? 'scaled' : ''}`}
                style={{ 
                    ...btnStyle, 
                    //transition: 'scale 0.5s ease-in-out',
                    //scale: `scale(${scale})`,
                    position: 'relative',
                    pointerEvents: ((value==='X' || value==='O') || animation) ? 'none' : 'auto',
                    transform: ((value==='X' || value==='O') && animation) ? 'scale(0.8)' : 'none',
                    color: (toggleColor) ? ((value === 'X') ? '#FF5656' : '#5888FF') : ((value === 'X') ? '#5888FF' : '#FF5656') , 
                    backgroundColor: (toggleColor) ? ( (value === 'X') ? '#FFBDBD' : value === 'O' ? '#C3D5FF' : '#eee' ) : ( (value === 'X') ? '#C3D5FF' : value === 'O' ? '#FFBDBD' : '#eee' ) 
                }} 
                onClick={handleClick}
            >
                {value}
                {
                    animation && <span style={styleWithRipple} /> //className={'ripple_style'} />
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

//false  color: (value === 'X') ? '#5888FF' : '#FF5656', backgroundColor: (value === 'X') ? '#C3D5FF' : value === 'O' ? '#FFBDBD' : '#eee'
//true   color: (value === 'X') ? '#FF5656' : '#5888FF', backgroundColor: (value === 'X') ? '#FFBDBD' : value === 'O' ? '#C3D5FF' : '#eee'

const btnStyle = {
    border:"none",
    borderRadius:'10px',
    height:'100px',
    width:'100px',
    fontSize: '50px',
    fontWeight: '800',
    fontFamily: 'Roboto Slab',
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