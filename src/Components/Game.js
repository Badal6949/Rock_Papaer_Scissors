import { useState } from 'react';
import styles from './Game.module.css'
import { FaHandRock } from "react-icons/fa";
import { FaHandPaper } from "react-icons/fa";
import { FaHandScissors } from "react-icons/fa";

function Game(){
     const [playerChoice,setPlayerChoice] =useState(null)
     const [compChoice, setCompChoice] = useState(null)
     const [playerScore, setPlayerScore] = useState(0)
     const [compScore, setCompScore] = useState(0)

     const gameLogic = (playerChoice,compChoice)=>{
        if(playerChoice===compChoice) return 0;
        else if((playerChoice==="Rock" && compChoice==="Scissors") ||
                (playerChoice==="Scissors" && compChoice==="Paper") ||
                (playerChoice==="Paper" && compChoice==="Rock")) return 1;
            else return -1;

    }

    const gameDecision=(playerChoice)=>{
        const Choice =["Rock","Paper","Scissors"]
        const compChoice = Choice[Math.floor(Math.random() * Choice.length)];
        const val=gameLogic(playerChoice,compChoice)

        setPlayerChoice(playerChoice)
        setCompChoice(compChoice)
        if(val === 1){
            setPlayerScore(playerScore+1)
        }else if(val ===-1){
            setCompScore(compScore+1)
        }
    }

    const resetGame=()=>{
        setPlayerChoice(null)
        setCompChoice(null)
        setPlayerScore(0)
        setCompScore(0)
        
    }
    return(

       
        <div className={styles.container}>
            <h1 className={styles.heading}>
                Welcome to Rock Paper and Secissor
            </h1>
            <div>
                <button className={styles.btn} onClick={()=>gameDecision("Rock")}> <FaHandRock />Rock</button>
                <button className={styles.btn} onClick={()=>gameDecision("Paper")}> <FaHandPaper />Paper</button>
                <button className={styles.btn} onClick={()=>gameDecision("Scissors")}> <FaHandScissors />Secissor</button>
            </div>

            <div className={styles.paragraph}>
                <p>Your Choice: {playerChoice}</p>
                <p>Computer Choice: {compChoice}</p>
                <p>Your Score : {playerScore}</p>
                <p>Computer Score : {compScore}</p>
            </div>

            <div>
                <button className={styles.btn} onClick={resetGame}>Reset</button>
            </div>
        </div>
    );
}
export default Game;