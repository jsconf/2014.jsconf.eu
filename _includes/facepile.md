
{% assign speaker_list = speakers | reverse %}
{% for post in speaker_list %}
  <a href="/speakers/#{{ post.id }}" title="{{ post.speaker }}">
    {% if post.image %}
    <img src="{{ post.image.filename }}" alt="{{ post.speaker }}" height="80"
    {% comment %}Jekyll needs the .000000001 (probably coercing the value into a float or whatever) or otherwise will fail to do the devision in certain cases.{% endcomment %}
    {% if post.image.width > 0 %}{% if post.image.height > 0 %}width="{{ post.image.width | times:80.000000001 | divided_by:post.image.height  }}"{%endif%}{%endif%}
    />
    {% else %}
    <img src="/img/js.eu.png" width="80" height="80" alt="{{ post.speaker }}" />
    {% endif %}
    {% if post.image2 %}
    <img src="{{ post.image2.filename }}" alt="{{ post.speaker }}" height="80"
    {% if post.image.width > 0 %}{% if post.image.height > 0 %}width="{{ post.image.width | times:80 | divided_by:post.image.height  }}"{%endif%}{%endif%}
    />
    {% endif %}
  </a>
{% endfor %}
