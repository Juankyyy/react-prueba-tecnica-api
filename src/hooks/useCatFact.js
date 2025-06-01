import { useState } from "react";
import { getRandomFact } from "../services/catService";

export const useCatFact = () => {
    const [fact, setFact] = useState();

    const getFact = async () => {
        try {
            const newFact = await getRandomFact();
            return newFact
        } catch (err) {
            console.error(err);
        }
    };

    const changeFact = async () => {
        const newFact = await getFact();
        setFact(newFact);
    };

    return {
        fact,
        changeFact
    };
};
