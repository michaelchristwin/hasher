import "./App.css";
import { useState } from "react";
import animalHash from "angry-purple-tiger";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [option, selectoption] = useState("");
  const [name, setName] = useState("");
  const [favCrypto, setFavCrypto] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [hash, setHash] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    selectoption(value);
  };
  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const handleCryptoChange = (event) => {
    const value = event.target.value;
    setFavCrypto(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const digest = option + name + favCrypto;
    const weibo = animalHash(digest);
    setHash(weibo);
    selectoption("");
    setFavCrypto("");
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
          HASHER
        </h1>
        <fieldset className={`space-y-2 w-[350px] block mx-auto`}>
          <label className={``} htmlFor="name">
            What is your name?
          </label>
          <input
            id="name"
            value={name}
            onChange={handleNameChange}
            type="text"
            className="h-[50px] w-[350px] ps-3 focus:outline-none rounded-[50px] block mx-auto bg-transparent
           border border-[#474a4e]"
          />
        </fieldset>
        <fieldset className={`space-y-2 w-[350px] block mx-auto mt-4`}>
          <label className={``} htmlFor="name">
            What is your favorite cryptocurrency?
          </label>
          <input
            id="name"
            type="text"
            value={favCrypto}
            onChange={handleCryptoChange}
            className="h-[50px] w-[350px] ps-3 focus:outline-none rounded-[50px] block mx-auto bg-transparent
           border border-[#474a4e]"
          />
        </fieldset>
        <fieldset
          className={`space-y-2 w-[350px] block mx-auto mt-4 space-x-6`}
        >
          <label htmlFor="gender" className={`text-start`}>
            What is your gender?
          </label>
          <select
            name="gender"
            id="gender"
            className={`bg-white text-[15px] px-2 truncate h-[30px] text-black w-[100px] rounded`}
            onChange={handleChange}
            value={option}
          >
            <option value={``} className="truncate">
              Select your gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
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
