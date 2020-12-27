import {createSlice} from "@reduxjs/toolkit";
import {ALL_CONJUGATION_SETTINGS, CONJUGATION_SETTINGS_KEY} from "../../utility/constants";

export const settingsSlice = createSlice({
    name: "settings",
    initialState: {
        conjugations: ALL_CONJUGATION_SETTINGS.reduce((o, key) => ({...o, [key]: JSON.parse(localStorage.getItem(CONJUGATION_SETTINGS_KEY + key) ?? "true")}), {})
    },
    reducers: {
        setConjugationSetting: (state, action) => {
            state.conjugations[action.payload.key] = action.payload.value;
        }
    }
});

export const { setConjugationSetting } = settingsSlice.actions;

export const selectConjugationSettings = state => state.settings.conjugations;

export default settingsSlice.reducer;

