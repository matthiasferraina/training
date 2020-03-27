const form = document.querySelector('form')
const input = document.querySelector('input')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/weather?address=${input.value}`).then(res => {
        res.json().then(data => {
            if (data.error) {
                return console.log(data.error);
            }

            console.log(data);
        });
    });

})