{% assign image_link="" %}
{% if page.website != "" %}
  {% assign image_link=page.website %}
  {% assign website=page.website %}
{% elsif page.twitter != ""  %}
  {% assign website=page.twitter %}
{% elsif page.gplus != ""  %}
  {% assign website=page.gplus %}
{% elsif page.github != ""  %}
  {% assign website=page.github %}
{% endif %}
{% if overview %}
  {% assign image_link=page.url %}
{% endif %}

{% include speaker_map.md %}

{% if overview %}
<div>
{% else %}
{% if page.video %}
<div itemprop="video" class="talk_video" itemscope="" itemtype="http://schema.org/VideoObject">
{% else %}
<div itemscope="" itemtype="http://schema.org/Person">
{% endif %}
{% endif %}
  <header class="scrollTarget">
    <h3>{{post.overview}}<a href="{{ page.url }}"><span itemprop="name">{{ page.speaker }}: {{ page.talk }}</span></a></h3>
  </header>

 {% if page.video %}
   {% unless overview %}
     <section class="video">
       {% assign video_id=page.video %}
       {% include youtube.md %}
       <div class="video_info">
       {% if page.slides %}
         <a href="{{ page.slides }}" target="_blank" class="slides">
           {% if page.slides_text %}{{ page.slides_text }}{% else %}Slides{% endif %}
         </a>
         {% if page.slides2 %}
         – <a href="{{ page.slides2 }}" target="_blank" class="slides">
           {% if page.slides_text2 %}{{ page.slides_text2 }}{% else %}Slides{% endif %}
         </a>
         {% endif %}
       {% else %}
         <span>Ping us if you have a link to the slides.</span>
       {% endif %}
        <div class="subscribe"><span>Subscribe:</span> <div class="g-ytsubscribe" data-channel="jsconfeu"></div></div>
        </div>
     </section>
   {% endunless %}
 {% endif %}

  <section class="description">
    {% if page.image %}
    {% if image_link %}<a href="{{ image_link }}" class="speaker_avatar" target="_blank">{% else %}<span class="speaker_avatar">{% endif %}
      <img src="{{ page.image.filename }}" alt="{{ page.speaker }}" width="200" height="{{ page.image.heightSite }}" itemprop="image" class="speaker" />
      {% if page.image2 %}
      <img src="{{ page.image2.filename }}" alt="{{ page.speaker }}" width="200" height="{{ page.image2.heightSite }}" itemprop="image" class="speaker" />
      {% endif %}
    {% if image_link %}</a>{% else %}</span>{% endif %}
    {% endif %}
    <div itemprop="description">
      {% if overview %}
        {% if page.video %}
          <a href="{{ page.url }}"><b>Video</b><br />
            <img width="160" height="90"
              src="http://img.youtube.com/vi/{{ page.video }}/maxresdefault.jpg"
              alt="Video" />
          </a>
        {% endif %}
      {% endif %}
      {{ page.description | markdownify }}
    </div>

    {% unless overview %}
    {% if page.video %}
      <p class="video_images">
        <img width="213" height="120"
              src="http://img.youtube.com/vi/{{ page.video }}/maxresdefault.jpg" alt="Video" />
        <img width="160" height="120"
              src="http://img.youtube.com/vi/{{ page.video }}/2.jpg" alt="Video" />
        <img width="160" height="120"
              src="http://img.youtube.com/vi/{{ page.video }}/3.jpg" alt="Video" />
      </p>
    {% endif %}
    <ul class="info">
      {% if page.from != "" %}<li>» <a href="https://www.google.com/maps/preview#!q={{ page.from }}"  target="_blank">{{ page.from != ""  }}</a></li>{% endif %}
      {% if page.website != ""  %}<li>» <a href="{{ page.website }}" itemprop="url" target="_blank">Website</a></li>{% endif %}
      {% if page.github != ""  %}<li>» <a href="{{ page.github }}" itemprop="url" target="_blank">Github</a></li>{% endif %}
      {% if page.twitter != ""  %}<li>» <a href="{{ page.twitter }}" itemprop="url" target="_blank">Twitter</a></li>{% endif %}
      {% if page.gplus != ""  %}<li>» <a href="{{ page.gplus }}" itemprop="url" target="_blank">Google+</a></li>{% endif %}
      {% if page.github2 %}<li>» <a href="{{ page.github2 }}" itemprop="url" target="_blank">Github</a></li>{% endif %}
      {% if page.twitter2 %}<li>» <a href="{{ page.twitter2 }}" itemprop="url" target="_blank">Twitter</a></li>{% endif %}
    </ul>

    {% endunless %}
  </section>
</div>
