# Digital Ocean Deployment

##### LEARNING OBJECTIVES
- SW Review the Linux/Unix Ecosystem
- SW Understand how Virtual Hosts work
- SWBAT Create a Digital Ocean Droplet
- SWBAT Configure an nginx Server

### STEP 1: *NIX
- Root File System (everything is a file with a path in a global file system)

| Path     | Purpose  | Link |
|----------|----------|------|
| `/`      | Root (contains everything on the system) | [Link](http://www.linfo.org/root_directory.html) |
| `/var`   | Variable Data: Logs, Cache, Lock and PID files | [Link](http://www.linfo.org/var.html) |
| `/home`  | User's personal files | [Link](http://www.linfo.org/home.html) |
| `/etc`   | System-wide configuration | [Link](http://www.tldp.org/LDP/Linux-Filesystem-Hierarchy/html/etc.html) |
| `/usr`   | Programs and files available to users of the system<br>(not related to /Users or /home) | |
| `/dev`   | Raw device access (devices are files) | |

```
mount
```

### STEP 2: Digital Ocean
- Setup a Digital Ocean "droplet"  (Ubuntu LTS)
- `root` password will be mailed to you

**meanwhile...**

- Explain SSH Keys (public/private keys)

**then...**

- Connect to the Droplet.
- Create a user using `adduser`

### STEP 3: Installing Stuff

- First off `apt-get update`
- Install `apt-get install nginx git ruby-dev postgresql libpq-dev redis`
- [Optionally] Install `apt-get install rbenv ruby-build`
- `rbenv install --versions` - Talk about available ruby verions
- `rbenv install 2.1.3` **meanwhile** Explain the software architecture we will setup
- `gem update`
- `gem install bundler rails therubyracer pg`
- [Optionally] Students install Cyberduck

### STEP 4: Cho! Cho!
- `rails new mysite -T -d postgresql`
- Starting a Rails Server - will not work!
- Uncomment `gem unicorn`, `gem therubyracer` and `bundle install`
- Starting a Rails Server (port 8080) - works!
- Configuring nginx - Setup Virtual Host
  - Add `proxy_pass http://localhost:8080;`
- Stop Rails: `ps -x` Kill `unicorn_rails (master)` and `spring (master)`

### STEP 5: PostgreSQL
- `su postgres` `psql`
- https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-your-ruby-on-rails-application-on-ubuntu-14-04
- `createuser -s mysite`
- Setup `database.yml`
  - Set `host: localhost`, username and password

### STEP 6: Configure Unicorn
- Create a Startup Script
- `cd mysite`
- `export RAILS_ENV=production`
- `export SECRET_KEY_BASE=` with the value from `rake secret`
- `unicorn_rails -D`

### STEP 7: Configure Git
- `git init`
- `git clone` repo from DigitalOcean
- `git push` to DigitalOcean
- Set `receive.denyCurrentBranch` to `ignore`
- Write `post-receive` hook to reset and restart Unicorn

```
#!/bin/bash

cd /srv/http/mysite
git reset --hard
unicorn_pid=`cat tmp/pids/unicorn.pid`
echo "Restarting Unicorn ($unicorn_pid)"
kill -HUP $unicorn_pid
```
