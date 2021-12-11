import React, {useState} from 'react'
import styles from "../styles/Home.module.css";
import Link from 'next/Link'
import axios from 'axios'
export default function Home() {
  const [email, setEmail] = useState({})
  const saveEmail = async (e) =>{
    e.preventDefault()
    const res = await axios.post('/api/user', email)
  }
  return (
    <div className={styles.container}>
    <label>Email</label>
    <input onChange={(e)=>setEmail({email:e.target.value})} type='text' />
    <button onClick={(e)=>saveEmail(e)}>Click</button>
    </div>
  );
}
