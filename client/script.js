
let phoneMask = document.getElementById('phone');
let maskOptions = {
    mask: '+{7}(000)000-00-00',

}
let mask = new IMask(phoneMask, maskOptions)


let form = document.getElementById('form')
form.onsubmit = function (event) {
    event.preventDefault()
    // const name = encodeURIComponent(form[0].value)
    // const phone = encodeURIComponent(form[1].value)
    // const date = encodeURIComponent(form[2].value)
    const name = form[0].value
    const phone = form[1].value
    const date = form[2].value
    // fetch(`/test?name=${name}&phone=${phone}&date=${date}`) // GET

    // const formData  = new FormData();
    // formData.append('name', name);
    // formData.append('phone', phone);
    // formData.append('date', date);
    // fetch('/data', {
    //     method: 'POST',
    //     body: formData
    // })

    // fetch('/data', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    //     },
    //     body: new URLSearchParams({
    //         'name': name,
    //         'phone': phone,
    //         'date': date
    //     })
    // })
    fetch('/ticket', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            phone,
            date
        })
    })
}

