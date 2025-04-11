const galerieImage = document.getElementById("allImages");

//Récupérer les informations des images
let titre =
  '<img src="https://example.com/image.jpg" onerror="alert(\'XSS\')">'; // Exemple de titre potentiellement dangereux
let imgSource = "../images/food.jpg";
let monImage = getImage(titre, imgSource);

galerieImage.innerHTML = monImage;

function getImage(titre, urlImage) {
  // Utilisation de la fonction sanitizeHtml pour échapper le titre
  titre = sanitizeHtml(titre);
  urlImage = sanitizeHtml(urlImage);

  // Construction de la carte d'image avec le titre échappé
  return ` <div class="col p-3">
        <div class="image-card text-white">
            <img src="${urlImage}" class="rounded w-100" alt="Titre" />
            <p class="titre-image">${titre}</p>
            <div class="action-image-buttons" data-show="admin">
                    <button
                    type="button"
                    class="btn btn-outline-light"
                    data-bs-toggle="modal"
                    data-bs-target="#EditionPhotoModal"
                    >
                    <i class="bi bi-pencil-square"></i>
                    </button>
                    <button
                    type="button"
                    class="btn btn-outline-light"
                    data-bs-toggle="modal"
                    data-bs-target="#DeletePhotoModal"
                    >
                    <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        </div>`;
}
