/*
On créer une factory (fonction) qui renvoi un middleware chargé d'exécuter le controller
(middleware) en lui refournissant les élément nécessaire à l'execution d'un middleware (cad : req,
res, next)

Cela nous permet de récupérer la main sur l'exécution du controller et ainsi l'entouré d'un
try…catch…
*/

/*
Vocabulaire :

- closure : fonction qui renvoi une autre fonction

- factory : on sens strict du terme c'est une méthode ou une fonction qui est chargé d'instancié un
  ou des objets. ici on l'entend dans le sens on c'est une fonction qui est charghé de créer un
  objet (par ex un fonction)

- wrapper : Design Pattern qui permet d'encapsuler un série d'instruction afin de les gérer du
  manière particulière. On parle de wrapper à partir du moment on a le désire de
  factoriser/centraliser des instructions récurrentes.

*/

export default (controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
  } catch (err) {
    next(err);
  }
};
