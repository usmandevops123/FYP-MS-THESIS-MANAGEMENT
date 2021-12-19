import React, {useState} from 'react'
import styles from "../styles/Home.module.css";
import Link from 'next/Link'
import axios from 'axios'
import About from './about'
import Header from './component/header';
import Footer from './component/footer';
import Layout from './component/layout';
export default function Home() {
  // const [email, setEmail] = useState({})
  // const saveEmail = async (e) =>{
  //   e.preventDefault()
  //   const res = await axios.post('/api/user', email)
  // }
  return (
    <div >
    {/* <label>Email</label>
    <input onChange={(e)=>setEmail({email:e.target.value})} type='text' />
    <button onClick={(e)=>saveEmail(e)}>Click</button> */}
    {/* <About/> */}
    <Header/>
    <Layout/>
    <Footer/>


    </div>
  );
}
