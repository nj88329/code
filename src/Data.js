import { useState } from "react";

export default function Data() {
  let [data, setData] = useState([]);
  let [clicked, setClick] = useState(false);
  let [showFilter, setshow] = useState(false);
  let [text, setText] = useState("");

  let [filtereddata, setFilteredData] = useState([]);

  async function FetchData() {
    let datas = await fetch("https://jsonplaceholder.typicode.com/posts");
    let response = await datas.json();
    setData(response);
    console.log(data);
    setClick(!clicked);
  }

  function FilterData(tex) {
    setText(tex);
    setshow(!showFilter);
    let newData = data.filter((item) => {
      return item.title.includes(text);
    });
    setFilteredData(newData);
  }

  return (
    <>
      <button style={{ backgroundColor: "green" }} onClick={FetchData}>
        Fetch ALL Data
      </button>
      <input
        type={text}
        // value={text}
        onChange={(e) => FilterData(e.target.value)}
      ></input>
      {/* <button onClick={FilterData}>FilterData<button> */}
      {clicked ? <></> : ""}
      <div>
        {!showFilter ? (
          <>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col"> DATA AVAILABLE</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  {
                    <tbody>
                      {data.map((item, ind) => {
                        return (
                          <tr>
                            <th scope="row">{item.id}</th>
                            <td>{item.userID}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  }
                </tr>
              </tbody>
            </table>
          </>
        ) : (
          <>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col"> DATA AVAILABLE</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  {
                    <tbody>
                      {filtereddata.map((item, ind) => {
                        return (
                          <tr>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  }
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
}
