import json
import os
import re
from collections import defaultdict

root_dir = "c:/Users/User/Documents/GitHub/pnjabele"

def slugify(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower())

PARTY_COLORS = {
    "BJP": "#FF671F", "SP": "#E33229", "BSP": "#1B4FBB", "INC": "#19AAED",
    "AAP": "#DD2222", "SAD": "#1A237E", "RLD": "#009B4C", "ADS": "#8B5CF6",
    "SBSP": "#D97706", "NISHAD": "#0EA5E9", "JSDL": "#84CC16",
    "JJKP": "#6D28D9", "CPM": "#CC0000", "IND": "#6B7280"
}

def party_color(p):
    return PARTY_COLORS.get(p, "#6B7280")

def generate_district_pages(state_name, json_path, out_dir, root_state_dir, domain):
    with open(json_path, "r", encoding="utf-8") as f:
        constituencies = json.load(f)

    os.makedirs(out_dir, exist_ok=True)

    district_map = defaultdict(list)
    for c in constituencies:
        dist = c.get("district", state_name)
        district_map[dist].append(c)

    for dist, list_c in district_map.items():
        slug = slugify(dist)
        total_seats = len(list_c)
        sc_seats = sum(1 for c in list_c if c.get("reserved") == "SC")

        # Party counts
        party_counts = defaultdict(int)
        for c in list_c:
            p = c.get("r22", {}).get("party", "IND")
            party_counts[p] += 1
        sorted_parties = sorted(party_counts.items(), key=lambda x: x[1], reverse=True)
        top_party = sorted_parties[0][0] if sorted_parties else "—"
        top_seats = sorted_parties[0][1] if sorted_parties else 0
        top_color = party_color(top_party)

        # Party bar + legend
        bar_segs = ""
        legend_items = ""
        for p, cnt in sorted_parties:
            pct = round(cnt / total_seats * 100, 1)
            col = party_color(p)
            bar_segs += f'<div class="dist-bar-seg" style="width:{pct}%;background:{col}" title="{p}: {cnt}"></div>'
            legend_items += (
                f'<div class="dist-leg-item">'
                f'<div class="dist-leg-dot" style="background:{col}"></div>'
                f'<span class="dist-leg-label">{p}</span>'
                f'<span class="dist-leg-count">{cnt}</span>'
                f'</div>'
            )

        # Constituency cards
        const_cards = ""
        for c in sorted(list_c, key=lambda x: x.get("acNo", 0)):
            c_slug = slugify(c["name"])
            r22 = c.get("r22", {})
            p = r22.get("party", "IND")
            col = party_color(p)
            margin = r22.get("margin", 0)
            margin_str = f'{margin:,}' if isinstance(margin, int) else str(margin)
            winner = r22.get("winner", "—")
            sc_tag = '<span class="const-sc-tag">SC</span>' if c.get("reserved") == "SC" else ""
            const_cards += (
                f'<a class="const-card const-card-party-line" href="../constituency/{c_slug}.html" '
                f'style="border-left-color:{col}">'
                f'<div class="const-name">{c["name"]}{sc_tag}</div>'
                f'<div class="const-winner">{winner}</div>'
                f'<div class="const-meta">'
                f'<span class="const-badge" style="background:{col}">{p}</span>'
                f'<span class="const-margin">Margin: {margin_str}</span>'
                f'</div>'
                f'</a>\n'
            )

        umami_id = "0f9e6085-bae3-48a2-a212-957a62e7dcbe" if state_name == "Uttar Pradesh" else "66249334-d6ae-4e78-8c43-aa495f7ddcf4"

        html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{dist} District Assembly Elections | {state_name} Elections</title>
  <meta name="description" content="Detailed election results for {dist} district in {state_name}. Seat tallies, winning candidates, and margins for all constituencies.">
  <link rel="canonical" href="https://{domain}/district/{slug}.html">
  <meta property="og:title" content="{dist} District Assembly Elections | {state_name} Elections">
  <meta property="og:description" content="Detailed election results for {dist} district. Seat tallies, winners and margins.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">
  <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon" />
  <link rel="icon" type="image/png" sizes="48x48" href="../favicon-48.png" />
  <link rel="icon" type="image/png" sizes="96x96" href="../favicon-96.png" />
  <link rel="icon" type="image/svg+xml" href="../favicon.svg" />
  <script defer src="https://app.umamiengine.com/script.js" data-website-id="{umami_id}"></script>
  <style>
    .dist-hero {{
      background: linear-gradient(135deg, {top_color}18 0%, var(--surface) 55%);
      border-bottom: 1px solid var(--border);
      padding: var(--s-10) 0 var(--s-8);
      position: relative;
      overflow: hidden;
    }}
    .dist-hero::before {{
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 4px;
      background: {top_color};
    }}
    .dist-breadcrumb {{ font-size: var(--text-sm); color: var(--text-3); margin-bottom: var(--s-3); }}
    .dist-breadcrumb a {{ color: var(--text-3); text-decoration: none; }}
    .dist-breadcrumb a:hover {{ color: var(--accent); }}
    .dist-hero-title {{ font-size: clamp(1.5rem, 4vw, 2.25rem); font-weight: 800; color: var(--text); letter-spacing: -.5px; margin-bottom: var(--s-2); }}
    .dist-hero-sub {{ font-size: var(--text-base); color: var(--text-2); margin-bottom: 0; }}
    .dist-stats-strip {{ display: flex; gap: var(--s-6); flex-wrap: wrap; margin-top: var(--s-6); padding-top: var(--s-6); border-top: 1px solid var(--border); }}
    .dist-stat-num {{ font-size: 1.75rem; font-weight: 800; color: var(--text); line-height: 1; }}
    .dist-stat-lbl {{ font-size: var(--text-xs); color: var(--text-3); text-transform: uppercase; letter-spacing: .8px; font-weight: 600; margin-top: 3px; }}
    .dist-section-label {{ font-size: var(--text-xs); font-weight: 700; color: var(--text-3); text-transform: uppercase; letter-spacing: 1px; margin-bottom: var(--s-4); }}
    .dist-party-section {{ background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: var(--s-5); margin-bottom: var(--s-8); }}
    .dist-party-bar {{ height: 12px; background: var(--surface-3); border-radius: 100px; overflow: hidden; display: flex; margin-bottom: var(--s-4); }}
    .dist-bar-seg {{ height: 100%; transition: width .6s cubic-bezier(.4,0,.2,1); }}
    .dist-party-legend {{ display: flex; gap: var(--s-4); flex-wrap: wrap; }}
    .dist-leg-item {{ display: flex; align-items: center; gap: 6px; }}
    .dist-leg-dot {{ width: 10px; height: 10px; border-radius: 3px; flex-shrink: 0; }}
    .dist-leg-label {{ font-size: var(--text-sm); font-weight: 600; color: var(--text-2); }}
    .dist-leg-count {{ font-size: var(--text-sm); color: var(--text-3); }}
    .const-grid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: var(--s-4); }}
    .const-card {{
      background: var(--surface);
      border: 1px solid var(--border);
      border-left: 3px solid #888;
      border-radius: var(--radius);
      padding: var(--s-4) var(--s-5);
      text-decoration: none;
      display: block;
      transition: transform .15s ease, box-shadow .15s ease;
    }}
    .const-card:hover {{ transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,.14); border-color: var(--border-2); }}
    .const-name {{ font-size: var(--text-sm); font-weight: 700; color: var(--text); margin-bottom: var(--s-1); display: flex; align-items: center; gap: var(--s-2); }}
    .const-winner {{ font-size: var(--text-sm); color: var(--text-2); margin-bottom: var(--s-3); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }}
    .const-meta {{ display: flex; align-items: center; justify-content: space-between; gap: var(--s-2); }}
    .const-badge {{ font-size: 11px; font-weight: 700; color: #fff; padding: 2px 8px; border-radius: 4px; }}
    .const-margin {{ font-size: 11px; color: var(--text-3); font-weight: 500; }}
    .const-sc-tag {{ font-size: 10px; font-weight: 600; color: var(--text-3); background: var(--surface-3); border-radius: 4px; padding: 1px 5px; }}
    @media (max-width: 640px) {{
      .dist-stats-strip {{ gap: var(--s-4); }}
      .const-grid {{ grid-template-columns: 1fr 1fr; }}
    }}
    @media (max-width: 400px) {{
      .const-grid {{ grid-template-columns: 1fr; }}
    }}
  </style>
  <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
  <script>
    window.googletag = window.googletag || {{cmd: []}};
    googletag.cmd.push(function() {{
      var mapping = googletag.sizeMapping()
        .addSize([768, 0], [728, 90])  // Tablet & Desktop
        .addSize([0, 0], [320, 50])    // Mobile
        .build();
        
      googletag.defineSlot('/130702287/Leaderboard', [[728, 90], [320, 50]], 'ad-slot-container')
        .defineSizeMapping(mapping)
        .addService(googletag.pubads());
        
      googletag.setConfig({{singleRequest: true}});
      googletag.enableServices();
    }});
  </script>
</head>
<body>

<header class="site-header" id="siteHeader"></header>




<div class="dist-hero">
  <div class="container">
    <div class="dist-breadcrumb"><a href="../districts.html">← All Districts</a> / {dist}</div>
    <h1 class="dist-hero-title">{dist} District</h1>
    <p class="dist-hero-sub">{state_name} Vidhan Sabha — 2022 Assembly Election Results</p>
    <div class="dist-stats-strip">
      <div class="dist-stat">
        <div class="dist-stat-num">{total_seats}</div>
        <div class="dist-stat-lbl">Constituencies</div>
      </div>
      <div class="dist-stat">
        <div class="dist-stat-num">{sc_seats}</div>
        <div class="dist-stat-lbl">SC Reserved</div>
      </div>
      <div class="dist-stat">
        <div class="dist-stat-num">{top_party}</div>
        <div class="dist-stat-lbl">Leading Party</div>
      </div>
      <div class="dist-stat">
        <div class="dist-stat-num">{top_seats}</div>
        <div class="dist-stat-lbl">Seats Won</div>
      </div>
    </div>
  </div>
</div>








<div class="ad-wrap-content" style="display:flex;justify-content:center;margin:20px auto;max-width:100%;overflow:hidden;">
  <div id="ad-slot-container" style="min-width: 320px; min-height: 50px;">
    <script>
      googletag.cmd.push(function() {{ googletag.display('ad-slot-container'); }});
    </script>
  </div>
</div>

<main class="section">
  <div class="container" style="max-width:980px">

    <div class="dist-party-section">
      <div class="dist-section-label">2022 Seat Distribution</div>
      <div class="dist-party-bar">{bar_segs}</div>
      <div class="dist-party-legend">{legend_items}</div>
    </div>

    


<div class="dist-section-label" style="margin-bottom:var(--s-4)">Constituency Results</div>
    <div class="const-grid">
{const_cards}
    </div>

    <div style="margin-top:var(--s-8)">
      <a href="../districts.html" class="btn btn-secondary">← All Districts</a>
    </div>

  </div>
</main>




<footer class="site-footer" id="siteFooter"></footer>
<script src="../js/app.js"></script>
</body>
</html>"""

        # Write nested district file
        file_path = os.path.join(out_dir, f"{slug}.html")
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(html)

        # Write root level redirect stub
        stub_path = os.path.join(root_state_dir, f"district-{slug}.html")
        stub_html = f"""<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Redirecting...</title>
  <link rel="canonical" href="https://{domain}/district/{slug}.html">
  <meta http-equiv="refresh" content="0; url=district/{slug}.html">
  <script>window.location.replace("district/{slug}.html");</script>
  <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
  <script>
    window.googletag = window.googletag || {{cmd: []}};
    googletag.cmd.push(function() {{
      var mapping = googletag.sizeMapping()
        .addSize([768, 0], [728, 90])  // Tablet & Desktop
        .addSize([0, 0], [320, 50])    // Mobile
        .build();
        
      googletag.defineSlot('/130702287/Leaderboard', [[728, 90], [320, 50]], 'ad-slot-container')
        .defineSizeMapping(mapping)
        .addService(googletag.pubads());
        
      googletag.setConfig({{singleRequest: true}});
      googletag.enableServices();
    }});
  </script>
</head>
<body>
  <p>Redirecting to <a href="district/{slug}.html">{dist} district results</a>...</p>
</body>
</html>"""
        with open(stub_path, "w", encoding="utf-8") as f:
            f.write(stub_html)

    print(f"Generated {len(district_map)} district pages for {state_name}!")

# Generate Punjab districts
generate_district_pages(
    state_name="Punjab",
    json_path=os.path.join(root_dir, "punjab/data/constituencies.json"),
    out_dir=os.path.join(root_dir, "punjab/district"),
    root_state_dir=os.path.join(root_dir, "punjab"),
    domain="punjabelectionresults.com"
)

# Generate UP districts
generate_district_pages(
    state_name="Uttar Pradesh",
    json_path=os.path.join(root_dir, "uttar-pradesh/data/constituencies.json"),
    out_dir=os.path.join(root_dir, "uttar-pradesh/district"),
    root_state_dir=os.path.join(root_dir, "uttar-pradesh"),
    domain="upelectionresults.com"
)
