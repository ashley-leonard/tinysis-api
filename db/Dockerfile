FROM mysql

# Add the content of the sql-scripts/ directory to your image

# All scripts in docker-entrypoint-initdb.d/ are automatically
# executed during container startup
COPY ./database-init.sql /docker-entrypoint-initdb.d
COPY ./seed.sql /docker-entrypoint-initdb.d