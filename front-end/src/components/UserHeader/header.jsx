import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../../actions/actions';
import './header.css';

function UserHeader() {
  const dispatch = useDispatch();

  // Extrait les valeurs du profil et du jeton du magasin Redux
  const { firstName, lastName } = useSelector((state) => state.userProfile);
  const { token } = useSelector((state) => state.userLogin);

  // Déclare les états locaux pour les nouveaux prénom et nom
  const [newFirstname, setNewFirstname] = useState(firstName);
  const [newLastname, setNewLastname] = useState(lastName);

  // Déclare l'état local pour le mode d'édition
  const [editButton, setEditButton] = useState(false);

  // Gestionnaire de clic sur le bouton "Edit Name"
  const editNameButton = (e) => {
    e.preventDefault();
    setEditButton(true);
  };

  // Gestionnaire de soumission du formulaire
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // Dispatch de l'action pour mettre à jour le profil avec les nouvelles valeurs
      await dispatch(updateProfile(token, newFirstname, newLastname));

      // Mise à jour du pseudo dans le localStorage
      localStorage.setItem('userPseudo', `${newFirstname} ${newLastname}`);

      // Si la mise à jour réussit, désactiver le mode d'édition
      setEditButton(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      // Gérer les erreurs de mise à jour du profil ici
    }
  };

  // Effet pour récupérer le pseudo sauvegardé dans le localStorage lors du chargement initial
  useEffect(() => {
    const storedPseudo = localStorage.getItem('userPseudo');
    if (storedPseudo) {
      const [storedFirstname, storedLastname] = storedPseudo.split(' ');
      setNewFirstname(storedFirstname);
      setNewLastname(storedLastname);
    }
  }, []);

  // Défini le message de bienvenue en fonction des nouveaux noms (s'ils ont été modifiés) ou des noms existants
  const welcomeMessage = editButton ? `Welcome back` : `Welcome back ${newFirstname} ${newLastname}!`;

  // Si le mode d'édition est désactivé, afficher le nom et le prénom actuels
  if (!editButton) {
    return (
      <div className="header">
        <h1>{welcomeMessage}</h1>
        <button onClick={editNameButton} className="edit-button">
          Edit Name
        </button>
      </div>
    );
  } else {
    // Si le mode d'édition est activé, afficher le formulaire d'édition
    return (
      <div className="header">
        <h1>{welcomeMessage}</h1>
        <form className="editNameContent" onSubmit={submitHandler}>
          <div className="editNameInputs">
            <input
              type="text"
              id="newFirstname"
              value={newFirstname}
              onChange={(e) => setNewFirstname(e.target.value)}
              required
            />
            <input
              type="text"
              id="newLastname"
              value={newLastname}
              onChange={(e) => setNewLastname(e.target.value)}
              required
            />
          </div>
          <div className="editNameButtons">
            <button className="save-button" type="submit">
              Save
            </button>
            <button className="cancel-button" onClick={() => setEditButton(false)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserHeader;
