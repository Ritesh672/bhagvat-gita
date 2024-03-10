import express from "express";
import bodyParser from "body-parser";
import axios from "axios";


// define app

const app = express();
const port = 3000;
const BaseUrl = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters';

// middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("/public"));

//list the app on server

app.get("/", async (req, res)=>
{
    const options = {
        method: 'GET',
        url: 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/',
        params: {limit: '38'},
        headers: {
          'X-RapidAPI-Key': 'bd0baec681msh42c55547a4efaccp1a7d62jsn2471f2d822cc',
          'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data.length);
          console.log(response.data[0]);
          res.render("index.ejs", {verse : response.data[0]});
      } catch (error) {
          console.error(error);
      }
});

app.listen(port, (req, res)=>
{
    console.log(`server runnning on port ${port}`);
})



