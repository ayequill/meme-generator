import React, { useState, useEffect } from "react";

export default function Input() {
    
  // declaring and destructing state
  const [meme, setMeme] = useState({topText: '', bottomText: '', randomImg: "http://i.imgflip.com/1bij.jpg"});

  const [allMemeImages, setAllMemeImages] = useState({})

  /* using the FETCH method */
  // useEffect(()=>{
  //   fetch("https://api.imgflip.com/get_memes")
  //     .then(res => res.json())
  //     .then(data => {
  //       // data.data.memes = allMemeImages
  //      setAllMemeImages(data.data.memes)
  //       // console.log(data.data.memes);
  //     })
  //   }, [])

/* Using ASYNC */
  useEffect(()=>{
    /*  created the async function and called it in the useEffect since async
    functions always returns a promise */
    async function getMemeAPI () {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemeImages(data.data.memes)
    }
    getMemeAPI()
  },[])
    
  /* function to get a random image */
  function getRandomImg() {
    // const memesArr = allMemeImages
    const randomNum = Math.floor(Math.random() * allMemeImages.length);

    // passing in the random meme image url to the state
    setMeme(prevState => {
        return {
            ...prevState, randomImg: allMemeImages[randomNum].url
        }
    });
  }
    

  // console.log(meme);

  /* SAVING MY INPUT VALUE TO STATE*/
  function handleEvent (event){
    const {name, type, value} = event.target
    
    setMeme(prevState => ({
      
      ...prevState, [name] : value
    }))

   
  }

  return (
    <main>
      <section className="container">
        <div id="form" className="form">
          <input onChange={handleEvent} type="text" className="input__box-1"  name= 'topText' value={meme.topText} />
          <input onChange={handleEvent} type="text" className="input__box-2" name= 'bottomText' value={meme.bottomText} />
          <button onClick={getRandomImg} id="genBtn">
            Get a new meme image 🖼
          </button>
        </div>
      </section>
      <section className="container">
        <div className="meme__container">
          <h2 className="first__text">{meme.topText}</h2>
          <h2 className="second__text">{meme.bottomText}</h2>
          <img src={meme.randomImg} alt="" className="meme__img" />
        </div>
      </section>
    </main>
  );
}
