import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
    name: "game",
    initialState: {
        score: 0,
        buttonColor: "",
        userChoise: null,
        computerChoise: null,
        match: "",
    },
    reducers: {
        setChoise: (state, action) => {
            state.userChoise = action.payload.choise;
            state.buttonColor = action.payload.color;
        },
        setRandomChoise: (state, action) =>  {
            if(action.payload.includes("rock")){
                state.computerChoise = [action.payload, "rock"]
            }else if(action.payload.includes("paper")){
                state.computerChoise = [action.payload, "paper"]
            }else{
                state.computerChoise = [action.payload, "scissors"]
            }
        },
        isMatch: (state)  => {
            if(state.buttonColor === state.computerChoise[1]){
                state.match = "DRAW"
            }else if((state.buttonColor === "paper") && (state.computerChoise[1] === "rock")){
                state.match = "YOU WON";
                state.score =  state.score + 1;
            }
            else if((state.buttonColor === "paper") && (state.computerChoise[1] === "scissors")){
                state.match = "YOU LOSE";
                state.score =  state.score - 1;
            }
            else if((state.buttonColor === "rock") && (state.computerChoise[1] === "scissors")){
                state.match = "YOU WON";
                state.score =  state.score + 1;
            }
            else if((state.buttonColor === "rock") && (state.computerChoise[1] === "paper")){
                state.match = "YOU LOSE";
                state.score =  state.score - 1;
            }
            else if((state.buttonColor === "scissors") && (state.computerChoise[1] === "paper")){
                state.match = "YOU WON";
                state.score =  state.score + 1;
            }
            else if((state.buttonColor === "scissors") && (state.computerChoise[1] === "rock")){
                state.match = "YOU LOSE";
                state.score =  state.score - 1;
            }
        },
        resetGame: (state) => {
            state.buttonColor = "";
            state.userChoise = null;
            state.computerChoise = null;
            state.match = "";
        }
    }
})

export const { setChoise, setRandomChoise, isMatch, resetGame } = gameSlice.actions;

export default gameSlice.reducer;