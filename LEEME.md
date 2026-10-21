# Cómo actualizar el sitio

## Agregar problemas a un tema
1. Abre la carpeta `problemas/` y el archivo del tema (ej. `algebra-06-productos.txt`).
2. Toca el lápiz ✏️ (Edit) y pega los problemas al final con este formato:

```
## 1
Enunciado con fórmulas entre $ $, por ejemplo $(a+b)^2$.
imagen: img/figuras/nombre.png
A) opción
B) opción correcta *
C) opción
D) opción
E) opción
video:
```
- El `*` al final marca la respuesta correcta.
- `imagen:` es opcional (sube la imagen a `img/figuras/`).
- `video:` déjalo vacío hasta tener el enlace de YouTube; luego pégalo al lado.
- `# Título` (un solo #) crea un subtítulo dentro del tema.
3. Toca **Commit changes**. En 1–2 minutos aparece en la página.

## Enlaces de Drive, redes, libros y WhatsApp
Todo está en `config.js` (ábrelo y toca ✏️):
- `redes`: pega tus enlaces de TikTok, YouTube e Instagram.
- `facultades → examenes`: carpeta de Drive con los exámenes pasados de cada facultad.
- `materias → temas → pdf`: enlace de Drive de la práctica de cada tema.
- `libros`: títulos, precios y textos.
- `whatsapp → numero`: si lo llenas (591 + número), el mensaje de compra llega ya escrito.
