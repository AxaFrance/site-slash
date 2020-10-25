## 1) Général

Les actions régressives sont l’ensemble des actions qui permettent un retour à un état antérieur ou une destruction.

Elles font parties des actions «&nbsp;courantes&nbsp;» et doivent donc toutes respecter la même implémentation dans les différents produits.

<p><img src="../../assets/images/actions-reg/actions-reg-01.jpg" alt="actions régressives" class="tk-markdown__img-fullscreen" /></p>

## 2) Utilisation

### a) Annuler

- Annuler : arrête l’action en cours et ferme l’item en cours. Ceci prévient toute destruction ou modification critique de données dans le cadre d’une double confirmation de l’utilisateur.
- Il sera représenté par un CTA secondaire à gauche d’un CTA principal.

### b) Effacer

- Enlève toute donnée présente dans un champ ou sélecteur multiple. Permet d’accélérer les modifications.
- Il sera représenté par un pictogramme «&nbsp;x&nbsp;» à la droite du champ, item, valeur, label.

### c) Enlever

- Enlève un élément d’une liste sans le détruire. Plusieurs éléments peuvent être sélectionnés à la fois.
- Il sera représenté par un pictogramme «&nbsp;-&nbsp;» à la droite du champ, item, valeur, label.

<p><img src="../../assets/images/actions-reg/actions-reg-02.jpg" alt="actions régressives" class="tk-markdown__img-fullscreen" /></p>

### d) Erreurs

- Une erreur se produit lorsqu’un processus échoue ou que la donnée ne correspond pas à la demande. Elle doit être exprimée clairement pour que l’utilisateur sache quelle action mener pour la résoudre. Elle doit être représentée en rouge.
- Pour un processus, il faut exprimer la raison de l’échec et l’action à mener: «&nbsp;Le document n’a pas pu être chargé, veuillez réessayer.&nbsp;» Pour un champ de données, il faut indiquer le bon format de données ou rappeler quels champs sont vides/obligatoires: «&nbsp;Veuillez indiquer la date au format DD/MM/AAAA.&nbsp;» ou «&nbsp;Veuillez compléter les champs obligatoires.&nbsp;».
- Le rédactionnel ne doit jamais mettre en défaut l’utilisateur. Il doit permettre de comprendre pourquoi l’erreur a eu lieu et comment la résoudre.
- Préférer limiter le texte à deux lignes maximum.

<p><img src="../../assets/images/actions-reg/actions-reg-03.jpg" alt="actions régressives" class="tk-markdown__img-fullscreen" /></p>

### e) Fermer

- Ferme l’item, la page, le menu, la notification.
- ll sera représenté par un pictogramme «&nbsp;x&nbsp;» en haut à droite de l’item.

### f) Réinitialiser

- Réinitialise les valeurs de base d’un item de choix.
- «&nbsp;Réinitialiser&nbsp;» sera sous forme de lien, placé de préférence en dessous du titre de la section de filtre / élément

<p><img src="../../assets/images/actions-reg/actions-reg-04.jpg" alt="actions régressives" class="tk-markdown__img-fullscreen" /></p>
