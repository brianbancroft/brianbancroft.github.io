---
layout: post
title:  "Census Mapping and GDAL - A tutorial"
date:   2017-01-15
image: './gdal_tutorial/gdal_tutorial.png'
---

The other day, I observed a map which used 3d to display a chloropleth of the recently-released 2016 Census data for population.

[The map](https://tdubolyou.github.io/PopDens2016/)
By [Tom Weatherburn](https://twitter.com/teedubolya) and [William Davis](https://twitter.com/willy_maps)

This is beautiful, and it's also an opportunity to learn the basics of GDAL for vector operations.

# What is GDAL?

GDAL is the _Geospatial Data Abstraction Library_, a series of open-source tools which are used manipulate both raster and vector data through the command line. In addition, there are ways of using this program in Python, Java and even C. I like it because it processes vast amounts of data, quickly. 

But the downside is that it's an archaic command line reference. *This tutorial will help you make a map similar to the one above using only GDAL, a Text Editor, a Spreadsheet editor (optional!) and Mapbox!

This tutorial should take 40 minutes, except for the setup. That experience will vary based on the routes you choose and the type of operating system you have. I use a Mac, which is the easiest to knock off this tutorial. 

## First, Obtaining the Data

The Census of 2016 was said to be one of the most succesful census actions in Canadian history, given both a culture that wanted to be part of it, as well as a solid UI for the online portions (of which, I submitted mine through my smartphone). There is a release schedule, and the first bits of data have been released into the wild!

### The Census Data

Do the following to get all the data: 

[The Data](http://www12.statcan.gc.ca/census-recensement/2016/dp-pd/hlt-fst/pd-pl/index-eng.cfm)

To access the data, click on the link _Download complete geographic level_:

![alt text](./screencaps/download_location.PNG "Click on the link below Download complete geographic level")

Once there, you will find files that for all sorts of geographic sizes of region. We want both somthing with the smallest area possible for the most detailed map, as well as something that contains a neighbourhood name. So we want to download both the files for the _2013 Electoral Districts_, _as well as dissemination areas_. 

![alt text](./screencaps/download_files.PNG "Choose the CSV files for dissemination areas as well as electoral districts")


### The Census Geodata

We have the raw numbers, as well as the names of the places of the raw numbers. Next, we want to obtain the geographic boundaries, so we can put these numbers on a map. [Visit this page](https://www12.statcan.gc.ca/census-recensement/2011/geo/bound-limit/bound-limit-2016-eng.cfm). We want the geography for the dissemination areas as that is what we are mapping. For the sake of this demo and to those who wish to have a look at the data visually, we will download the data through a Shapefile format, which is an open standard we can use in most GIS packages, including the free QGIS.

![alt text](./screencaps/download_geo.PNG)
*A Warning*: This is going to be a large download, if you're not familiar with spatial data. It contains all the geographic boundary definitions as well as the attributes for every tiny dissemination area in Canada. Canada is a big place. Expect a 90MB download. 

Once downloaded, unzip it and place the files in a working directory near the csv files. Personally, I have it to something like the following:

![alt text](./screencaps/file_structure.PNG)

## Configuring the tools

Here's the hard part: We need to get you set up. All this part requires is the ability to download and install free software on your preferred platform.

### GDAL - Windows

First, you need the app. If you are new to OGR or open-source, the easiest route for using OGR in windows is through Boundless Geospatial, a company which packages open source geospatial software, and sells training and support (a wonderful business model). You can create an account to download the software free [here](https://connect.boundlessgeo.com/Downloads)

Once downloaded, you can access the command shell used to run OGR from your Start menu. Look for Boundless, and open the Command Shell. '

If you don't want to download the Boundless package, there are other ways to install the package. Here's [one such instruction set](https://sandbox.idre.ucla.edu/sandbox/tutorials/installing-gdal-for-windows)

### GDAL - On Mac

To download OGR, the fastest way is to use Homebrew - [download](https://brew.sh/)

Once you have brew installed, type in the following command in the terminal: `brew install gdal --HEAD`

### GDAL - On Ubuntu

If you're using Ubuntu, or another form of Linux, I recommend reading [Sara Safavi's Blog Post](http://www.sarasafavi.com/installing-gdalogr-on-ubuntu.html) on the topic. 


### GDAL - Test whether you have it
To test whether you've succesfully downloaded GDAL, which we will use to join and merge the data, simpilly run this command:
```
gdalinfo --version
```
If you get the version information, you're ready to move on to the next stage!

### A Spreadsheet or Text Editor

In order to alter the CSV, you're going to need to have a spreadsheet or text editor. I use Microsoft Office, just because I have it already installed. You can also use Open Office, Libre Office, or Google Spreadsheets, or Office Online. These are all free options that treat the CSV file like a Spreadsheet

### A Mapbox Account

In order to display the data with 3d extrusions like the map authours have above, you're going to need a Mapbox account. [Sign up here](https://www.mapbox.com/studio/signup/)

### A Text Editor for HTML Coding

At the end of the exercise, we're going to make an HTML page for the app. There are many free editors out there, including:
- [Sublime Text](https://www.sublimetext.com/)
- [Atom](https://atom.io/)
- [Notepad++](https://notepad-plus-plus.org/)
- [VSCode (What I use)](https://code.visualstudio.com/)

I've listed these over others as they are all extendable, but start out as lightweight code editors that are easy to pick up initially. 

## Observing and Formatting the Data

### CSV Data

You have the data in a Comma Seperated Values (CSV) format, which is a spreadsheet format based on a textfile. The first line are the headings, and the remainder contains the data. Each column is seperated by a comma, which gives the name of the format. In order to set the data up, you need to launder it a bit. 

#### Add a csvt file

OGR has a tendency to automatically take every column in as a string. This is bad, because we want to match two corresponding integer fields. To work around this, the open-source community created a standard called csvt which allows you to explicitly define the types of fields [link](http://www.gdal.org/drv_csv.html).

In this case, I used the following: 

*da.csvt*
```
"Integer","String","Integer","Integer","Integer","Integer","Integer","Real","Real"
```

### GeoData


Navagate to your directory, and type in the following command:

`ogrinfo -so -al lda_000b16a_e.shp`

If successful, you should see something like this:

![](./screencaps/ogr_info.PNG)

### Projecting the file 

`ogr2ogr -f "ESRI Shapefile" census_da-wgs84.shp lda_000b16a_e.shp -s_srs EPSG:3347 -t_srs EPSG:4326`

### Selecting the data's geographic extent

First, to make this map, we need to create an extent to which we can clip, or subset the data from the entirity of Canada. For my map, I plan on choosing southern Vancouver Island. To create fast extents, I recommend using geojson.io, which generates geojson files based on a map which you may draw on. If you want to learn  more about GeoJSON, I recommend checking out [@lyzidiamond's](http://twitter.com/lyzidiamond) post on the subject ([link](https://libraries.io/github/lyzidiamond/learn-geojson)).

Here, I created the polygon on the map, then copied the resulting text to a new file, which I'll call `extent.geojson`. I then use ogr to clip the extent using the following command:
`ogr2ogr -clipsrc extent.geojson subset_da.shp census_da-wgs84.shp`

A quick way of showing the count to prove that we have an output is to run the following command:

`ogrinfo subset_da.shp -sql "SELECT COUNT(*) FROM subset_da"`

At this point, you're good to connect the two together!

### Obtain the field names

To ensure a smooth transition, we want to know which field names to keep and which to drop from the Dissemination Area shapefile. To do so, we need to run the following script:

`ogrinfo -so subset_da.shp subset_da`

![](./screencaps/ogrinfo_field_names.png)

there are a few colums here which we want to keep:

- DAUID
- PRUID
- PRNAME
- CDUID
- CDNAME
- CSDUID
- CSDNAME
- ERUID
- ERNAME
- CTUID
- CTNAME
- CMAUID
- CMANAME

We should keep a note of these, as we will use these very shortly. 

### Joining the CSV to the Geodata


The next part is tricky. After sanatizing the column names in the CSV file, I used the following command to join the two files together: 

`ogr2ogr -sql "select subset_da.*, da.* from subset_da left join 'da.csv'.da on subset_da.DAUID = da.ID" test_output1.shp subset_da.shp`

There was still a bit of a challenge: The fields were being automatically converted to different names - something I didn't want to happen:
```
Warning 6: Normalized/laundered field name: 'subset_da.CCSUID' to 'subset_d_6'
```
This is problematic. The way to get around this is to name each field explcitly. 

`ogr2ogr -sql "select subset_da.DAUID, subset_da.PRUID, subset_da.PRNAME, subset_da.CDUID, subset_da.CSDUID, subset_da.ERUID, subset_da.ERNAME, subset_da.CTUID, subset_da.CTNAME, subset_da.CMAUID, subset_da.CMANAME, da.province, da.census_div, da.c_subdiv, da.pop_2016, da.priv_dwell from subset_da left join 'da.csv'.da on subset_da.DAUID = da.ID" test_output2.shp subset_da.shp`

Carrying out this using individual field names also isn't the way to go, but it allows us to use aliases. Try this command:

`ogr2ogr -sql "select subset_da.DAUID AS da_id, subset_da.PRUID AS prov_id, subset_da.PRNAME AS prov_name, subset_da.CDUID AS cd_id, subset_da.CSDUID AS csd_id, subset_da.ERUID AS er_id, subset_da.ERNAME AS er_name, subset_da.CTUID AS ct_id, subset_da.CTNAME AS ct_name, subset_da.CMAUID AS cma_id, subset_da.CMANAME AS cma_name, da.province AS province, da.census_div AS census_div, da.c_subdiv AS c_subdiv, da.pop_2016 AS pop_2016, da.priv_dwell AS priv_dwell from subset_da left join 'da.csv'.da on subset_da.DAUID = da.ID" joined_records.shp subset_da.shp`

What we used there was SQL Aliases, which you can learn more about [here](https://www.tutorialspoint.com/sql/sql-alias-syntax.htm)

If you have a desktop GIS, you can visually inspect the geometry of this data, as well as its content. In the screencap, I use QGIS which is open source and free:
![](./screencaps/qgis_join_output.png)

If you want to do it straight from the command line, use the following command:

`ogrinfo joined_records.shp joined_records`

This will list all the records. This will help you spy out any systematic errors. 

### Normalize the Data!

This is the part where 

#### Converting the results into GeoJSON

Conversion from Shapefile to GeoJSON is one of the easier parts:

`ogr2ogr -f GeoJSON -t_srs crs:84 area_population.geojson joined_records.shp`

You will be able to see the output in a text editor. Here you should records which look similar to the following:

```
{ "type": "Feature", "properties": { "da_id": "59170699", "prov_id": "59", "prov_name": "British Columbia \/ Colombie-Britannique", "cd_id": "5917", "csd_id": "5917021", "er_id": "5910", "er_name": "Vancouver Island and Coast \/ Île de Vancouver et la côte", "ct_id": "9350130.02", "ct_name": "0130.02", "cma_id": "935", "cma_name": "Victoria", "province": "British Columbia", "census_div": 5917, "c_subdiv": 5917021, "pop_2016": 991, "priv_dwell": 344 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -123.38443329125937, 48.477104090217985 ], [ -123.384084308327601, 48.477187413506911 ], [ -123.383415298567726, 48.477487399830054 ], [ -123.382727215893354, 48.477611688666094 ], [ -123.381737090885423, 48.477790494757855 ], [ -123.38179007966113, 48.478319809679718 ], [ -123.381837099142487, 48.478789306141898 ], [ -123.381555637187518, 48.478832963392414 ], [ -123.38096210394454, 48.478925064789927 ], [ -123.380222490662334, 48.479039801955949 ], [ -123.380044347422071, 48.479067054574394 ], [ -123.37936610373778, 48.479170838542146 ], [ -123.379334291923541, 48.479175710117012 ], [ -123.379201202332027, 48.479211955673797 ], [ -123.378736163616537, 48.479338636659257 ], [ -123.378243218385663, 48.479472892033897 ], [ -123.378150686382696, 48.479498091242093 ], [ -123.377231795867885, 48.479748611601039 ], [ -123.377022831343595, 48.479437829251658 ], [ -123.3767503391784, 48.479032532200897 ], [ -123.376707689480853, 48.478969104252009 ], [ -123.376602653346296, 48.47886834134637 ], [ -123.376258925939894, 48.478538708410447 ], [ -123.375926041915918, 48.478280665925375 ], [ -123.375427971105751, 48.47787798256941 ], [ -123.375375509633443, 48.477835596060409 ], [ -123.374334783185986, 48.476994198650992 ], [ -123.373395519217382, 48.476226902581878 ], [ -123.372892785111063, 48.475843009044809 ], [ -123.372861537637391, 48.47580719578874 ], [ -123.372605431006207, 48.475513740144379 ], [ -123.372455987984097, 48.47534249257177 ], [ -123.372183601301714, 48.475018311419284 ], [ -123.371883657756896, 48.474689662519573 ], [ -123.378754412532615, 48.474098386398587 ], [ -123.382905516815825, 48.473740901086963 ], [ -123.383249007562426, 48.473711310825756 ], [ -123.383322467666531, 48.473873194519598 ], [ -123.383838859374592, 48.475011028498358 ], [ -123.383929859206205, 48.475211525416697 ], [ -123.384217572382738, 48.475845562876749 ], [ -123.385215730154158, 48.478044684378574 ], [ -123.385262503631139, 48.478147786192515 ], [ -123.384830995151205, 48.478191513825635 ], [ -123.38443329125937, 48.477104090217985 ] ] ] } },
```


## Starting the Map

At this point, you have a geoJSON file which is ready to be shown on Mapbox. All you need to do is set up an account, and create the map! 

### Setting up a Mapbox account

For development and testing, Mapbox is free and charges when your maps hit a certain popularity threshold. You can sign up to a new account from their frontpage [mapbox.com](http://mapbox.com)

Once you've done that, login into the home page. On the right hand side, you're going to find an API Key. Copy it and save it somewhere.

### Creating a basic Map

To make the map, you're going to need a blank directory, a blank `index.html` file, and the geojson file that you've recently built. 

Below is the code I'm using to make this run. Be sure to add your key where it says `YOUR KEY HERE`. 

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8' />
        <title></title>
        <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
        <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.32.1/mapbox-gl.js'></script>
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.32.1/mapbox-gl.css' rel='stylesheet' />
        <style>
            body { 
                margin: 0;
                padding: 0;
                }
            #map {
                position: absolute;
                top:0;
                bottom:0;
                width:100%;
                }
        </style>
    </head>
    <body>

        <div id='map'></div>

        <script>
            mapboxgl.accessToken = `YOUR KEY HERE`;
            var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/dark-v9',
                center: [-123.4103734351262877, 48.437451890638886],
                zoom: 13
            });

            map.on('load', function () {
                map.addSource('population', {
                    'type': 'geojson',
                    'data': './area_population.geojson'
                })
                map.addLayer({
                    'id': 'population',
                    'type': 'fill-extrusion',
                    'source': 'population',
                    'paint': {
                        'fill-extrusion-color': '#aaa', 
                        'fill-extrusion-height': {
                            'type': 'identity',
                            'property': 'pop_2016'
                        }, 
                        'fill-extrusion-base': 0,
                        'fill-extrusion-opacity': 0.6
                    }
                });
            });
        </script>
    </body>
</html>
```

### Serving the Map

For the following, you're going to need something to serve your data. There are two ways of creating a basic HTTP server capable of hosting a website locally:

1. [`http-server`](https://www.npmjs.com/package/http-server) (Uses Node.js - this is what I use)
2. [`SimpleHTTPServer`](https://www.python.org/downloads/) (You can use this already if you have ArcGIS on your machine!)

To serve what you've built, go to the directory containing the HTML file, and type in either `serve` (if you're using the node server), or `python -m SimpleHTTPServer 3000` (for python users). 



### What's next?

What we've done is built a map based on statistcal data using _only_ GDAL. There is a lot more we can do to make this map more like the solid map we introduced you to at the top of this tutorial:

1. Normalizing the data - the data shows absolute numbers, which is bad way to display data when the area of each dissemination area differs. As of right now, I don't know of a way to solve this problem using GDAL. 
2. Using different colurs - We should go further and use colour to display whether the populaton per unit area falls within a certain predefined bounds so that others can have an easier time to build that. 
3. Create a legend in HTML - Using a fixed div, we can create a legend which explains the colour density
4. Make the page responsive - have the legend only appear when toggled in mobile
5. Mouse over effects!