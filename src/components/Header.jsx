import React, { useState, useEffect } from "react";
import loadingGif from "../assets/200w.gif";
import AddUser from "./AddUser";

function Header() {
  const [personData, setPersonData] = useState({});
  const [selectedPerson, setselectedPerson] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(selectedPerson);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const responseData = await response.json();
        const {
          picture: { large },
          name: { first, last },
          email,
          dob: { age },
          location: { city, country, postcode },
          phone,
          login: { password },
        } = responseData.results[0];
        setPersonData({
          large: large,
          name: first,
          last: last,
          email: email,
          age: age,
          location: [city, country, postcode],
          phone: phone,
          password,
          password,
        });
        setLoading(false);
      } catch (error) {
        console.error("An Error occured:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
                src={personData?.large}
                alt="random user"
                className="user-img"
              />
              <p className="user-title">
                {`${personData.name} ${personData.last}`} <br />
              </p>
              <p className="user-value"></p>

              <AddUser
                personData={personData}
                setselectedPerson={setselectedPerson}
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
                  <tr className="body-tr">
                    <td>{personData.name}</td>
                    <td>{personData.email}</td>
                    <td>{personData.phone}</td>
                    <td>{personData.age}</td>
                  </tr>
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
