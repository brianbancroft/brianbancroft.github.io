---
layout: post
title: "Ellipsoid Thoughts"
description: "A thought about randomly creating an elipse based on the surrounding points"
category:
tags: []
---

So for my first real post, I'd like to talk about ellipses. These are the bastard-children of circles that you learned about in High-School algebra. I'm going to start with the perfect parent, the circle. You know all what it looks like:

$$ x^2 + y^2 = r^2 $$

An ellipse is similar, except instead of having a *radius* as a variable, you have a *semi-major axis* and a *semi-minor axis* as two controlling variables:

$$ \Big(\frac{x}{a}\Big)^2 + \Big(\frac{y}{b}\Big)^2 = 1 $$

This can be useful, but what if we wanted something to actively draw the shape? We would use something called _parameterized functions_. This is where you create one or more functions dependent on one variable: time. You do it in a circular fashion between zero and two-pi radians. And the number of functions would be dependent only on how many dimensions you wish to draw. If it's a 2D canvass, you're only concerned with the *x* and the *y*. Here's an example of a parameterized equation for a circle:

$$ x' = r\cos(t)\\
y' = r\sin(t)\\
(\text{ for } 0 < t < 2\pi)$$
