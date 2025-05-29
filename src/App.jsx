import { useState } from "react";
import { Navbar } from "./components/Navbar";

export const App = () => {
    const [fact, setFact] = useState("");

    return (
        <>
            <Navbar />
            <h1>Cat Facts</h1>
        </>
    );
};
