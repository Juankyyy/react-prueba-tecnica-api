import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { useCatFact } from "./hooks/useCatFact";

export const App = () => {
    const [fact, setFact] = useState("cheese");
    const { getFact } = useCatFact();

    const changeFact = async () => {
        const newFact = await getFact();
        setFact(newFact)
    }

    useEffect(() => {
        changeFact();
    }, [])

    return (
        <>
            <Navbar />
            <h1>Cat Facts</h1>
            <p>{fact}</p>
            <button onClick={ changeFact }>New fact</button>
        </>
    );
};
