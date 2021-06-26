---
author: mikelyndonadmin
date: "2020-12-09T03:04:38.000Z"
layout: post
link: https://mikelyndon.online/2020/12/08/houdini-usd-and-ue4-part1/
redirect_from: /2020/12/08/houdini-usd-and-ue4-part1/
slug: houdini-usd-and-ue4-part1
title: Houdini, USD and UE4 - part 1
category: VFX
tags: ["houdini"]
---

I want to see how much data I can move back and forth between Houdini 18.5 and UE4.26 using USD. In this first part, I prep[ the bar scene that SideFX provides](https://www.sidefx.com/contentlibrary/bar-scene/) to bring into UE4. Along the way I:

1. Setup the USD kind and purpose.
2. Create a proxy (realtime friendlier) mesh.
3. Show some PDG fun to batch convert a bunch of USD assets.
4. Dabble with python to fix transparent shaders.

Here's[ the hip file](https://www.icloud.com/iclouddrive/0i5e3Ubqr4fgeuS6oL6vPreUA#bar_scene_asset_prep_ue4) if you want to play

`vimeo: https://vimeo.com/488772408`
