// async function calculateWebsiteData(url) {
//     const response = await fetch(url);
//     const dataReceived = response.headers.get('content-length') || 0;
//     const dataSent = response.headers.get('request-size') || 0;
//     return { dataReceived, dataSent };
//   }
  
//   calculateWebsiteData('https://www.youtube.com/watch?app=desktop&v=gtF2nHVjqFk')
//     .then(({ dataReceived, dataSent }) => {
//         const data = document.getElementById("element");
//         console.log(data);
//         data.innerHTML = dataReceived?"okay":0; 
//     //   console.log(`Data received: ${dataReceived} bytes`);
//     //   console.log(`Data sent: ${dataSent} bytes`);
//     })
//     .catch(error => console.error(error));
  
var requests = require('requests');

function calculate_website_data(url) {
    response = requests.get(url);
    const data_received = len(response.content);
    const data_sent = len(response.request.body || '') + len(response.request.headers);
    return (data_received, data_sent);
}
// data_received, data_sent = calculate_website_data('https://pyscript.net/');
// console.log('Data received:', data_received, 'bytes');
// console.log('Data sent:', data_sent, 'bytes');

calculate_website_data('https://pyscript.net/')
    .then(({ data_received, data_sent }) => {
        console.log(`Data received: ${data_received} bytes`);
        console.log(`Data sent: ${data_sent} bytes`);
    })

//     let p = fetch("https://generator.herokuapp.com/weather/Ny")
// p.then((value1)=>{
//     return value1.json()
// }).then((value2)=>{
//     console.log(value2)
//     // return value2.json
// })