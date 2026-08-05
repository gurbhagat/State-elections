import json
import os
import re
from collections import defaultdict

root_dir = "c:/Users/User/Documents/GitHub/pnjabele"

def slugify(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower())

def generate_district_pages(state_name, json_path, out_dir, root_state_dir, domain):
    with open(json_path, "r", encoding="utf-8") as f:
        constituencies = json.load(f)
        
    os.makedirs(out_dir, exist_ok=True)
    
    # Group constituencies by district
    district_map = defaultdict(list)
    for c in constituencies:
        dist = c.get("district", state_name)
        district_map[dist].append(c)
        
    template = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{dist_name} District Assembly Elections | {state_name} Elections</title>
  <meta name="description" content="Detailed election results for {dist_name} district in {state_name}. Seat tallies, winning candidates, and margins for all constituencies.">
  <link rel="canonical" href="https://{domain}/district/{slug}.html">
  <meta property="og:title" content="{dist_name} District Assembly Elections | {state_name} Elections">
  <meta property="og:description" content="Detailed election results for {dist_name} district. Seat tallies, winners and margins.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">
  <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon" />
  <link rel="icon" type="image/png" sizes="48x48" href="../favicon-48.png" />
  <link rel="icon" type="image/png" sizes="96x96" href="../favicon-96.png" />
  <link rel="icon" type="image/svg+xml" href="../favicon.svg" />
</head>
<body>

<header class="site-header" id="siteHeader"></header>

<div class="ac-hero">
  <div class="container">
    <div class="ac-breadcrumb">
      <a href="../districts.html">Districts</a> / <span id="distBreadcrumb">{dist_name}</span>
    </div>
    <h1 class="ac-title">{dist_name} District</h1>
    <div class="ac-meta">
      <span class="badge badge-gen">{total_seats} Constituencies</span>
    </div>
  </div>
</div>

<main class="section">
  <div class="container" style="max-width:900px">
    
    <!-- Seat Summary Table -->
    <div class="chart-wrap" style="margin-bottom:var(--s-6)">
      <div class="chart-title">2022 Seat Distribution in {dist_name}</div>
      <table class="data-table">
        <thead>
          <tr>
            <th>Party</th>
            <th style="text-align:right">Seats Won (2022)</th>
          </tr>
        </thead>
        <tbody>
          {seat_rows}
        </tbody>
      </table>
    </div>

    <!-- Constituencies List -->
    <div class="chart-wrap" style="margin-bottom:var(--s-6)">
      <div class="chart-title">Constituency-wise Results</div>
      <table class="data-table">
        <thead>
          <tr>
            <th>Constituency</th>
            <th>2022 Winner</th>
            <th>Party</th>
            <th style="text-align:right">Margin</th>
          </tr>
        </thead>
        <tbody>
          {constituency_rows}
        </tbody>
      </table>
    </div>

    <div style="margin-top:var(--s-6)">
      <a href="../districts.html" class="btn btn-secondary">All Districts</a>
    </div>

  </div>
</main>

<footer class="site-footer" id="siteFooter"></footer>

<script src="../js/app.js"></script>
</body>
</html>
"""

    for dist, list_c in district_map.items():
        slug = slugify(dist)
        total_seats = len(list_c)
        
        # Calculate party counts
        party_counts = defaultdict(int)
        for c in list_c:
            p22 = c.get("r22", {}).get("party", "—")
            party_counts[p22] += 1
            
        # Sort parties by seats won
        sorted_parties = sorted(party_counts.items(), key=lambda x: x[1], reverse=True)
        seat_rows = ""
        for p, count in sorted_parties:
            seat_rows += f"""          <tr>
            <td><strong>{p}</strong></td>
            <td style="text-align:right;font-weight:600">{count}</td>
          </tr>\n"""
          
        # Build constituencies list rows
        const_rows = ""
        for c in sorted(list_c, key=lambda x: x.get("acNo", 0)):
            c_slug = slugify(c["name"])
            r22 = c.get("r22", {})
            const_rows += f"""          <tr>
            <td><a href="../constituency/{c_slug}.html" class="ac-link">{c["name"]}</a></td>
            <td>{r22.get("winner", "—")}</td>
            <td><span class="badge" style="background:var(--c-{r22.get("party", "").lower()});color:#fff">{r22.get("party", "—")}</span></td>
            <td style="text-align:right">{r22.get("margin", 0):,}</td>
          </tr>\n"""
          
        html = template.format(
            dist_name=dist,
            state_name=state_name,
            slug=slug,
            domain=domain,
            total_seats=total_seats,
            seat_rows=seat_rows,
            constituency_rows=const_rows
        )
        
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
