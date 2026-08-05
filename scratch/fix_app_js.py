import re
import os

punjab_app_path = "c:/Users/User/Documents/GitHub/pnjabele/punjab/js/app.js"
up_app_path = "c:/Users/User/Documents/GitHub/pnjabele/uttar-pradesh/js/app.js"

with open(punjab_app_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update numbers first
content = content.replace("majorityMark: 59", "majorityMark: 202")
content = content.replace("majorityMark: '59'", "majorityMark: '202'")
content = content.replace("stat1Num:   '117'", "stat1Num:   '403'")
content = content.replace("117", "403") # Replace constituency count
content = content.replace("stat2Num:   '59'", "stat2Num:   '202'") # UP majority mark is 202 (Punjab is 59)
content = content.replace("stat4Num:   '23'", "stat4Num:   '75'") # UP has 75 districts, Punjab has 23
content = content.replace("2.14 Crore", "15.02 Crore")
content = content.replace("2.14 crore", "15.02 crore")
content = content.replace("2.14 ਕਰੋੜ", "15.02 crore")
content = content.replace("2.14 करोड़", "15.02 करोड़")
content = content.replace("stat3Num:   '2.14 Cr'", "stat3Num:   '15.02 Cr'")
content = content.replace("stat3Num:   '2.14 करोड़'", "stat3Num:   '15.02 करोड़'")

# 2. Protect translation keys by using placeholders WITHOUT the word "Punjab"
content = content.replace("descPunjab:", "___descPJ___")
content = content.replace("visitPunjab:", "___visitPJ___")
content = content.replace("browsePunjab:", "___browsePJ___")
content = content.replace("descPunjab :", "___descPJ___")
content = content.replace("visitPunjab :", "___visitPJ___")
content = content.replace("browsePunjab :", "___browsePJ___")

# Also protect other network keys if any
content = content.replace("visitPunjab", "___visitPJS___")

# 3. Do text replacements
content = content.replace("'UP Elections 2027'", "'Uttar Pradesh Elections 2027'")
content = content.replace("'Punjab Elections 2027'", "'UP Elections 2027'")
content = content.replace("PunjabElections.in", "UPElectionResults.in")
content = content.replace("punjabelections.in", "upelectionresults.in")
content = content.replace("'Punjab Elections'", "'UP Elections'")
content = content.replace('"Punjab Elections"', '"UP Elections"')

# Replace Punjab
content = content.replace("Punjab", "Uttar Pradesh")
content = content.replace("ਪੰਜਾਬ", "ਯੂਪੀ")

# Restore protected keys
content = content.replace("___descPJ___", "descPunjab:")
content = content.replace("___visitPJ___", "visitPunjab:")
content = content.replace("___browsePJ___", "browsePunjab:")
content = content.replace("___visitPJS___", "visitPunjab")

# Translate Hindi tags
content = content.replace("सभी 117 पंजाब विधानसभा", "सभी 403 उत्तर प्रदेश विधानसभा")
content = content.replace("पंजाब विधानसभा के लिए समर्पित", "उत्तर प्रदेश विधानसभा के लिए समर्पित")

# 4. Remove 'pa' translation block
content = re.sub(r',\s*pa:\s*\{.*?\}\s*(?=\};)', '', content, flags=re.DOTALL)

# Remove the language switcher button for pa
content = content.replace('<button class="lang-btn ${currentLang===\'pa\'?\'active\':\'\'}" data-lang="pa">ਪੰ</button>', '')

# Update the partyBadge helper to support UP parties:
old_badge = """function partyBadge(party) {
  const p = (party || '').toUpperCase();
  const cls = ['AAP','INC','SAD','BJP','BSP','IND'].includes(p) ? p.toLowerCase() : 'ind';
  return `<span class="badge badge-${cls}">${party}</span>`;
}"""

new_badge = """function partyBadge(party) {
  const p = (party || '').toUpperCase().replace(/[\\(\\)]/g, '');
  const cls = ['BJP','SP','BSP','INC','RLD','ADS','NISHAD','SBSP','JSDL','IND'].includes(p) ? p.toLowerCase() : 'ind';
  return `<span class="badge badge-${cls}">${party}</span>`;
}"""

content = content.replace(old_badge, new_badge)

# Save to UP
with open(up_app_path, "w", encoding="utf-8") as f:
    f.write(content)

print("UP app.js fixed and rewritten successfully without syntax errors!")
