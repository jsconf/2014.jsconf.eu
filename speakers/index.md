---
  layout: default
  title: Speakers of JSConf EU 2014
  background: background_speakers
  tags: foo
---

{% assign speakers=site.tags.speaker %}
{% assign overview=true %}
<a style="display:none" href="https://maps.google.com" target="_blank"><img id="speakers_map" src="{{ site.speaker_index_base_url | uri_escape }}0xE10079%7Csize:tiny{% for post in speakers %}%7C{% if post.from != "" %}{{ post.from | cgi_escape }}{% endif %}{% endfor %}" /></a>

<h1>Speakers</h1>

<p>
  {% include facepile.md %}
</p>
{% for post in speakers %}
  <article id="{{ post.id }}" class="speaker_list">
    {% assign page = post %}
    {% include speaker.md %}
  </article>
{% endfor %}
