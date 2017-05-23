---
layout: post
title:  "Simple Network Maps using QGIS and Affinity Designer"
date:   2017-05-21
image: './network-map/network-map-cover.png'
---
Today while out for a run, I was inspired by a tweet from Stephen Smith, also known as [@themapsmith](http://twitter.com/themapsmith).

Someone from within the United States Transit Authority released these simple network maps linking towns and cities in various US states via highway [(link)](https://www.transitauthorityfigures.com/projects/united-states-schematic-maps/). For sometime, I was trying to build a similar style of map, but of the Bike lanes and paths in Toronto, an impossible tasks as most of the nodes do not connect. This series inspired me to take a step back, and go with _baby_ steps. 

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr" style="margin-left:auto;margin-right:auto;">These maps have an awesome aesthetic by <a href="https://twitter.com/TransAuthFigs">@TransAuthFigs</a> <a href="https://t.co/XdHY7cLrvb">https://t.co/XdHY7cLrvb</a> <a href="https://t.co/CedhUFeKtO">pic.twitter.com/CedhUFeKtO</a></p>&mdash; Stephen R Smith (@TheMapSmith) <a href="https://twitter.com/TheMapSmith/status/866662561684611072">May 22, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


This project took me about two hours to put together, and I'm convinced that knowing what I did, it can take you less. The following is how I put this together.


### GETTING YOUR TOOLS IN A ROW

With my mapping computer in cold storage, I've been slowly getting used to the Boundless Geo version of QGIS, which you can obtain [here](https://connect.boundlessgeo.com/). The easiest place to get a base geography of Canada in shapefile format is through the [Canadian Census](http://www12.statcan.gc.ca/census-recensement/2011/geo/bound-limit/bound-limit-2011-eng.cfm). Here, you're going to want the cartographic boundary files unless you're working from a landlocked province. 

![Download Instructions for the geographic data](../../assets/img/network-map/census-download.png)

I used some other tools, aside QGIS:
1. Affinity Designer (OS X) was my vector editing software. You can get a free trial [here](https://affinity.serif.com/en-gb/signup/trial/designer/). Illustrator or Inkscape can also do the trick.
2. [Adobe Colour](http://color.adobe.com) for selecting what colours I wanted to use on the map
3. [Openstreetmap](http://openstreetmap.org) for looking for toponomy; and,
4. Wikimedia Commons for a logo to add at the end.

### SETTING UP THE ISLAND USING QGIS

Once I downloaded the geographic data, I loaded it into QGIS, and in an editing session removed every province except for BC. Here, I converted the remaining multipart polygon into singlepart ones:

![Location of multipart => singlepart polygon tool](../../assets/img/network-map/single-to-multipart.png)

To remove every other island (and BC) from the map, I started another editing session, selected Vancouver Island, inverted the selection (_Ctrl-R_), then called deleted every other island. Because the cartographic boundary file has more detail than we're going to need for a simplified networking map, I went on and simplified the geometry with the **Simplify Geometry** tool, which is in the same Vector -> Geometry Tools dropdown menu as **Multipart to Polygons** tool. 

The last thing we want to do is find the ideal projection for your data. In the past, most of my mapping has been reference mapping or web mapping, meaning that I stick to the lanes of Transverse Mercator (UTM) for familiarity to those who use topographic maps, or Web Mercator because I don't have a choice with most services. I ended up using the [Albers Equal Area Conic Projection](https://en.wikipedia.org/wiki/Albers_projection) just because _I could_, and _it looked the nicest for a simplified map_. 

Once you have the data setup, you need to use the QGIS Print Composer. This was my first crack at using this tool, and I found it straightforward. If you're the type of person who likes more documentation, [this might be the first place to look at](http://docs.qgis.org/2.0/en/docs/user_manual/print_composer/print_composer.html). I ended up using a stupid-large page size, and didn't pay much attention to symbolization. Instead, I exported straight to SVG. While there are warnings about doing so, I found that the export tool did exactly what I wanted it to do: Export a single vector file in SVG format. 

### SKETCHING A PLAN

I find that when I'm building something, it's always a good call to make initial sketches. I tend to ignore them, or even drop them as soon as I understand where I am going, but they're instrumental in allowing me the time to understand what it is that I must do. The first thing was the graphical concept. How was I to build this concept. Here, you can see me doodling with markers. It's an awful sketch, but it told me to keep the concept down to three or four colours, max. No shadows. 

![Bad colouring by brian bancroft, and a roadplan](../../assets/img/network-map/graphic-concept.png)

The next sketch was more important: Deciding which nodes go on, and how they connect. As a choice, I wanted to go with big towns, and nodes that break up the lines in places where there aren't any major towns. 

![A sketch of nodes and lines](../../assets/img/network-map/node-concept.png)

Once you have an idea of what to do, going into Affinity Designer is much easier.

### AFFINITY DESIGNER

Affinity Designer is a tool I purchased as a stopgap: _I need to do some vector editing, but I don't want to pay for a month of Creative Cloud_. It's not the best, but it's still a refined product for vector editing. If you've ArcGIS's print composer, or Illustrator, you're going to find this App has a very small learning curve. If you're new to Vector graphic editors, welcome! These are wonderful tools to have in your back pocket in the cartographic world!

#### How to do this

First this, set a page size. Because I am doing this wistfully without an audience, I've chosen my dimensions to be legal, with half-inch rules on either side of the document for margins. After that, I drew the rest of this owl:

- First, I laid down a square with a gray background.
- Second, I imported the svg by opening it as a separate file, then copying and pasting the island.
- Third, I laid down nodes
- Fourth, I drew lines between the nodes, while reducing some of the inlets in order to endure that most of the lines were on land. 
- Fifth, I cut out all the jagged little features. There will be a lot of them. Relax, you've got full creative license here!
- Sixth, I made markers by grouping two circles. 
- Next, I chose a typeface (_The first that looked like it would fit_), and labelled all the nodes
- Finally, I chose the colours, then tweaked the result

#### How to choose a colour

Currently, my favorite graphic colour selector is [Adobe Colour](https://color.adobe.com). You can choose a colour you want the map to center around (gut feeling or intuition?) and use rules to choose different colours. I started with `#B700FF`, then went with the analogous method to determine the other colours for the map. It worked well. 


## THE RESULTS

![](../../assets/img/network-map/conic_map_final.png)

If you're in a rut, I recommend this as a way of getting back into the cartography game. It's so fast and colourful to pump out a simple network map, that it may be enough to motivate you to learn that new, awesome thing. Until next time, have fun and draw nodes!
