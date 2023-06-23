
import { UseFormRegister, FieldValues } from "react-hook-form";
import { StandaloneSearchBox } from "@react-google-maps/api"
import Input from "./Input";


type SearchBoxProps = {
    onLoad?: (searchBox: google.maps.places.SearchBox) => void;
    onPlacesChanged?: () => void;
    register?: UseFormRegister<FieldValues>;
    name?: string;
}

export default function SearchBox({ onLoad, onPlacesChanged, register, name }: SearchBoxProps) {
    return (
        <StandaloneSearchBox
            onLoad={onLoad}
            onPlacesChanged={onPlacesChanged}>
        <Input register={register} name={name}/>
        </StandaloneSearchBox>
    )
}