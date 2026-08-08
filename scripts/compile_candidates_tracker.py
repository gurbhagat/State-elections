import os
import json

root_dir = "c:/Users/User/Documents/GitHub/pnjabele"

def compile_candidates_page(state, parties):
    json_path = os.path.join(root_dir, state, "data/candidates-2027.json")
    with open(json_path, "r", encoding="utf-8") as f:
        candidates = json.load(f)
        
    rows = []
    for c in candidates:
        ac_no = c["acNo"]
        name = c["name"]
        name_hi = c.get("nameHi", name)
        name_pa = c.get("namePa", name)
        district = c["district"]
        
        # Build td values and data attributes
        data_attrs = []
        tds = []
        for p in parties:
            val = c["declarations"].get(p) or "TBD"
            # Replace key standard
            p_key = p.lower().replace("-", "_")
            data_attrs.append(f'data-{p_key}="{val}"')
            
            if val != "TBD":
                tds.append(f'<td><strong style="color:#137333">{val}</strong></td>')
            else:
                tds.append('<td><span style="color:var(--text-3)">TBD</span></td>')
                
        data_attrs_str = " ".join(data_attrs)
        tds_str = "\n            ".join(tds)
        
        row_html = f"""          <tr data-ac="{ac_no}" data-name="{name}" data-name-hi="{name_hi}" data-name-pa="{name_pa}" data-district="{district}" {data_attrs_str}>
            <td>{ac_no}</td>
            <td><strong>{name}</strong></td>
            <td>{district}</td>
            {tds_str}
          </tr>"""
        rows.append(row_html)
        
    all_rows_html = "\n".join(rows)
    
    # Read HTML file
    html_path = os.path.join(root_dir, state, "candidates-2027.html")
    with open(html_path, "r", encoding="utf-8") as f:
        html_content = f.read()
        
    # Replace the body of candidatesTableBody
    start_tag = '<tbody id="candidatesTableBody">'
    end_tag = '</tbody>'
    
    start_idx = html_content.find(start_tag)
    end_idx = html_content.find(end_tag, start_idx)
    
    if start_idx != -1 and end_idx != -1:
        new_content = html_content[:start_idx + len(start_tag)] + "\n" + all_rows_html + "\n          " + html_content[end_idx:]
        with open(html_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Compiled hardcoded rows into {html_path}")
    else:
        print(f"Error: tbody tag not found in {html_path}")

if __name__ == "__main__":
    compile_candidates_page("punjab", ["AAP", "INC", "SAD", "BJP", "BSP", "SAD-A"])
    compile_candidates_page("uttar-pradesh", ["BJP", "SP", "BSP", "INC", "RLD", "ASP-KR"])
