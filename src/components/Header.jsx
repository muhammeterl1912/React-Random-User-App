import React, { useState, useEffect } from "react";
import loadingGif from "../assets/200w.gif";
import AddUser from "./AddUser";
function Header() {
  const [personData, setPersonData] = useState({});
  const [loading, setLoading] = useState(true);
  const [show, setShowData] = useState("");
  const [table, setTable] = useState([]);
  const [renew, setRenew] = useState(null);
  const uniqueTableRow = [...new Set(table)];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const responseData = await response.json();
        const {
          picture: { large },
          name: { first },
          email,
          dob: { age },
          location: { city },
          phone,
          login: { password },
        } = responseData.results[0];
        setPersonData({
          large,
          name: first,
          email,
          age,
          location: city,
          phone,
          password,
        });
        setShowData(`My Name is ${first}`);
        setLoading(false);
      } catch (error) {
        console.error("An Error occurred:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [renew]);

  const styleLoading = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div>
      {loading ? (
        <img src={loadingGif} alt="Loading..." style={styleLoading} />
      ) : (
        <main>
          <div className="block bcg-orange"></div>
          <div className="block">
            <div className="container">
              <img
                src={personData.large}
                alt="random user"
                className="user-img"
              />
              <p className="user-title">
                {show}
                <br />
              </p>
              <p className="user-value"></p>
              <AddUser
                personData={personData}
                setShowData={setShowData}
                setTable={setTable}
                setRenew={setRenew}
              />
              <table className="table">
                <thead>
                  <tr className="head-tr">
                    <th className="th">Firstname</th>
                    <th className="th">Email</th>
                    <th className="th">Phone</th>
                    <th className="th">Age</th>
                  </tr>
                </thead>
                <tbody>
                  {uniqueTableRow.map((row, i) => {
                    return (
                      <tr key={i}>
                        <td>{row.name}</td>
                        <td>{row.email}</td>
                        <td>{row.phone}</td>
                        <td>{row.age}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}></div>
        </main>
      )}
    </div>
  );
}

export default Header;
