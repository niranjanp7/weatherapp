let body = document.querySelector("body");

fetch("./countries.min.json")
    .then((r) => r.json())
    .then((json) => {
        let keys = [];
        for (let i in json) {
            keys.push(i);
        }
        let i = -1;
        let intervalID = setInterval(callAPI, 1000);

        function callAPI() {
            i++;
            if (i >= keys.length) {
                clearInterval(intervalID);
                return;
            }
            fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" +
                    keys[i] +
                    "&APPID=8bd4d6a9a95aadd819800ea99b951a8e"
            )
                .then((res) => res.json())
                .then((r) => {
                    let span = document.createElement("span");
                    console.log(r);
                    if (r.cod === 200) {
                        if (r.name !== keys[i]) {
                            r.sys.country = "ERROR";
                        }
                        span.innerHTML =
                            '"' + keys[i] + "_" + r.sys.country + '":["' + json[keys[i]].join('","') + '"],';
                        body.appendChild(span);
                    } else {
                        span.innerHTML =
                            '"' + keys[i] + "_404" + '":["' + json[keys[i]].join('","') + '"],';
                        body.appendChild(span);
                    }
                });
        }
    });
