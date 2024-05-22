import { createSlice } from "@reduxjs/toolkit/react";
import { Category } from "../domain/model";
import { RootState } from "../../../app/store";
import { i } from "vitest/dist/reporters-LqC_WI4d.js";

const category : Category = {
    id: 1,
    name: 'Electronics',
    description: 'Electronic Items',
    is_active: true,
    created_at: '2021-01-01T00:00:00',
    updated_at: '2021-01-01T00:00:00',
    deleted_at: null,
};


export const initialState = 
    [
        category,
        { ...category, id: 2, name: 'Books', description: 'Books', is_active: true},
        { ...category, id: 3, name: 'Movies', description: 'Movies', is_active: false},
    ];


export const categoriesSlice = createSlice({
    name: 'categories',
    initialState : initialState,
    reducers: {
        fetchCategories(state) {
            // state.loading = true;
        },
        fetchCategoriesSuccess(state, action) {
            // state.loading = false;
            // state.categories = action.payload;
        },
        fetchCategoriesFailure(state, action) {
            // state.loading = false;
            // state.error = action.payload;
        },
    },
});

export const selectCategories = (state : RootState) => state.categories;
export const selectCategoryById = (state : RootState, id : number) => {
    const category = state.categories.find((category) => category.id === id);
    return category || {
        id: 0,
        name: '',
        description: '',
        is_active: false,
        created_at: '',
        updated_at: '',
        deleted_at: '',
    };
}


export default categoriesSlice.reducer;