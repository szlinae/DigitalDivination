/*fetch("https://www.boredapi.com/api/activity?type=recreational")
  .then(response => {
    //handle response
    console.log(response);
  })
  .then(data => {
    //handle data
    console.log(data);
  })
  .catch(error => {
    //handle error
  });*/


  const tired_url = "https://www.boredapi.com/api/activity?type=relaxation";
  const bored_url = "https://www.boredapi.com/api/activity?type=busywork";
  const moody_url = "https://www.boredapi.com/api/activity?type=cooking";

  async function getTired() {
    
    const response = await fetch(tired_url);
  
    // Parsing it to JSON format
    const data = await response.json();
    
    console.log(data)

    let whoo = data.activity;

    document.getElementById("speech").innerText = whoo + ".";
}
async function getBored() {
    
    const response = await fetch(bored_url);
  
    // Parsing it to JSON format
    const data = await response.json();
    
    console.log(data)

    let whoo = data.activity;

    document.getElementById("speech").innerText = whoo + ".";
}

async function getMoody() {
    
    const response = await fetch(moody_url);
  
    // Parsing it to JSON format
    const data = await response.json();
    
    console.log(data)

    let whoo = data.activity;

    document.getElementById("speech").innerText = whoo + ".";
}
