<header>
  {% if page.date %}<span class="date">{{ page.date | date_to_long_string }}</span>{% endif %}
  <h3><a href="{{page.url}}">{{ page.title }}</a></h3>
</header>