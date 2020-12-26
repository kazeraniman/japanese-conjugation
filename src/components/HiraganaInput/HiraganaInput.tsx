import React from "react";
import PropTypes from 'prop-types';
import {TextField} from "@material-ui/core";
import hiragana from "data/hiragana.json";

const JAPANESE_CHARACTER_REGEX = new RegExp("^[\u3040-\u309f]+$");
const ERROR_TEXT = "Answer must be in Hiragana";


class HiraganaInput extends React.Component<any, any> {
    public static propTypes = {
        onSubmit: PropTypes.func
    }

    constructor(props: any) {
        super(props);

        this.state = {
            convertedText: "",
            isValid: true,
            helperText: ""
        };

        this.textChangeHandler = this.textChangeHandler.bind(this);
        this.submissionHandler = this.submissionHandler.bind(this);
    }


    /**
     * Handle changes to the text and convert them to hiragana where possible.
     *
     * @param event The text change event.  `event.target.value` contains the value of the input after the change.
     */
    textChangeHandler(event: any) {
        let newConvertedText = ""
        let buffer = "";

        for (let i = 0; i < event.target.value.length; i++) {
            let targetChar = event.target.value.charAt(i);

            if (JAPANESE_CHARACTER_REGEX.test(targetChar)) {
                newConvertedText += buffer + targetChar;
                buffer = "";
                continue;
            }

            buffer += targetChar;

            if (buffer in hiragana) {
                // @ts-ignore
                newConvertedText += hiragana[buffer];
                buffer = "";
            }
        }

        newConvertedText += buffer;

        this.setState({
            convertedText: newConvertedText,
            isValid: true,
            helperText: ""
        });
    }

    /**
     * Run validation if the enter key is pressed.  If valid, call the submission method.
     *
     * @param event The key up event.  `event.key` contains the key which was pushed.
     */
    submissionHandler(event: any) {
        if (event.key !== "Enter") {
            return;
        }

        let isValid = JAPANESE_CHARACTER_REGEX.test(this.state.convertedText);
        this.setState({
            isValid: isValid,
            helperText: isValid ? "" : ERROR_TEXT
        });

        if (isValid && this.props.onSubmit) {
            this.props.onSubmit(this.state.convertedText);
        }
    }

    render() {
        return (
            <TextField
                autoFocus
                label="Answer (in Hiragana)"
                helperText={this.state.helperText}
                error={!this.state.isValid}
                value={this.state.convertedText}
                onChange={this.textChangeHandler}
                onKeyUp={this.submissionHandler}
            />
        );
    }
}

export default HiraganaInput;
