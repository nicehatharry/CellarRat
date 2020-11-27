CREATE DATABASE cellar_rat;

CREATE TYPE color AS ENUM ('red', 'white', 'blush', 'dessert', 'fortified');

CREATE TABLE cellar (
    wine_id SERIAL PRIMARY KEY,
    label TEXT,
    color color,
    qty INTEGER
    );

-- psql CLI commands
psql -c "CREATE DATABASE cellar_rat;" -U postgres


-- ----------------
-- Win setup

-- Add postgres/[ver]/bin to path env var
-- Add postgres/[ver]/data to path env var

-- ----------------
-- mac OS setup
./configure
make
su
make install
adduser postgres
mkdir /usr/local/pgsql/data
chown postgres /usr/local/pgsql/data
su - postgres
/usr/local/pgsql/bin/initdb -D /usr/local/pgsql/data
/usr/local/pgsql/bin/pg_ctl -D /usr/local/pgsql/data -l logfile start
/usr/local/pgsql/bin/createdb test
/usr/local/pgsql/bin/psql test