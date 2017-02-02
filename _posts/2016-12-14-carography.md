---
layout: post
title:  "Cartography Example"
date:   2016-12-14
image: 'topomap.png'
---

This is a snippet of a topographic map I created last summer. The tools include ArcGIS, QGIS, OGR2OGR (for data conversion).

# Why?
The truth is that Canadian topographic maps aren't the best, especially far away from built up areas. I learned this the hard way when I found out the hard way on various army training exercises when I found myself lost because something was off by a couple millimetres on the map. This isn't a rip at the Geological Survey of Canada, that got the broad-level stuff right. There's only so much they can do, when the truth is that Canada has a really small GDP per square kilometer... Sometimes, the data is derived from old aerial photography. Others, it may be based on a Landsat scene

As a result, updated topographic maps become a necessity. To illustrate, here's a map from the Open Data series offered by Canada. It was published in 1982:
<figure>
	<img src="{{ '/assets/img/canvec-grab.png' | prepend: site.baseurl }}" alt=""> 
	<figcaption>This thing is older than me!</figcaption>
</figure>
First, this is in a part of Canada that still isn't covered by CanTopo. It's out there. And a lot has changed since 1982. Forest cover; River and Stream composition (these things change!); Swamps; and of course, stuff that humans built!

I was commissioned to build this map for the sake of a hunting party in the area. It needed to be 1:50 000 scale, and it needed to centre around a couple points while illustrating some other bits. 

To build the map, I first using Canada's source of open data: CanVec. While the metadata indicated that the data was old and out of date, it gave me a solid starting point. From there, I used Swiss Hillshading techniques to create a hillshade that could be used to illustrate the shape of the land in a way that was easier than just the contours - a technique that was used in the map above. 

For forest cover, I used commercial RapidEye data from [Apollo Mapping](https://apollomapping.com/). Here, I used the equivalent of the Near IR, Red and Green bands of the satelite imagery to discern what was heavy forest cover, what was light forest cover, and what was other. To verify, I temporarly build (and cancelled) control points in the OpenStreetMap ID editor. This is also where I traced all the roads, creeks, and water features. Below is a small sample of the map for the same region. 

<figure>
	<img src="{{ '/assets/img/topomap-closeup.png' | prepend: site.baseurl }}" alt=""> 
	<figcaption>A close look</figcaption>
</figure>

Since then, I've brought the map up with Stephen Smith of [Mapsmithnet](http://www.mapsmith.net/) who has suggested that I deconstruct the map. First, make it greyscale. Then make it all colour once again. _Stay tuned..._
