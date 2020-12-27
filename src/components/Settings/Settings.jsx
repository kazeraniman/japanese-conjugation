import React from "react";
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel} from "@material-ui/core";
import {selectConjugationSettings, setConjugationSetting} from "../../redux/slices/settingsSlice";
import {ALL_CONJUGATION_SETTINGS, CONJUGATION_SETTINGS_KEY} from "../../utility/constants";
import {useDispatch, useSelector} from "react-redux";

export default function Settings() {
    const conjugationSettings = useSelector(selectConjugationSettings)
    const dispatch = useDispatch()

    function handleConjugationChange(event) {
        localStorage.setItem(CONJUGATION_SETTINGS_KEY + event.target.name, JSON.stringify(event.target.checked));
        dispatch(setConjugationSetting({"key": event.target.name, "value": event.target.checked}));
    }

    return (
        <div className={"settings"}>
            <FormControl component="fieldset">
                <FormGroup>
                <FormLabel component="legend">Conjugations/Transformations</FormLabel>
                    {ALL_CONJUGATION_SETTINGS.map((conjugationName, conjugationIndex) => {
                        return <FormControlLabel
                            key={conjugationIndex}
                            control={<Checkbox checked={conjugationSettings[conjugationName]} onChange={handleConjugationChange} name={conjugationName} />}
                            label={conjugationName}
                        />
                    })}
                </FormGroup>
            </FormControl>
        </div>
    );
}
