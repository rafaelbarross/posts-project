import { Component } from "react";
import { Button } from "../../../global/globalStyle";

export class ButtonLoad extends Component {
    render() {
        const { text, onClick, disabled } = this.props;
        return (
            <Button
            onClick={onClick}
                disabled={disabled}
            >
                {text}
            </Button>
        );
    }
}