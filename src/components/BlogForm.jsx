import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const BlogForm = () => {
 var [inputs,setInputs] =useState({
ename:"",
edes:"",
eauth:""
 })
 const inputHandler =(e) =>{
  const {name,value }= e.target
  setInputs((prevData) =>({...prevData,[name]:value}))
  console.log(inputs)
 }
 const addHandler =() => {
  axios.post("https://jsonplaceholder.typicode.com/posts")
  .then((response) =>{
    alert(response.data)
  })
  .catch((err)=> console.log(err))
 }
  return (
    <div style={{paddingTop:"80px"}}>
      <Typography variant='h4' color={'green'}>BLOG FORM</Typography><br />
      <TextField label='Blog Name'variant='outlined' name='ename' onChange={inputHandler}/><br /><br />
      <TextField label='Description'variant='outlined'name ='edes' onChange={inputHandler}/><br /><br />
      <TextField label='Auther Name'variant='outlined' namne='eauth'onChange={inputHandler}/><br /><br />
      <Button variant='contained' color='primary' onClick={addHandler}>ADD</Button>
    </div>
  )
}

export default BlogForm
