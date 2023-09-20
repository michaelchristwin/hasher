import "./App.css";
import { useState } from "react";
import animalHash from "angry-purple-tiger";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [casetype, setCase] = useState("titlecase");
  const [name, setName] = useState("");
  const [separator, setSeparator] = useState(" ");

  // eslint-disable-next-line no-unused-vars
  const [hash, setHash] = useState("");

  const handleCaseChange = (event) => {
    const value = event.target.value;
    setCase(value);
  };

  const handleSepchange = (event) => {
    const value = event.target.value;
    setSeparator(value);
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const digest = name;
    const weibo = animalHash(digest, {
      style: casetype,
      separator: separator,
    });
    setHash(weibo);
    setCase("titlecase");
    setSeparator(" ");
    setName("");
  };

  return (
    <div
      className={`w-full h-[100vh] flex justify-center items-center bg-[#202124] text-white`}
    >
      <form
        className="lg:w-[30%] w-[250px] h-[400px] block"
        onSubmit={handleSubmit}
      >
        <h1
          className={`text-center text-purple-700 lg:text-[35px] text-[28px] font-extrabold dmsansbold`}
        >
          SPIRIT ANIMALS🐶
        </h1>
        <fieldset className={`space-y-2 lg:w-[350px] w-[250px] block mx-auto`}>
          <input
            id="name"
            value={name}
            onChange={handleNameChange}
            type="text"
            className="h-[50px] lg:w-[350px] w-[250px] ps-5 focus:outline-none rounded-[50px] block mx-auto bg-transparent
           border border-[#474a4e]"
          />
        </fieldset>

        <fieldset
          className={`lg:w-[350px] w-[250px] flex justify-center space-x-5 items-center mx-auto mt-4 `}
        >
          <select
            name="separator"
            id="separator"
            className={`bg-[#303134] text-white text-[15px] px-3 text-center truncate h-[30px] w-[100px] rounded`}
            onChange={handleSepchange}
            value={separator}
          >
            <option value={` `}>space</option>
            <option value="-">dash</option>
            <option value="_">underscore</option>
            <option value=".">dot</option>
          </select>
          <select
            name="case"
            id="case"
            className={`bg-[#303134] text-[15px] px-3 truncate h-[30px] text-white w-[100px]  rounded`}
            onChange={handleCaseChange}
            value={casetype}
          >
            <option value="titlecase">Titlecase</option>
            <option value="lowercase">Lowercase</option>
            <option value="uppercase">Uppercase</option>
          </select>
        </fieldset>

        <button
          type="submit"
          className={`rounded-[50px] w-[120px] px-3 h-[40px]  text-purple-600 hover:text-white 
          border border-purple-600 hover:bg-purple-600 mt-6 block mx-auto`}
        >
          Convert
        </button>
        <div className="block mx-auto w-[250px] lg:w-[400px]">
          <div className={`flex space-x-3 mt-6 justify-center`}>
            <p
              className={`font-extrabold italic text-[20px] block text-green-600`}
            >
              {hash}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
