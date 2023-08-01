

async function getData(event){
    event.preventDefault()
    const season = document.getElementById('season').value
    const round = document.getElementById('round').value

    const res = await fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    if (res.ok){
        const data = await res.json()
        const driverStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        populateTable(driverStandings)
    } else {
    window.alert('Error fetching data')
    }
}
function populateTable(driverStandings){
    const tableBody = document.querySelector('#racerTable tbody')
    tableBody.innerHTML = ''


driverStandings.forEach(driver => {
    const row = document.createElement('tr')
    row.innerHTML = 
    `<td>${driver.position}</td>
    <td>${driver.Driver.givenName} ${driver.Driver.familyName}</td>
    <td>${driver.Constructors[0].name}</td>
    <td>${driver.points}</td> `;

    tableBody.appendChild(row)
})


}
document.querySelector('form').addEventListener('submit', getData)

