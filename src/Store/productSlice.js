import { createSlice } from '@reduxjs/toolkit'

const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: 'STATUSES.IDLE'
    },
    reducers: {
        setProduct(state, action) {
            state.data = action.payload;
        },
        setStatusstate(state, action) {
            state.status = action.payload;
        }

    },
});

export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;

export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));

        try {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json();
            dispatch(setProduct(data));

            dispatch(setStatus(STATUSES.IDLE));

        } catch (err) {
            console.log(err)
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}