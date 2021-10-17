function openNav() {
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    document.getElementById("myMenuButton").style.width = "0px";
    document.getElementById("myMenuButton").style.padding = "0px";
    document.getElementById("myMenuButton").style.display = "none"; // Para que desaparesca.
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("myMenuButton").style.width = "auto";
    document.getElementById("myMenuButton").style.padding = "10px 15px";
    document.getElementById("myMenuButton").style.display = "inline-block";
}
function menuSelection(elemento) {
    let id = elemento.id; // obtengo el nombre del elemento que llamo a la funcion.
    let directorio;
    let mainArray;
    switch(id){
        case "sec1":
            directorio = '/images/perros/perro';
            document.getElementById("categoria").textContent = "Fotos de Perros";
            mainArray = ArrPerros;
            break;
        case "sec2":
            directorio = '/images/buhos/buho';
            document.getElementById("categoria").textContent = "Fotos de Buhos";
            mainArray = ArrBuhos;
            break;
        case "sec3":
            directorio = '/images/gatos/gato';
            document.getElementById("categoria").textContent = "Fotos de Gatos";
            mainArray = ArrGatos;
            break;
        case "sec4":
            directorio = '/images/mapaches/mapa';
            document.getElementById("categoria").textContent = "Fotos de Mapaches";
            mainArray = ArrMapaches;
            break;
        default:
            directorio = '/images/easterEgg/easteregg';
            document.getElementById("categoria").textContent = "Esto es un caso default";
            mainArray = ArrEggs;
            break;
    }
    for(let i=0; i<9; i++)
    {
        //*document.getElementsByClassName("itemFlexbox")[i].innerHTML =
        document.getElementsByClassName("itemFlexbox")[i].querySelector("a > img").src =
        directorio + (i+1) +'.jpg';

        
        document.getElementsByClassName("itemFlexbox")[i].querySelector("a").href =
        "../pages/display.html?" + "n=" + mainArray[i] + "&d=" + '"' + mainArray[i+9] + '"' +
        "&url=" + '"' + directorio + (i+1) +'.jpg' + '"';
    }
}

function getPetData(nombre, desc, photoLoc) // Funcion para sacar los datos de la Url, para cargar la img
{
    let url_string = window.location.href
    let url = new URL(url_string);
    let petName = url.searchParams.get(nombre);
    let petDesc = url.searchParams.get(desc);
    let pic = url.searchParams.get(photoLoc);
    // No puedo hacer que replace remueva los 2.. asi que lo hice asi
    pic = pic.replace('"','');
    pic = pic.slice(0, -1);
    // Aplicamos los datos
    document.getElementsByClassName("mostrador")[0].querySelector("h2").textContent = petName;
    document.getElementsByClassName("mostrador")[0].querySelector("p").textContent = petDesc;
    document.getElementsByClassName("mostrador")[0].querySelector("img").src = pic;
}

// Arrays con la data de las imagenes
// Los primeros 9 son los nombres y los siguiente 9 las descripciones.
var ArrPerros = ["Coco","Thor","Max","Rocky","Toby","Simba","Leo","Lucas","Bruno",
                "Es+un+pompon+de+amor","No+se+le+escapa+nada+a+esa+nariz","Deja+pelusas+por+todos+lados",
                "Es+un+buen+chico+siempre","No+dejes+que+su+mirada+te+intimide","Le+decimos+pelusa",
                "El+mejor+pug+del+mundo","Sus+arrugas+son+adorables","Le+dicen+siempre+que+es+igualito+a+su+hermano"];

var ArrBuhos = ["Pepito","Alita","Piquito","Plumita","Pichi","Plumón","Chiquito","Blanquita","Duque",
"Le+gusta+cantar","Le+gusta+volar+de+noche","Adora+comer+ratones","Le+encanta+dormir","Suele+andar+en+solitario",
"Le+encanta+volar","Es+un+carnivoro+voraz","Planea+silenciosamente","Le+tiene+miedo+a+las+frutas"];

var ArrGatos = ["La pandilla","Charlie","Coco","Cosmo","Felix","Figaro","Fluffy","Gatsby","Harry",
"Siempre+andan+juntos","Le+encantan+las+rascadas","Trae+buena+suerte","Suele+ignorar+a+la+gente",
"Es+de+origen+egipcio","Deja+pelusas+por+todos+lados","No+estan+seguros+si+es+un+gato","Su+mirada+te+sigue",
"Tiene+manchas+por+todos+lados"];

var ArrMapaches = ["Pumpkin","Marley","Cory","Roy","Samuel","Bob","Ramon","Clyde","Salmon",
"Tiene+una+mirada+que+atrapa","Le+encanta+jugar+a+las+escondidas","La+gente+dice+que+trama+algo",
"Se+cree+gato","Es+muy+fotogenico","No+le+gusta+mucho+el+agua","Le+encanta+correr+por+el+pasto",
"Es+pariente+de+007","Se+quiere+postular+para+presidente"];

var ArrEggs = ["un","hay","Aqui","probablemente","escondido","mensaje","suerte","encontrarlo","puedes",
"la","en","busca","de","99","linea","yYq2LVqiRd","js","app",]
// No estaba muy escondido que digamos jaja . https://pastebin.com/wRVZgCu0

function validacionContacto(){
        'use strict';
        window.addEventListener('load', function() {
          // buscamos los campos a validar
          var forms = document.getElementsByClassName('needs-validation');
          // Los repetimos y evitamos el submit si no estan validados.
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              } else {
                  postContacto();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
}
// La separe por si se me ocurria alguna idea mejor para el post.
function postContacto()
{
    alert("Gracias por enviarnos tu consulta!");
    location.href = "/../index.html"
}
