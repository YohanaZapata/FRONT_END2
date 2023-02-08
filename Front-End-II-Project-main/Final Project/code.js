/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let nombre = prompt("Ingresa tu nombre: ");
  datosPersona.nombre = nombre;

  let anioNacimiento; 

control = true
    do {
      anioNacimiento = parseInt(prompt("Ingrese el año en que naciste: "));
      if (isNaN(anioNacimiento)) {
        alert("Por favor ingresa un número");        
      }
      else{
        let edadActual = 2022 - anioNacimiento;
        datosPersona.edad = edadActual;
        control = false;
      }
    } while (control);


  let ciudadActual= prompt("Ingresa la ciudad donde vives: ");
  datosPersona.ciudad = ciudadActual;

  let pregunta = prompt("¿Te interesa Javascript? ");
  datosPersona.interesPorJs = pregunta;
}


function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let nombreUsuario = datosPersona.nombre;
  document.getElementById('nombre').innerHTML = nombreUsuario;

  let edadUsuario = datosPersona.edad;
  document.getElementById('edad').innerHTML = edadUsuario;

  let ciudadUsuario = datosPersona.ciudad;
  document.getElementById('ciudad').innerHTML = ciudadUsuario;

  let preguntaUsuario = datosPersona.interesPorJs;
  document.getElementById('javascript').innerHTML = preguntaUsuario;

};


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  listado.forEach(item => {
    let div = document.getElementById('fila');
    let div2 = document.createElement('div');
    div.appendChild(div2);
    div2.classList.add('caja');
    

    let image = document.createElement('img');
    div2.appendChild(image);
    image.setAttribute('src', item.imgUrl);
    image.setAttribute('alt', item.lenguajes);
    

    let texto = document.createElement('p');
    div2.appendChild(texto);
    texto.classList.add('lenguajes');
    texto.innerHTML = 'Lenguajes: ' + item.lenguajes;

    let texto2 = document.createElement('p');
    div2.appendChild(texto2);
    texto2.classList.add('bimestre');
    texto2.innerHTML = 'Bimestre: ' + item.bimestre;
  });

  materiasBtn.setAttribute('disabled', 'true');
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let tonoPagina = document.getElementById('sitio');
  tonoPagina.classList.toggle('dark');
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

const teclaTexto = document.getElementById('sobre-mi');

window.addEventListener('keydown', function (e) {
  if (e.key == "f" || e.key == "F"){  
  teclaTexto.classList.remove('oculto');
  }
});