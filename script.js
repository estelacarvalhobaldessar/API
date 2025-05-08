'use strict'
 
async function loadGallery() {
    const gallery = document.getElementById('gallery')
    const url = 'https://api.thecatapi.com/v1/images/search?limit=10%27'
 
    const response = await fetch(url)
    const cats = await response.json()
 
    // Limpa a galeria antes de adicionar novas imagens
    gallery.innerHTML = '';
 
    // Adiciona as novas imagens de gatos
    cats.forEach(cat => {
        const img = document.createElement('img')
        img.src = cat.url
        gallery.appendChild(img)
    })
    console.log(cats)
}
loadGallery();