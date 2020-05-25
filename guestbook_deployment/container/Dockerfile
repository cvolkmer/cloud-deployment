FROM amazonlinux:latest

RUN yum update -y
RUN yum install shadow-utils.x86_64 sudo -y
RUN yum install -y git
RUN yum install -y gcc-c++ make
RUN curl -sL https://rpm.nodesource.com/setup_12.x | sudo -E bash -
RUN yum install -y nodejs

RUN useradd -m -s /bin/bash ec2-user
RUN echo "user ALL=(root) NOPASSWD:ALL" > /etc/sudoers.d/user && \
    chmod 0440 /etc/sudoers.d/user

RUN chown ec2-user:ec2-user /home/ec2-user -R

USER ec2-user

RUN echo "Deploying app"

RUN cd /home/ec2-user/

# Deploy code
RUN git clone https://github.com/cvolkmer/cloud-deployment.git /home/ec2-user/cloud-deployment

# Install npm packages
USER root
RUN cd /home/ec2-user/cloud-deployment/guestbook-app/
RUN npm install

# Start the app
CMD ["node", "home/ec2-user/cloud-deployment/guestbook-app/bin/www"]

EXPOSE 80

# Run the container and execute the application
#docker run -d -e DB_HOST="yourdbconnectionstring" -e DB_USER="root" -e DB_PASSWORD="password" -e DB_NAME="demo" -p 80:80 container:tag