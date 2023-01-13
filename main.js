function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function wnalert()
{
	var time = document.querySelectorAll("[data-original-title]");
	var pos = time.length - 1;
	const start = new Date("2023-01-13");
	const end = start + (86400000 * 14);
	//const end = new Date("2023-01-13");
	//const start = end - (86400000 * 15);
	var day = Date.now();
	var tot = 0;
	var hours = 0;
	var mins = 0;
	while (day >= start)
	{
		hours = time[pos].getAttribute('data-original-title');
		tot += (hours[0] * 60);
		mins = hours[2].concat(hours[3]);
		tot = parseInt(tot) + parseInt(mins);
		day -= 86400000; 
		pos--;
	}
	var per = (tot / 60) * 100 / 12;
	console.log(tot / 60);
	console.log(per);
	var left = 720 - tot;
	if (left < 0)
		alert("White Nova complete!!!");
	else
	{
		alert((left / 60).toFixed(0) + " hours and "+ ((((left/60) % 1).toFixed(2)) * 60).toFixed(0) + " minutes left (" + per.toFixed(2) + "%)");
	}
}

async function main()
{
	await sleep(1000);
	console.log("WNL loaded!")
	torun = document.getElementsByClassName("tab-content goal-container-infos")[0];
	torun.addEventListener("click", wnalert);
}

main();