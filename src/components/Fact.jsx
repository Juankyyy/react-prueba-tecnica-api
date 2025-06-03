export const Fact = ({ fact, changeFact }) => {
    return (
        <>
            <p data-testid="fact">{fact}</p>
            <button data-testid="factButton" onClick={changeFact}>New fact</button>
        </>
    );
};
