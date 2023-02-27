import React from "react";
import { useState } from "react";
import memesData from "../memesData";

export default function() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    console.log(allMemes)
    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function generateImage() {
        let memesArray = allMemes;
        let random = Math.floor(Math.random()*memesArray.length)
        let url = memesArray[random].url
        setMeme(prevState =>{
            return({...meme, randomImage:url})
        })
        
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevState =>{
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return(
        <main className="meme-container">
            <div className="meme-form">
                <input 
                    type="text" 
                    placeholder="Top Text" 
                    className="meme-input meme-input-1"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input 
                    type="text" 
                    placeholder="Bottom Text" 
                    className="meme-input meme-input-2"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}                
                />
                <button 
                    onClick={generateImage} 
                    className="meme-button"

                    >Get a new meme image🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="" className="meme-img"/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}