async function getData() {
    let theWord = document.getElementById("theWord").value;
    console.log("The word: "+theWord);
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"+theWord;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json(); //convert JSON string to JS Object Array
      let dObj = json[0]; //get the first object in the array
      console.log(dObj); //print the property of this object

      //retrieve the content node
      let contentNode = document.getElementById("content");
      let htmlContent = `<a href="${dObj.phonetics[0].audio}">Click to listen</a>`;
      contentNode.innerHTML = htmlContent;
    } catch (error) {
      console.error(error.message);
    }
  }