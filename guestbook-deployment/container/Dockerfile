FROM amazonlinux:latest

# Install system packages + nodejs
RUN yum install -y git curl bash
RUN curl -sL https://rpm.nodesource.com/setup_12.x | bash -
RUN yum install -y nodejs

# Cloning source from repository
RUN echo "Downloading app"
RUN git clone https://github.com/cvolkmer/cloud-deployment.git /home/cloud-deployment

# Run npm to install packages
RUN echo "Installing app"
RUN cp /home/cloud-deployment/guestbook-app/package*.json /
RUN npm install -d

# Start the app
CMD ["node", "home/cloud-deployment/guestbook-app/bin/www"]

EXPOSE 80

# Run the container and execute the application
#docker run -d -e DB_HOST="yourdbconnectionstring" -e DB_USER="root" -e DB_PASSWORD="password" -e DB_NAME="demo" -p 80:80 container:tag