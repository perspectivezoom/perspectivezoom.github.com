---
layout: default
---

Projects
========

Curated Hacker News Hiring
--------------------------
[site](http://perspectivezoom.com/curated-hn-hiring/) - [source](https://github.com/perspectivezoom/curated-hn-hiring)

A filterable, sortable list of the job postings on [Hacker News'](https://news.ycombinator.com) monthly Who's Hiring thread. It takes me about 3 hours to curate the entries each month, but the end result is something that is sortable by location, internship, H1B, etc.

Gmailytics
----------
[source](https://github.com/bcamarda/gmailytics)

Gmailytics was a web app that visualizes your gmail account, providing such statistics as a graph of the volume of email received per hour of the day or a word cloud of the most common words found in your email. It was created as a 4 person final project for [Dev Bootcamp](http://www.devbootcamp.com). Before using it for yourself, please note that this app was abandoned prior to the major [January 2013 Rails vulnerability](http://weblog.rubyonrails.org/2013/1/8/Rails-3-2-11-3-1-10-3-0-19-and-2-3-15-have-been-released/) and has not been patched. Looking back, this code was pretty terrible.

Code that I worked on:
* OAuth authentication
* IMAP email parsing
* The D3 word cloud
* Account deletion and obsfucation
* The polling cycle

Code Snippets
=============

Step By Step from HTML to Backbone
----------------------------------
[site](https://github.com/perspectivezoom/from-html-to-backbone)

At tutorial I wrote as part of a guest lecture at [Hack Reactor](http://www.hackreactor.com), I take a static site HTML and gradually introduce Backbone pieces, one at a time. Designed for the beginner in mind.

Tic Tac Toe
------------

[demo](http://perspectivezoom.github.com/tictactoe) - [source](https://github.com/perspectivezoom/tictactoe)

A simple implementation of Tic Tac Toe, written in Javascript. AI recursively computes the entire game tree for each move. I've hardcoded the first move, but note that computer will spend about 10 seconds computing its second move.

Sudoku
------
[source](https://gist.github.com/2992997)

A [Sudoku](http://en.wikipedia.org/wiki/Sudoku) solver written in 100 lines of Ruby. Uses brute force recursion.

Game of Life
------------
[source](https://gist.github.com/3142930)

Conway's [Game of Life](http://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) in 107 lines of Ruby.