---
layout: default
tags: speaker
title: How GZIP compression works – Raul Fraile
permalink: "/speakers/raul-fraile-how-gzip-compression-works.html"
speaker: Raul Fraile
talk: How GZIP compression works
website: "http://raulfraile.github.io"
twitter: "https://twitter.com/raulfraile"
github: "https://github.com/raulfraile"
gplus: ""
from: "Alicante, Spain"
description: "Data compression is an amazing topic. Even in today’s world, with fast networks and almost unlimited storage, data compression is still relevant, especially for mobile devices and countries with poor Internet connections. \n\nFor better or worse, GZIP compression is the de-facto lossless compression method for compressing text data in websites. It is not the fastest nor the better, but provides an excellent tradeoff between speed and compression ratio. The way Internet works makes it also difficult to use newer compression methods.\n\nThis talk examines how GZIP works internally, explaining the internals of the DEFLATE algorithm, which is a combination of LZ77 and Huffman coding. Different implementations will be compared, such as GNU GZIP, 7-ZIP and zopfli, focusing on why and how some of these implementations perform better than others. \n\nFinally, we will try to go beyond GZIP, preprocessing our data to achieve better results. For example, transposing JSON."
image: 
  width: 1574
  height: 1633
  type: jpeg
  heightSite: 207.49682337992377
  filename: "/speakers/images/raul-fraile.jpeg"
---

{% include speaker.md %}
