const database = [
    {
        id:1,
        name:'Naruto Uzumaki',
        power:'Nine tails',
        element:'Wind',
        village:'Konoha',
        level:'7th Hokage',
        clan:'Uzumaki',
        image:'https://pa1.narvii.com/7422/b16cfd8029b2e6a4ec1764b3644e9396fa8d209dr1-480-270_hq.gif'
    },
    {   
        id:2,
        name:'Sasuke Uchiha',
        power:'Rinnegan + MS',
        element:'Lightning',
        village:'Konoha',
        level:'Shadow Hokage',
        clan:'Uchiha',
        image:'https://i.pinimg.com/originals/71/48/c8/7148c82838437c6d8ad478848e68d482.gif '
    },
    {
        id:3,
        name:'Kakashi Hatake',
        power:'Purple Chidori + MS',
        element:'Lightning',
        village:'Konoha',
        level:'6th Hokage',
        clan:'White Claw',
        image:'https://thumbs.gfycat.com/TotalOptimalAmericantoad-size_restricted.gif'
    },
    {
        id:4,
        name:'Minato Namikaze',
        power:'Rasengan + Yellow flash Fuuijin',
        element:'Wind',
        village:'Konoha',
        level:'4th Hokage',
        clan:'Namikaze',
        image:'https://thumbs.gfycat.com/SaltyLateBasil-size_restricted.gif'
    },
    {
        id:5,
        name:'Itachi Uchiha',
        power:'MS + Genjutsu',
        element:'Fire',
        village:'Konoha',
        level:'Unlimited',
        clan:'Akatsuki',
        image:'https://media0.giphy.com/media/CchzkJJ6UrQmQ/giphy.gif'
    },
    {
        id:6,
        name:'Madara Uchiha',
        power:'MS + Six Path',
        element:'Fire',
        village:'Konoha',
        level:'Destroyer',
        clan:'Akatsuki',
        image:'https://media1.tenor.com/images/fe60d20d14d53b4e0929b0a0b17c0781/tenor.gif?itemid=17049380'
    },
    {
        id:7,
        name:'Hashirama Senju',
        power:'Wood Style + Regeneration',
        element:'Wood',
        village:'Konoha',
        level:'God of War',
        clan:'Senju',
        image:'https://i.makeagif.com/media/7-28-2016/_eMaFk.gif'
    },
    {
        id:8,
        name:'Pain (Tendo)',
        power:'Six path',
        element:'Six elements',
        village:'Hidden Rain',
        level:'God',
        clan:'Akatsuki',
        image:'https://thumbs.gfycat.com/JampackedExcitableHydra-size_restricted.gif'
    },
    {
        id:9,
        name:'Commando A',
        power:'Light shield',
        element:'Lightning',
        village:'Hidden Cloud',
        level:'4th Hokage',
        clan:'Lighter',
        image:'https://i.pinimg.com/originals/93/85/90/938590c23c6565490f49b7f4646f7601.gif'
    },
    {
        id:10,
        name:'Gaara',
        power:'Shukakus Land',
        element:'Sand',
        village:'Hidden Land',
        level:'5th Kazekage',
        clan:'Land',
        image:'https://i.gifer.com/C393.gif'
    },
    {
        id:11,
        name:'Kisame Hoshikage',
        power:'White Shark + Water Style',
        element:'Wather',
        village:'Hidden Rain',
        level:'Untail bijuu',
        clan:'Akatsuki',
        image:'https://steamuserimages-a.akamaihd.net/ugc/941711796106927460/EDA08FFEF3AFDFFCD5241FD00926BCB4DAF47C09/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
    },
    {
        id:12,
        name:'Killer B',
        power:'Eight Tail + Katana',
        element:'Rap God',
        village:'Hidden Cloud',
        level:'Rap God',
        clan:'Lighter',
        image:'https://qph.fs.quoracdn.net/main-qimg-8380be95c048107f587b8a5ebf70fd9f'
    },    
    
]
const $container = document.querySelector('.row')
const $serch = document.querySelector('.search')
const $select = document.querySelector('.select')
const $navbar = document.querySelector('.navbar'); 
const $btn = document.querySelector('.menu_btn'); 
const $signAdmin = document.querySelector('.addHero')
const $btnBg = document.querySelector('.addBackground')
const $ColorBg = document.querySelector('.chooseColor')
const $UrlBg = document.querySelector('.chooseURL')
const back = document.querySelector('.back')


window.addEventListener('load', () => {
    if(!localStorage.getItem('ninjas')){
        localStorage.setItem('ninjas', JSON.stringify(database))
    }else{
        const ninja = JSON.parse(localStorage.getItem('ninjas'))
        const ninjaWithId = ninja.map((item, index) => {
            return {...item, id:index}
        })
        localStorage.setItem('ninjas', JSON.stringify(ninjaWithId))
    }
})
$btn.addEventListener('click', event => { 
    event.preventDefault() 
 
    $navbar.classList.toggle('active') 
    $btn.classList.toggle('active') 
})


window.addEventListener('load' , cardTemplate(JSON.parse(localStorage.getItem('ninjas'))))

function cardTemplate(base){
    let card = base.map(({id, image, name}) => {
        return`
            <div class="col-12 col-sm-6 col-md-6 col-xl-4 mt-4">
                <div class="card-header text-center text-light bg-dark">
                    <h3>${name}</h3>
                </div>
                <div class="card-imag">
                    <img src=${image} style="height:300px;" class="w-100" />
                </div>
                <div class="card-footer bg-dark">
                    <button onclick="More(${id})" class="btn btn-outline-warning w-100">More</button>
                </div>
            </div>
 
        `
    }).join('')
     $container.innerHTML = card
}

$select.addEventListener('change', e => {
    let selectedValue = e.target.value
    if(selectedValue === 'Clan'){
        $serch.setAttribute('placeholder', 'Search by Clan')
    }else if(selectedValue === 'Village'){
        $serch.setAttribute('placeholder', 'Search by Village')
    }else if(selectedValue === 'Power'){
        $serch.setAttribute('placeholder', 'Search by Power')
    }else if(selectedValue === 'Name'){
        $serch.setAttribute('placeholder', 'Search by Name')
    }else if(selectedValue === 'Level'){
        $serch.setAttribute('placeholder', 'Search by Level')
    }else if(selectedValue === 'Element'){
        $serch.setAttribute('placeholder', 'Search by Element')

    }
})
$serch.addEventListener('input' , e => {
    let value = e.target.value.toUpperCase()
    let selectedValue = $select.value
    const ninjas = JSON.parse(localStorage.getItem('ninjas'))
    if(selectedValue === 'Clan'){
        const filtered = ninjas.filter(item => item.clan.toUpperCase().includes(value))
        cardTemplate(filtered)
    }else if(selectedValue === 'Name'){
        const filtered = ninjas.filter(item => item.name.toUpperCase().includes(value))
        cardTemplate(filtered)
    }else if(selectedValue === 'Village'){
        const filtered = ninjas.filter(item => item.village.toUpperCase().includes(value))
        cardTemplate(filtered)
    }else if(selectedValue === 'Element'){
        const filtered = ninjas.filter(item => item.element.toUpperCase().includes(value))
        cardTemplate(filtered)
    }else if(selectedValue === 'Power'){
        const filtered = ninjas.filter(item => item.power.toUpperCase().includes(value))
        cardTemplate(filtered)
    }else if(selectedValue === 'Level'){
        const filtered = ninjas.filter(item => item.level.toUpperCase().includes(value))
        cardTemplate(filtered)
    }
})
function More(id){
    const ninja = JSON.parse(localStorage.getItem('ninjas'))
    localStorage.setItem('more', JSON.stringify([ninja[id]]))
    window.location.reload()
    window.open('./more.html', '_self')
}
$signAdmin.addEventListener('click', e =>{
    e.preventDefault()
    setTimeout(() => {
        window.open('./admin.html', '_self')
    }, 1000)
})

back.addEventListener('click', e => {
    e.preventDefault()

    window.open('./auth.html', '_self')
})

$btnBg.addEventListener('click', e => {
    e.preventDefault()

    if($ColorBg.value === '' || $UrlBg.value === ''){
        if($ColorBg.value === ''){
            document.body.style.background = `url('${$UrlBg.value}') center / cover no-repeat`
        }else if($UrlBg.value === ''){
            document.body.style.background = $ColorBg.value
        }else if($ColorBg.value === '' && $UrlBg.value === ''){
            alert('заполните поля')
        }else{
            $select.forEach( item => {
                item.value = ''
            })
        }
    }else{
        alert('Не зполняйте поля')
    }
})