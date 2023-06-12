import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
    games: [],
    gamesLoadingStatus: 'idle',
    currentGame: null
}

export const fetchGames = createAsyncThunk(
    'games/fetchGames',
    () => {
        const {request} = useHttp();
        return request("http://localhost:3001/games");
    }
)

const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setCurrentGame: (state, action) => {
            state.currentGame = action.payload;
        }
    },
    extraReducers: (bilder) => {
        bilder
            .addCase(fetchGames.pending, state => {state.gamesLoadingStatus = 'loading'})
            .addCase(fetchGames.fulfilled, (state, action) => {
                state.gamesLoadingStatus = 'idle';
                state.games = action.payload;
            })
            .addCase(fetchGames.rejected, state => {state.gamesLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = gamesSlice;

export const { setCurrentGame } = actions;
export default reducer;