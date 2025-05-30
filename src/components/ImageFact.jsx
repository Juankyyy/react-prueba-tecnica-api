import { useCatImage } from "../hooks/useCatImage";
import "./ImageFact.css";

export const ImageFact = ({ fact }) => {
    const { urlImage, isLoading } = useCatImage(fact);

    return (
        <picture>
            {isLoading ? (
                "Loading..."
            ) : (
                <img src={urlImage} alt="Cat image Fact: " />
            )}
        </picture>
    );
};
