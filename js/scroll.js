const ScrollHome = () => {
    window.scroll(0, Position(document.getElementById('home')));
}

const ScrollEspecialidades = () => {
    window.scroll(0, Position(document.getElementById('especialidades')));
}

const ScrollServicos = () => {
    window.scroll(0, Position(document.getElementById('servicos')));
}

const ScrollPortifolio = () => {
    window.scroll(0, Position(document.getElementById('portifolio')));
}

const ScrollContato = () => {
    window.scroll(0, Position(document.getElementById('contato')));
}

const Position = (obj) =>{
    var currenttop = 0;
    if (obj.offsetParent){
     do{
      currenttop += obj.offsetTop;
     }while ((obj = obj.offsetParent));
     return [currenttop];
     }
}