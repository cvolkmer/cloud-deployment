# Guestbook App - EC2 Deployment

## Credits
This code mainly comes from this repository https://github.com/ysl/guestbook - with very small changes.

## Setup on AWS
Deploy an instance with the following requirements : 
 - it has a public IP 
 - with a security group allowing inbound http port
 - using an Amazon linux 2 AMI
 - instance must have outbound access to internet (e.g. via IGW, NAT instance/gateway)
 - copy the content of the `setup/userdata.sh` in the instance userdata 

A default configuration for the database can be found under the `/conf` folder. DB configuration settings can also be defined as an environment variable:
 - env.db_info.host (database hostname)
 - env.db_info.username (database username)
 - env.db_info.password (database password)
 - env.db_info.database (set to "demo" by default)

The SQL script to create the database can be found under the `/database` folder.

## Environment
 * Ubuntu 14.04
 * Node.js
 * MySQL

## Install necessary package
 * Node.js

        $ sudo apt-get -y install nodejs npm
        $ sudo ln -s /usr/bin/nodejs /usr/bin/node

 * MySQL client

        $ sudo apt-get -y install mysql-client

## Setup database
 * Create database

        $ mysql -h localhost -u root -p -e "CREATE DATABASE demo"

 * Create schema

        $ mysql -h localhost -u root -p demo < database/schema_init.sql

## Run
 * Build

        $ npm install

 * Configure

        $ cp conf/guestbook.json.default conf/guestbook.json
        # Edit conf/guestbook.json, set the database connection

 * Run

        $ bin/www
        # Then open URL http://localhost:3000
