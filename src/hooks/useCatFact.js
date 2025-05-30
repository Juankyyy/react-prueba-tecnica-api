import { getRandomFact } from "../services/catService";

export const useCatFact = () => {
    const getFact = async () => {
        try {
            const newFact = await getRandomFact();
            return newFact;
        } catch (err) {
            console.error(err);
        }
    };

    return {
        getFact,
    };
};
