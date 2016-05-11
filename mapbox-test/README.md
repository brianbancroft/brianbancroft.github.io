# Lighthouse-Mapbox-Exercises

## OH GOD WHAT IS THIS?

Okay, so the truth is that Vector Tiles are dead or are dying. They are a thing of the past
and WebGL is the currency of the future. This is a recent change in mapping standards,
and you can observe this both in the new Google Maps (as opposed as the last iteration in the API you've provided)
as well as other key providers - one of them being Mapbox.

## Okay, So there's this Mapbox thing but why not just use the new Google Maps API?

In short, **Better Analytics**, better design, and better customizability. Mapbox
relies on an OpenStreetMap backend, which is community-supported and literally saving lives
during times of disaster *(Google HOTOSM)*. This means that if you have mapping features you want to host
and let the public see at the same time, you can upload them yourself through many means.
If you want to keep theme on the down-low, there are also ways of adding data through the map
inside or outside of the Mapbox ecosystem... **BUT** in both cases, they can look like they belong
to the baselayer. Google doesn't play that way. They don't make it easy for you to add your stuff, either!

There's also Mapbox studio which lets you fine-tune the hell out of basemaps.
Look at what these guys have done https://www.mapbox.com/gallery/ !!!

There's Turf.js and other similar libraries that allow you to analyze the heck out of the map as well.

**In short, I like Mapbox more than Google Maps so I'm going to use this going forward**.

## Okay, so what's the point of this exercise

In my version of exercise 1, I'm creating two points that you can drag. This is tricky.
There's an API tutorial on making one point, but you need to learn a lot about the logical
process and flow to get the second one. *You can't copy-and-paste your way out of this one*.
I should know, I'm the king of this sort of thing.

So to recap:

1. I made a base generic map,
2. I made that map custom,
3. I put that map over vancouver,
4. I put the first custom circle on the map,
5. I attempted to put the second marker over the map,
6. I struggled a lot; then,
7. I got the second mark working.

Please check this thing out. You might learn to like it as well.
