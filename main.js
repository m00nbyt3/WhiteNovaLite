function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function wnalert()
{
	//Selects the hours and days html table and set pos in the last day
	var time = document.querySelectorAll("[data-original-title]");
	var pos = time.length - 1;

	// Get actual date
	var today = new Date();

	// Get week day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
	var dayOfWeek = today.getDay();

	// Calculate how much days have passed from last friday
	var daysSinceFriday = (dayOfWeek + 7 - 5) % 7;

	//Calculate how much days we have to count
	while (true)
	{
		var semana = prompt("En que semana de Whitenova estas? 1 o 2");
		if (Number(semana) == 1)
			break;
		else if (Number(semana) == 2)
		{
			daysSinceFriday += 7;
			break;
		}
		else
			alert("Dato invalido, introduce 1 o 2");
		
	}
	//console.log(daysSinceFriday);

	//Calculate the hours and minutes left to complete wn
	var tot = 0;
	var hours = 0;
	var mins = 0;
	var day = 0;
	while (day < daysSinceFriday)
	{
		hours = time[pos].getAttribute('data-original-title');
		tot += (hours[0] * 60);
		mins = hours[2].concat(hours[3]);
		tot = parseInt(tot) + parseInt(mins);
		day++;
		pos--;
	}
	var per = (tot / 60) * 100 / 12;
	//console.log(tot / 60);
	//console.log(per);
	var left = 720 - tot;
	if (left < 0)
		alert("White Nova completado!!!");
	else
	{
		alert("Faltan " + (left / 60).toFixed(0) + " horas y "+ ((((left/60) % 1).toFixed(2)) * 60).toFixed(0) + " minutos (" + per.toFixed(2) + "%)");
	}
}


//Assures all the web elements have finished loading
async function main()
{
	await sleep(1000);
	console.log("WNL --> Preparado para su uso! Haz click encima de la fecha del Black Hole para ver cuanto tiempo te falta para entrar en el White Nova.");
	console.log("WNL --> ATENCION: Esta herramienta no es oficial y su uso es puramente informativo, pero no debe de usarse para reclamar o como prueba.");
	console.log("WNL --> Esta herramienta no tiene en cuenta las horas realizadas durante el viernes, antes del cierre. Esta herramienta toma todas las horas del viernes\
	como pertenecientes al siguiente ciclo. Esta hecho asi porque no existe una hora oficial, y porque al desarrollador no le gusta madrugar y siempre llega\
	despues de la hora de cierre.");
	//Older element clicker
	//torun = document.getElementsByClassName("end-goal")[0];
	torun = document.getElementById("blackhole-tab");
	torun.addEventListener("click", wnalert);
}

main();
