const URL_FACT = "https://catfact.ninja/fact";

export const getRandomFact = async () => {
    const response = await fetch(URL_FACT);
    const data = await response.json();
    const { fact } = data;
    return fact;
};

export const getFactImage = async (fact) => {
    const threeWordsFact = fact.split(" ", 3).join(" ");
    const urlImage = `https://cataas.com/cat/says/${threeWordsFact}?json=true`;

    const response = await fetch(urlImage);
    const data = await response.json();
    const { url } = data;

    return url;
};

export const catService = {
    getRandomFact,
    getFactImage,
};
