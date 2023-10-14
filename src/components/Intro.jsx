import React, { useEffect, useState } from "react";
import style from "./Intro.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";


const Intro = () => {
  const [arrayIndex, setArrayIndex] = useState(0);
  
  let welcomeMessages = [
    "تا اخذ مدرک بین المللی زبان آلمانی در کنارتان خواهیم بود",
     "آموزش آلمانی با جدیدترین فنون و متدهای روز دنیا",
     "به وبسایت شخصی استاد فریبا اقبال خوش آمدید"
   ];

 
   useEffect(() => {  
    const interval = setInterval(() => { 
        setArrayIndex(arrayIndex + 1); 
    }, 7000);
    if(arrayIndex === 3){
      setArrayIndex(0)
    }
    return () => clearInterval(interval); 
}, [arrayIndex]); 

  return (
    <div id={style.intro}>
      <div id={style.right}>
      <div id={style.wellcome}>{welcomeMessages[arrayIndex]} </div>
      </div>
      <div id={style.left}>
      <TextField sx={{backgroundColor:"white", width: "60%", borderRadius: "10px" }} placeholder="جستجو..." id="outlined-basic" variant="outlined" />
      <Link id={style.searchLink}>
      <SearchIcon id={style.searchIcon}/>
      </Link>
      </div>
    </div>
  );
};

export default Intro;
