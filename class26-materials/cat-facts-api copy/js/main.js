document.querySelector('button').addEventListener('click', getFetch)

const headers = {'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'}

async function getFetch() {
  const response = await fetch('https://www.xeno-canto.org/api/2/recordings?query=bird', {headers: headers, mode: 'no-cors'})
  const json = await response.json()
  console.log(json)
}