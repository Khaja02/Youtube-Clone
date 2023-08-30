import axios from "axios";


const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_APP_API,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

 export const fetchData =  async(url) =>{
    const{data}=await axios(`https://youtube138.p.rapidapi.com/search/?q=${url}`, options);
    return data;
  }