{% assign map_url="https://maps.google.com/maps?q=Radialsystem+V,+Holzmarktstra%C3%9Fe+33,+Berlin,+Germany&amp;hl=en&amp;ie=UTF8&amp;ll=52.510527,13.428726&amp;spn=0.036671,0.077677&amp;sll=52.510893,13.428555&amp;sspn=0.073341,0.155354&amp;hq=Radialsystem+V,+Holzmarktstra%C3%9Fe+33,+Berlin,+Germany&amp;t=m&amp;z=14" %}


  <address itemprop="address" itemscope="" itemtype="http://schema.org/EventVenue">
    <strong itemprop="name"><a href="{{ map_url }}">Radialsystem V</a></strong>,
    <span itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">
      <a href="{{ map_url }}">
        <span itemprop="streetAddress">Holzmarktstraße 33</span>,
        <span itemprop="postalCode">10243</span> <span itemprop="addressLocality">Berlin</span>,
        <span itemprop="addressCountry">Germany</span>
      </a>
    </span>
  </address>

{% assign map_center="52.51057,13.42873" %}
{% include map_image.md %}
