KAYN ANDAMIOS PRO v18.3 — 3D ESTABLE INTEGRADO

Cambios principales:
- Editor PRO con 3D integrado dentro del mismo espacio de trabajo.
- Corrección de inicialización WebGL/Three.js.
- Cámara orbital estable con Z como eje vertical.
- Picking/selección 3D corregido: los hijos de cada módulo ahora heredan el id del módulo.
- Movimiento de módulos en 3D sobre plano de suelo.
- Vista 2D/3D usando el mismo estado de módulos.
- Fallback visible si Three.js no carga, para evitar pantalla negra.
- Europeo: marcos, plataformas, diagonales, husillos y rodapiés.
- Multidireccional: montantes, rosetas, largueros, diagonales y plataformas.

Notas:
- Three.js se carga desde CDN para mantener el proyecto ligero en Vercel.
- Si se abre offline sin internet, el editor 2D funciona y el 3D mostrará aviso de carga.
