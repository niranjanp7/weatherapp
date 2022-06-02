let body = document.querySelector("body");

fetch("./countries.min.json")
    .then((r) => r.json())
    .then((json) => {
        let s = "{";
        for (let i in json) {
            s += '"' + i + '":[';
            let city = new Set(json[i]);
            let j = 0;
            for (let k of json[i]) {
                j++;
            }
            if (j != city.size) {
                console.log(i, j, city.size);
            }
        }
        s += "}";
        body.innerText = s;
    });
