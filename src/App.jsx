import { useEffect, useState } from "react";
import { useCatFact } from "./hooks/useCatFact";
import { Navbar } from "./components/Navbar";
import { Fact } from "./components/Fact";
import { ImageFact } from "./components/ImageFact";

export const App = () => {
    const [fact, setFact] = useState();
    const { getFact } = useCatFact();

    const changeFact = async () => {
        const newFact = await getFact();
        setFact(newFact);
    };

    useEffect(() => {
        changeFact();
    }, []);

    return (
        <>
            <Navbar />
            <h1>Cat Facts</h1>
            <Fact fact={fact} changeFact={changeFact} />
            <ImageFact fact={fact} />
        </>
    );
};
