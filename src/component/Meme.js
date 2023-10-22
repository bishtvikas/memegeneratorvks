import React from "react";
// import memesData from "../memesData";

// todo Api = "https://api.imgflip.com/get_memes"

/**
 * Challenge: Get a random image from the `memesData` array
 * when the "new meme image" button is clicked.
 *
 * Log the URL of the image to the console. (Don't worry
 * about displaying the image yet)
 */

function Meme() {
  //creating a state that can modify our div element with new images

  const [FormData, setFormData] = React.useState({
    FirstWord: "",
    SecondWord: "",
    urlImage: "https://i.imgflip.com/1ur9b0.jpg",
  });
  console.log(`formdata.urlImage state is ${FormData.urlImage}`);
  console.log(`formdata.urlImage state is ${FormData.FirstWord}`);
  console.log(`formdata.urlImage state is ${FormData.SecondWord}`);

  const [count, setCount] = React.useState(0);

  function changeHandler(event) {
    // setter function to set updated text
    //  console.log(event.target.name)
    //  console.log(event.target.value)

    const { name, value } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  let randomIndex = Math.floor(Math.random() * 100);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      // .then(memesData => console.log(memesData.data.memes[randomIndex].url))
      .then((memesData) =>
        setFormData(function (prevFormData) {
          return {
            ...prevFormData,
            urlImage: memesData.data.memes[randomIndex].url,
          };
        })
      );
  }, [count]);

  function handleSubmit(event) {
    event.preventDefault();
    setCount(count + 1);

    // // alert("submit clicked")
    // let array = memesData.data.memes;
    // let randomIndex = Math.floor(Math.random() * 100);
    // // // console.log(array[randomIndex].url); //this will have 1 object inside MemesData.data.memes array

    // let urlVariable_object = array[randomIndex];
    // let urlVariable = urlVariable_object.url;

    //  console.log(`urlVariable is ${urlVariable}`);
    // // //  setter function of state concept
    // // // way 1 of writing it -> using callback function

    // setFormData(function (prevFormData) {
    //   return {
    //     ...prevFormData,
    //     urlImage: urlVariable
    // };
    // });

    // // way 2 of writing it -> using Arrow method
    // // setUrlImage(prevUrl => urlVariable);

    setFormData((prevData) => {
      return {
        ...prevData,
        FirstWord: "",
        SecondWord: "",
      };
    });
  }

  // let urlImage = require(`${urlVariable}`); not allowed to dynamically fetch images from internet
  // wrong approach - need state concept

  return (
    <form onSubmit={handleSubmit} className="meme--box">
      <div className="inputs">
        <input
          autoComplete="off"
          type="text"
          id="FirstWord"
          name="FirstWord"
          value={FormData.FirstWord}
          placeholder="Enter Text"
          className="input--place"
          onChange={changeHandler}
        />

        <input
          autoComplete="off"
          type="text"
          id="SecondWord"
          name="SecondWord"
          value={FormData.SecondWord}
          placeholder="Enter Text"
          className="input--place"
          onChange={changeHandler}
        />
      </div>
      <div className="submit--box">
        <button className="submit--button">Get a new meme image 🖼</button>
      </div>
      <div className="meme-footage">
        <h1 className="imageText upperText">{FormData.FirstWord}</h1>
        <img className="meme-pic" src={FormData.urlImage} alt="img logo"></img>
        <h1 className="imageText lowerText">{FormData.SecondWord}</h1>
      </div>
    </form>
  );
}

export default Meme;
