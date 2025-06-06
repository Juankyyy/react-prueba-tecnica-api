import { useEffect } from "react";
import { useCatFact } from "./hooks/useCatFact";
import { Navbar } from "./components/Navbar";
import { Fact } from "./components/Fact";
import { ImageFact } from "./components/ImageFact";

export const App = () => {
    const { fact, changeFact } = useCatFact();

    useEffect(() => {
        changeFact();
    }, []);

    return (
        <main>
            <Navbar />
            <h1 data-testid="title" >Cat Facts</h1>
            <Fact fact={fact} changeFact={changeFact} />
            <ImageFact fact={fact} />
        </main>
    );
};
