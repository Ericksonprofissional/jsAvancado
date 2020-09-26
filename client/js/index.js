var campos = [ 
    document.querySelector("#data"),
    document.querySelector("#operacao"),
    document.querySelector("#papel"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
]

console.log(campos);
var tbody = document.querySelector('table tbody');

document.querySelector(".form").addEventListener('submit', function(event){
   event.preventDefault();
    var tr = document.createElement('tr');
    campos.forEach(function(campo){
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[3].value * campos[4].value; 
    tr.appendChild(tdVolume);
    tbody.appendChild(tr);

    campos[0].value = "";
    campos[1].value = "";
    campos[2].value = "";
    campos[3].value = 1;
    campos[4].value = 0;
    campos[0].focus();
})

//https://cursos.alura.com.br/course/javascript-es6-orientacao-a-objetos-parte-1/task/16497