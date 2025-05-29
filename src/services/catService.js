const URL_FACT = "https://catfact.ninja/fact";

export const getRandomFact = async () => {
    const response = await fetch(URL_FACT);
    const data = await response.json();
    const { fact } = data;
    return fact;
};

export const catService = {
    getRandomFact
}