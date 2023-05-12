# Rapport d'optimisation du projet ScrollyTelling 

[Page Speed Insight ](https://pagespeed.web.dev/analysis/https-lauriehoude-github-io-Projet-Scrollytelling-Petit-chien/gtuce9ed7m?form_factor=desktop) -Rapport du 12 mai 2023, 08:21:25

## Problème #1

### Éviter d'énorme charges utiles de réseau

En résumer, le problème est que dans mon dossier img, il ya des images que je n'utilise pas donc elles prennent de la place pour rien. Cela rend le chargement de la page plus long.

### Action concrète pour résoudre le problème

Il faudrait supprimer le dossier img_personnages qui contient des images très lourde car il est unitile.


### Résultat

oui ça la marcher car il a monter de 3% mais en considérant que lorsque j'ai rajouter les li et les ul mon score a descendu de 12%

## Problème #2

### Éviter Biggest contentful Paint

En résumer le problème est que le taux de chargement de mon site est trop lent. Il y a des éléments à l'intérieur de mon site qui rend mon site long à charger.

### Action concrète pour résoudre le problème

Pour résoudre ce problème il est suggérer de redimensionner la taille de certaine des images comme par exemple dans mon cas dans le dossier img-element_visuels l,image qui s'appelle nuage est beaucoup trop grosse il faudrait réduire sa taille dans photoshop par exemple.

### Résultat

ça n'a pas marcher.

## Problème #3

### Les éléments d'image ne possèdent pas de width ni de height explicites

Comme le titre le mentionne mes images n'auraient pas de width et ni height défini ce qui peut rendre le site moins accessible pourles plus petite écrans par exmple les téléphonnes.

### Action concrète pour résoudre le problème

Pour résoudre ce problème, il suffit seulement d'attribuer unme largeur et une hauteur à tous mes images du dossier img.
### Résultat

ça n'a pas marcher.

# Rapport d'optimisation du projet après ScrollyTelling 
[Page Speed Insight ](https://pagespeed.web.dev/analysis/https-lauriehoude-github-io-Projet-Scrollytelling-Petit-chien/9rqfnu0op6?form_factor=desktop) -Rapport du 12 mai 2023, 09:47:22


