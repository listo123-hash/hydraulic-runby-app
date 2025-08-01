
function calculate() {
    const topFloorToBeam = parseFloat(document.getElementById('topFloorToBeam').value);
    const sillToSill = parseFloat(document.getElementById('sillToSill').value);
    const topOvertravelToBeam = parseFloat(document.getElementById('topOvertravelToBeam').value);
    const bottomFloorToPit = parseFloat(document.getElementById('bottomFloorToPit').value);
    const bottomOvertravelToPit = parseFloat(document.getElementById('bottomOvertravelToPit').value);
    const reserveRamTravel = parseFloat(document.getElementById('reserveRamTravel').value);
    const ramHeadClearance = parseFloat(document.getElementById('ramHeadClearance').value);
    const apronToPitFloor = parseFloat(document.getElementById('apronToPitFloor').value);

    if (isNaN(topFloorToBeam) || isNaN(sillToSill) || isNaN(topOvertravelToBeam) || isNaN(bottomFloorToPit)
        || isNaN(bottomOvertravelToPit) || isNaN(reserveRamTravel) || isNaN(ramHeadClearance) || isNaN(apronToPitFloor)) {
        document.getElementById('results').innerText = "Please fill in all fields.";
        return;
    }

    const travel = sillToSill;
    const topOvertravel = topFloorToBeam - topOvertravelToBeam - (travel / 2);
    const bottomRunby = bottomOvertravelToPit - (travel / 2);

    document.getElementById('results').innerHTML =
        `<strong>Results:</strong><br>
         Total Travel: ${travel.toFixed(2)} in<br>
         Top Overtravel: ${topOvertravel.toFixed(2)} in<br>
         Bottom Runby: ${bottomRunby.toFixed(2)} in<br>
         Reserve Ram Travel: ${reserveRamTravel.toFixed(2)} in<br>
         Ram Head Clearance: ${ramHeadClearance.toFixed(2)} in<br>
         Apron to Pit Floor: ${apronToPitFloor.toFixed(2)} in`;
}
