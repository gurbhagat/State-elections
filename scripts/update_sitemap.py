import json
import os
import re

json_path = "c:/Users/User/Documents/GitHub/pnjabele/punjab/data/constituencies.json"
sitemap_path = "c:/Users/User/Documents/GitHub/pnjabele/punjab/sitemap.xml"

with open(json_path, "r", encoding="utf-8") as f:
    constituencies = json.load(f)

urls = [
    "https://punjabelectionresults.com/privacy.html",
    "https://punjabelectionresults.com/terms.html",
    "https://punjabelectionresults.com/editorial.html",
    "https://punjabelectionresults.com/corrections.html",
    "https://punjabelectionresults.com/advertise.html",
    "https://punjabelectionresults.com/data-api.html",
    "https://punjabelectionresults.com/",
    "https://punjabelectionresults.com/constituencies.html",
    "https://punjabelectionresults.com/results-2022.html",
    "https://punjabelectionresults.com/results-2017.html",
    "https://punjabelectionresults.com/parties.html",
    "https://punjabelectionresults.com/candidates.html",
    "https://punjabelectionresults.com/trends.html",
    "https://punjabelectionresults.com/districts.html",
    "https://punjabelectionresults.com/about.html",
    "https://punjabelectionresults.com/network.html"
]

xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">']

def append_url_block(loc_base):
    # En
    xml.append("  <url>")
    xml.append(f"    <loc>{loc_base}</loc>")
    xml.append(f'    <xhtml:link rel="alternate" hreflang="en-IN" href="{loc_base}"/>')
    xml.append(f'    <xhtml:link rel="alternate" hreflang="hi-IN" href="{loc_base}?lang=hi"/>')
    xml.append(f'    <xhtml:link rel="alternate" hreflang="pa-IN" href="{loc_base}?lang=pa"/>')
    xml.append(f'    <xhtml:link rel="alternate" hreflang="x-default" href="{loc_base}"/>')
    xml.append("    <lastmod>2026-07-28</lastmod>")
    xml.append("  </url>")
    
    # Hi
    xml.append("  <url>")
    xml.append(f"    <loc>{loc_base}?lang=hi</loc>")
    xml.append(f'    <xhtml:link rel="alternate" hreflang="en-IN" href="{loc_base}"/>')
    xml.append(f'    <xhtml:link rel="alternate" hreflang="hi-IN" href="{loc_base}?lang=hi"/>')
    xml.append(f'    <xhtml:link rel="alternate" hreflang="pa-IN" href="{loc_base}?lang=pa"/>')
    xml.append(f'    <xhtml:link rel="alternate" hreflang="x-default" href="{loc_base}"/>')
    xml.append("    <lastmod>2026-07-28</lastmod>")
    xml.append("  </url>")
    
    # Pa
    xml.append("  <url>")
    xml.append(f"    <loc>{loc_base}?lang=pa</loc>")
    xml.append(f'    <xhtml:link rel="alternate" hreflang="en-IN" href="{loc_base}"/>')
    xml.append(f'    <xhtml:link rel="alternate" hreflang="hi-IN" href="{loc_base}?lang=hi"/>')
    xml.append(f'    <xhtml:link rel="alternate" hreflang="pa-IN" href="{loc_base}?lang=pa"/>')
    xml.append(f'    <xhtml:link rel="alternate" hreflang="x-default" href="{loc_base}"/>')
    xml.append("    <lastmod>2026-07-28</lastmod>")
    xml.append("  </url>")

for loc in urls:
    append_url_block(loc)

for c in constituencies:
    slug = re.sub(r'[^a-z0-9]+', '-', c["name"].lower())
    loc = f"https://punjabelectionresults.com/constituency/{slug}.html"
    append_url_block(loc)

xml.append('</urlset>')

with open(sitemap_path, "w", encoding="utf-8") as f:
    f.write("\n".join(xml) + "\n")

print(f"Updated Punjab sitemap.xml with {len(xml)} lines!")
