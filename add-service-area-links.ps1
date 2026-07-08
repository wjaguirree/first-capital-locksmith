# Add "All Services in City" sections to all 20 service area pages
# Safe UTF-8 I/O

$enc = New-Object System.Text.UTF8Encoding($false)
$areaDir = 'C:\Users\onasp\first-capital-locksmith\src\pages\service-areas'

# Location slug -> city display name
$cities = [ordered]@{
    'bowers-de'       = 'Bowers'
    'camden-de'       = 'Camden'
    'cheswold-de'     = 'Cheswold'
    'clayton-de'      = 'Clayton'
    'dover-de'        = 'Dover'
    'farmington-de'   = 'Farmington'
    'felton-de'       = 'Felton'
    'frederica-de'    = 'Frederica'
    'harrington-de'   = 'Harrington'
    'hartly-de'       = 'Hartly'
    'houston-de'      = 'Houston'
    'kenton-de'       = 'Kenton'
    'leipsic-de'      = 'Leipsic'
    'little-creek-de' = 'Little Creek'
    'magnolia-de'     = 'Magnolia'
    'milford-de'      = 'Milford'
    'smyrna-de'       = 'Smyrna'
    'viola-de'        = 'Viola'
    'woodside-de'     = 'Woodside'
    'wyoming-de'      = 'Wyoming'
}

# Category -> service slug -> display name
$categories = [ordered]@{
    'Automotive'  = [ordered]@{
        category = 'automotive-locksmith'
        services = [ordered]@{
            'car-lockout'          = 'Car Lockout'
            'car-key-replacement'  = 'Car Key Replacement'
            'key-fob-programming'  = 'Key Fob Programming'
            'ignition-repair'      = 'Ignition Repair'
            'ignition-replacement' = 'Ignition Replacement'
        }
    }
    'Residential' = [ordered]@{
        category = 'residential-locksmith'
        services = [ordered]@{
            'house-lockout'            = 'House Lockout'
            'lock-rekeying'            = 'Lock Rekeying'
            'deadbolt-installation'    = 'Deadbolt Installation'
            'lock-repair'              = 'Lock Repair'
            'lock-change'              = 'Lock Change'
            'mailbox-lock-replacement' = 'Mailbox Lock Replacement'
        }
    }
    'Commercial'  = [ordered]@{
        category = 'commercial-locksmith'
        services = [ordered]@{
            'office-lockout'           = 'Office Lockout'
            'commercial-lock-rekeying' = 'Commercial Lock Rekeying'
            'master-key-systems'       = 'Master Key Systems'
            'panic-bar-installation'   = 'Panic Bar Installation'
        }
    }
    'Emergency'   = [ordered]@{
        category = 'emergency-locksmith'
        services = [ordered]@{
            'emergency-lockout'       = 'Emergency Lockout'
            'emergency-house-lockout' = 'Emergency House Lockout'
            'emergency-car-lockout'   = 'Emergency Car Lockout'
            'safe-lockout-services'   = 'Safe Lockout Services'
            'broken-key-extraction'   = 'Broken Key Extraction'
        }
    }
}

foreach ($slug in $cities.Keys) {
    $city = $cities[$slug]
    $filePath = Join-Path $areaDir "$slug.astro"

    if (-not (Test-Path $filePath)) {
        Write-Host "SKIP (not found): $slug.astro"
        continue
    }

    $txt = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)

    if ($txt -match '<!-- All Services') {
        Write-Host "ALREADY DONE: $slug.astro"
        continue
    }

    # Build the 4-column category grid
    $colsHtml = ''
    foreach ($catName in $categories.Keys) {
        $catData = $categories[$catName]
        $catSlug = $catData.category
        $svcMap  = $catData.services

        $liItems = ''
        foreach ($svcSlug in $svcMap.Keys) {
            $svcName = $svcMap[$svcSlug]
            $url = "/services/$catSlug/$slug/$svcSlug/"
            $liItems += "            <li><a href=`"$url`" class=`"text-gray-700 text-sm hover:text-[#A61E22] hover:underline transition`">$svcName</a></li>`n"
        }

        $colsHtml += @"
        <div>
          <h3 class="text-sm font-bold text-[#A61E22] uppercase tracking-wide mb-3 pb-2 border-b border-gray-200">$catName</h3>
          <ul class="space-y-2">
$($liItems.TrimEnd())
          </ul>
        </div>
"@
    }

    $section = @"

  <!-- All Services in $city -->
  <section class="bg-white py-16">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-12">
        <p class="text-[#9A9D62] font-semibold uppercase tracking-wide text-sm mb-3">Complete Service Directory</p>
        <h2 class="text-2xl md:text-3xl font-bold text-[#1A1F22] mb-4">All Locksmith Services in $city, DE</h2>
        <p class="text-gray-700 max-w-2xl mx-auto">Every service we provide in $city — click any service for detailed information and local pricing.</p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
$($colsHtml.TrimEnd())
      </div>
    </div>
  </section>

"@

    # Insert before <!-- CTA -->
    $newTxt = $txt -replace '(\r?\n  <!-- CTA -->)', "$section`$1"
    [System.IO.File]::WriteAllText($filePath, $newTxt, $enc)
    Write-Host "UPDATED: $slug.astro"
}

Write-Host "`nDone."
