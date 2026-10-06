#!/bin/bash

# Post-launch DNS & Redirect Checker for rguertin.ca

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

function pass() { echo -e "${GREEN}[PASS]${NC} $1"; }
function fail() { echo -e "${RED}[FAIL]${NC} $1"; }

echo "Running post-launch checks for rguertin.ca..."
echo "------------------------------------------------"

# 1. Apex Domain HTTP 200 and HTTPS
status=$(curl -s -o /dev/null -w "%{http_code}" https://rguertin.ca/)
if [ "$status" -eq 200 ]; then 
    pass "https://rguertin.ca returns HTTP 200"
else 
    fail "https://rguertin.ca returns HTTP $status (expected 200)"
fi

# 2. WWW Domain redirects to Apex
www_status=$(curl -s -o /dev/null -w "%{http_code}" https://www.rguertin.ca/)
www_location=$(curl -s -I https://www.rguertin.ca/ | grep -i "^location:" | awk '{print $2}' | tr -d '\r')
if [[ "$www_status" =~ ^30[18]$ ]] && [[ "$www_location" == "https://rguertin.ca/" || "$www_location" == "https://rguertin.ca" ]]; then
    pass "www.rguertin.ca correctly redirects to https://rguertin.ca ($www_status)"
else
    fail "www.rguertin.ca redirect is broken. Status: $www_status, Location: $www_location"
fi

# 3. No X-Robots-Tag: noindex
if curl -s -I https://rguertin.ca/ | grep -i "x-robots-tag.*noindex" > /dev/null; then
    fail "X-Robots-Tag: noindex FOUND on https://rguertin.ca. This will hide the site from Google!"
else
    pass "No 'X-Robots-Tag: noindex' found on https://rguertin.ca"
fi

# 4. Sitemap and Robots
robots_status=$(curl -s -o /dev/null -w "%{http_code}" https://rguertin.ca/robots.txt)
if [ "$robots_status" -eq 200 ]; then 
    pass "robots.txt is live"
else 
    fail "robots.txt returned HTTP $robots_status"
fi

sitemap_count=$(curl -s https://rguertin.ca/sitemap.xml | grep -c "<loc>")
if [ "$sitemap_count" -eq 10 ]; then 
    pass "sitemap.xml is live and lists 10 URLs"
else 
    fail "sitemap.xml lists $sitemap_count URLs (expected 10)"
fi

# 5. /en route check
en_html=$(curl -s https://rguertin.ca/en)
if echo "$en_html" | grep -i '<html[^>]*lang="en"' > /dev/null; then 
    pass "/en has <html lang=\"en\">"
else 
    fail "/en missing lang=\"en\""
fi
if echo "$en_html" | grep -i 'hreflang="fr-ca"' > /dev/null; then 
    pass "/en has hreflang tags"
else 
    fail "/en missing hreflang tags"
fi

# 6. WP Legacy Redirects
redirects=(
    "/notre-expertise"
    "/notre-equipe"
    "/nous-joindre"
    "/politique-de-cookies-ca"
    "/declaration-de-confidentialite-ca"
    "/resume-de-notre-politique-de-traitement-des-plaintes-et-de-reglement-des-differends"
    "/en/our-expertise"
    "/en/our-team"
    "/en/contact-us"
    "/en/cookie-statement-ca"
    "/en/privacy-statement-ca"
    "/category/non-classifiee"
)

all_redirects_pass=true
for url in "${redirects[@]}"; do
    status=$(curl -s -o /dev/null -w "%{http_code}" "https://rguertin.ca$url")
    if [[ "$status" != "301" && "$status" != "308" ]]; then
        fail "Redirect $url returned $status (expected 301/308)"
        all_redirects_pass=false
    fi
done
if $all_redirects_pass; then pass "All 12 legacy WP URLs redirect successfully"; fi

# 7. DNS Checks (MX, SPF, CNAMEs)
echo "------------------------------------------------"
echo "Checking Email DNS Records (via 1.1.1.1)..."

mx_records=$(dig +short MX rguertin.ca @1.1.1.1)
if echo "$mx_records" | grep "10 mx-cluster-ca01.hornetsecurity.com." > /dev/null && \
   echo "$mx_records" | grep "20 mx-cluster-ca03.hornetsecurity.com." > /dev/null && \
   echo "$mx_records" | grep "30 mx-cluster-ca02.hornetsecurity.com." > /dev/null && \
   echo "$mx_records" | grep "40 mx-cluster-ca-fallback.hornetsecurity.com." > /dev/null; then
    pass "MX Records match Hornetsecurity"
else
    fail "MX Records Mismatch!\nFound:\n$mx_records"
fi

txt_records=$(dig +short TXT rguertin.ca @1.1.1.1)
if echo "$txt_records" | grep "v=spf1 include:spf.protection.outlook.com include:spf.hornetsecurity.com -all" > /dev/null; then
    pass "SPF TXT Record matches"
else
    fail "SPF Record Mismatch!\nFound:\n$txt_records"
fi

autodiscover=$(dig +short CNAME autodiscover.rguertin.ca @1.1.1.1)
if [[ "$autodiscover" == "autodiscover.outlook.com." ]]; then
    pass "Autodiscover CNAME matches Outlook"
else
    fail "Autodiscover CNAME Mismatch! Found: $autodiscover"
fi

dkim1=$(dig +short CNAME selector1._domainkey.rguertin.ca @1.1.1.1)
dkim2=$(dig +short CNAME selector2._domainkey.rguertin.ca @1.1.1.1)
if [[ -n "$dkim1" ]] && [[ -n "$dkim2" ]] && echo "$dkim1" | grep "onmicrosoft.com." > /dev/null; then
    pass "DKIM CNAMEs exist and point to onmicrosoft.com"
else
    fail "DKIM CNAMEs Mismatch! Found:\n$dkim1\n$dkim2"
fi

echo "------------------------------------------------"
echo "Check complete."
