# Calidad-del-aire-Chile

Alternativa a la visualización actual presente en [SINCA](https://sinca.mma.gob.cl/) utilizando su [API](https://sinca.mma.gob.cl/index.php/json/listadomapa2k19/)

### ToDo
- [x] Ubicar mediante las coordenadas de cada estación su posición en el mapa
- [x] Para cada estación generar un PopUp con información básica de dicha estación
- [x] Organizar los datos dispuestos en la API para ser utilizados en los ToolTips (vienen en un formato un poco complicado)
- [x] Generar un semáforo que muestre el número de estaciones que detectan un nivel seguro, regular o peligroso según sus sensores
- [ ] Crear y disponer material que explique en que consisten las variables que miden los sensores, es decir, material particulado fino (MP) y diversos gases (Ozono, Dióxido de azufre, Dióxido de nitrógeno, Monóxido de carbono)
- [ ] Hacer el deploy de la aplicación en la web (ver [Vercel](https://vercel.com/), además de las típicas alternativas como [Heroku](https://www.heroku.com/) o [Firebase](https://firebase.google.com/?gclid=CjwKCAiA85efBhBbEiwAD7oLQLKn-UyKzqvuicEP6YkkmCb025lfG96bdmpFMrHwW_LbfotJcoC1lhoCYa0QAvD_BwE&gclsrc=aw.ds))
