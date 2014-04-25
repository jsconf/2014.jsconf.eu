{% include speaker_map.md %}

<div itemscope="" itemtype="http://schema.org/Person">
  <header class="scrollTarget">
    <h3><a href="{{ page.url }}"><span itemprop="name">{{ page.speaker }}</span>: {{ page.talk }}</a></h3>
  </header>

  <section class="description">

    <div class="speaker_avatar">
      <a target="_blank" href="https://plus.google.com/+LoreenaLee">
        <img height="200" class="speaker" alt="Loreena Lee" width="200" itemprop="image" src="/speakers/images/loreena-lee.jpg">
      </a>
      <a target="_blank" href="https://plus.google.com/+JohnMcCutchan">
        <img height="200" class="speaker test" alt="John McCutchan" width="200" itemprop="image" src="/speakers/images/john-mccutchan.png">
      </a>
    </div>
    <div>
      {{ page.description | markdownify }}
    </div>

    <ul class="info">
      {% if page.from != "" %}<li>» <a href="https://www.google.com/maps/preview#!q={{ page.from | cgi_escape }}"  target="_blank">{{ page.from != ""  }}</a></li>{% endif %}
      <li>» <a href="https://plus.google.com/+LoreenaLee" itemprop="url" target="_blank">Loreena on Google+</a></li>
      <li>» <a href="https://plus.google.com/+JohnMcCutchan" itemprop="url" target="_blank">John on Google+</a></li>
    </ul>
  </section>
</div>
