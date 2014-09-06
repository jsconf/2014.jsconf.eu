---
  layout: default
  title: Sponsors of JSConf EU 2014
  background: background7
---

{% assign sponsors=site.tags.sponsor %}
{% assign overview=true %}

<br>

{% for post in sponsors %}
  {% if.post.level == "sponsor-special" %}
  <div class="post">
    {{ post.content }}
    <br style="clear:both;">
  </div>
  {% endif %}
{% endfor %}

{% for post in sponsors %}
  {% if.post.level == "sponsor-main" %}
  <div class="post">
    {{ post.content }}
    <br style="clear:both;">
  </div>
  {% endif %}
{% endfor %}

{% for post in sponsors %}
  {% if.post.level == "sponsor-support" %}
  <div class="post">
    {{ post.content }}
    <br style="clear:both;">
  </div>
  {% endif %}
{% endfor %}

{% for post in sponsors %}
  {% if.post.level == "sponsor-custom" %}
  <div class="post">
    {{ post.content }}
    <br style="clear:both;">
  </div>
  {% endif %}
{% endfor %}

