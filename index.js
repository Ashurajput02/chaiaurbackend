//console.log("hey babe welcome to the world of ashbabe");
//comments are not allowed in json file
//you need express taki tum user se request le sako aur response de sako 
//ab agar dependencies mein express ka package aa gya hai then yes express has been installed
require('dotenv').config()
const express = require('express')//toh iska use karke meine ek express naam ka object bana liya
const app = express()//ab maine ek variable define kara jo iss object ko contain karta h
//const port = 3000//kis port se listen karna hai
// const port=3000
app.get('/', (req, res) => {  //get ek function hai iss app arthaath express object kaa using which u can cater the request of user
  res.send('LOVE YOU BABE')
})

app.get('/twitter', (req, res) => {  //get ek function hai iss app arthaath express object kaa using which u can cater the request of user
    res.send('ANVEEKSHA JHANGID')//()=> yeh hai call back
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
app.get('/login',(req,res)=>{
    res.send('<h1>jai shree ram</h1>')
})

app.get('/utube',(req,res)=>{
    res.send('<h2>Jai Rajputana</h2>')
})


//ab run karne ke baad u will see ki aapka program terminate nahi hua h
//voh constantly listen kar rha hai both for / as well as /twitter 
//badhai ho tumne ek server bana liya h
//25:10 deploy
//saare variables likhdo isme
//can write in uppercap or even in lowercap
