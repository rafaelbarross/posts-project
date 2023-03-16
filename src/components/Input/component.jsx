import { Input } from "./style";

export const InputText = ({ searchValue, HandleChange }) => {
    return (
        <Input
            type="search"
            placeholder="Search the site…"
            value={searchValue}
            onChange={HandleChange}
        />
    );
}