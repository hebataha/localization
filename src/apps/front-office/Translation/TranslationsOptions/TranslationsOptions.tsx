import { useState } from "react";

export type TranslationsOptionsProps = {
  children: React.ReactNode;
};
export default function TranslationsOptions() {
  const [appear, setApear] = useState(false);
  const [appearLang, setApearLang] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  function selectValue(e) {
    // setApear((prevstate) => !prevstate);
    console.log(e.target.value);
    if (e.target.value === "erp") {
      setApear(true);
    } else {
      setApear(true);
    }
  }

  function valueLanguage(e) {
    if (e.target.value === "ar") {
      setApearLang(true);
      console.log(e.target.value);
    } else {
      setApearLang(true);
    }
  }

  function getValue(e) {
    setValue(e.target.value);
  }

  function addText() {
    setData([...data, { value, ...data, id: Math.random() }]);
    console.log(data);
  }
  function preventSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <div>
        <form onSubmit={(e) => preventSubmit(e)}>
          <p> select Your System</p>
          <select onChange={(e) => selectValue(e)}>
            <option value="select">select value</option>
            <option value="erp">ERP</option>
            <option value="cms">CMS</option>
          </select>

          {appear && (
            <>
              <p>select Your Language</p>
              <select onChange={(e) => valueLanguage(e)}>
                <option value="select">select Language</option>
                <option value="ar">AR</option>
                <option value="en">EN</option>
              </select>
            </>
          )}
          {/* {appear && (
          <>
            <p>select Our System</p>
            <select>
              <option value="ara">main</option>
              <option value="en">max</option>
            </select>
          </>
        )} */}
          {appearLang && (
            <>
              <p>write Your Words</p>
              <input type="text" onChange={getValue} />
              <button onClick={addText}>Add</button>
              <h1>
                {data.map((allData, id) => (
                  <div key={id}>
                    <div>{allData.value}</div>
                  </div>
                ))}
              </h1>
            </>
          )}
        </form>
      </div>
    </>
  );
}
