import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";

import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { use, useEffect, useState } from "react";

// TEMPLATE: only the structure (empty tags + CSS classes).
// TODO (class): fetch the data, then pass it to each component using props.
function App() {
  let[data,setData]=useState(null);
  let[loading,setLoading]= useState(true);
  let[error,seterror]=useState(false);

  useEffect(()=>{
    fetch('/portfolio.json')
    .then((Response)=>{
      if(!Response.ok){
        throw new error("Request failed");
      }
      return Response.json();
    })
    .then((result)=>{
      setData(result);
      setLoading(false);
    }) 
    .catch(()=>{
      setrror(true);
      setLoading(false);
    })
  },[])

  if(loading)return <p className="status">Loading POrtfolio</p>
  if(error) return <p className="status">unable to load portfolio data</p>
  return (
    <>
      <Navbar name ={data.name} />
      <main>
        <Hero  data = {data}/>
        <About data = {data} />
        <Skills data = {data.Skills} />
        <Projects Projects = {data.Projects} />
        <Education  Education = {data.Education}/>

        <Contact  email = {data.email} social = {data.social}/>

      </main>
      <Footer name={data.name} social = {data.social} />
    </>
  );
}

export default App;
