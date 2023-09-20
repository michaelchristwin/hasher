import "./App.css";
import { useState } from "react";
import animalHash from "angry-purple-tiger";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [casetype, setCase] = useState("");
  const [name, setName] = useState("");
  const [separator, setSeparator] = useState("");

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
    setCase("");
    setSeparator("");
    setName("");
  };

  return (
    <div
      className={`w-full h-[100vh] flex justify-center items-center bg-[#202124] text-white`}
    >
      <form className="w-[30%] h-[400px] block" onSubmit={handleSubmit}>
        <h1
          className={`text-center text-purple-700 text-[35px] font-extrabold dmsansbold`}
        >
          SPIRIT ANIMALS🐶
        </h1>
        <fieldset className={`space-y-2 w-[350px] block mx-auto`}>
          <input
            id="name"
            value={name}
            onChange={handleNameChange}
            type="text"
            className="h-[50px] w-[350px] ps-3 focus:outline-none rounded-[50px] block mx-auto bg-transparent
           border border-[#474a4e]"
          />
        </fieldset>

        <fieldset
          className={`space-y-2 w-[350px] flex justify-between items-center mx-auto mt-4 `}
        >
          <label htmlFor="seperator" className={`text-start`}>
            Word separator
          </label>
          <select
            name="separator"
            id="separator"
            className={`bg-white text-[15px] px-2 text-center truncate h-[30px] text-black w-[100px] rounded`}
            onChange={handleSepchange}
            value={separator}
          >
            <option value={``} className="truncate">
              Select separator
            </option>
            <option value={` `}>space</option>
            <option value="-">-</option>
            <option value="_">_</option>
            <option value=".">.</option>
          </select>
        </fieldset>
        <fieldset
          className={`space-y-2 w-[350px] flex justify-between items-center mx-auto mt-4 `}
        >
          <label htmlFor="case" className={`text-start`}>
            Case type
          </label>
          <select
            name="case"
            id="case"
            className={`bg-white text-[15px] px-2 truncate h-[30px] text-black w-[100px] rounded`}
            onChange={handleCaseChange}
            value={casetype}
          >
            <option value={``} className="truncate">
              Select case type
            </option>
            <option value="lowercase">Lowercase</option>
            <option value="uppercase">Uppercase</option>
            <option value="titlecase">Titlecase</option>
          </select>
        </fieldset>
        <button
          type="submit"
          className={`rounded-[50px] w-[120px] px-3 h-[40px]  text-purple-600 hover:text-white 
          border border-purple-600 hover:bg-purple-600 mt-6 block mx-auto`}
        >
          Hash
        </button>
        <div className="block mx-auto w-[400px]">
          <div className={`flex space-x-3 mt-6 justify-center`}>
            <p>Your unique hash is:</p>
            <p className={`font-extrabold text-[15px] block text-green-600`}>
              {hash}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
