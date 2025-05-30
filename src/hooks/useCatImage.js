import { useEffect, useState } from "react";
import { getFactImage } from "../services/catService";

export const useCatImage = (fact) => {
    const [urlImage, setUrlImage] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadImage = async () => {
            if (!fact) return
            
            try {
                setIsLoading(true)

                const response = await getFactImage(fact)
                setUrlImage(response)
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        loadImage();
    }, [fact]);

    return {
        urlImage,
        isLoading
    };
};
