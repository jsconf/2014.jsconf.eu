{% comment %}
Make variables called map_url and map_center (coords). Just copy the normal GMaps share
link.
{% endcomment %}
<div class="embed_container">
  <a href="{{ map_url }}" target="_blank">
    <img width="560" height="315" src="http://maps.googleapis.com/maps/api/staticmap?center={{ map_center }}&amp;zoom=13&amp;size=601x368&amp;sensor=false&amp;markers=color:0xE10079%7C{{ map_center }}&amp;visual_refresh=1">
  </a>
</div>