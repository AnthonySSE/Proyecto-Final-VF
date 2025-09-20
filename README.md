# Pokédx IA - Single Page Application

## Tema Elegido

**Catálogo de Pokémon con Inteligencia Artificial**

Una aplicación web moderna que combina la información clásica de Pokémon con tecnología de análisis de imágenes por inteligencia artificial. La aplicación permite:

- Explorar un catálogo completo de Pokémon de la primera generación
- Buscar y filtrar Pokémon por nombre, número o tipo
- Ver información detallada de cada Pokémon (estadísticas, habilidades, tipos)
- Clasificar imágenes usando algoritmos de IA que analizan características visuales reales

## Tecnologías Utilizadas

### Frontend Core
- **HTML5 Semántico** - Estructura accesible y moderna
- **Tailwind CSS** - Framework CSS utility-first para diseño responsive
- **Vanilla JavaScript (ES6+)** - Lógica de aplicación con modules nativos
- **Vite** - Build tool y servidor de desarrollo

### APIs y Servicios
- **PokéAPI** - API REST pública para datos de Pokémon
- **TensorFlow.js** - Biblioteca de machine learning para clasificación de imágenes
- **Fetch API** - Comunicación asíncrona con servicios externos

### Arquitectura
- **Single Page Application (SPA)** - Navegación fluida sin recargas
- **Componentes Modulares** - Separación clara de responsabilidades
- **Patrón Observer** - Gestión de estado reactiva
- **Router Nativo** - Sistema de enrutamiento sin dependencias externas

### Funcionalidades de IA
- **Análisis de Píxeles** - Extracción de características de color y brillo
- **Detección de Bordes** - Análisis de contraste y formas
- **Clasificación Contextual** - Predicciones basadas en características visuales
- **Canvas API** - Procesamiento de imágenes en el navegador

## Estructura del Proyecto

```
pokedx-ia-spa/
├── index.html                 # Página principal
├── package.json              # Dependencias y scripts
├── vite.config.js            # Configuración de Vite
├── README.md                 # Esta documentación
├── src/
│   ├── main.js               # Punto de entrada de la aplicación
│   ├── components/
│   │   ├── Header.js         # Navegación y menú responsive
│   │   ├── Footer.js         # Pie de página
│   │   ├── HomePage.js       # Página de inicio con hero section
│   │   ├── CatalogPage.js    # Catálogo con búsqueda y filtros
│   │   ├── AIDetectorPage.js # Detector IA con drag & drop
│   │   ├── PokemonCard.js    # Tarjeta individual de Pokémon
│   │   └── PokemonModal.js   # Modal con información detallada
│   ├── services/
│   │   ├── Router.js         # Sistema de enrutamiento SPA
│   │   ├── PokemonService.js # Servicio para PokéAPI
│   │   └── AIService.js      # Servicio de análisis de imágenes
│   └── store/
│       └── AppStore.js       # Gestión de estado global
└── dist/                     # Archivos compilados (generado)
```

## Cómo Correr el Proyecto

### Opción 1: Con Vite (Recomendado)

#### Prerrequisitos
- Node.js 16+ y npm instalados
- Navegador web moderno con soporte para ES6 modules

#### Instalación y Ejecución

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd pokedx-ia-spa
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```
   La aplicación se abrirá automáticamente en `http://localhost:3000`

4. **Build para producción**
   ```bash
   npm run build
   ```
   Los archivos optimizados se generarán en la carpeta `dist/`

5. **Preview de producción**
   ```bash
   npm run preview
   ```

### Opción 2: Servidor Estático Simple

Si no quieres instalar Node.js, puedes ejecutar la aplicación con cualquier servidor HTTP estático:

#### Con Python 3:
```bash
cd pokedx-ia-spa
python -m http.server 8000
```
Acceder a `http://localhost:8000`

#### Con Python 2:
```bash
cd pokedx-ia-spa
python -m SimpleHTTPServer 8000
```

#### Con Live Server (VSCode):
1. Instalar la extensión "Live Server" en VSCode
2. Abrir el archivo `index.html`
3. Hacer clic derecho y seleccionar "Open with Live Server"

### Opción 3: Hosting Estático

La aplicación está optimizada para hosting estático y es compatible con:
- **Vercel** - Deploy automático desde GitHub
- **Netlify** - Drag & drop de la carpeta `dist/`
- **GitHub Pages** - Hosting gratuito para proyectos públicos
- **Firebase Hosting** - Integración con otros servicios de Firebase

## Funcionalidades Principales

### Navegación
- **Responsive Design** - Adaptable a móviles, tablets y desktop
- **Menú Hamburguesa** - Navegación móvil intuitiva
- **Rutas SPA** - Navegación sin recargas de página

### Catálogo de Pokémon
- **150 Pokémon** - Primera generación completa
- **Búsqueda en Tiempo Real** - Filtrado por nombre o número
- **Filtros por Tipo** - 15 tipos diferentes (Fuego, Agua, Planta, etc.)
- **Modal Detallado** - Estadísticas, habilidades y información completa
- **Lazy Loading** - Carga optimizada de imágenes

### Detector de IA
- **Drag & Drop** - Subida intuitiva de imágenes
- **Análisis Visual** - Procesamiento de características de color y forma
- **Predicciones Contextuales** - Clasificación inteligente basada en contenido
- **Feedback Visual** - Barras de confianza y porcentajes de precisión

## Performance y Optimizaciones

- **Cache Inteligente** - Los datos de Pokémon se almacenan en memoria
- **Debounced Search** - Búsqueda optimizada con delay de 300ms
- **Minificación** - Código comprimido en producción
- **Tree Shaking** - Eliminación de código no utilizado
- **Lazy Loading** - Carga diferida de imágenes y componentes

## Compatibilidad

- **Navegadores Modernos** - Chrome 60+, Firefox 60+, Safari 12+, Edge 79+
- **Resoluciones** - Responsive desde 320px hasta 4K
- **Dispositivos** - Desktop, tablet y móvil
- **Accesibilidad** - Navegación por teclado y lectores de pantalla

## Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo con hot reload
npm run build    # Build optimizado para producción
npm run preview  # Preview del build de producción
```

## Licencia

MIT License - Ver archivo LICENSE para detalles.

## Créditos

- **PokéAPI** - Datos de Pokémon (https://pokeapi.co/)
- **TensorFlow.js** - Biblioteca de machine learning
- **Tailwind CSS** - Framework CSS
- **Vite** - Build tool y servidor de desarrollo

---

**Desarrollado como proyecto educativo demostrando arquitectura SPA moderna, integración de APIs externas y implementación de IA client-side.**
