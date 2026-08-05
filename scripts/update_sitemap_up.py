import json
import os
import re

json_path = "c:/Users/User/Documents/GitHub/pnjabele/uttar-pradesh/data/constituencies.json"
sitemap_path = "c:/Users/User/Documents/GitHub/pnjabele/uttar-pradesh/sitemap.xml"

with open(json_path, "r", encoding="utf-8") as f:
    constituencies = json.load(f)

urls = [
    "https://upelectionresults.com/privacy.html",
    "https://upelectionresults.com/terms.html",
    "https://upelectionresults.com/editorial.html",
    "https://upelectionresults.com/corrections.html",
    "https://upelectionresults.com/advertise.html",
    "https://upelectionresults.com/data-api.html",
    "https://upelectionresults.com/",
    "https://upelectionresults.com/constituencies.html",
    "https://upelectionresults.com/results-2022.html",
    "https://upelectionresults.com/results-2017.html",
    "https://upelectionresults.com/parties.html",
    "https://upelectionresults.com/candidates.html",
    "https://upelectionresults.com/trends.html",
    "https://upelectionresults.com/districts.html",
    "https://upelectionresults.com/about.html",
    "https://upelectionresults.com/network.html"
]

xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">']

def append_url_block(loc_base):
    # En
    xml.append("  <url>")
    xml.append(f"    <loc>{loc_base}</loc>")
    xml.append(f'    <xhtml:link rel="alternate" hreflang="en-IN" href="{loc_base}"/>')
    xml.append(f'    <xhtml:link rel="alternate" hreflang="hi-IN" href="{loc_base}?lang=hi"/>')
    xml.append(f'    <xhtml:link rel="alternate" hreflang="x-default" href="{loc_base}"/>')
    xml.append("    <lastmod>2026-07-28</lastmod>")
    xml.append("  </url>")
    
    # Hi
    xml.append("  <url>")
    xml.append(f"    <loc>{loc_base}?lang=hi</loc>")
    xml.append(f'    <xhtml:link rel="alternate" hreflang="en-IN" href="{loc_base}"/>')
    xml.append(f'    <xhtml:link rel="alternate" hreflang="hi-IN" href="{loc_base}?lang=hi"/>')
    xml.append(f'    <xhtml:link rel="alternate" hreflang="x-default" href="{loc_base}"/>')
    xml.append("    <lastmod>2026-07-28</lastmod>")
    xml.append("  </url>")

for loc in urls:
    append_url_block(loc)

for c in constituencies:
    slug = re.sub(r'[^a-z0-9]+', '-', c["name"].lower())
    loc = f"https://upelectionresults.com/constituency/{slug}.html"
    append_url_block(loc)

# Add districts to sitemap
districts = sorted(list(set(c.get("district", "Uttar Pradesh") for c in constituencies)))
for dist in districts:
    dist_slug = re.sub(r'[^a-z0-9]+', '-', dist.lower())
    loc = f"https://upelectionresults.com/district/{dist_slug}.html"
    append_url_block(loc)

xml.append('</urlset>')

with open(sitemap_path, "w", encoding="utf-8") as f:
    f.write("\n".join(xml) + "\n")

print(f"Updated UP sitemap.xml with {len(xml)} lines!")
