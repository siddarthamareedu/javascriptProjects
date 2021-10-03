//Promises and Async Await
const jokes = document.querySelector("#jokes");
const jokeBtn = document.querySelector("#jokeBtn");

//Using Promises
/* const generateJokes = () => {
  const setHeader = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com", setHeader)
    .then((res) => res.json())
    .then((data) => {
      jokes.innerHTML = data.joke;
    }).catch((error) => {
      console.log(error);
    })
}; */

//Using Async Await
const generateJokes = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json",
      },
    };

    const res = await fetch("https://icanhazdadjoke.com", setHeader);
    const data = await res.json();
    jokes.innerHTML = data.joke;
  } catch (err) {
    console.log(`The error is ${err}`);
  }
};

jokeBtn.addEventListener("click", generateJokes);
generateJokes();

//Using Async await
