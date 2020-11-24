import React, {useEffect} from "react";
import axios from "axios";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import PhonesContainer from "../components/PhonesContainer";

export default function Phones() {
  function myApiCall() {
    // Make a request for a user with a given ID
    axios
      ({
        method: "get",
        url: "https://asos2.p.rapidapi.com/categories/list",
        headers: {
          "x-rapidapi-host": "asos2.p.rapidapi.com",
          "x-rapidapi-key":
            "6f69806a07msh9abefc9d4cdce47p14c73ejsn9b89c006649f",
          useQueryString: true,
        },
      })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    //   .then(function () {
    //     // always executed
    //   });
  }

  //   console.log(localStorage.getItem("email"));

  useEffect(() => {
    myApiCall();
  }, []);

  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our store">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <PhonesContainer />
    </>
  );
}
