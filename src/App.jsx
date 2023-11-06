import { useState } from "react";
import { persons } from "./constants";
import Item from "./components/item";

const App = () => {
  const [data, setData] = useState(persons);
  const clearAll = () => {
    setData([]);
  };

  console.log(data)

  return (
    <main className="flex items-center justify-center min-h-screen w-screen bg-violet-800">
      <div className="flex flex-col items-center justify-center min-h-[20rem] min-w-[27rem] bg-white rounded-lg m-10">
        <h1 className="mt-[1rem] font-semibold text-xl">BIRTHDAY REMAINDER</h1>
        <ul className="flex flex-col items-center justify-center">
          {data.map((item) => {
            const { id, name, age, imgUrl } = item;
            return (
              <Item
                key={id}
                id={id}
                name={name}
                age={age}
                imgUrl={imgUrl}
                clearAll={clearAll}
              />
            );
          })}
        </ul>
        <button
          className="mb-5 bg-violet-800 text-white flex items-center justify-center w-[18rem] h-[2.5rem] rounded-lg font-bold"
          onClick={clearAll}
        >
          Clear all
        </button>
      </div>
    </main>
  );
};

export default App;
