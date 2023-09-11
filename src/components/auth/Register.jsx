import React, { useState, useRef, useEffect } from "react";
//framer-motion
import { motion } from "framer-motion";
//router
import { useNavigate } from "react-router-dom";
//styles
import "./scss/register.scss";
//SVG WAVE
import waveSVG from "../../assets/icons/waves/wave1.svg";
//utils
import firstLetterCapitalized from "../../utils/firstLetterCapitalized";
import cleanStateObj from "../../utils/cleanSatateObj";
//services
import userRegister from "../../services/userRegister";

const Register = () => {
  const [infoUser, setInfoUser] = useState({
    name: "",
    lastname: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();
  const refSubmit = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await userRegister(infoUser).then((resp) => {
      if (resp?.status == 201) {
        setInfoUser(cleanStateObj);
        navigate("/auth?type=login");
      }
    });
  };

  const handleChange = (event) => {
    const inputName = event.target.name;

    const inputValue =
      inputName !== "password" && inputName !== "email" //If is different to 'password' and 'email' , apply lower case
        ? event.target.value.toLowerCase()
        : event.target.value; //else not

    const userValues = Object.values(infoUser);

    const verify = userValues.every((value) => value !== "");

    refSubmit.current.disabled = !verify;

    setInfoUser({ ...infoUser, [inputName]: inputValue });
  };

  useEffect(() => {
    refSubmit.current.disabled = true;
  }, []);

  return (
    <form onSubmit={handleSubmit} className="register__main">
      <h2>Registrate</h2>
      <motion.input
        layout
        onChange={handleChange}
        initial={{ opacity: 0, y: -90 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.3, type: "spring" },
        }}
        type="text"
        value={firstLetterCapitalized(infoUser.name)}
        placeholder="Nombre"
        name="name"
        required
      />

      <motion.input
        layout
        initial={{ opacity: 0, y: -80 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.1, type: "spring" },
        }}
        type="text"
        onChange={handleChange}
        value={firstLetterCapitalized(infoUser.lastname)}
        placeholder="Apellido"
        name="lastname"
        required
      />

      <motion.input
        layout
        initial={{ opacity: 0, y: -70 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, type: "spring" },
        }}
        type="password"
        onChange={handleChange}
        value={infoUser.password}
        placeholder="Contraseña"
        name="password"
        required
      />

      <motion.input
        layout
        initial={{ opacity: 0, y: -60 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, type: "spring" },
        }}
        type="email"
        onChange={handleChange}
        value={infoUser.email}
        placeholder="Email"
        name="email"
        required
      />

      <motion.button
        ref={refSubmit}
        layout
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: [0, 0.5, 0.7],
          y: 0,
          transition: { duration: 0.3, type: "spring" },
        }}
        type="submit"
      >
        Registrate
      </motion.button>
      <img className="register__wave" src={waveSVG} alt="wave" />
    </form>
  );
};

export default Register;
