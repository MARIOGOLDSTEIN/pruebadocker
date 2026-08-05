FROM nginx:alpine
# Copiamos la configuración de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copiamos nuestra "SPA" (el index.html)
COPY index.html /usr/share/nginx/html/index.html
# Nginx expone el 80 por defecto hacia la red interna