import {createSlice} from '@reduxjs/toolkit';
import catsArr from '../data/catcatalog.json';

export const catsSlice = createSlice({
    name: 'cats',
    initialState : {
        cats: catsArr
    },
    reducers : {

    }
})


// export const {} = catsSlice.actions;
export const selecCats = state =>state.cats.cats;
export default catsSlice.reducer;