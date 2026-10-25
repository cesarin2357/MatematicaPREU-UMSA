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
- `video:` es el enlace del video **de ese ejercicio** (no el del canal). Déjalo vacío hasta tenerlo; luego pégalo al lado.
- En las opciones puedes usar LaTeX igual que en el enunciado: `$x^{2}$`, `$\frac{1}{a}$`, `$\sqrt{2}$`. Para fracciones más grandes usa `$\dfrac{1}{a}$`.
- `# Título` (un solo #) crea un subtítulo dentro del tema.
3. Toca **Commit changes**. En 1–2 minutos aparece en la página.

## Enlaces de Drive, redes y libros
Todo está en `config.js` (ábrelo y toca ✏️):
- `redes`: enlaces de TikTok, Facebook, YouTube e Instagram (los vacíos no se muestran).
  - `youtube` es el enlace del **canal**. Los videos de cada ejercicio van en la línea `video:` del .txt.
  - `tiktok` también se usa para el botón **Pedir por TikTok** de los libros.
- `facultades → examenes`: carpeta de Drive con los exámenes pasados de cada facultad.
- `materias → temas → pdf`: enlace de Drive de la práctica de cada tema.
- `libros`: títulos, precios y textos.
- Todas las áreas muestran todos los temas; la lista `para` de cada materia ya no se usa.
