/* =====================================================================
   CONFIGURACIÓN DEL SITIO
   Aquí cambias: redes, WhatsApp, libros, enlaces de Drive y la lista de temas.
   Los PROBLEMAS no van aquí: van en la carpeta /problemas (un .txt por tema).

   Enlaces de Drive: clic derecho en el archivo o carpeta → Compartir →
   "Cualquier persona con el enlace" → Copiar enlace. Pégalo entre las comillas.
   Si un enlace queda "" (vacío), el botón aparece como "próximamente".
   ===================================================================== */

window.CONFIG = {

  autor: {
    nombre: "MSc. Lic. César Campos Chambi",
    foto: "img/autor.jpg"
  },

  /* Enlace de tu código QR de WhatsApp. Si prefieres que el mensaje llegue
     ya escrito, pon tu número con 591 delante en "numero" (ej. "59171234567"). */
  whatsapp: {
    enlace: "https://wa.me/qr/4XD6REPYZ4XUE1",
    numero: ""
  },

  /* Pega aquí tus perfiles. Los que queden vacíos no se muestran. */
  redes: {
    tiktok: "https://www.tiktok.com/@mathconcesarin",
    youtube: "",
    instagram: ""
  },

  libros: [
    {
      id: "algebra",
      titulo: "Álgebra: Teoría y Problemas",
      edicion: "4.ª edición",
      precio: "Bs 60",
      imagen: "img/libro-algebra.jpg",
      texto: "Teoría completa y problemas de los 20 capítulos del preuniversitario."
    },
    {
      id: "compendio",
      titulo: "Compendio de Exámenes de Admisión · Fac. de Cs. Económicas y Financieras",
      edicion: "5.ª edición",
      precio: "Bs 40",
      imagen: "img/libro-compendio.jpg",
      texto: "Más de 800 problemas de exámenes pasados resueltos, gestiones 2009–2025."
    }
  ],

  /* Anuncio flotante de los libros (en segundos) */
  anuncio: { primero: 25, cada: 120, duracion: 14 },

  /* "Soy de…": examenes = carpeta de Drive con los PDF de exámenes pasados */
  facultades: [
    { id: "ingenieria",  nombre: "Facultad de Ingeniería", corto: "Ingeniería", examenes: "" },
    { id: "economicas",  nombre: "Facultad de Ciencias Económicas y Financieras", corto: "Económicas", examenes: "" },
    { id: "farmacia",    nombre: "Facultad de Ciencias Farmacéuticas y Bioquímicas", corto: "Farmacia y Bioquímica", examenes: "" },
    { id: "informatica", nombre: "Facultad de Ciencias Puras y Naturales", sub: "Carrera de Informática", corto: "Informática", examenes: "" },
    { id: "esfm",        nombre: "ESFM · Normales Superiores", corto: "ESFM", examenes: "" }
  ],

  /* "Quiero estudiar…"
     para  = facultades que llevan la materia (se muestran como etiquetas)
     id    = nombre del archivo en /problemas (sin .txt)
     pdf   = enlace de Drive para descargar la práctica del tema */
  materias: [
    {
      id: "algebra",
      nombre: "Álgebra",
      para: ["ingenieria", "economicas", "farmacia", "informatica"],
      temas: [
        { id: "algebra-00-aritmetica",     cap: "Introducción", nombre: "Aritmética y conocimientos básicos", pdf: "" },
        { id: "algebra-01-logica",         cap: "Cap. I",     nombre: "Lógica", pdf: "" },
        { id: "algebra-02-conjuntos",      cap: "Cap. II",    nombre: "Teoría de conjuntos", pdf: "" },
        { id: "algebra-03-exponentes",     cap: "Cap. III",   nombre: "Teoría de exponentes", pdf: "" },
        { id: "algebra-04-ec-exponenciales", cap: "Cap. IV",  nombre: "Ecuaciones exponenciales", pdf: "" },
        { id: "algebra-05-expresiones",    cap: "Cap. V",     nombre: "Expresiones algebraicas", pdf: "" },
        { id: "algebra-06-productos",      cap: "Cap. VI",    nombre: "Productos notables", pdf: "" },
        { id: "algebra-07-division",       cap: "Cap. VII",   nombre: "División algebraica", pdf: "" },
        { id: "algebra-08-cocientes",      cap: "Cap. VIII",  nombre: "Cocientes notables", pdf: "" },
        { id: "algebra-09-factorizacion",  cap: "Cap. IX",    nombre: "Factorización", pdf: "" },
        { id: "algebra-10-racionalizacion", cap: "Cap. X",    nombre: "Racionalización", pdf: "" },
        { id: "algebra-11-fracciones",     cap: "Cap. XI",    nombre: "Fracciones algebraicas", pdf: "" },
        { id: "algebra-12-combinatorio",   cap: "Cap. XII",   nombre: "Análisis combinatorio", pdf: "" },
        { id: "algebra-13-binomio",        cap: "Cap. XIII",  nombre: "Binomio de Newton", pdf: "" },
        { id: "algebra-14-ecuaciones",     cap: "Cap. XIV",   nombre: "Teoría de ecuaciones", pdf: "" },
        { id: "algebra-15-sistemas",       cap: "Cap. XV",    nombre: "Sistemas de ecuaciones", pdf: "" },
        { id: "algebra-16-planteo",        cap: "Cap. XVI",   nombre: "Planteo de ecuaciones", pdf: "" },
        { id: "algebra-17-inecuaciones",   cap: "Cap. XVII",  nombre: "Inecuaciones", pdf: "" },
        { id: "algebra-18-progresiones",   cap: "Cap. XVIII", nombre: "Progresiones", pdf: "" },
        { id: "algebra-19-logaritmos",     cap: "Cap. XIX",   nombre: "Logaritmos", pdf: "" },
        { id: "algebra-20-trigonometria",  cap: "Cap. XX",    nombre: "Trigonometría", pdf: "" }
      ]
    },
    {
      id: "razonamiento",
      nombre: "Razonamiento Matemático",
      para: ["esfm"],
      temas: [
        { id: "razonamiento", cap: "", nombre: "Razonamiento Matemático", pdf: "" }
      ]
    },
    {
      id: "calculo",
      nombre: "Cálculo I",
      para: [],
      temas: [
        { id: "calculo-1-inecuaciones", cap: "Tema 1", nombre: "Inecuaciones", pdf: "" },
        { id: "calculo-2-funciones",    cap: "Tema 2", nombre: "Funciones", pdf: "" },
        { id: "calculo-3-limites",      cap: "Tema 3", nombre: "Límites", pdf: "" },
        { id: "calculo-4-derivada",     cap: "Tema 4", nombre: "La derivada", pdf: "" },
        { id: "calculo-5-integrales",   cap: "Tema 5", nombre: "Integrales", pdf: "" }
      ]
    }
  ]
};
