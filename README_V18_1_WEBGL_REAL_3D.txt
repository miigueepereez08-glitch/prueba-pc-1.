KAYN ANDAMIOS PRO v18.1 - WEBGL REAL 3D INTEGRADO

Cambio importante:
- Se sustituye el falso 3D dibujado en canvas 2D por un motor WebGL real con Three.js dentro del Editor PRO.
- El 3D ya no es una perspectiva plana: ahora usa escena, cámara, luces, materiales metálicos, geometría volumétrica y OrbitControls.

Qué cambia:
- 3D integrado dentro de editor-modulos.html.
- Misma estructura creada en 2D se reconstruye en 3D.
- Selección de módulos mediante raycasting real.
- Movimiento de módulos en 3D sobre plano de suelo.
- Cámara orbital suave.
- Europeo tipo marco con marcos, largueros, diagonales, plataformas, rodapiés y husillos.
- Multidireccional con montantes, largueros, diagonales, plataformas y rosetas.

Nota:
- Usa Three.js desde CDN para evitar build y mantenerlo subible directo a GitHub/Vercel.
