import { useCatImage } from "../hooks/useCatImage";
import "./ImageFact.css";

export const ImageFact = ({ fact }) => {
    const { factWord } = useCatImage(fact);

    return (
        <picture>
            <img src={factWord} alt="Cat image Fact" />
        </picture>
    );
};
