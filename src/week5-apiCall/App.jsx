import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);

  async function getData() {
    // read our JSON
    let response = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=20"
    );
    let quotes = await response.json();
    setData(quotes);
  }

  useEffect(() => {
    getData();
    console.log(data); // de null --> a array cuando se resuelve la promesa asícrona
    //pido la primera quote del array
  }, []);

  return (
    <>
      <div>
        <h1>Simpsons Quotes</h1>
        {data ? (
          <>
            <div key={data[index].quote}>
              <p>{data[index].quote}</p>
              <h4>{data[index].character}</h4>
              <img src={data[index].image} alt={data[index].character}></img>
            </div>
          </>
        ) : (
          <p> Loading...</p>
        )}
      </div>
      <>
      <button onClick={() => setIndex(prevState => prevState - 1) }>Anterior</button>
      <button onClick={() => setIndex(prevState => prevState + 1) }>Siguiente</button>

      </>
    </>
  );
};

export default App;
