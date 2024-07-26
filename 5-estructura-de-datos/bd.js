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
        image: 'https://images.justwatch.com/poster/53055384/s166/blade-runner.webp'
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
        image: 'https://images.justwatch.com/poster/63710195/s166/lost-in-translation.webp'
    },
    {
        id: 5,
        titulo: 'Donnie Darko',
        year: 2001,
        director: 'Richard Kelly',
        guionista: 'Richard Kelly',
        genero: ['Drama','Ciencia ficción','Thriller'],
        imagen: 'https://images.justwatch.com/poster/306662820/s166/donnie-darko.webp'
    },
    {
        id: 6,
        titulo: 'The Warriors',
        year: 1979,
        director: 'Walter Hill',
        guionista: 'David Shaber',
        genero: ['Acción', 'Crimen'],
        imagen: 'https://images.justwatch.com/poster/283330540/s166/the-warriors-los-amos-de-la-noche.webp'
    },
    {
        id: 7,
        titulo: 'Dune',
        year: 2021,
        director: 'Denis Villeneuve',
        guionista: ['Denis Villeneuve', 'Jon Spaihts', 'Eric Roth'],
        genero: ['Ciencia ficción', 'Aventura'],
        imagen: 'https://images.justwatch.com/poster/285570933/s166/dune-2021.webp'
    },
    {
        id: 8,
        titulo: 'Joker',
        year: 2019,
        director: 'Todd Phillips',
        guionista: ['Todd Phillips', 'Scott Silver'],
        genero: ['Drama', 'Crimen', 'Thriller'],
        imagen: 'https://images.justwatch.com/poster/144144679/s166/joker.webp'
    },
    {
        id: 9,
        titulo: 'El hombre del norte',
        year: 2022,
        director: 'Robert Eggers',
        guionista: ['Robert Eggers', 'Sjón'],
        genero: ['Acción', 'Aventura', 'Drama'],
        imagen: 'https://images.justwatch.com/poster/277249852/s166/the-northman.webp'
    },
    {
        id: 10,
        titulo: 'The Batman',
        year: 2022,
        director: 'Matt Reeves',
        guionista: ['Matt Reeves', 'Peter Craig'],
        genero: ['Acción', 'Crimen', 'Drama'],
        imagen: 'https://images.justwatch.com/poster/264501574/s166/the-batman.webp'
    },
    {
        id: 11,
        titulo: 'Avatar',
        year: 2009,
        director: 'James Cameron',
        guionista: 'James Cameron',
        genero: ['Ciencia ficción', 'Aventura'],
        imagen: 'https://images.justwatch.com/poster/126330821/s166/avatar.webp'
    },
    {
        id: 12,
        titulo: 'Léon: The Professional',
        year: 1994,
        director: 'Luc Besson',
        guionista: 'Luc Besson',
        genero: ['Acción', 'Drama', 'Thriller'],
        imagen: 'https://images.justwatch.com/poster/178643849/s166/el-profesional-leon.webp'
    },
    {
        id: 13,
        titulo: 'Pulp Fiction',
        year: 1994,
        director: 'Quentin Tarantino',
        guionista: ['Quentin Tarantino', 'Roger Avary'],
        genero: ['Crimen','Drama'],
        imagen: 'https://images.justwatch.com/poster/206713994/s166/pulp-fiction.webp'
    },
    {
        id: 14,
        titulo: 'Sexto sentido',
        year: 1999,
        director: 'M. Night Shyamalan',
        guionista: 'M. Night Shyamalan',
        genero: ['Suspenso', 'Drama', 'Sobrenatural'],
        imagen: 'https://images.justwatch.com/poster/241827010/s166/el-sexto-sentido.webp'
    },
    {
        id: 15,
        titulo: "Matrix",
        year: 1999,
        director: ['Lana Wachowski', 'Lilly Wachowski'],
        guionista: ['Lana Wachowski', 'Lilly Wachowski'],
        genero: ['Acción', 'Ciencia ficción'],
        imagen: 'https://images.justwatch.com/poster/105083948/s166/matrix.webp'
    },
    {
        id: 16,
        titulo: 'The Godfather',
        year: 1972,
        director: 'Francis Ford Coppola',
        guionista: ['Mario Puzo', 'Francis Ford Coppola'],
        genero: ['Crimen', 'Drama', 'acción'],
        imagen: 'https://images.justwatch.com/poster/123122757/s166/el-padrino.webp'
    },
    {
        id: 17,
        titulo: 'Cadena Perpetua',
        year: 1994,
        director: 'Frank Darabont',
        guionista: 'Frank Darabont',
        genero: ['Drama', 'Policial'],
        imagen: 'https://images.justwatch.com/poster/263278112/s166/cadena-perpetua.webp'
    },
    {
        id: 18,
        titulo: 'El Renacido',
        year: 2015,
        director: 'Alejandro González Iñárritu',
        guionista: ['Alejandro González Iñárritu', 'Mark L. Smith'],
        genero: ['Acción', 'Drama'],
        imagen: 'https://images.justwatch.com/poster/77832793/s166/el-renacido.webp'
    },
    {
        id: 19,
        titulo: "El Silencio DE LOS Corderos",
        year: 1991,
        director: "Jonathan Demme",
        guionista: "Ted Tally",
        genero: ['Drama', 'Thriller', 'Crimen'],
        imagen: 'https://images.justwatch.com/poster/65513666/s166/el-silencio-de-los-corderos.webp'
    },
    {
        id: 20,
        titulo: 'Blade Runner 2049',
        year: 2017,
        director: 'Denis Villeneuve',
        guionista: ['David Peoples', 'Hampton Fancher'],
        género: ['Ciencia ficción', 'Acciön', 'Drama'],
        imagen: 'https://images.justwatch.com/poster/129662494/s166/blade-runner-2049.webp'
    },
    {
        id: 21,
        titulo: 'Perfect Blue',
        year: 1998,
        director: 'Satoshi Kon',
        guionista: ['Yoshikazu Takeuchi','Lia Sargent'],
        género: ['Animación','Suspenso', 'Drama'],
        imagen: 'https://images.justwatch.com/poster/11044803/s166/perfect-blue-1998.webp'
    },
    {
        id: 22,
        titulo: 'Ciudadano Kane',
        year: 1941,
        director: 'Orson Welles',
        guionista: ['Orson Welles','Herman J. Mankiewicz','John Houseman','Mollie Kent','Roger Q. Denny'],
        género: ['Drama', 'Accion', 'Suspenso'],
        imagen: 'https://images.justwatch.com/poster/308672978/s166/ciudadano-kane.webp'
    },
    {
        id: 23,
        titulo: 'Harakiri',
        year: 1962,
        director: 'Masaki Kobayashi',
        guionista: 'Shinobu Hashimoto',
        género: ['Acción', 'drama'],
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGm4w4G2TJ2WLrBdFvWalBNtBPxHoJWL8chQ&s'
    },
    {
        id: 24,
        titulo: 'Reservoir Dogs',
        year: 1992,
        director: 'Quentin Tarantino',
        guionista: 'Quentin Tarantino',
        género: ['Crimen', 'Accion', 'Policial'],
        imagen: 'https://images.justwatch.com/poster/17147903/s166/reservoir-dogs.webp'
    },
    {
        id: 25,
        titulo: 'Ghost in the shell',
        year: 1995,
        director: 'Mamoru Oshii',
        guionista: 'Masamune Shirow',
        género: ['Ciencia ficción','Animacion','drama','Accion'],
        imagen: 'https://images.justwatch.com/poster/305932791/s166/ghost-in-the-shell.webp'
    },
    {
        id: 26,
        titulo: 'Taxi Driver',
        year: 1976,
        director: 'Martin Scorsese',
        guionista: "Paul Schrader",
        género: ['Drama','Acción','policial'],
        imagen: 'https://images.justwatch.com/poster/306613941/s166/mobeomtaegsi.webp'
    },
    {
        id: 27,
        titulo: "Akira",
        year: 1988,
        director: 'Katsuhiro Otomo',
        guionista: ['Katsuhiro Otomo', 'Izo Hashimoto'],
        género: ['Animación', 'Ciencia ficción'],
        imagen: 'https://images.justwatch.com/poster/307272495/s166/akira.webp'
    },
    {
        id: 28,
        titulo: 'Drive',
        year: 2011,
        director: 'Nicolas Winding Refn',
        guionista: 'Hossein Amini',
        género: ['Acción','Neo-noir','Drama'],
        imagen: 'https://images.justwatch.com/poster/305874346/s166/drive.webp'
    },
    {
        id: 29,
        titulo: 'Dead Poets Society',
        year: 1990,
        director: 'Peter Weir',
        guionista: 'Tom Schulman',
        género: 'tragicomedia',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdLb3DtOUpWFqTKu-lxQWVDncI3hMSgP9yQ&s'
    },
    {
        id: 30,
        titulo: 'El pianista',
        year: 2002,
        director: 'Roman Polanski',
        guionista: 'Ronald Harwood',
        género: ['Drama', 'Guerra'],
        imagen: 'https://images.justwatch.com/poster/74766078/s166/el-pianista.webp'
    },
    
]
