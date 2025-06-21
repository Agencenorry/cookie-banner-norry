document.addEventListener("DOMContentLoaded", function () {
  const banner = document.createElement("div");
  banner.id = "cookie-banner";
  banner.innerHTML = `
    <p>Ce site utilise des cookies pour améliorer votre expérience. <a href="/politique-cookies">En savoir plus</a></p>
    <div>
      <button id="cookie-accept">Accepter</button>
      <button id="cookie-decline">Refuser</button>
    </div>
  `;
  document.body.appendChild(banner);

  const consent = localStorage.getItem("cookiesAccepted");
  if (!consent) {
    banner.style.display = "flex";
  } else if (consent === "true") {
    // Lancer ici les scripts tiers si consentement donné
  }

  document.getElementById("cookie-accept").onclick = () => {
    localStorage.setItem("cookiesAccepted", "true");
    banner.style.display = "none";
  };

  document.getElementById("cookie-decline").onclick = () => {
    localStorage.setItem("cookiesAccepted", "false");
    banner.style.display = "none";
  };
});
