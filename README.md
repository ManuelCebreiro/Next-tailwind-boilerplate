# Para mi yo futuro o a quien le pueda servir
### Este template está creado para empezar con unos mínimos que puede ahorrarme tiempo a la hora de iniciar un proyecto personal. 
`**No te enfoques en el estilo actual, intento hacerlo de lo mas neutral posible **`

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Para empezar, aunque no hace falta ni decirlo, pero bueno por si acaso.

First, run the development server:  `(y a darle sin miedo)`

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# ¿Que me voy a encontrar?
Cuando abras el proyecto, tendras un layout, con su navbar y su footer con un children para que puedas meter todo lo que quieras.
```js    
<div>
    <Navbar />
        <div>{children}</div>
    <Footer />
</div>
```
Entre otras cosas, que me parecen interesantes para tener ya preparadas, como es un `cambio de lenguaje`, tiene instalado **i18next**, configurado con `Inglés y español`, con la libertad para añadir los idiomas necesarios, las carpetas de locales, donde ya se irán ***`¡Ojo!`*** creando automáticamente los archivos json de las traducciones.

===> Si dudas y no la conoces [i18next](https://www.i18next.com/) <==
### Navbar responsivo
Con su boton hamburguesa, y sus iconos, para cerrar y desplegar menu.

### Componentes de ejemplos
Para llegar y desembarcar. Modificarlo al gusto y listo.

# Librerías que he instalado.
`Libertad para borrar la que no se quiera `
- **i18next** => Ya dicho anteriormente, para las traducciones de idioma.
- **react-iconst** => Iconos. Ya hay alguno en el navbar.
- **react-loading** => Para animaciones, está ya en un componente que tiene de todo, y una de las opciones usa esta librería.
- **sass** => Ni falta hace que decirlo, pero ahí esta para darle alegría a mi estilo con  tailwindcss.
- **TailwindCSS** => Otro tanto, la clave para volar con los estilos.
- **Typescript** => Bendiciones para tener controlado todo.

Y poco más. Con esto empezar será más fácil.