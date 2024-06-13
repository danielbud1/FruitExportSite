# Use the official Nginx image as the base image
FROM nginx:stable-alpine

# Remove the default Nginx configuration
#RUN rm /etc/nginx/conf.d/default.conf

# Copy the website files into the Nginx HTML directory
COPY . /usr/share/nginx/html

# Expose port 80 for incoming HTTP traffic
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]