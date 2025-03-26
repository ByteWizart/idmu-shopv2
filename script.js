window.onload = function () {
  // Carregar HQs ao abrir a página
  const hqs = JSON.parse(localStorage.getItem("hqs")) || [];
  const hqsContainer = document.querySelector(".hqs");

  hqsContainer.innerHTML = ""; // Limpar a área de HQs antes de adicionar as novas

  hqs.forEach((hq, index) => {
    const hqCard = document.createElement("div");
    hqCard.classList.add("hq-card");

    hqCard.innerHTML = `
      <img src="${hq.image}" alt="HQ" />
      <p><strong>${hq.title}</strong></p>
      <button onclick="removeHQ(${index})">Remover</button>
    `;
    hqsContainer.appendChild(hqCard);
  });
};

function removeHQ(index) {
  const hqs = JSON.parse(localStorage.getItem("hqs")) || [];
  hqs.splice(index, 1); // Remove a HQ pelo índice

  localStorage.setItem("hqs", JSON.stringify(hqs));

  // Atualiza a página após a remoção
  window.location.reload();
}
