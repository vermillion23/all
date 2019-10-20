const text = `Предварительные выводы неутешительны: высококачественный прототип будущего проекта напрямую зависит от укрепления моральных ценностей. В целом, конечно, реализация намеченных плановых заданий создаёт предпосылки для дальнейших направлений развития. Но активно развивающиеся страны третьего мира, вне зависимости от их уровня, должны быть описаны максимально подробно. С другой стороны, глубокий уровень погружения прекрасно подходит для реализации стандартных подходов. Мы вынуждены отталкиваться от того, что понимание сути ресурсосберегающих технологий не даёт нам иного выбора, кроме определения направлений прогрессивного развития.
Следует отметить, что глубокий уровень погружения однозначно определяет каждого участника как способного принимать собственные решения касаемо новых предложений. Учитывая ключевые сценарии поведения, внедрение современных методик обеспечивает широкому кругу (специалистов) участие в формировании экспериментов, поражающих по своей масштабности и грандиозности. Идейные соображения высшего порядка, а также сплочённость команды профессионалов прекрасно подходит для реализации анализа существующих паттернов поведения. Диаграммы связей лишь добавляют фракционных разногласий и указаны как претенденты на роль ключевых факторов.
Как уже неоднократно упомянуто, базовые сценарии поведения пользователей, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Задача организации, в особенности же реализация намеченных плановых заданий создаёт предпосылки для распределения внутренних резервов и ресурсов. Задача организации, в особенности же современная методология разработки не даёт нам иного выбора, кроме определения как самодостаточных, так и внешне зависимых концептуальных решений. Разнообразный и богатый опыт говорит нам, что консультация с широким активом способствует повышению качества новых предложений. Активно развивающиеся страны третьего мира, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут своевременно верифицированы. Лишь тщательные исследования конкурентов могут быть в равной степени предоставлены сами себе.`

const inputElement = document.querySelector('#input')
const textExampleElement = document.querySelector('#textExample')

const lines = getLines(text) 
   
let letterId = 1

update()

lineToHtml(lines[0])

inputElement.addEventListener ('keydown', function (event) {
    console.log(event)
    const element = document.querySelector('[data-key="' + event.key +'"]')
    element.classList.add('hint')

    const CurrentLetter = getCurrentLetter()

    if (event.key === CurrentLetter.label) {
        letterId = letterId + 1
        update()
    }
})

inputElement.addEventListener('keyup', function (event) {
    const element = document.querySelector('[data-key="' + event.key +'"]')
    element.classList.remove('hint')
})


// Принимает длинную строку, возвращает массив строк со служебной информацией
function getLines(text){
    const lines = []
        
    let line = []
    let idCounter = 0
    for (const letter of text){
        idCounter = idCounter+1
        line.push({
            id: idCounter,
            label: letter,
            success: true

        })

        if (line.length>= 70 || letter === '\n') {
            lines.push(line)
            line = []
        }

    }
    

    if (line.length > 0) {
        lines.push(line)
    }

    return lines
}

// Принимает строку с объектами со служебной информации и возвращает html-структуру
function lineToHtml (line) {
//    <div class="line ">
//   <span class="done"> На переднем плане, прямо перед</span> 
//    <span class="hint">н</span>ами, расположен был дворик, где стоял
// </div>

    const divElement = document.createElement('div')
    divElement.classList.add('line')

    for (const letter of line) {
        const spanElement = document.createElement ('span')
        spanElement.textContent = letter.label

        divElement.append(spanElement)
        
        if (letterId > letter.id) {
            spanElement.classList.add('done')
        }
    }

    return divElement
}

// Возвращает актуальный номер строки (над которой работает пользователь)
function getCurrentLineNumber (){
    for (let i = 0; i <lines.length; i++) {
        for (const letter of lines[i]) {
            if (letter.id === letterId) {
                return i
            }
        }
    }
}

// Функция обновления 3-х отображаемых актуальных строк textExample
function update () {
    const currentLineNumber = getCurrentLineNumber()

    textExampleElement.innerHTML = ''

    //for (const line of lines) {
    //    const html = lineToHtml(line)
    //    textExampleElement.append(html)
    //}

    for (let i=0; i < lines.length; i++) {
        const html = lineToHtml(lines[i])
        textExampleElement.append(html)

        if (i < currentLineNumber || i > currentLineNumber + 2) {
            html.classList.add('hidden')
        }
    }
}

//Реализовать обработчик событий keydown и с использованием ф-ий getLines(), lineToHtml(), getCurrentLineNumber(), 
//update() и getCurrentLetter().

//Возвращает объект  символа ожидаемый программой
function getCurrentLetter () {
    for (const line of lines) {
        for (const letter of  line) {
            if (letterId === letter.id) {
            return letter
            }
        }
    }
}

function keydown () {

}
