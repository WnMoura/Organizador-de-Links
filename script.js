function toggleMode() {

 const html = document.documentElement
 html.classList.toggle("light")
/*
outra forma de adicionar a alteração de light de =true para =none

if(html.classList.contains('light'))
 {html.classList.remove('light')
}
else{
html.classList.add('light')
}*/

const alt = document.querySelector('#profile img')

if(html.classList.contains('light'))
{alt.setAttribute('alt','Uma imagem de wanderson com camisa de butâo verde com o fundo do ceu aberto.')}
else
{alt.setAttribute('alt','Uma selfie de wanderson com camisa de butâo preta com dourada dentro de bar enfrente ao espelho.')}

 
 // pegar a tag img
 const img = document.querySelector("#profile img")
 
 //susbtituir a imagem
 if(html.classList.contains('light')) 

    {img.setAttribute('src', './assets/avatar-light.png')
    //se tiver light mode , adicionar imagem light
    } else 

    {img.setAttribute('src', './assets/avatar.png')}
    // se tiver sem light mode, manter a imagem original

}



