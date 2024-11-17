import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Typography from "../Typography";
import { useDispatch, useSelector } from "react-redux";
import { navbarheight } from "@/store/action/navbar";
import Loading from "../Loading";
import { setLoading } from "@/store/action/loading";

const Navbar = () => {
  const router = useRouter();
  const navToHome = () => {
    router.push("/home");
  };
  const navToServices = () => {
    router.push("/services");
  };
  const navToContactus = () => {
    router.push("/contact-us");
  };
  const loading = useSelector((state) => state.loadingReducer.isLoading);
  const [contactList, setContactList] = useState();
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const dispatch = useDispatch();

   useEffect(() => {
     fetchcontactlist();
   }, []);

  const fetchcontactlist = async () => {
    try {
      dispatch(setLoading(true));

      const response = await fetch(
        "https://36e4-2600-8803-950d-fd00-9552-5913-641-c939.ngrok-free.app/api/user/list"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      setContactList(data);
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
    }
  };
 
  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.clientHeight);
      }
    };

    updateNavbarHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateNavbarHeight();
    });

    if (navbarRef.current) {
      resizeObserver.observe(navbarRef.current);
    }

    return () => {
      if (navbarRef.current) {
        resizeObserver.unobserve(navbarRef.current);
      }
    };
  }, []);
  useEffect(() => {
    dispatch(navbarheight(navbarHeight));
  }, [navbarHeight]);
  return (
    <div ref={navbarRef}>
      <div
        style={{
          padding: 24,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          gap: 16,
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            color: "#2E8B57",
            fontSize: "18px",
            fontWeight: 600,
            fontFamily: "sans-serif",
          }}
        >
          Green branch(logo)
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 24 }}>
          {/* <Typography style={{ color: "#2E8B57" }} variant="heading14">
            {contactList && contactList?.length > 0
              ? contactList[0]?.username
              : ""}
          </Typography> */}
          {/* <Typography style={{ color: "#2E8B57" }} variant="heading14">
            24-hr service
          </Typography> */}
          <Typography style={{ color: "#5c4033" }} variant="heading14">
            {contactList && contactList?.length > 0
              ? contactList[0]?.email
              : ""}
          </Typography>
          <Typography style={{ color: "#5c4033" }} variant="heading14">
            {contactList && contactList?.length > 0
              ? contactList[0]?.contact_number
              : ""}
          </Typography>
        </div>
      </div>
      {loading && (
        <div className="Overlay">
          <Loading />
        </div>
      )}
      <nav className="navbar">
        <a onClick={navToHome} className="navbarText">
          Home
        </a>
        <a onClick={navToServices} className="navbarText">
          Services
        </a>
        <a onClick={navToContactus} className="navbarText">
          Contact Us
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
