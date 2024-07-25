/* ejemplo de modelo bd */
/* 
let peliculas = {'uno','dos','tres'}
let peliculas = [
    {
        id: 1,
        nombre: 'twisters',
        year: 2024,
        direccionPelicula: 'lee isaac chung',
        guionistas: ['michael cricton','frederic monsterhouse'],
        genero: 'accion',
        image: 'url'
    },
    {
        id: 2,
        nombre: 'twisters',
        year: 2024,
        direccionPelicula: 'lee isaac chung',
        guionistas: ['michael cricton','frederic monsterhouse'],
        genero: 'accion',
        image: 'url'
    }

]

/* let objeto ={
    nombre: 'twisters',
    year: 2024,
    direccionPelicula: 'lee isaac chung',
    guionistas: ['michael cricton','frederic monsterhouse'],
    genero: 'accion',
    image: 'url'
} */


/* 30 grupos= id, nombre, year, genero, imagen */

let peliculas = [
    {
        id: 1,
        nombre: 'Blade runner',
        year: 1983,
        director: 'Ridley Scott',
        guionistas: 'Philip K. Dick',
        genero: ['accion','ciencia ficciòn','drama'],
        image: 'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
    },
    {
        id: 2,
        nombre: 'Fight Club',
        year: 1999,
        director: 'David Fincher',
        guionistas: 'Jim Uhls',
        genero: ['Thriller psicològico','Comedia negra'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4I6FAlfWVwjpV6kkM2vzPL_CfAgqdHQD2rw&s'
    },
    {
        id: 3,
        nombre: 'The Big Lebowski',
        year: 1998,
        director: ['Ethan Coen','Joel Coen'],
        guionistas: ['Ethan Coen','Joel Coen'],
        genero: ['Accion','Comedia','Crimen','Deportes'],
        image: 'https://i.ebayimg.com/images/g/8x8AAOSw2StghuRs/s-l640.jpg'
    },
    {
        id: 4,
        nombre: 'Lost in Translation',
        year: 2003,
        director: 'Sofia Coppola',
        guionistas: 'Sofia Coppola',
        genero: ['Drama','Romantico'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgmkjWSD3w707ULnBaQF6t1ycHovlsRACKyw&s'
    },
    {
        id: 5,
        titulo: 'Donnie Darko',
        year: 2001,
        director: 'Richard Kelly',
        guionista: 'Richard Kelly',
        genero: ['Drama','Ciencia ficción','Thriller'],
        imagen: ''
    },
    {
        id: 6,
        titulo: 'The Warriors',
        year: 1979,
        director: 'Walter Hill',
        guionista: 'David Shaber',
        genero: ['Acción', 'Crimen'],
        imagen: ''
    },
    {
        id: 7,
        titulo: 'Dune',
        year: 2021,
        director: 'Denis Villeneuve',
        guionista: ['Denis Villeneuve', 'Jon Spaihts', 'Eric Roth'],
        genero: ['Ciencia ficción', 'Aventura'],
        imagen: ''
    },
    {
        id: 8,
        titulo: 'Joker',
        year: 2019,
        director: 'Todd Phillips',
        guionista: ['Todd Phillips', 'Scott Silver'],
        genero: ['Drama', 'Crimen', 'Thriller'],
        imagen: ''
    },
    {
        id: 9,
        titulo: 'The Northman',
        year: 2022,
        director: 'Robert Eggers',
        guionista: ['Robert Eggers', 'Sjón'],
        genero: ['Acción', 'Aventura', 'Drama'],
        imagen: ''
    },
    {
        id: 10,
        titulo: 'The Batman',
        year: 2022,
        director: 'Matt Reeves',
        guionista: ['Matt Reeves', 'Peter Craig'],
        genero: ['Acción', 'Crimen', 'Drama'],
        imagen: ''
    },
    {
        id: 11,
        titulo: 'Avatar',
        year: 2009,
        director: 'James Cameron',
        guionista: 'James Cameron',
        genero: ['Ciencia ficción', 'Aventura'],
        imagen: ''
    },
    {
        id: 12,
        titulo: 'Léon: The Professional',
        anio: 1994,
        director: 'Luc Besson',
        guionista: 'Luc Besson',
        genero: ['Acción', 'Drama', 'Thriller'],
        imagen: ''
    },
    {
        id: 13,
        titulo: "Pulp Fiction",
        anio: 1994,
        director: "Quentin Tarantino",
        guionista: "Quentin Tarantino, Roger Avary",
        genero: "Crimen, Drama"
    },
    {
        id: 14,
        titulo: "Inception",
        anio: 2010,
        director: "Christopher Nolan",
        guionista: "Christopher Nolan",
        genero: "Acción, Ciencia ficción, Thriller"
    },
    {
        id: 15,
        titulo: "The Matrix",
        anio: 1999,
        director: "Lana Wachowski, Lilly Wachowski",
        guionista: "Lana Wachowski, Lilly Wachowski",
        genero: "Acción, Ciencia ficción"
    },
    {
        id: 16,
        titulo: "The Godfather",
        anio: 1972,
        director: "Francis Ford Coppola",
        guionista: "Mario Puzo, Francis Ford Coppola",
        genero: "Crimen, Drama"
    },
    {
        id: 17,
        titulo: "The Shawshank Redemption",
        anio: 1994,
        director: "Frank Darabont",
        guionista: "Frank Darabont",
        genero: "Drama"
    },
    {
        id: 18,
        titulo: "Goodfellas",
        anio: 1990,
        director: "Martin Scorsese",
        guionista: "Nicholas Pileggi, Martin Scorsese",
        genero: "Crimen, Drama"
    },
    {
        id: 19,
        titulo: "The Silence of the Lambs",
        anio: 1991,
        director: "Jonathan Demme",
        guionista: "Ted Tally",
        genero: "Drama, Thriller, Crimen"
    },


]
