const buttonPLay = document.querySelector('.Play')
const buttonPause = document.querySelector('.Pause')
const buttonCronometro = document.querySelector('.Cronometro')
const buttonPauseCronometro = document.querySelector('.Pausecronometro')
const buttonvolumeON = document.querySelector('.volumeON')
const buttonvolumeOff = document.querySelector('.volumeOFF')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
let minutosESC

function minutesANDseconds(minutos, segundos) {
    minutes.textContent = String(minutos).padStart(2, '0')
    seconds.textContent = String(segundos).padStart(2, '0')
}

function cowntdawn() {
    timertimeout = setTimeout(function() {
        let minutos = Number(minutes.textContent)
        let segundos = Number(seconds.textContent)

        if(minutos <= 0 && segundos <= 0) {
            buttonPause.classList.add('hide')
            buttonPLay.classList.remove('hide')
            buttonCronometro.classList.remove('hide')
            buttonPauseCronometro.classList.add('hide')
            minutesANDseconds(minutosESC || 0, segundos)
            return
        }

        if(segundos <= 0) {
            segundos = 60
    
            --minutos
        }

        minutesANDseconds(minutos, String(segundos - 1))


        cowntdawn()
    }, 1000)
}

buttonPLay.addEventListener('click', function() {
    buttonPLay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonCronometro.classList.add('hide')
    buttonPauseCronometro.classList.remove('hide')

    cowntdawn()
})

buttonPause.addEventListener('click', function() {
    buttonPLay.classList.remove('hide')
    buttonPause.classList.add('hide')


    clearTimeout(timertimeout)
})

buttonCronometro.addEventListener('click', function() {
    minutosESC = prompt('quantos minutos? : ').padStart(2, '0')
    minutes.textContent = minutosESC
})

buttonPauseCronometro.addEventListener('click', function() {
    buttonPLay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonCronometro.classList.remove('hide')
    buttonPauseCronometro.classList.add('hide')

    minutesANDseconds(minutosESC, 0)
    clearTimeout(timertimeout)
})

buttonvolumeON.addEventListener('click', function() {
    buttonvolumeON.classList.add('hide')
    buttonvolumeOff.classList.remove('hide')
})

buttonvolumeOff.addEventListener('click', function() {
    buttonvolumeON.classList.remove('hide')
    buttonvolumeOff.classList.add('hide')
})