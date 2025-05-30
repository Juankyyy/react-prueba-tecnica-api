export const Fact = ({ fact, changeFact }) => {
    return (
        <>
            <p>{fact}</p>
            <button onClick={changeFact}>New fact</button>
        </>
    );
};
