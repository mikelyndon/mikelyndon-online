---
author: mikelyndonadmin
date: "2017-02-12T08:31:49.000Z"
layout: post
link: https://mikelyndon.online/2017/02/12/rbd-design-secondary-fracturing/
slug: rbd-design-secondary-fracturing
title: RBD Design - Secondary Fracturing
categories: "Education"
tags: ["houdini", "rbd", "tutorial"]
---

import Video from "../../../src/components/video.js";
import Giflike from "../../../src/components/giflike.js";

<Video src="./rbd_secondary_fracture.mp4"
      title="Secondary Fracture"/>

<Giflike />

One way to get some more variation and interest out of your rbd simulation is to add secondary fracturing.  This can be done in a number of ways but the basic idea is to setup your initial sim with a mixture of hero pieces and supporting pieces (I talk more about that in [this video](https://mikelyndon.online/2017/01/09/rbd-design-fracture-size/)). Then create a second beat to your animation by breaking the pieces down further when they collide with other objects.  I prefer to control this manually but you can also set this up to happen procedurally.
