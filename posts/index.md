---
layout: default
---

Posts
=====

<ul class='posts'>
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span><a href="{{ post.url }}" class='postURL'>{{ post.title }}</a></li>
  {% endfor %}
</ul>