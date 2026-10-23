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

  /* LIBROS
     titulo    → nombre del libro
     subtitulo → línea debajo del título ("" si no lleva)
     texto     → frase corta (se ve siempre y también en el anuncio flotante)
     detalle   → texto largo que se abre con "Ver más". Formato:
                   ## Subtítulo
                   - punto de una lista
                   cualquier otra línea es un párrafo
                 Escríbelo entre las comillas invertidas ` ` */
  libros: [
    {
      id: "algebra",
      titulo: "Álgebra: Teoría y Problemas",
      subtitulo: "",
      edicion: "4.ª edición",
      precio: "Bs 60",
      imagen: "img/libro-algebra.jpg",
      texto: "¡Domina el álgebra y prepárate para ingresar a la universidad!",
      detalle: `
## ¿A quién está dirigido?
- Estudiantes preuniversitarios.
- Bachilleres y postulantes a universidades.
- Estudiantes de universidades públicas y privadas.
- Aspirantes a institutos y centros de formación superior.

## Ideal para preparar tu ingreso a:
- Facultad de Ingeniería.
- Facultad de Ciencias Económicas y Financieras.
- Facultad de Medicina.
- Facultad de Tecnología.
- Facultad de Agronomía.
- Facultad de Ciencias Puras.
- Facultad de Bioquímica y Farmacia.
- Colegio Militar.
- Academia Nacional de Policías.
- Institutos Tecnológicos.
- Escuelas Superiores de Formación de Maestros.
- Otras facultades y carreras que requieren conocimientos de álgebra y ciencias exactas.

## ¡Construye hoy tu futuro profesional!
Refuerza tus bases matemáticas, desarrolla tu razonamiento lógico y prepárate para afrontar con mayor confianza los desafíos de los exámenes de ingreso.
Álgebra: Teoría y Problemas. Tu herramienta para aprender, practicar y avanzar hacia tus metas académicas.
`
    },
    {
      id: "compendio",
      titulo: "Exámenes Pasados de Admisión – UMSA",
      subtitulo: "Facultad de Ciencias Económicas y Financieras",
      edicion: "5.ª edición",
      precio: "Bs 40",
      imagen: "img/libro-compendio.jpg",
      texto: "¡Prepárate para tu ingreso a la UMSA con exámenes reales de gestiones anteriores!",
      detalle: `
## Para las carreras de:
- Administración de Empresas
- Economía
- Contaduría Pública

## ¿Qué encontrarás en este compendio?
- **Exámenes de admisión de gestiones pasadas:** recopilación de exámenes correspondientes al período 2009–2025.
- **Más de 800 problemas resueltos:** organizados y separados por carrera para facilitar tu preparación.
- **Formularios completos:** material de consulta con fórmulas de los diferentes temas evaluados.
- **Preparación práctica:** una herramienta para reforzar tus conocimientos, familiarizarte con el tipo de preguntas y practicar para tu examen de ingreso.

## Prepárate con material especializado
Si tu objetivo es ingresar a la Facultad de Ciencias Económicas y Financieras de la Universidad Mayor de San Andrés (UMSA), este compendio puede convertirse en un valioso apoyo para tu preparación.
Estudia, practica y prepárate para dar el siguiente paso hacia tu futuro profesional.
`
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
    { id: "medicina",    nombre: "Facultad de Medicina", corto: "Medicina", examenes: "" },
    { id: "anapol",      nombre: "Academia Nacional de Policías", corto: "ANAPOL", examenes: "" },
    { id: "colmil",      nombre: "Colegio Militar", corto: "COLMIL", examenes: "" },
    { id: "esfm",        nombre: "Normal Superior de Maestros", corto: "ESF", examenes: "" }
  ],
   
  /* "Quiero estudiar…"
     para  = facultades que llevan la materia (se muestran como etiquetas)
     id    = nombre del archivo en /problemas (sin .txt)
     pdf   = enlace de Drive para descargar la práctica del tema */
  materias: [
    {
      id: "algebra",
      nombre: "Álgebra",
      para: ["ingenieria", "economicas", "farmacia", "informatica", "medicina", "anapol", "colmil"],
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
