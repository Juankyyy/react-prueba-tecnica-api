import { getFactImage } from "../services/catService";

export const useCatImage = (fact) => {
    const factWord = getFactImage(fact);

    return {
        factWord,
    };
};
