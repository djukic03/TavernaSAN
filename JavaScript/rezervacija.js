var submit=document.getElementById("submitbtn");
submit.addEventListener('click', e=>{
    ime = document.getElementById("ime").value;
    prezime = document.getElementById("prezime").value;
    select = document.getElementById("termin");
    termin = select.value;
    tip = document.querySelector('input[name="tip"]:checked').value;
    var usluge='';
    var cekirani = document.querySelectorAll('input[type="checkbox"]:checked');
    for (var jedan of cekirani) {
        usluge = usluge + jedan.value + ', ';
    }
    if (usluge==''){
        usluge="Bez posebnih usluga";
    }
    napomena = document.getElementById("napomene").value
    if (napomena==''){
        napomena="Niste ostavili napomenu"
    }
    window.alert("Poštovani/a "+ ime +" "+ prezime +", u terminu "+termin+" rezervisali ste "+tip+" uz posebne usluge: "+usluge+"\nVaša napomena: "+napomena+"\nVidimo se!!!")
    window.close();
})

