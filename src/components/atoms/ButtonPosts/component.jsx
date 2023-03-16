import { Component } from "react";
import { Button } from "./style";

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