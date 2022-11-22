const allServicios = [
    {
        id: "001",
        nombre: "Autos",
        precio: 2500,
        descripcion: "Asegurá tu auto y manejá tranquilo.",
        img: "assets/auto.png",
        alt: "auto png",
    },
    {
        id: "002",
        nombre: "Motos",
        precio: 1500,
        descripcion: "Protegete a vos y a tu moto en todo momento.",
        img: "assets/moto.png",
        alt: "moto png",
    },
    {
        id: "003",
        nombre: "Casas",
        precio: 4000,
        descripcion:"Tu casa siempre protegida con RyM Seguros.",
        img: "assets/casa.png",
        alt: "casas png",
    },
    {
        id: "004",
        nombre: "Caídas",
        precio: 1000,
        descripcion: "Procura estar cubierto en casos de accidente.",
        img: "assets/caidas.png",
        alt: "caidas png",
    },
    {
        id: "005",
        nombre: "E.Jurídico",
        precio: 3000,
        descripcion: "Nos dedicamos al asesoramiento integral y representación jurídica de particulares y empresas.",
        img: "assets/juridicolog.png",
        alt: "juridico png",
    },
    {
        id: "006",
        nombre: "Siniestros",
        precio: 3000,
        descripcion: "Trabajá tranquilo, seguro prestacional para independientes.",
        img: "assets/siniestros.png",
        alt: "siniestro png",
    },
    {
        id: "007",
        nombre: "Salud",
        precio: 1000,
        descripcion: "Sabemos lo importante que es contar con una cobertura apropiada para afrontar los momentos más difíciles. Por ello te brindamos respaldo y seguridad.",
        img: "assets/salud.png",
        alt: "salud png",
    },
    {
        id: "008",
        nombre: "Gestoría",
        precio: 3000,
        descripcion: "Gestoria del automotor, Asesoramiento de Seguros.",
        img: "assets/papeleo.png",
        alt: "papeleo",
    },
    {
        id: "009",
        nombre: "Empresas",
        precio: 6000,
        descripcion: "Te ofrecemos una cobertura total que garantice el amparo del patrimonio de tu empresa, protegiendo los bienes ante los riesgos que puedan afectarlos.",
        img: "assets/empresas.png",
        alt: "empresa png",
    },
    {
        id: "010",
        nombre: "Locales",
        precio: 5000,
        descripcion: "Nuestro Seguro Integral de Comercio combina las coberturas más completas del mercado, protegiendo las mercaderías, mobiliarios, maquinarias y tus herramientas de trabajo ante daños, incendio y robos.",
        img: "assets/local.png",
        alt: "local png",
    },
];

let carrito

if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
    carrito = []
}

console.log('carrito', carrito);