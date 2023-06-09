//var
let musicas = [
    {titulo: 'fantasia final', artista: 'virgingod', src:'audio/Fantasia Final (feat. Big Rush).mp3', img: 'imagens/neongenesisvgod.png'},
    
    {titulo: 'verdade', artista: 'virgingod', src:'audio/verdade (feat. roddie).mp3', img: 'imagens/liderdegim.jpeg'},

    {titulo: 'vintage', artista: 'virgingod', src:'audio/vintage.mp3', img: 'imagens/ldgmais.jpeg'}
]

const musica = document.querySelector('audio')

let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim')

let imagem = document.querySelector('.cover')

let nomeMusica = document.querySelector('.descricao h2')

let nomeArtista = document.querySelector('.descricao i')

//events
document.querySelector('.botao-play').addEventListener('click', tocarMusica)

document.querySelector('.botao-pause').addEventListener('click', pausarMusica)

musica.addEventListener('timeupdate', atualizarBarra)

document.querySelector('.anterior').addEventListener('click', () =>{
    indexMusica--;
renderizarMusica(indexMusica)
})

document.querySelector('.proximo').addEventListener('click', () =>{
    indexMusica++;
    renderizarMusica(indexMusica)
})

//functions
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src)
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista
        imagem.src = musicas[index].img
        
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(currentSong.duration));
        
        musica.play()
        

    })
}

function tocarMusica(){
    musica.play()
    document.querySelector('.botao-pause').style.display = 'block'
    document.querySelector('.botao-play').style.display = 'none'
}

function pausarMusica(){
    musica.pause()
    document.querySelector('.botao-pause').style.display = 'none'
    document.querySelector('.botao-play').style.display = 'block'
}

function atualizarBarra(){
    const barra = document.querySelector('progress')

    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'

    const tempoDecorrido = document.querySelector('.inicio')
    
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime))
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}
function duration(){
    duracaoMusica.textContent = segundosParaMinutos(Math.floor(currentSong.duration));
}

