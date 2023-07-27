console.log('Matrix Spotify Project')

const clientId = '47db93762e094997a07ac0f2706ffef2'
const clientSecret = 'b7f45f4963aa486d8a857aaad66984e0'


async function getToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST', 
        body: 'grant_type=client_credentials',
        headers: {
            Authorization: `Basic ${btoa(clientId + ':' + clientSecret)}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    if(response.ok){
        const data = await response.json()
        return data.access_token
    } else window.alert ('Bad request')
}

(async ()=> await getToken())()

async function getSong(track, artist) {
    const res = await fetch(`https://api.spotify.com/v1/search?q=${track},${artist}&type=track,artist&limit=5`,{
        method: 'GET',
        headers : {
            Authorization: `Bearer ${await getToken()}`,
            'Content-Type': 'application/json'
        }
    })
    if(res.ok){
        const data = await res.json()
        console.log(data.tracks.items[0].preview_url)
    } else window.alert('Bad Request')
}


(async ()=> await getSong('fame', 'david bowie'))()


const imgs = document.getElementsByTagName('img')
console.log(imgs)
for(const img of imgs){
    img.addEventListener('click', {})
}

function playSong() {}


