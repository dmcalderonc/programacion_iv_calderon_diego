# Programación IV

**Autor:** Diego Mauricio Calderón Chamorro  
**Institución:** Universidad UTE  

---

## 🎯 Objetivo Principal

El objetivo central de la asignatura **Programación IV** es el diseño, arquitectura, construcción y despliegue de aplicaciones mediante el **Desarrollo Móvil** moderno. Este repositorio agrupa las prácticas, laboratorios y proyectos desarrollados a lo largo del semestre, abarcando tanto enfoques nativos como multiplataforma (*cross-platform*), así como la integración con servicios de backend.

---

## 🛠️ Stack Tecnológico y Conceptos Clave

A continuación se describen las tecnologías utilizadas en este repositorio y su propósito dentro del ecosistema móvil:

### 1. Node.js
Entorno de ejecución para JavaScript en el lado del servidor basado en el motor V8 de Google. En el contexto del desarrollo móvil cumple un doble rol fundamental:
* **Backend y APIs:** Permite construir servicios RESTful y servidores en tiempo real (WebSockets) ligeros y escalables para alimentar de datos a las aplicaciones móviles.
* **Tooling móvil:** Actúa como la base de ejecución para gestores de paquetes (`npm`, `yarn`, `pnpm`) y empaquetadores esenciales como *Metro Bundler* en proyectos de React Native.

### 2. React Native
Framework de desarrollo móvil multiplataforma creado por Meta que permite construir aplicaciones para Android e iOS utilizando JavaScript/TypeScript y la librería React. 
* En lugar de renderizar vistas web (*WebViews*), React Native traduce los componentes declarativos de React en **componentes visuales nativos reales** del sistema operativo mediante su arquitectura (JSI / Fabric), logrando una experiencia de usuario fluida con una sola base de código.

### 3. Kotlin
Lenguaje de programación de tipado estático, moderno y conciso desarrollado por JetBrains, establecido por Google como el estándar oficial para el **desarrollo nativo en Android**.
* Destaca por su seguridad frente a punteros nulos (*Null Safety*), soporte nativo para programación asíncrona mediante **Corrutinas** y una interoperabilidad del 100% con Java. Es ideal cuando el proyecto requiere acceso directo al hardware del dispositivo, máximo rendimiento o integración de módulos nativos específicos.

### 4. Dart
Lenguaje de programación desarrollado por Google, orientado a objetos y optimizado para el diseño de interfaces de usuario en múltiples plataformas.
* Su principal fortaleza radica en su sistema de compilación flexible: utiliza compilación **JIT (Just-In-Time)** durante el desarrollo para permitir recargas rápidas en caliente (*Hot Reload*), y compilación **AOT (Ahead-Of-Time)** para producción, generando código máquina nativo de alto rendimiento.

### 5. Flutter
SDK y framework UI de código abierto de Google que utiliza el lenguaje **Dart** para crear aplicaciones multiplataforma desde un único código fuente.
* A diferencia de otros frameworks que delegan el dibujado a los controles del sistema operativo, Flutter utiliza su propio motor gráfico de alto rendimiento (**Impeller / Skia**) para dibujar cada píxel en pantalla a través de un árbol de *Widgets*. Esto garantiza que la interfaz luzca y funcione exactamente igual en cualquier versión de Android o iOS.

---

## 📂 Estructura Sugerida del Repositorio

```text
├── nodejs-apis/          # Servicios backend, APIs REST y utilidades en Node.js
├── react-native-apps/    # Proyectos móviles multiplataforma con React Native / Expo
├── kotlin-android/       # Aplicaciones y laboratorios de Android nativo con Kotlin
├── flutter-projects/     # Aplicaciones multiplataforma y prácticas en Dart / Flutter
├── .gitignore            # Reglas de exclusión global para subcarpetas y compilados
└── README.md             # Documentación general de la materia