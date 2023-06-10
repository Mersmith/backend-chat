# Establecer la imagen base
FROM node:18.16-alpine3.18

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de configuración del proyecto
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el código fuente del proyecto
COPY . .

# Exponer el puerto de la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start:dev"]