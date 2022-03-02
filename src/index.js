const api = "https://api.adviceslip.com/advice";

const idTag = document.getElementById("advice-id");
const adviceTag = document.getElementById("advice");
const button = document.getElementById("button");

const fetchAdvice = async () => {
  try {
    const res = await fetch(api);
    const data = await res.json();
    const { id, advice } = data.slip;
    idTag.innerHTML = id;
    adviceTag.innerHTML = `"${advice}"`;
  } catch (error) {
    console.log(error.message);
  }
};

button.addEventListener("click", fetchAdvice);

fetchAdvice();
