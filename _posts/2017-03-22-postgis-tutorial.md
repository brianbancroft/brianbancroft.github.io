---
layout: post
title:  "Loading Tables to PostGIS Through QGIS on a Mac"
date:   2017-03-22
image: './qgis_pg_tutorial/qgis_logo.png'
---
One of the older truths is that the Apple platform wasn't the best fit for GIS and mapping. ESRI, the behemoth organization all GIS users know and _love_ doesn't have anything to offer on the platform. QGIS, until recently was adapted for the mac with love by [Kyngchaos](http://www.kyngchaos.com/software/qgis), but the experience wasn't nearly as strong as when I've used QGIS for Linux and Windows. This is a shame, because the Mac has been the platform of choice for developers and designers for sometime. Considering that GIS falls within those two trades, it's been a shame that apart from one small dilligent open source team, there has been no love for Macintosh GIS.

That has recently changed. [Boundless Geospatial](https://boundlessgeo.com/) has recently skinned and provisionned the open source geo stack as a service for Windows and Mac.

For my first tutorial, I'm going to show how to load data into PostGIS directly from QGIS using a Mac. This tutorial is meant for the junior developer or GIS user who doesn't want to learn how to use the SHP2PG tool for GDAL, and especially those who really really get annoyed that they can't load Canadian data through the command line on the first try, no thanks to the single quote in St John's Newfoundland, and how it breaks the entire process. 

### Developers, why is this useful?

Once you deal with the initial setup, you can create and export databases and tables, or directly integrate them with other apps such as Express. This is a free tool which will save you time, used by a segment of geospatial professionals. Why should you forego benefiting from this as well?

### GIS Users, why is this useful?

This may be your first step in using relational databases - a model of storing data which is used by your beloved shapefile. As you move further in your career, you'll find them to be more reliable in storing and accessing data.

## Learning time! What you will need:

1. A Macbook, or Mac. 
2. A boundless Geospatial Account. [Sign up here!](https://connect.boundlessgeo.com/UserLogin?returnurl=%2fDownloads)
3. `postgres` for Mac. Because this one is strictly command line, I'll run through the directions here:

### Installing Postgres on a Mac for a first time

First off, open up terminal and type in `psql`. If you get the following, you're good to go:
![](../../assets/img/qgis_pg_tutorial/canihazpsql.png)

If you _don't_, **This section is for you, my friend!**.

1. First, you're going to want to grab [Homebrew](https://brew.sh/), a command-line utility for installing developer-focused software on Apple computers. Very handy! Type in the following command in terminal:
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
2. Once you've installed brew, install Postgres. 
```
brew install postgres
```
3. It may ask you once installing to lay down some further configuration. Once you've done so, try typing `psql` in the command line once again. It should work, this time... 


## Creating a Database
Now that we've ensured you have Postgres ready in your server, we're going to [create a database](http://nedroid.com/comics/2012-05-02-beartato-hackthedatabase.png).

- If you've already left, open up the terminal again and type in `psql` to open Postgres.

PSQL is the command-line interface for postgres. When you have tables, this is one place where you can directly query, relate, join and modify all your tables through SQL syntax queries.

- Once in, type in `CREATE DATABASE geodata`. If successful, you should see something like this:
![](../../assets/img/qgis_pg_tutorial/newdb.png)
_(Did you know you can list all your existing databases using the `\l` command?)_

- Once you've created a new Database, exit (`\q`). Once out, access the new Database by typing in `psql geodata` from the command line. Right now it's an empty database, and we need to enable postgis. Again, it should look like this:
![](../../assets/img/qgis_pg_tutorial/createpostgis.png)

## Opening QGIS and Accessing DBTools
Installing QGIS through the Boundless Installation tool was a straightforward process. While I wasn't able to use the cmd-space shortcut to type in the app's name, I was able to keep QGIS on the dock, where it resides. 

First, you're going to need to open QGIS. Once you've opened QGIS, to access databases, you're going to need to open the Database Manager. Below, you can see me accessing it through the `database` menu, but there is somewhere where you should be able to access it on the toolbar as well:
![](../../assets/img/qgis_pg_tutorial/accessdbmanager.png)

### WAIT! I can't see the database menu, or the icons anywhere!

Okay, so I've had this problem as well, and it did make me sad for a short while. There's a plugin that will help. Go to the following menus to first access the Plugin Manager to access the *Customize Toolbar* plugin:
```
plugins -> Manage and Install Plugins
```
Once in the Plugin Manager, seek and install the `customize toolbar` plugin. Access it through the plugins menu at the top. Once you're in here, create a new custom menu, find 'DB Manager' through the search bar, and drag it to the new menu. This is what solved the problem for me.

## Loading the Data to the Database

First, we want to load the data. You can find all of the sample points which I've downloaded from the City of Toronto [here](../../assets/tutorial-content/sample_shapefile.zip). Download and load in QGIS by dragging the .shp file from the file explorer pane on the left. 

![](../../assets/img/qgis_pg_tutorial/loaddata.png)

Before we can upload to the Database, we first need to connect to the database. You can do this by clicking on the _elephant_ on the left. For those who don't know, that is the icon for Postgres.

![](../../assets/img/qgis_pg_tutorial/connectdb.png)

Once in, we need to make a new DB connection. In the connections portion, select *new* and in the form, enter the following data:

* Name: your name when you setup psql
* Host: localhost
* Database: geodata 

Test the connection. If successful, you're good to move on.  


Next, open DB Management Tools. That's the item we placed in the toolbar.

![](../../assets/img/qgis_pg_tutorial/dbmanager.png)

Once you're in DBTools, you want to connect to the empty PostGIS database which you just created. You can do this by expanding the left arrow beside PostGIS, and selecting your name which you placed in the name field. 

Press the down arrow. You should have a window pop up. Fill it out similar to below, ensuring that you name the table `culture_points`.

![](../../assets/img/qgis_pg_tutorial/loaddatatotable.png)

Once done, you need to test that you have a new table. Open `psql` by typing in `psql opengeodata` in the command line. Once there, type in `\d`. You should see the following:

![](../../assets/img/qgis_pg_tutorial/resultscolumns.png)

In addition to creating the table, we also want to see how many records made it in. You can do so by using the following SQL command: `SELECT COUNT(id) FROM culture_points;`. If you get a number higher than 1000, you have a PostGIS database with data!

## Congratulations!

Alright. Right now, I've shown you how to load a Database to Postgres with Mac. From here, there's still a lot to learn. If you're a developer, you may want to make that an Express API. If you're an analyst, you can load this data and store it in a way that you're less likely to delete. Remember, PostGIS also has many utilities which you can use to analyze in a fast fashion. But first, you need to create database with plenty of data to analyze. 

At this point, you've taken the first step on the way to doing that. Good work! Watch this space for more tutorials on QGIS, developement and spatial data.  