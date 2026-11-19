function demande() {
    const tbody = document.querySelector("#tablePays tbody");
    pos = document.getElementById("po").value
    con = document.getElementById("co").value;
    pay = document.getElementById("p").value.trim();
    cap = document.getElementById("ca").value.trim();
    sup = document.getElementById("su").value.trim();
    pos = parseInt(pos);
    if (!cop || !pay || !sup) {
        alert("verifier votre champ de saisir"); return false
    }
    row = tbody.insertRow(pos);
    row.insertCell(0).textContent = con;
    row.insertCell(1).textContent = pay;
    row.insertCell(2).textContent = cap;
    row.insertCell(3).textContent = sup;

}