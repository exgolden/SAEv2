1. Que pasa si un suatio pierde su tarjeta
2. Usar un middleware para verificar que todos mis datos sean correctos
3. Usar una sola tarjeta para distitnos tipos de vehiculos
4. Solo uar enteros a la hoira de cargar saldo
5. Normalizar los logs
6. Cuamtos digitps tiene una tarjeta RFID
7. Debo devolver los errores al front? para darles una idea a los operadores de que estan haciendo mal
8. Hacer una carpeta utils
9. Al parecer la documentacion solo servira en desarrollo: url: 'http://localhost:2100'
10. Como manejar que el error no sea una instancia de Error en el registro, es mas, deberia de manejarla? que tipo
    de error podria ser este
11. No es mala idea que mis rutas esten escritas dentro del front?
    Twest

12. Los ID de tarjeta se pueden repetir, pero no tendria sentido comporbarlo, pues eso siginifica que releimos una tarjeta usada

13. Al buscar un usuario, con un identificador, nos muestra el usuario peor no manda nada a la consola
14. Falta una funcion para modificar usuarios
15. No caben tanntas opciones en el navbar
16. Al eliminar el usuario, tenemos que efectuar una busqueda, mostrar el usuario a eliminar y despues confirmar la eliminacion
17. Por ahora los scripts que mandan los datos a las formas se encuentran dentro de cada html, deberiamos de cerar un solo scripts.js
    para incluirlos
18. Como aplicar esto: If you want to restrict CORS to certain domains only (for example, allow requests only from localhost:2100), you can configure cors like this:
    app.use(cors({
    origin: "http://localhost:2100", // Allow only this origin
    }));
19. Checar los errores que nos manda los scripts de js en cada pagina
20. Buscar usuario tampoco arroja nada en la consola
21. Buscar usuario en su API miestra un erro cuando no encuentra al usuario,
    pero la tabla no muestra este error
22. Al crear un usuario, este solo envia la info, pero no dice nada sobre que el usuario fue creado

23. En la tabla de buscar, cambiar el orden de las lineas donde declaramos el response y donde borramos el html
24. Desde el front si puedo mandar identificadores vacios y la API si los crea
25. Cuanod buscamos un usuario que no existe, nos da este error: "Error al buscar usuario: Error: 404", quiero algo mas preciso, este
    error si sale en la consola
26. Creo que estoy repitiendo el eliminar el innerHTML de la tabla
27. Revisar bien la logica del script para eliminar
28. Eliminiar esta escrito con las patas
29. Debo de darle un formato a mis logs, parecido a morgan
30. Mostrar un mensaje en el front cuando no encontremos el usuario que biscamos
31. Al buscar un usuario no borramos nuestra forma
32. Cuando busco un usuario sin identificadores desde el front, me manda un 400 pero no reconozco el mensaje del error: Error al buscar usuario: Error: 400,
    mi error deberia ser: res.status(500).json({mensaje: "Error al buscar el usuario"})
33. Normalizar los logs de buscar
34. El segundo identificador que use fue el celular, pero por ejemplo, no se como manejar que un usuario tenga dos vehiculos, con tos tarjetas diferenres
    o con un input al registrar? aun no lo defino, de manera que al busar un usuario, este pudede no ser unico y entonces la funcion de buscar regresa un array
    lo cual no es correcto. Solo deberiamos de bucsra usuario por su telefono, si es que ets pierde su tarjeta, sin embargo el telefono no es unico
35. Debido a esto, en el controller de buscar, tuve que implementar: "console.log(`Usuario encontrado: ${fetchedUser[0].tarjeta}`)"
36. Estandarizar scripts
