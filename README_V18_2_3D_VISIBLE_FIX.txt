KAYN ANDAMIOS PRO v18.2

Corrección crítica: el 3D WebGL no se veía porque no se estaban cargando Three.js ni OrbitControls antes del script del editor.

Cambios:
- Añadida carga estable de Three.js 0.128.0.
- Añadida carga de OrbitControls compatible global.
- Mensaje de carga/reintento dentro del canvas 3D.
- El 3D sigue integrado dentro de editor-modulos.html.
