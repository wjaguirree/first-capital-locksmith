# Add location grid sections to all 20 individual service pages
# Safe UTF-8 I/O - never use Get-Content/Set-Content

$enc = New-Object System.Text.UTF8Encoding($false)
$servicesDir = 'C:\Users\onasp\first-capital-locksmith\src\pages\services'

# Service page data: filename -> [display name, category slug]
$services = @{
    'car-lockout.astro'              = @('Car Lockout Service',         'automotive-locksmith',  'car-lockout')
    'car-key-replacement.astro'      = @('Car Key Replacement',         'automotive-locksmith',  'car-key-replacement')
    'key-fob-programming.astro'      = @('Key Fob Programming',         'automotive-locksmith',  'key-fob-programming')
    'ignition-repair.astro'          = @('Ignition Repair',             'automotive-locksmith',  'ignition-repair')
    'ignition-replacement.astro'     = @('Ignition Replacement',        'automotive-locksmith',  'ignition-replacement')
    'house-lockout.astro'            = @('House Lockout Service',        'residential-locksmith', 'house-lockout')
    'lock-rekeying.astro'            = @('Lock Rekeying',                'residential-locksmith', 'lock-rekeying')
    'deadbolt-installation.astro'    = @('Deadbolt Installation',        'residential-locksmith', 'deadbolt-installation')
    'lock-repair.astro'              = @('Lock Repair',                  'residential-locksmith', 'lock-repair')
    'lock-change.astro'              = @('Lock Change',                  'residential-locksmith', 'lock-change')
    'mailbox-lock-replacement.astro' = @('Mailbox Lock Replacement',     'residential-locksmith', 'mailbox-lock-replacement')
    'office-lockout.astro'           = @('Office Lockout',               'commercial-locksmith',  'office-lockout')
    'commercial-lock-rekeying.astro' = @('Commercial Lock Rekeying',     'commercial-locksmith',  'commercial-lock-rekeying')
    'master-key-systems.astro'       = @('Master Key Systems',           'commercial-locksmith',  'master-key-systems')
    'panic-bar-installation.astro'   = @('Panic Bar Installation',       'commercial-locksmith',  'panic-bar-installation')
    'emergency-lockout.astro'        = @('Emergency Lockout Service',    'emergency-locksmith',   'emergency-lockout')
    'emergency-house-lockout.astro'  = @('Emergency House Lockout',      'emergency-locksmith',   'emergency-house-lockout')
    'emergency-car-lockout.astro'    = @('Emergency Car Lockout',        'emergency-locksmith',   'emergency-car-lockout')
    'safe-lockout-services.astro'    = @('Safe Lockout Services',        'emergency-locksmith',   'safe-lockout-services')
    'broken-key-extraction.astro'    = @('Broken Key Extraction',        'emergency-locksmith',   'broken-key-extraction')
}

# Location slugs and city display names (ordered)
$locations = [ordered]@{
    'bowers-de'      = 'Bowers'
    'camden-de'      = 'Camden'
    'cheswold-de'    = 'Cheswold'
    'clayton-de'     = 'Clayton'
    'dover-de'       = 'Dover'
    'farmington-de'  = 'Farmington'
    'felton-de'      = 'Felton'
    'frederica-de'   = 'Frederica'
    'harrington-de'  = 'Harrington'
    'hartly-de'      = 'Hartly'
    'houston-de'     = 'Houston'
    'kenton-de'      = 'Kenton'
    'leipsic-de'     = 'Leipsic'
    'little-creek-de'= 'Little Creek'
    'magnolia-de'    = 'Magnolia'
    'milford-de'     = 'Milford'
    'smyrna-de'      = 'Smyrna'
    'viola-de'       = 'Viola'
    'woodside-de'    = 'Woodside'
    'wyoming-de'     = 'Wyoming'
}

foreach ($filename in $services.Keys) {
    $info = $services[$filename]
    $displayName = $info[0]
    $category    = $info[1]
    $serviceSlug = $info[2]

    $filePath = Join-Path $servicesDir $filename

    if (-not (Test-Path $filePath)) {
        Write-Host "SKIP (not found): $filename"
        continue
    }

    $txt = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)

    # Skip if already has the location grid
    if ($txt -match '<!-- Service Near You -->') {
        Write-Host "ALREADY DONE: $filename"
        continue
    }

    # Build city links
    $cityLinks = ''
    foreach ($slug in $locations.Keys) {
        $city = $locations[$slug]
        $url  = "/services/$category/$slug/$serviceSlug/"
        $cityLinks += "        <a href=`"$url`" class=`"flex items-center justify-center bg-[#F8F8F5] border border-gray-200 rounded-lg px-4 py-3 text-sm font-semibold text-[#1A1F22] hover:bg-[#A61E22] hover:text-white hover:border-[#A61E22] transition`">$city</a>`n"
    }

    # Build the full section
    $section = @"

  <!-- Service Near You -->
  <section class="bg-white py-16">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-10">
        <p class="text-[#9A9D62] font-semibold uppercase tracking-wide text-sm mb-3">Delaware Locations</p>
        <h2 class="text-2xl md:text-3xl font-bold text-[#1A1F22] mb-4">$displayName Near You</h2>
        <p class="text-gray-700 max-w-2xl mx-auto">1st Capital Locksmith provides $displayName throughout Kent County and surrounding Delaware communities. Choose your city for local service details.</p>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
$($cityLinks.TrimEnd())
      </div>
    </div>
  </section>

"@

    # Insert before <!-- CTA -->
    $newTxt = $txt -replace '(\r?\n  <!-- CTA -->)', "$section`$1"

    [System.IO.File]::WriteAllText($filePath, $newTxt, $enc)
    Write-Host "UPDATED: $filename"
}

Write-Host "`nDone."
