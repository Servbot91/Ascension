(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // state.js
  function resetBattleState() {
    state.gauntletChampion = null;
    state.gauntletWins = 0;
    state.gauntletDefeated = [];
    state.gauntletFalling = false;
    state.gauntletFallingItem = null;
    state.gauntletChampionRank = 0;
    state.matchHistory = [];
    state.skippedId = null;
  }
  var state;
  var init_state = __esm({
    "state.js"() {
      state = {
        // Current Matchup Info
        currentPair: { left: null, right: null },
        currentRanks: { left: null, right: null },
        // App Configuration & Context
        currentMode: "swiss",
        // "swiss", "gauntlet", or "champion"
        battleType: "performers",
        // "performers", "scenes", or "images"
        totalItemsCount: 0,
        disableChoice: false,
        // Gauntlet/Champion Mode Progress
        gauntletChampion: null,
        gauntletWins: 0,
        gauntletChampionRank: 0,
        gauntletDefeated: [],
        gauntletFalling: false,
        gauntletFallingItem: null,
        // Filters & Settings
        cachedUrlFilter: null,
        badgeInjectionInProgress: false,
        pluginConfigCache: null,
        selectedGenders: ["FEMALE"],
        // Enhanced tracking
        matchHistory: [],
        skippedIds: [],
        // Track multiple skipped IDs
        seenPairs: /* @__PURE__ */ new Set(),
        // Track seen performer pairs to prevent repetition
        // Skip tracking
        skippedId: null
        // Keep for backward compatibility but deprecate
      };
    }
  });

  // constants.js
  var ALL_GENDERS, COUNTRY_NAMES, ARRAY_BASED_MODIFIERS;
  var init_constants = __esm({
    "constants.js"() {
      ALL_GENDERS = Object.freeze([
        { value: "FEMALE", label: "Female" },
        { value: "MALE", label: "Male" },
        { value: "TRANSGENDER_MALE", label: "Trans Male" },
        { value: "TRANSGENDER_FEMALE", label: "Trans Female" },
        { value: "INTERSEX", label: "Intersex" },
        { value: "NON_BINARY", label: "Non-Binary" }
      ]);
      COUNTRY_NAMES = Object.freeze({
        "AF": "Afghanistan",
        "AX": "\xC5land Islands",
        "AL": "Albania",
        "DZ": "Algeria",
        "AS": "American Samoa",
        "AD": "Andorra",
        "AO": "Angola",
        "AI": "Anguilla",
        "AQ": "Antarctica",
        "AG": "Antigua and Barbuda",
        "AR": "Argentina",
        "AM": "Armenia",
        "AW": "Aruba",
        "AU": "Australia",
        "AT": "Austria",
        "AZ": "Azerbaijan",
        "BS": "Bahamas",
        "BH": "Bahrain",
        "BD": "Bangladesh",
        "BB": "Barbados",
        "BY": "Belarus",
        "BE": "Belgium",
        "BZ": "Belize",
        "BJ": "Benin",
        "BM": "Bermuda",
        "BT": "Bhutan",
        "BO": "Bolivia",
        "BQ": "Bonaire, Sint Eustatius and Saba",
        "BA": "Bosnia and Herzegovina",
        "BW": "Botswana",
        "BV": "Bouvet Island",
        "BR": "Brazil",
        "IO": "British Indian Ocean Territory",
        "BN": "Brunei Darussalam",
        "BG": "Bulgaria",
        "BF": "Burkina Faso",
        "BI": "Burundi",
        "KH": "Cambodia",
        "CM": "Cameroon",
        "CA": "Canada",
        "CV": "Cape Verde",
        "KY": "Cayman Islands",
        "CF": "Central African Republic",
        "TD": "Chad",
        "CL": "Chile",
        "CN": "People's Republic of China",
        "CX": "Christmas Island",
        "CC": "Cocos (Keeling) Islands",
        "CO": "Colombia",
        "KM": "Comoros",
        "CG": "Republic of the Congo",
        "CD": "Democratic Republic of the Congo",
        "CK": "Cook Islands",
        "CR": "Costa Rica",
        "CI": "Cote d'Ivoire",
        "HR": "Croatia",
        "CU": "Cuba",
        "CW": "Cura\xE7ao",
        "CY": "Cyprus",
        "CZ": "Czech Republic",
        "DK": "Denmark",
        "DJ": "Djibouti",
        "DM": "Dominica",
        "DO": "Dominican Republic",
        "EC": "Ecuador",
        "EG": "Egypt",
        "SV": "El Salvador",
        "GQ": "Equatorial Guinea",
        "ER": "Eritrea",
        "EE": "Estonia",
        "ET": "Ethiopia",
        "SZ": "Eswatini",
        "FK": "Falkland Islands (Malvinas)",
        "FO": "Faroe Islands",
        "FJ": "Fiji",
        "FI": "Finland",
        "FR": "France",
        "GF": "French Guiana",
        "PF": "French Polynesia",
        "TF": "French Southern Territories",
        "GA": "Gabon",
        "GM": "Republic of The Gambia",
        "GE": "Georgia",
        "DE": "Germany",
        "GH": "Ghana",
        "GI": "Gibraltar",
        "GR": "Greece",
        "GL": "Greenland",
        "GD": "Grenada",
        "GP": "Guadeloupe",
        "GU": "Guam",
        "GT": "Guatemala",
        "GG": "Guernsey",
        "GN": "Guinea",
        "GW": "Guinea-Bissau",
        "GY": "Guyana",
        "HT": "Haiti",
        "HM": "Heard Island and McDonald Islands",
        "VA": "Holy See (Vatican City State)",
        "HN": "Honduras",
        "HK": "Hong Kong",
        "HU": "Hungary",
        "IS": "Iceland",
        "IN": "India",
        "ID": "Indonesia",
        "IR": "Islamic Republic of Iran",
        "IQ": "Iraq",
        "IE": "Ireland",
        "IM": "Isle of Man",
        "IL": "Israel",
        "IT": "Italy",
        "JM": "Jamaica",
        "JP": "Japan",
        "JE": "Jersey",
        "JO": "Jordan",
        "KZ": "Kazakhstan",
        "KE": "Kenya",
        "KI": "Kiribati",
        "KP": "North Korea",
        "KR": "South Korea",
        "XK": "Kosovo",
        "KW": "Kuwait",
        "KG": "Kyrgyzstan",
        "LA": "Lao People's Democratic Republic",
        "LV": "Latvia",
        "LB": "Lebanon",
        "LS": "Lesotho",
        "LR": "Liberia",
        "LY": "Libya",
        "LI": "Liechtenstein",
        "LT": "Lithuania",
        "LU": "Luxembourg",
        "MO": "Macao",
        "MG": "Madagascar",
        "MW": "Malawi",
        "MY": "Malaysia",
        "MV": "Maldives",
        "ML": "Mali",
        "MT": "Malta",
        "MH": "Marshall Islands",
        "MQ": "Martinique",
        "MR": "Mauritania",
        "MU": "Mauritius",
        "YT": "Mayotte",
        "MX": "Mexico",
        "FM": "Micronesia, Federated States of",
        "MD": "Moldova, Republic of",
        "MC": "Monaco",
        "MN": "Mongolia",
        "ME": "Montenegro",
        "MS": "Montserrat",
        "MA": "Morocco",
        "MZ": "Mozambique",
        "MM": "Myanmar",
        "NA": "Namibia",
        "NR": "Nauru",
        "NP": "Nepal",
        "NL": "Netherlands",
        "NC": "New Caledonia",
        "NZ": "New Zealand",
        "NI": "Nicaragua",
        "NE": "Niger",
        "NG": "Nigeria",
        "NU": "Niue",
        "NF": "Norfolk Island",
        "MK": "North Macedonia",
        "MP": "Northern Mariana Islands",
        "NO": "Norway",
        "OM": "Oman",
        "PK": "Pakistan",
        "PW": "Palau",
        "PS": "State of Palestine",
        "PA": "Panama",
        "PG": "Papua New Guinea",
        "PY": "Paraguay",
        "PE": "Peru",
        "PH": "Philippines",
        "PN": "Pitcairn",
        "PL": "Poland",
        "PT": "Portugal",
        "PR": "Puerto Rico",
        "QA": "Qatar",
        "RE": "Reunion",
        "RO": "Romania",
        "RU": "Russian Federation",
        "RW": "Rwanda",
        "BL": "Saint Barth\xE9lemy",
        "SH": "Saint Helena",
        "KN": "Saint Kitts and Nevis",
        "LC": "Saint Lucia",
        "MF": "Saint Martin (French part)",
        "PM": "Saint Pierre and Miquelon",
        "VC": "Saint Vincent and the Grenadines",
        "WS": "Samoa",
        "SM": "San Marino",
        "ST": "Sao Tome and Principe",
        "SA": "Saudi Arabia",
        "SN": "Senegal",
        "RS": "Serbia",
        "SC": "Seychelles",
        "SL": "Sierra Leone",
        "SG": "Singapore",
        "SX": "Sint Maarten (Dutch part)",
        "SK": "Slovakia",
        "SI": "Slovenia",
        "SB": "Solomon Islands",
        "SO": "Somalia",
        "ZA": "South Africa",
        "GS": "South Georgia and the South Sandwich Islands",
        "SS": "South Sudan",
        "ES": "Spain",
        "LK": "Sri Lanka",
        "SD": "Sudan",
        "SR": "Suriname",
        "SJ": "Svalbard and Jan Mayen",
        "SE": "Sweden",
        "CH": "Switzerland",
        "SY": "Syrian Arab Republic",
        "TW": "Taiwan, Province of China",
        "TJ": "Tajikistan",
        "TZ": "United Republic of Tanzania",
        "TH": "Thailand",
        "TL": "Timor-Leste",
        "TG": "Togo",
        "TK": "Tokelau",
        "TO": "Tonga",
        "TT": "Trinidad and Tobago",
        "TN": "Tunisia",
        "TR": "T\xFCrkiye",
        "TM": "Turkmenistan",
        "TC": "Turks and Caicos Islands",
        "TV": "Tuvalu",
        "UG": "Uganda",
        "UA": "Ukraine",
        "AE": "United Arab Emirates",
        "GB": "United Kingdom",
        "US": "United States of America",
        "UM": "United States Minor Outlying Islands",
        "UY": "Uruguay",
        "UZ": "Uzbekistan",
        "VU": "Vanuatu",
        "VE": "Venezuela",
        "VN": "Vietnam",
        "VG": "Virgin Islands, British",
        "VI": "Virgin Islands, U.S.",
        "WF": "Wallis and Futuna",
        "EH": "Western Sahara",
        "YE": "Yemen",
        "ZM": "Zambia",
        "ZW": "Zimbabwe"
      });
      ARRAY_BASED_MODIFIERS = /* @__PURE__ */ new Set(["INCLUDES", "EXCLUDES", "INCLUDES_ALL"]);
    }
  });

  // formatters.js
  function formatDuration(seconds) {
    if (!seconds)
      return "N/A";
    const h = Math.floor(seconds / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 60);
    return h > 0 ? `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}` : `${m}:${s.toString().padStart(2, "0")}`;
  }
  function escapeHtml(unsafe) {
    if (!unsafe)
      return "";
    return String(unsafe).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }
  function getCountryDisplay(countryCode) {
    if (!countryCode)
      return "";
    const code = countryCode.toUpperCase().trim();
    const name = COUNTRY_NAMES[code] || escapeHtml(code);
    const flagClass = `fi fi-${code.toLowerCase().replace(/[^a-z]/g, "")}`;
    return `<span class="${flagClass}"></span> ${name}`;
  }
  var init_formatters = __esm({
    "formatters.js"() {
      init_constants();
    }
  });

  // ui-cards.js
  function getRatingTier(rating) {
    if (rating >= 85)
      return "S-Tier";
    if (rating >= 70)
      return "A-Tier";
    if (rating >= 55)
      return "B-Tier";
    if (rating >= 40)
      return "C-Tier";
    if (rating >= 25)
      return "D-Tier";
    return "F-Tier";
  }
  function getTierColor(tier) {
    switch (tier) {
      case "S-Tier":
        return "#eb9834";
      case "A-Tier":
        return "#e014aa";
      case "B-Tier":
        return "#7f1e82";
      case "C-Tier":
        return "#14bbe0";
      case "D-Tier":
        return "#92e014";
      case "F-Tier":
        return "#808080";
      default:
        return "#000000";
    }
  }
  function formatHeight(heightCm) {
    if (!heightCm)
      return null;
    const totalInches = Math.round(heightCm * 0.393701);
    const feet = Math.floor(totalInches / 12);
    const inches = totalInches % 12;
    return `${feet}\u2032${inches}\u2033 (${heightCm} cm)`;
  }
  function renderCard(item, side, rank) {
    const streak = state.gauntletChampion?.id === item.id ? state.gauntletWins : null;
    if (state.battleType === "performers")
      return createPerformerCard(item, side, rank, streak);
    if (state.battleType === "images")
      return createImageCard(item, side, rank, streak);
    return createSceneCard(item, side, rank, streak);
  }
  function createSceneCard(scene, side, rank = null, streak = null) {
    const file = scene.files?.[0] || {};
    const performers = scene.performers?.map((p) => p.name).join(", ") || "No performers";
    const studio = scene.studio?.name || "No studio";
    const title = scene.title || file.path?.split(/[/\\]/).pop().replace(/\.[^/.]+$/, "") || `Scene #${scene.id}`;
    const screenshotPath = scene.paths?.screenshot;
    const previewPath = scene.paths?.preview;
    const stashRating = scene.rating100 ? (scene.rating100 / 10).toFixed(1) : "Unrated";
    const rankDisplay = rank != null ? `<span class="hon-scene-rank">${typeof rank === "number" ? "#" + rank : rank}</span>` : "";
    const streakDisplay = streak != null && streak > 0 ? `<div class="hon-streak-badge">\u{1F525} ${streak} win${streak > 1 ? "s" : ""}</div>` : "";
    return `
    <div class="hon-scene-card" data-scene-id="${scene.id}" data-side="${side}" data-rating="${scene.rating100 || 1}">
      <div class="hon-scene-image-container" data-scene-url="/scenes/${scene.id}">
        ${screenshotPath ? `<img class="hon-scene-image" src="${screenshotPath}" alt="${title}" loading="lazy" />` : `<div class="hon-scene-image hon-no-image">No Screenshot</div>`}
        ${previewPath ? `<video class="hon-hover-preview" src="${previewPath}" loop playsinline></video>` : ""}
        <div class="hon-scene-duration">${formatDuration(file.duration)}</div>
        ${streakDisplay}
        <div class="hon-click-hint">Click to open scene</div>
      </div>
      <div class="hon-scene-body" data-winner="${scene.id}">
        <div class="hon-scene-info">
          <div class="hon-scene-title-row"><h3 class="hon-scene-title">${title}</h3>${rankDisplay}</div>
          <div class="hon-scene-meta">
            <div class="hon-meta-item"><strong>Studio:</strong> ${studio}</div>
            <div class="hon-meta-item"><strong>Performers:</strong> ${performers}</div>
            <div class="hon-meta-item"><strong>Rating:</strong> ${stashRating}</div>
          </div>
        </div>
        <div class="hon-choose-btn">\u2713 Choose This Scene</div>
      </div>
    </div>`;
  }
  function createPerformerCard(performer, side, rank = null, streak = null) {
    const name = performer.name || `Performer #${performer.id}`;
    const imagePath = performer.image_path || null;
    const rawRating = performer.rating100 ?? 1;
    const stashRating = performer.rating100 !== null ? (rawRating / 10).toFixed(1) : "Unrated";
    let tierClass = "";
    let tierDisplay = "";
    if (performer.rating100 !== null) {
      const tier = getRatingTier(rawRating);
      const tierColor = getTierColor(tier);
      tierDisplay = `<span style="font-weight: bold; color: ${tierColor}">${tier}</span> | `;
      tierClass = ` tier-${tier.toLowerCase().charAt(0)}`;
    }
    let genderIcon = "";
    if (performer.gender) {
      const genderKey = performer.gender.toUpperCase();
      genderIcon = GENDER_ICONS[genderKey] || "\u{1F464}";
    }
    let currentStreakDisplay = "";
    if (performer.custom_fields?.hotornot_stats) {
      try {
        const stats = JSON.parse(performer.custom_fields.hotornot_stats);
        if (stats.current_streak && stats.current_streak > 1) {
          currentStreakDisplay = `
			<div class="hon-current-streak" style="position: absolute; top: 5px; left: 5px; background: rgba(0,0,0,0.7); color: white; padding: 2px 6px; border-radius: 4px; font-size: 12px; z-index: 10;">
			  Win Streak:\u{1F525}${stats.current_streak} 
			</div>`;
        }
      } catch (e) {
        console.warn(`[Ascension] Failed to parse hotornot_stats for performer ${performer.id}:`, e);
      }
    }
    let countsHtml = "";
    const sceneCount = performer.scene_count || 0;
    const galleryCount = performer.gallery_count || 0;
    const imageCount = performer.image_count || 0;
    if (sceneCount > 0 || galleryCount > 0 || imageCount > 0) {
      const sceneDisplay = sceneCount > 0 ? `\u{1F3A5}(${sceneCount})` : "";
      const galleryDisplay = galleryCount > 0 ? `\u{1F5BC}\uFE0F(${galleryCount})` : "";
      const imageDisplay = imageCount > 0 ? `\u{1F4F7}(${imageCount})` : "";
      const countsArray = [sceneDisplay, galleryDisplay, imageDisplay].filter(Boolean);
      if (countsArray.length > 0) {
        countsHtml = ` | ${countsArray.join(" ")}`;
      }
    }
    const metaItems = [];
    metaItems.push(`<div class="hon-meta-item"><strong>Rating:</strong> ${tierDisplay}${stashRating}</div>`);
    if (performer.country) {
      metaItems.push(`<div class="hon-meta-item"><strong>Country:</strong> ${getCountryDisplay(performer.country)}</div>`);
    }
    if (performer.height_cm) {
      const heightFormatted = formatHeight(performer.height_cm);
      if (heightFormatted) {
        metaItems.push(`<div class="hon-meta-item"><strong>Height:</strong> ${heightFormatted}</div>`);
      }
    }
    if (performer.measurements) {
      metaItems.push(`<div class="hon-meta-item"><strong>Measurements:</strong> ${performer.measurements}</div>`);
    }
    if (performer.fake_tits) {
      metaItems.push(`<div class="hon-meta-item"><strong>Fake Tits:</strong> ${performer.fake_tits}</div>`);
    }
    if (performer.tags && performer.tags.length > 0) {
      const tagNames = performer.tags.map((tag) => tag.name || tag);
      const displayedTags = tagNames.slice(0, 3).join(", ");
      const remainingCount = Math.max(0, tagNames.length - 3);
      if (tagNames.length <= 3) {
        metaItems.push(`<div class="hon-meta-item"><strong>Tags:</strong> ${displayedTags}</div>`);
      } else {
        const allTagsHtml = tagNames.join(", ");
        metaItems.push(`
        <div class="hon-meta-item hon-tags-container">
          <strong>Tags:</strong> 
          <span class="hon-tags-displayed">${displayedTags}</span>
          <span class="hon-tags-ellipsis">...</span>
          <span class="hon-tags-more" style="color: #007bff; cursor: pointer; text-decoration: underline;">(+${remainingCount} more)</span>
          <span class="hon-tags-expanded" style="display:none;">${allTagsHtml}</span>
        </div>`);
      }
    }
    const minMetaItems = 6;
    while (metaItems.length < minMetaItems) {
      metaItems.push('<div class="hon-meta-item hon-meta-placeholder">&nbsp;</div>');
    }
    const streakDisplay = streak != null && streak > 0 ? `<div class="hon-streak-badge">\u{1F525} ${streak} wins</div>` : "";
    let badgeHtml = "";
    if (rank != null && state.totalItemsCount > 0) {
      const percentile = (state.totalItemsCount - rank + 1) / state.totalItemsCount * 100;
      let tierEmoji = "\u{1F525}";
      if (percentile >= 95)
        tierEmoji = "\u{1F451}";
      else if (percentile >= 80)
        tierEmoji = "\u{1F947}";
      else if (percentile >= 60)
        tierEmoji = "\u{1F948}";
      else if (percentile >= 40)
        tierEmoji = "\u{1F949}";
      badgeHtml = `
      <div class="hon-battle-rank-badge" style="margin-bottom: 8px;">
        <span class="hon-rank-emoji">${tierEmoji}</span>
        <span class="hon-rank-text">Battle Rank #${rank}</span>
        <span class="hon-rank-total">of ${state.totalItemsCount}</span>
      </div>`;
    }
    return `
    <div class="hon-performer-card hon-scene-card${tierClass}" data-performer-id="${performer.id}" data-side="${side}" data-rating="${performer.rating100 || 1}">
      <div class="hon-performer-image-container hon-scene-image-container">
        <a href="/performers/${performer.id}" target="_blank" class="hon-performer-link">
          ${imagePath ? `<img class="hon-performer-image hon-scene-image" src="${imagePath}" alt="${name}" />` : `<div class="hon-no-image">No Image</div>`}
        </a>
        ${currentStreakDisplay}
        ${streakDisplay}
      </div>
      <div class="hon-performer-body hon-scene-body" data-winner="${performer.id}">
        <div class="hon-performer-info hon-scene-info">
          ${badgeHtml}
          <div class="hon-performer-title-row hon-scene-title-row">
            <h3 class="hon-performer-title hon-scene-title">
              ${name} ${genderIcon}${countsHtml}
            </h3>
          </div>
          <div class="hon-performer-meta hon-scene-meta">
            ${metaItems.join("")}
          </div>
        </div>
        <div class="hon-choose-btn">\u2713 Choose This Performer</div>
      </div>
    </div>`;
  }
  function createImageCard(image, side, rank = null, streak = null) {
    const thumbnailPath = image.paths?.thumbnail || null;
    const rankDisplay = rank != null ? `<span class="hon-image-rank hon-scene-rank">#${rank}</span>` : "";
    const streakDisplay = streak != null && streak > 0 ? `<div class="hon-streak-badge">\u{1F525} ${streak}</div>` : "";
    return `
    <div class="hon-image-card hon-scene-card" data-image-id="${image.id}" data-side="${side}" data-rating="${image.rating100 || 1}">
      <div class="hon-image-image-container hon-scene-image-container" data-image-url="/images/${image.id}">
        ${thumbnailPath ? `<img class="hon-scene-image" src="${thumbnailPath}" />` : `<div class="hon-no-image">No Image</div>`}
        ${streakDisplay}
        ${rankDisplay ? `<div class="hon-image-rank-overlay">${rankDisplay}</div>` : ""}
      </div>
      <div class="hon-image-body hon-scene-body" data-winner="${image.id}">
        <div class="hon-choose-btn">\u2713 Choose This Image</div>
      </div>
    </div>`;
  }
  function createVictoryScreen(champion) {
    let title, imagePath;
    if (state.battleType === "performers") {
      title = champion.name || `Performer #${champion.id}`;
      imagePath = champion.image_path;
    } else if (state.battleType === "images") {
      title = `Image #${champion.id}`;
      imagePath = champion.paths?.thumbnail || null;
    } else {
      const file = champion.files?.[0] || {};
      title = champion.title || file.path?.split(/[/\\]/).pop().replace(/\.[^/.]+$/, "") || `Scene #${champion.id}`;
      imagePath = champion.paths?.screenshot || null;
    }
    return `
    <div class="hon-victory-screen">
      <div class="hon-victory-crown">\u{1F451}</div>
      <h2 class="hon-victory-title">CHAMPION!</h2>
      <div class="hon-victory-scene">
        ${imagePath ? `<img class="hon-victory-image" src="${imagePath}" alt="${title}" />` : `<div class="hon-victory-image hon-no-image">No Image</div>`}
      </div>
      <h3 class="hon-victory-name">${title}</h3>
      <p class="hon-victory-stats">Conquered all ${state.totalItemsCount} with ${state.gauntletWins} wins!</p>
      <button id="hon-new-gauntlet" class="btn btn-primary">Start New Gauntlet</button>
    </div>
  `;
  }
  var GENDER_ICONS;
  var init_ui_cards = __esm({
    "ui-cards.js"() {
      init_state();
      init_formatters();
      GENDER_ICONS = {
        "FEMALE": "\u2640\uFE0F",
        "MALE": "\u2642\uFE0F",
        "TRANSGENDER_MALE": "\u26A7\uFE0F\u2642\uFE0F",
        "TRANSGENDER_FEMALE": "\u26A7\uFE0F\u2640\uFE0F",
        "INTERSEX": "\u26A5",
        "NON_BINARY": "\u26A7\uFE0F"
      };
    }
  });

  // dom-utils.js
  function clearDOMCache() {
    elementCache.clear();
  }
  var elementCache;
  var init_dom_utils = __esm({
    "dom-utils.js"() {
      elementCache = /* @__PURE__ */ new Map();
    }
  });

  // parsers.js
  function parseUrlFilterCriteria() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const criteriaParams = urlParams.getAll("c");
      if (!criteriaParams || criteriaParams.length === 0) {
        return [];
      }
      const allParsedCriteria = [];
      for (const criteriaParam of criteriaParams) {
        const decoded = decodeURIComponent(criteriaParam);
        try {
          const criteria = JSON.parse(decoded);
          const result = Array.isArray(criteria) ? criteria : [criteria];
          allParsedCriteria.push(...result);
        } catch (e) {
          let normalized = decoded.trim().replace(/\(/g, "{").replace(/\)/g, "}");
          try {
            const criteria = JSON.parse(normalized);
            const result = Array.isArray(criteria) ? criteria : [criteria];
            allParsedCriteria.push(...result);
          } catch (parseErr) {
            const delimiter = "|||SPLIT|||";
            const withDelimiter = normalized.replace(/\}\s*,?\s*\{/g, "}" + delimiter + "{");
            const criteriaStrings = withDelimiter.split(delimiter);
            for (const criteriaStr of criteriaStrings) {
              try {
                const criterion = JSON.parse(criteriaStr.trim());
                if (criterion?.type)
                  allParsedCriteria.push(criterion);
              } catch (splitParseErr) {
                console.warn("[HotOrNot] Could not parse criterion:", criteriaStr);
              }
            }
          }
        }
      }
      return allParsedCriteria;
    } catch (e) {
      console.warn("[HotOrNot] Error parsing URL filter criteria:", e);
      return [];
    }
  }
  function extractSimpleValue(value) {
    if (value === void 0 || value === null)
      return value;
    if (typeof value === "object" && !Array.isArray(value) && value.value !== void 0) {
      return value.value;
    }
    return value;
  }
  function safeParseInt(value, defaultValue = 0) {
    const simpleValue = extractSimpleValue(value);
    if (simpleValue === void 0 || simpleValue === null)
      return defaultValue;
    const parsed = parseInt(simpleValue, 10);
    return isNaN(parsed) ? defaultValue : parsed;
  }
  function normalizeGenderValue(value) {
    if (!value || typeof value !== "string")
      return value;
    const normalized = value.toUpperCase().replace(/[\s-]+/g, "_");
    const validGenders = /* @__PURE__ */ new Set(["MALE", "FEMALE", "TRANSGENDER_MALE", "TRANSGENDER_FEMALE", "INTERSEX", "NON_BINARY"]);
    if (validGenders.has(normalized))
      return normalized;
    console.warn(`[HotOrNot] Invalid gender value "${value}"`);
    return value;
  }
  function createNumericFilterObject(value, modifier, defaultModifier) {
    const filterObj = {
      value: safeParseInt(value, 0),
      modifier: modifier || defaultModifier
    };
    if (typeof value === "object" && !Array.isArray(value) && value.value2 !== void 0) {
      filterObj.value2 = safeParseInt(value.value2, 0);
    }
    return filterObj;
  }
  function convertCriterionToFilter(criterion) {
    if (!criterion || !criterion.type)
      return null;
    const { type, value, modifier } = criterion;
    switch (type) {
      case "tags":
      case "studios":
        if (value?.items?.length > 0) {
          const ids = value.items.map((item) => typeof item === "object" && item !== null && "id" in item ? item.id : item);
          return {
            [type]: {
              value: ids,
              modifier: modifier || "INCLUDES",
              depth: value.depth || 0
            }
          };
        }
        break;
      case "gender":
        if (value) {
          let genderValue = extractSimpleValue(value);
          if (genderValue) {
            const effectiveModifier = modifier || "EQUALS";
            const useValueList = ARRAY_BASED_MODIFIERS.has(effectiveModifier);
            if (useValueList) {
              const genderArray = Array.isArray(genderValue) ? genderValue : [genderValue];
              return {
                gender: {
                  value_list: genderArray.map((g) => normalizeGenderValue(g)),
                  modifier: effectiveModifier
                }
              };
            } else {
              if (Array.isArray(genderValue))
                genderValue = genderValue[0] || null;
              if (genderValue) {
                return {
                  gender: { value: normalizeGenderValue(genderValue), modifier: effectiveModifier }
                };
              }
            }
          }
        }
        break;
      case "favorite":
      case "filter_favorites":
        if (value !== void 0 && value !== null) {
          const favValue = extractSimpleValue(value);
          return { filter_favorites: favValue === true || favValue === "true" };
        }
        break;
      case "rating":
      case "rating100":
        return value != null ? { rating100: createNumericFilterObject(value, modifier, "GREATER_THAN") } : null;
      case "age":
        return value != null ? { age: createNumericFilterObject(value, modifier, "EQUALS") } : null;
      case "ethnicity":
      case "country":
      case "hair_color":
      case "eye_color":
        if (value) {
          const simpleVal = extractSimpleValue(value);
          if (simpleVal)
            return { [type]: { value: simpleVal, modifier: modifier || "EQUALS" } };
        }
        break;
      case "scene_count":
      case "image_count":
      case "gallery_count":
        return value != null ? { [type]: createNumericFilterObject(value, modifier, "GREATER_THAN") } : null;
      case "o_counter":
        return value != null ? { o_counter: createNumericFilterObject(value, modifier, "GREATER_THAN") } : null;
      case "stash_id":
      case "stash_id_endpoint":
        if (value && typeof value === "object") {
          const stashIdFilter = {};
          if (value.stash_id)
            stashIdFilter.stash_id = value.stash_id;
          if (value.endpoint)
            stashIdFilter.endpoint = value.endpoint;
          if (Object.keys(stashIdFilter).length > 0) {
            stashIdFilter.modifier = modifier || "NOT_NULL";
            return { stash_id_endpoint: stashIdFilter };
          }
        }
        break;
      case "is_missing":
        const missingVal = extractSimpleValue(value);
        return missingVal ? { is_missing: missingVal } : null;
      case "name":
      case "aliases":
      case "details":
      case "career_length":
      case "tattoos":
      case "piercings":
      case "url":
      case "birthdate":
      case "death_date":
      case "created_at":
      case "updated_at":
        const textVal = extractSimpleValue(value);
        const defaultMod = type === "birthdate" || type === "death_date" ? "EQUALS" : type.includes("_at") ? "GREATER_THAN" : "INCLUDES";
        if (textVal)
          return { [type]: { value: textVal, modifier: modifier || defaultMod } };
        break;
      default:
        console.log(`[HotOrNot] Unknown criterion type: ${type}`);
        return null;
    }
    return null;
  }
  function getUrlPerformerFilter() {
    const criteria = parseUrlFilterCriteria();
    const filter = {};
    for (const criterion of criteria) {
      const filterPart = convertCriterionToFilter(criterion);
      if (filterPart)
        Object.assign(filter, filterPart);
    }
    return filter;
  }
  function getPerformerFilter(cachedUrlFilter, selectedGenders) {
    const filter = { ...cachedUrlFilter };
    delete filter.gender;
    if (selectedGenders.length > 0) {
      filter.gender = { value_list: selectedGenders, modifier: "INCLUDES" };
    }
    const hasOtherFilters = Object.keys(cachedUrlFilter || {}).some((k) => k !== "gender");
    if (!hasOtherFilters && !filter.NOT) {
      filter.NOT = { is_missing: "image" };
    }
    return filter;
  }
  var init_parsers = __esm({
    "parsers.js"() {
      init_constants();
    }
  });

  // math-utils.js
  function getLowMatchBoost(performer, avgMatches) {
    const stats = parsePerformerEloData(performer);
    const matches = stats.total_matches || 0;
    if (matches === 0) {
      return 2;
    }
    if (avgMatches > 5 && matches < avgMatches * 0.3) {
      return 1.5;
    }
    if (avgMatches > 10 && matches < avgMatches * 0.5) {
      return 1.2;
    }
    return 1;
  }
  function calculateAverageMatches(performers) {
    if (!performers || performers.length === 0)
      return 0;
    const totalMatches = performers.reduce((sum, p) => {
      const stats = parsePerformerEloData(p);
      return sum + (stats.total_matches || 0);
    }, 0);
    return totalMatches / performers.length;
  }
  function getRecencyWeight(performer) {
    const stats = parsePerformerEloData(performer);
    if (!stats.last_match || stats.total_matches === 0)
      return 1;
    if (!stats.last_match)
      return 1;
    const lastMatchDate = new Date(stats.last_match);
    const msSince = Date.now() - lastMatchDate.getTime();
    const minutesSince = msSince / (1e3 * 60);
    if (minutesSince < 15)
      return 0;
    const hoursSince = minutesSince / 60;
    let freshness = Math.min(1, 0.1 + hoursSince * 0.075);
    const matches = stats.total_matches || 0;
    if (matches < 10) {
      freshness = Math.min(1, freshness + 0.2);
    }
    return freshness;
  }
  function weightedRandomSelect(items, weights) {
    if (!items?.length || items.length !== weights?.length)
      return null;
    const totalWeight = weights.reduce((sum, w) => sum + w, 0);
    if (totalWeight <= 0)
      return items[Math.floor(Math.random() * items.length)];
    let random = Math.random() * totalWeight;
    for (let i = 0; i < items.length; i++) {
      random -= weights[i];
      if (random <= 0)
        return items[i];
    }
    return items[items.length - 1];
  }
  function parsePerformerEloData(performer) {
    const defaultStats = {
      total_matches: 0,
      wins: 0,
      losses: 0,
      draws: 0,
      current_streak: 0,
      best_streak: 0,
      worst_streak: 0,
      last_match: null
    };
    if (!performer?.custom_fields)
      return defaultStats;
    if (performer.custom_fields.hotornot_stats) {
      try {
        const stats = JSON.parse(performer.custom_fields.hotornot_stats);
        return { ...defaultStats, ...stats };
      } catch (e) {
        console.warn(`[HotOrNot] Failed to parse stats for ${performer.id}`);
      }
    }
    const eloMatches = parseInt(performer.custom_fields.elo_matches, 10);
    if (!isNaN(eloMatches))
      return { ...defaultStats, total_matches: eloMatches };
    return defaultStats;
  }
  function updatePerformerStats(currentStats, won) {
    const newStats = {
      ...currentStats,
      total_matches: (currentStats.total_matches || 0) + 1,
      last_match: (/* @__PURE__ */ new Date()).toISOString()
    };
    delete newStats.history;
    if (won === null) {
      newStats.draws = (currentStats.draws || 0) + 1;
      return newStats;
    }
    newStats.wins = won ? (currentStats.wins || 0) + 1 : currentStats.wins || 0;
    newStats.losses = won ? currentStats.losses || 0 : (currentStats.losses || 0) + 1;
    newStats.current_streak = won ? currentStats.current_streak >= 0 ? (currentStats.current_streak || 0) + 1 : 1 : currentStats.current_streak <= 0 ? (currentStats.current_streak || 0) - 1 : -1;
    newStats.best_streak = Math.max(currentStats.best_streak || 0, newStats.current_streak);
    newStats.worst_streak = Math.min(currentStats.worst_streak || 0, newStats.current_streak);
    return newStats;
  }
  function isActiveParticipant(performerId, mode, gauntletChampion, gauntletFallingItem) {
    if (mode === "swiss" || mode === "champion")
      return true;
    if (mode === "gauntlet") {
      return true;
    }
    return false;
  }
  function getUnderdogMultiplier(rating, opponentRating) {
    const ratingDiff = opponentRating - rating;
    if (ratingDiff > 30)
      return 1.5;
    if (ratingDiff > 20)
      return 1.3;
    if (ratingDiff > 10)
      return 1.1;
    return 1;
  }
  function calculateMatchOutcome({
    winnerRating,
    loserRating,
    mode,
    winnerMatchCount,
    loserMatchCount,
    winnerStats = {},
    loserStats = {},
    isSpecialChallenge = false
  }) {
    const ratingDiff = loserRating - winnerRating;
    const expectedWinner = 1 / (1 + Math.pow(10, ratingDiff / 400));
    const winnerK = getProgressiveKFactor(winnerRating, null, winnerMatchCount, mode);
    const loserK = getProgressiveKFactor(loserRating, null, loserMatchCount, mode);
    const winnerUnderdogMult = getUnderdogMultiplier(winnerRating, loserRating);
    let lossProtection = isSpecialChallenge ? 0.1 : getChallengeProtectionMultiplier(loserRating, winnerRating);
    let winnerGain = Math.round(winnerK * (1 - expectedWinner) * winnerUnderdogMult);
    let loserLoss = Math.round(loserK * expectedWinner * lossProtection);
    if (mode === "gauntlet") {
      const currentStreak = winnerStats.current_streak || 0;
      if (currentStreak >= 3) {
        const gauntletDampener = Math.max(0.3, 1 - (currentStreak - 3) * 0.15);
        winnerGain = Math.ceil(winnerGain * gauntletDampener);
      }
    }
    if (mode === "champion") {
      const winStreak = winnerStats.current_streak || 0;
      if (winStreak >= 5) {
        const streakPenalty = winStreak >= 10 ? 0.4 : 0.7;
        winnerGain = Math.ceil(winnerGain * streakPenalty);
      }
    }
    if (winnerRating >= 85) {
      winnerGain = Math.ceil(winnerGain * 0.6);
    } else if (winnerRating >= 70) {
      winnerGain = Math.ceil(winnerGain * 0.8);
    }
    if (winnerRating < loserRating - 20) {
      const ratingDiff2 = loserRating - winnerRating;
      const scaleFactor = Math.max(0.3, 1 - (ratingDiff2 - 20) / 100);
      winnerGain = Math.ceil(winnerGain * scaleFactor);
      loserLoss = Math.ceil(loserLoss * scaleFactor);
      loserLoss = Math.min(loserLoss, 5);
    }
    if (loserRating < winnerRating - 15) {
      const gap = winnerRating - loserRating;
      const mitigationFactor = Math.max(0.2, 1 - gap / 45);
      loserLoss = Math.ceil(loserLoss * mitigationFactor);
      if (gap > 25) {
        loserLoss = Math.min(loserLoss, 3);
      }
    }
    return {
      winnerGain: Math.max(1, winnerGain),
      loserLoss: Math.max(0, loserLoss)
    };
  }
  function getProgressiveKFactor(rating, opponentRating, matchCount, mode = "swiss") {
    const count = matchCount || 0;
    const experienceFactor = 0.5 + 0.5 / (1 + Math.exp((count - 18) / 6));
    let baseK = 32 * experienceFactor;
    if (rating > 60) {
      const reductionFactor = Math.max(0.5, 1 - (rating - 60) / 70);
      baseK *= reductionFactor;
    }
    if (mode === "champion") {
      let kFactor = Math.round(baseK * 0.85);
      return Math.min(35, Math.max(6, kFactor));
    } else if (mode === "gauntlet") {
      let kFactor = Math.round(baseK * 1.1);
      return Math.min(45, Math.max(8, kFactor));
    }
    return Math.min(40, Math.max(6, Math.round(baseK)));
  }
  function getChallengeProtectionMultiplier(rating, opponentRating) {
    const ratingDiff = opponentRating - rating;
    if (ratingDiff > 15) {
      if (ratingDiff > 30) {
        return 0.7;
      } else if (ratingDiff > 25) {
        return 0.8;
      } else if (ratingDiff > 20) {
        return 0.85;
      } else {
        return 0.9;
      }
    }
    return 1;
  }
  var init_math_utils = __esm({
    "math-utils.js"() {
    }
  });

  // api-client.js
  var api_client_exports = {};
  __export(api_client_exports, {
    IMAGE_FRAGMENT: () => IMAGE_FRAGMENT,
    PERFORMER_FRAGMENT: () => PERFORMER_FRAGMENT,
    fetchAllPerformerStats: () => fetchAllPerformerStats,
    fetchImageCount: () => fetchImageCount,
    fetchPerformerById: () => fetchPerformerById,
    fetchPerformerCount: () => fetchPerformerCount,
    fetchRandomImages: () => fetchRandomImages,
    fetchRandomPerformers: () => fetchRandomPerformers,
    getHotOrNotConfig: () => getHotOrNotConfig,
    getPerformerBattleRank: () => getPerformerBattleRank,
    graphqlQuery: () => graphqlQuery,
    handleComparison: () => handleComparison,
    isBattleRankBadgeEnabled: () => isBattleRankBadgeEnabled,
    undoLastMatch: () => undoLastMatch,
    updateImageRating: () => updateImageRating,
    updateItemRating: () => updateItemRating,
    updatePerformerRating: () => updatePerformerRating
  });
  async function graphqlQuery(query, variables = {}) {
    if (typeof PluginApi !== "undefined" && PluginApi.utils?.StashService?.getClient && PluginApi.libraries?.Apollo) {
      try {
        const { gql } = PluginApi.libraries.Apollo;
        const client = PluginApi.utils.StashService.getClient();
        const doc = gql(query);
        const isMutation = doc.definitions.some((def) => def.kind === "OperationDefinition" && def.operation === "mutation");
        const result2 = isMutation ? await client.mutate({ mutation: doc, variables }) : await client.query({ query: doc, variables, fetchPolicy: "no-cache" });
        return result2.data;
      } catch (e) {
        console.warn("[Ascension] Apollo fallback to fetch:", e.message);
      }
    }
    const response = await fetch("/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables })
    });
    const result = await response.json();
    if (result.errors) {
      const errorMessages = result.errors.map((error) => error.message).join("; ");
      throw new Error(`GraphQL Errors: ${errorMessages}`);
    }
    return result.data;
  }
  async function fetchPerformerById(id) {
    const result = await graphqlQuery(`query($id: ID!) { findPerformer(id: $id) { ${PERFORMER_FRAGMENT} } }`, { id });
    return result.findPerformer;
  }
  async function fetchPerformerCount(filter = {}) {
    const result = await graphqlQuery(`query($f: PerformerFilterType) { findPerformers(performer_filter: $f, filter: { per_page: 0 }) { count } }`, { f: filter });
    return result.findPerformers.count;
  }
  async function fetchRandomImages(count = 2) {
    const totalImages = await fetchImageCount();
    if (totalImages < 2) {
      throw new Error("Not enough images for comparison. You need at least 2 images.");
    }
    const imagesQuery = `
    query FindRandomImages($filter: FindFilterType) {
      findImages(filter: $filter) {
        images {
          ${IMAGE_FRAGMENT}
        }
      }
    }
  `;
    const result = await graphqlQuery(imagesQuery, {
      filter: {
        per_page: Math.min(100, totalImages),
        sort: "random"
      }
    });
    const allImages = result.findImages.images || [];
    if (allImages.length < 2) {
      throw new Error("Not enough images returned from query.");
    }
    const shuffled = allImages.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 2);
  }
  async function handleComparison(winnerId, loserId, winnerCurrentRating, loserCurrentRating, loserRank = null, winnerObj = null, loserObj = null, isDraw = false) {
    const winnerRating = winnerCurrentRating || 1;
    const loserRating = loserCurrentRating || 1;
    let freshWinnerObj = winnerObj;
    let freshLoserObj = loserObj;
    if (state.battleType === "performers" && (!winnerObj || !loserObj)) {
      const [fetchedWinner, fetchedLoser] = await Promise.all([
        winnerId && !winnerObj ? fetchPerformerById(winnerId) : Promise.resolve(winnerObj),
        loserId && !loserObj ? fetchPerformerById(loserId) : Promise.resolve(loserObj)
      ]);
      freshWinnerObj = fetchedWinner || winnerObj;
      freshLoserObj = fetchedLoser || loserObj;
    } else {
      freshWinnerObj = winnerObj || freshWinnerObj;
      freshLoserObj = loserObj || freshLoserObj;
    }
    let winnerMatchCount = 0;
    let loserMatchCount = 0;
    let winnerStats = {};
    let loserStats = {};
    if (state.battleType === "performers") {
      winnerStats = parsePerformerEloData(freshWinnerObj) || {};
      loserStats = parsePerformerEloData(freshLoserObj) || {};
      winnerMatchCount = winnerStats.total_matches || 0;
      loserMatchCount = loserStats.total_matches || 0;
    }
    let winnerGain = 0;
    let loserLoss = 0;
    if (isDraw) {
      const ratingDiff2 = loserRating - winnerRating;
      const expectedWinner = 1 / (1 + Math.pow(10, ratingDiff2 / 400));
      const winnerK = getProgressiveKFactor(winnerRating, winnerMatchCount, "swiss");
      const loserK = getProgressiveKFactor(loserRating, loserMatchCount, "swiss");
      winnerGain = Math.round(winnerK * (0.5 - expectedWinner));
      loserLoss = Math.round(loserK * (1 - expectedWinner - 0.5));
    } else {
      const isChampionWinner = !!state.gauntletChampion && winnerId === state.gauntletChampion.id;
      const isFallingWinner = state.gauntletFalling && !!state.gauntletFallingItem && winnerId === state.gauntletFallingItem.id;
      const isChampionLoser = !!state.gauntletChampion && loserId === state.gauntletChampion.id;
      const isFallingLoser = state.gauntletFalling && !!state.gauntletFallingItem && loserId === state.gauntletFallingItem.id;
      ({ winnerGain, loserLoss } = calculateMatchOutcome({
        winnerRating,
        loserRating,
        mode: state.currentMode,
        winnerMatchCount,
        loserMatchCount,
        isChampionWinner,
        isFallingWinner,
        isChampionLoser,
        isFallingLoser,
        loserRank,
        winnerStats,
        loserStats,
        isSpecialChallenge: state.currentPair?.isSpecialChallenge || false,
        specialChallengeRules: state.currentPair?.specialChallengeRules || null
      }));
    }
    const newWinnerRating = Math.min(100, Math.max(1, winnerRating + winnerGain));
    const newLoserRating = Math.min(100, Math.max(1, loserRating - loserLoss));
    const isFirstMatchGlobal = (state.currentMode === "gauntlet" || state.currentMode === "champion") && !state.gauntletChampion;
    const shouldTrackWinner = state.battleType === "performers" && (state.currentMode === "gauntlet" || state.currentMode === "champion" || isActiveParticipant(winnerId, state.currentMode, state.gauntletChampion, state.gauntletFallingItem) || isFirstMatchGlobal);
    const shouldTrackLoser = state.battleType === "performers" && (state.currentMode === "gauntlet" || state.currentMode === "champion" || isActiveParticipant(loserId, state.currentMode, state.gauntletChampion, state.gauntletFallingItem) || isFirstMatchGlobal);
    const winnerStatus = isDraw ? null : true;
    const loserStatus = isDraw ? null : false;
    const winnerOldStats = shouldTrackWinner && freshWinnerObj ? {
      ...parsePerformerEloData(freshWinnerObj),
      performer_record: freshWinnerObj.custom_fields?.performer_record
    } : null;
    const loserOldStats = shouldTrackLoser && freshLoserObj ? {
      ...parsePerformerEloData(freshLoserObj),
      performer_record: freshLoserObj.custom_fields?.performer_record
    } : null;
    function normalizeStatsForStorage(stats) {
      if (!stats || !stats.performer_record)
        return stats;
      let normalizedStats = { ...stats };
      try {
        if (typeof normalizedStats.performer_record === "string") {
          normalizedStats.performer_record = JSON.parse(normalizedStats.performer_record);
        }
      } catch (e) {
        console.warn("[Ascension] Failed to parse performer_record for storage:", e);
      }
      return normalizedStats;
    }
    const normalizedWinnerStats = winnerOldStats ? normalizeStatsForStorage(winnerOldStats) : null;
    const normalizedLoserStats = loserOldStats ? normalizeStatsForStorage(loserOldStats) : null;
    if (!state.matchHistory)
      state.matchHistory = [];
    state.matchHistory.push({
      winnerId,
      loserId,
      winnerOldRating: winnerRating,
      loserOldRating: loserRating,
      winnerOldStats: normalizedWinnerStats,
      loserOldStats: normalizedLoserStats,
      pairSnapshot: {
        left: state.currentPair.left ? { ...state.currentPair.left } : null,
        right: state.currentPair.right ? { ...state.currentPair.right } : null,
        rankLeft: state.currentRanks.left,
        rankRight: state.currentRanks.right
      },
      gauntletSnapshot: {
        gauntletChampion: state.gauntletChampion ? { ...state.gauntletChampion } : null,
        gauntletWins: state.gauntletWins,
        gauntletDefeated: [...state.gauntletDefeated || []],
        gauntletFalling: state.gauntletFalling,
        gauntletFallingItem: state.gauntletFallingItem ? { ...state.gauntletFallingItem } : null
      }
    });
    if (state.matchHistory.length > 10)
      state.matchHistory.shift();
    if (!winnerId || !loserId) {
      console.error("[Ascension] Cannot update rating: One or both IDs are missing", { winnerId, loserId });
      return { newWinnerRating, newLoserRating, winnerChange: winnerGain, loserChange: -loserLoss };
    }
    await updateItemRating(
      winnerId,
      newWinnerRating,
      shouldTrackWinner ? freshWinnerObj : null,
      winnerStatus,
      loserId
    );
    await updateItemRating(
      loserId,
      newLoserRating,
      shouldTrackLoser ? freshLoserObj : null,
      loserStatus,
      winnerId
    );
    return {
      newWinnerRating,
      newLoserRating,
      winnerChange: winnerGain,
      loserChange: -loserLoss
    };
  }
  async function updateItemRating(itemId, newRating, itemObj = null, won = null, opponentId = null) {
    if (state.battleType === "performers") {
      return await updatePerformerRating(itemId, newRating, itemObj, won, opponentId);
    } else if (state.battleType === "images") {
      return await updateImageRating(itemId, newRating);
    } else {
    }
  }
  async function fetchRandomPerformers(count = 2) {
    if (state.selectedGenders.length === 0) {
      throw new Error("No genders selected.");
    }
    const battleGender = state.selectedGenders[Math.floor(Math.random() * state.selectedGenders.length)];
    const performerFilter = getPerformerFilter(state.cachedUrlFilter, [battleGender]);
    const totalPerformers = await fetchPerformerCount(performerFilter);
    if (totalPerformers < 2) {
      throw new Error("Not enough performers matching the selected gender.");
    }
    const performerQuery = `
    query FindRandomPerformers($performer_filter: PerformerFilterType, $filter: FindFilterType) {
      findPerformers(performer_filter: $performer_filter, filter: $filter) {
        performers {
          ${PERFORMER_FRAGMENT}
        }
      }
    }
  `;
    const result = await graphqlQuery(performerQuery, {
      performer_filter: performerFilter,
      filter: {
        per_page: Math.min(100, totalPerformers),
        sort: "random"
      }
    });
    const allPerformers = result?.findPerformers?.performers || [];
    if (allPerformers.length < 2) {
      throw new Error("Not enough performers for comparison.");
    }
    const shuffled = [...allPerformers].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 2);
  }
  async function fetchImageCount() {
    const countQuery = `
      query FindImages {
        findImages(filter: { per_page: 0 }) {
          count
        }
      }
    `;
    const countResult = await graphqlQuery(countQuery);
    return countResult.findImages.count;
  }
  async function fetchAllPerformerStats() {
    const allPerformers = [];
    let currentPage = 1;
    const pageSize = 1e3;
    while (true) {
      const result = await graphqlQuery(`
      query FindAllPerformers($filter: FindFilterType) {
        findPerformers(filter: $filter) {
          performers { ${PERFORMER_FRAGMENT} }
        }
      }
    `, {
        filter: {
          per_page: pageSize,
          page: currentPage,
          sort: "rating",
          direction: "DESC"
        }
      });
      const performers = result.findPerformers.performers || [];
      if (performers.length === 0) {
        break;
      }
      allPerformers.push(...performers);
      if (performers.length < pageSize) {
        break;
      }
      currentPage++;
    }
    return allPerformers.sort((a, b) => (b.rating100 ?? 1) - (a.rating100 ?? 1));
  }
  async function updateImageRating(id, rating) {
    await graphqlQuery(`mutation($i: ImageUpdateInput!) { imageUpdate(input: $i) { id } }`, {
      i: { id, rating100: Math.max(1, Math.min(100, rating)) }
    });
  }
  async function updatePerformerRating(id, rating, performerObj = null, won = null, opponentId = null) {
    if (!id) {
      console.error("[Ascension] Cannot update performer: ID is missing");
      return;
    }
    let performerName = "Unknown";
    if (performerObj?.name) {
      performerName = performerObj.name;
    } else if (state.currentPair) {
      if (state.currentPair.left?.id == id)
        performerName = state.currentPair.left.name;
      else if (state.currentPair.right?.id == id)
        performerName = state.currentPair.right.name;
    }
    let cleanRating = Math.round(Number(rating));
    if (isNaN(cleanRating)) {
      console.warn(`[Ascension] Invalid rating for ${id}, falling back to existing data.`);
      cleanRating = performerObj?.rating100 || 1;
    }
    const statusText = won === true ? "WIN" : won === false ? "LOSS" : "UPDATE";
    const statusColor = won === true ? "#4CAF50" : won === false ? "#F44336" : "#9E9E9E";
    const displayRating = (cleanRating / 10).toFixed(1);
    console.log(
      `%c[Ascension] %cUpdating: %c${performerName || "???"} %c(ID: ${id})%c, %cRating: %c${displayRating}%c, %cResult: %c${statusText}`,
      "color: #1cb4d6; font-weight: bold;",
      // [Ascension]
      "color: #1cb4d6;",
      // Updating:
      "color: #1cb4d6; font-weight: bold;",
      // performerName
      "color: #1cb4d6;",
      // ID
      "color: #888;",
      //
      "color: #FF69B4;",
      // Rating:
      "color: #FF69B4; font-weight: bold;",
      // displayRating
      "color: #888;",
      //
      "color: #1cb4d6;",
      // Result:
      `color: ${statusColor}; font-weight: bold;`
      // statusText (green for win, red for loss)
    );
    const variables = {
      id: id.toString(),
      rating: cleanRating,
      fields: {}
    };
    if (performerObj) {
      try {
        const currentStats = parsePerformerEloData(performerObj);
        const updatedStats = updatePerformerStats(currentStats, won);
        if (updatedStats) {
          variables.fields.hotornot_stats = JSON.stringify(updatedStats);
        }
      } catch (e) {
        console.error(`[Ascension] Stats update failed for ${id}:`, e);
      }
      let matchHistory = [];
      try {
        const rawRecord = performerObj.custom_fields?.performer_record;
        if (rawRecord) {
          matchHistory = typeof rawRecord === "string" ? JSON.parse(rawRecord) : rawRecord;
        }
      } catch (e) {
        console.warn(`[Ascension] Failed to parse performer_record for ${id}, resetting history.`);
        matchHistory = [];
      }
      let opponentData = "0:Unknown";
      if (opponentId) {
        if (typeof opponentId === "string" && opponentId.includes(":")) {
          opponentData = opponentId;
        } else {
          const oppId = (typeof opponentId === "object" ? opponentId.id : opponentId).toString().replace(/\D/g, "");
          let oppName = "Unknown";
          if (opponentId.name) {
            oppName = opponentId.name;
          } else if (state.currentPair) {
            if (state.currentPair.left?.id == oppId)
              oppName = state.currentPair.left.name;
            else if (state.currentPair.right?.id == oppId)
              oppName = state.currentPair.right.name;
          }
          opponentData = `${oppId}:${oppName || "Unknown"}`;
        }
      }
      matchHistory.push({
        date: (/* @__PURE__ */ new Date()).toISOString(),
        opponent: opponentData,
        won,
        ratingAfter: cleanRating
      });
      if (matchHistory.length > 30)
        matchHistory = matchHistory.slice(-30);
      variables.fields.performer_record = JSON.stringify(matchHistory);
    }
    variables.fields = variables.fields || {};
    try {
      return await graphqlQuery(`
      mutation($id: ID!, $rating: Int!, $fields: Map) {
        performerUpdate(input: { 
          id: $id, 
          rating100: $rating, 
          custom_fields: { partial: $fields } 
        }) { 
          id 
        }
      }`, variables);
    } catch (err) {
      console.error(`[Ascension] GraphQL Update Failed for ${id}:`, err);
      throw err;
    }
  }
  async function undoLastMatch() {
    if (!state.matchHistory || state.matchHistory.length === 0) {
      console.log("[HotOrNot] No match history to undo");
      return null;
    }
    const last = state.matchHistory.pop();
    console.log("[HotOrNot] Undoing match:", last);
    try {
      await Promise.all([
        updateItemRatingDirect(last.winnerId, last.winnerOldRating, last.winnerOldStats),
        updateItemRatingDirect(last.loserId, last.loserOldRating, last.loserOldStats)
      ]);
      console.log("[HotOrNot] Successfully restored ratings");
    } catch (error) {
      state.matchHistory.push(last);
      console.error("[HotOrNot] Failed to restore ratings:", error);
      throw new Error(`Failed to undo match: ${error.message}`);
    }
    if (last.gauntletSnapshot) {
      const snap = last.gauntletSnapshot;
      state.gauntletChampion = snap.gauntletChampion;
      state.gauntletWins = snap.gauntletWins;
      state.gauntletDefeated = [...snap.gauntletDefeated];
      state.gauntletFalling = snap.gauntletFalling;
      state.gauntletFallingItem = snap.gauntletFallingItem;
      console.log("[HotOrNot] Restored gauntlet state");
    }
    let restoredPairSnapshot = null;
    if (last.pairSnapshot) {
      const { left, right } = last.pairSnapshot;
      state.currentPair = { left, right };
      state.currentRanks = { left: last.pairSnapshot.rankLeft, right: last.pairSnapshot.rankRight };
      restoredPairSnapshot = last.pairSnapshot;
      console.log("[HotOrNot] Restored pair snapshot");
    }
    return restoredPairSnapshot || null;
  }
  async function updateItemRatingDirect(itemId, rating, statsObj) {
    if (state.battleType === "performers") {
      const fields = {};
      if (statsObj) {
        fields.hotornot_stats = JSON.stringify(statsObj);
        if ("performer_record" in statsObj) {
          const recordData = statsObj.performer_record;
          console.log(`[HotOrNot] Restoring performer_record for ${itemId}:`, recordData);
          if (recordData !== void 0 && recordData !== null) {
            fields.performer_record = Array.isArray(recordData) ? JSON.stringify(recordData) : recordData;
          } else {
            fields.performer_record = "[]";
          }
        }
      }
      console.log(`[HotOrNot] Restoring performer ${itemId} with fields:`, fields);
      await graphqlQuery(`
      mutation($id: ID!, $rating: Int!, $fields: Map) {
        performerUpdate(input: { 
          id: $id, 
          rating100: $rating, 
          custom_fields: { partial: $fields } 
        }) { 
          id 
        }
      }`, {
        id: itemId,
        rating: Math.round(rating),
        fields
      });
    } else if (state.battleType === "images") {
      await updateImageRating(itemId, rating);
    } else {
    }
  }
  async function getHotOrNotConfig() {
    if (pluginConfigCache)
      return pluginConfigCache;
    const result = await graphqlQuery(`query { configuration { plugins } }`);
    pluginConfigCache = (result.configuration.plugins || {})["HotOrNot"] || {};
    return pluginConfigCache;
  }
  async function isBattleRankBadgeEnabled() {
    const config = await getHotOrNotConfig();
    return config.showBattleRankBadge !== false;
  }
  async function getPerformerBattleRank(performerId) {
    try {
      const target = await fetchPerformerById(performerId);
      if (!target || target.rating100 === null || target.rating100 === 1)
        return null;
      const currentRating = target.rating100;
      const rankResult = await graphqlQuery(`
      query GetRankCount($rating: Int!) {
        findPerformers(performer_filter: { rating100: { value: $rating, modifier: GREATER_THAN } }) {
          count
        }
        totalRated: findPerformers(performer_filter: { rating100: { value: 0, modifier: GREATER_THAN } }) {
          count
        }
      }
    `, { rating: currentRating });
      const rank = (rankResult.findPerformers.count || 0) + 1;
      const total = rankResult.totalRated.count || 0;
      let stats = null;
      const statsJson = target.custom_fields?.["hotornot_stats"];
      if (statsJson) {
        stats = typeof statsJson === "string" ? JSON.parse(statsJson) : statsJson;
      }
      return { rank, total, rating: currentRating, stats };
    } catch (err) {
      console.error("[HotOrNot] Error calculating rank:", err);
      return null;
    }
  }
  var PERFORMER_FRAGMENT, IMAGE_FRAGMENT, pluginConfigCache;
  var init_api_client = __esm({
    "api-client.js"() {
      init_parsers();
      init_math_utils();
      init_state();
      PERFORMER_FRAGMENT = `id name image_path rating100 details custom_fields birthdate ethnicity country gender height_cm measurements fake_tits scene_count image_count gallery_count tags { name }`;
      IMAGE_FRAGMENT = `id rating100 paths { thumbnail image }`;
      pluginConfigCache = null;
    }
  });

  // ui-swipe.js
  var ui_swipe_exports = {};
  __export(ui_swipe_exports, {
    enableCardCarousel: () => enableCardCarousel,
    isMobile: () => isMobile
  });
  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  function enableCardCarousel(container, cards) {
    if (cards.length < 2)
      return;
    let currentIndex = 0;
    let startX = 0;
    let startY = 0;
    let startTime = 0;
    let isDragging = false;
    const leftHint = document.createElement("div");
    leftHint.className = "hon-swipe-hint left";
    leftHint.innerHTML = "\u27A1\uFE0F";
    container.appendChild(leftHint);
    const rightHint = document.createElement("div");
    rightHint.className = "hon-swipe-hint right";
    rightHint.innerHTML = "\u2B05\uFE0F";
    container.appendChild(rightHint);
    container.style.touchAction = "pan-y";
    function updateCardPositions() {
      cards.forEach((card, index) => {
        card.classList.remove("active", "inactive");
        if (index === currentIndex) {
          card.classList.add("active");
        } else {
          card.classList.add("inactive");
        }
      });
    }
    function showHint(direction) {
      const hint = direction === "left" ? leftHint : rightHint;
      hint.classList.add("visible");
      setTimeout(() => {
        hint.classList.remove("visible");
      }, 300);
    }
    function nextCard() {
      currentIndex = (currentIndex + 1) % cards.length;
      updateCardPositions();
      showHint("right");
      return true;
    }
    function prevCard() {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateCardPositions();
      showHint("left");
      return true;
    }
    function getCurrentCard() {
      return cards[currentIndex];
    }
    updateCardPositions();
    function handleTouchStart(e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startTime = (/* @__PURE__ */ new Date()).getTime();
      isDragging = true;
      const currentCard = getCurrentCard();
      if (currentCard) {
        currentCard.classList.add("swiping");
      }
    }
    function handleTouchMove(e) {
      if (!isDragging)
        return;
      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;
      const dx = x - startX;
      const dy = y - startY;
      if (Math.abs(dx) > Math.abs(dy)) {
        e.preventDefault();
        e.stopPropagation();
        const currentCard = getCurrentCard();
        if (currentCard) {
          currentCard.style.transform = `translateX(${dx}px) rotate(${dx * 0.05}deg)`;
          currentCard.style.opacity = 1 - Math.abs(dx) / (window.innerWidth * 1.5);
        }
      }
    }
    function handleTouchEnd(e) {
      if (!isDragging)
        return;
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const dx = endX - startX;
      const dy = endY - startY;
      const deltaTime = (/* @__PURE__ */ new Date()).getTime() - startTime;
      const currentCard = getCurrentCard();
      if (currentCard) {
        currentCard.classList.remove("swiping");
        currentCard.style.transform = "";
        currentCard.style.opacity = "";
      }
      isDragging = false;
      const threshold = window.innerWidth * 0.15;
      const velocity = Math.abs(dx) / deltaTime;
      if (Math.abs(dx) > threshold || velocity > 0.2) {
        if (dx > 0) {
          prevCard();
        } else {
          nextCard();
        }
      }
    }
    container.addEventListener("touchstart", handleTouchStart, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd);
    return {
      getCurrentIndex: () => currentIndex,
      next: nextCard,
      prev: prevCard,
      getCurrentCard
    };
  }
  var init_ui_swipe = __esm({
    "ui-swipe.js"() {
    }
  });

  // gauntlet-selection.js
  var gauntlet_selection_exports = {};
  __export(gauntlet_selection_exports, {
    fetchPerformersForSelection: () => fetchPerformersForSelection,
    hidePerformerSelection: () => hidePerformerSelection,
    loadPerformerSelection: () => loadPerformerSelection,
    showPerformerSelection: () => showPerformerSelection,
    showPlacementScreen: () => showPlacementScreen
  });
  function formatHeight2(heightCm) {
    if (!heightCm)
      return null;
    const totalInches = Math.round(heightCm * 0.393701);
    const feet = Math.floor(totalInches / 12);
    const inches = totalInches % 12;
    return `${feet}\u2032${inches}\u2033 (${heightCm} cm)`;
  }
  async function fetchPerformersForSelection(count = 5) {
    const filter = getPerformerFilter(state.cachedUrlFilter, state.selectedGenders);
    const total = await fetchPerformerCount(filter);
    const actualCount = Math.min(count, total);
    const query = `query FindRandomPerformers($performer_filter: PerformerFilterType, $filter: FindFilterType) {
    findPerformers(performer_filter: $performer_filter, filter: $filter) {
      performers { ${PERFORMER_FRAGMENT} }
    }
  }`;
    const result = await graphqlQuery(query, {
      performer_filter: filter,
      filter: { per_page: Math.min(100, total), sort: "random" }
    });
    return (result.findPerformers.performers || []).sort(() => Math.random() - 0.5).slice(0, actualCount);
  }
  function createSelectionCard(performer) {
    const name = performer.name || `Performer #${performer.id}`;
    let ratingDisplay;
    let tierDisplay = "";
    let tierClass = "";
    if (performer.rating100 === null || performer.rating100 === 1) {
      ratingDisplay = "<span class='hon-selection-rating-value'>Unrated</span>";
      tierClass = "tier-f";
    } else {
      const ratingValue = performer.rating100;
      ratingDisplay = `<span class='hon-selection-rating-value'>${(ratingValue / 10).toFixed(1)}</span>`;
      const tier = getRatingTier2(ratingValue);
      const tierColor = getTierColor2(tier);
      tierDisplay = `<span class="hon-selection-tier" style="color: ${tierColor}">${tier}</span> | `;
      switch (tier) {
        case "S-Tier":
          tierClass = "tier-s";
          break;
        case "A-Tier":
          tierClass = "tier-a";
          break;
        case "B-Tier":
          tierClass = "tier-b";
          break;
        case "C-Tier":
          tierClass = "tier-c";
          break;
        case "D-Tier":
          tierClass = "tier-d";
          break;
        case "F-Tier":
          tierClass = "tier-f";
          break;
        default:
          tierClass = "tier-f";
      }
    }
    let genderIcon = "";
    if (performer.gender) {
      const genderKey = performer.gender.toUpperCase();
      genderIcon = GENDER_ICONS2[genderKey] || "\u{1F464}";
    }
    let countryDisplay = "";
    if (performer.country) {
      countryDisplay = getCountryDisplay(performer.country);
    }
    let heightDisplay = "";
    if (performer.height_cm) {
      heightDisplay = formatHeight2(performer.height_cm);
    }
    const metaItems = [];
    if (countryDisplay) {
      metaItems.push(`<div class="hon-selection-meta-item"><strong>Country:</strong> ${countryDisplay}</div>`);
    }
    if (heightDisplay) {
      metaItems.push(`<div class="hon-selection-meta-item"><strong>Height:</strong> ${heightDisplay}</div>`);
    }
    if (performer.measurements) {
      metaItems.push(`<div class="hon-selection-meta-item"><strong>Measurements:</strong> ${performer.measurements}</div>`);
    }
    if (performer.fake_tits) {
      metaItems.push(`<div class="hon-selection-meta-item"><strong>Fake Tits:</strong> ${performer.fake_tits}</div>`);
    }
    if (performer.tags && performer.tags.length > 0) {
      const tagNames = performer.tags.map((tag) => tag.name || tag).join(", ");
      metaItems.push(`<div class="hon-selection-meta-item"><strong>Tags:</strong> ${tagNames}</div>`);
    }
    return `
    <div class="hon-selection-card ${tierClass}" data-performer-id="${performer.id}">
      <div class="hon-selection-image-container">
        ${performer.image_path ? `<img class="hon-selection-image" src="${performer.image_path}" alt="${name}" loading="lazy" />` : `<div class="hon-selection-image hon-no-image">No Image</div>`}
      </div>
      <div class="hon-selection-info">
        <h4 class="hon-selection-name">${name} ${genderIcon}</h4>
        <div class="hon-selection-rating">Rating: ${tierDisplay}${ratingDisplay}</div>
        ${metaItems.join("")}
      </div>
    </div>`;
  }
  function getRatingTier2(rating) {
    if (rating >= 85)
      return "S-Tier";
    if (rating >= 70)
      return "A-Tier";
    if (rating >= 55)
      return "B-Tier";
    if (rating >= 40)
      return "C-Tier";
    if (rating >= 25)
      return "D-Tier";
    return "F-Tier";
  }
  function getTierColor2(tier) {
    switch (tier) {
      case "S-Tier":
        return "#eb9834";
      case "A-Tier":
        return "#e014aa";
      case "B-Tier":
        return "#7f1e82";
      case "C-Tier":
        return "#14bbe0";
      case "D-Tier":
        return "#92e014";
      case "F-Tier":
        return "#808080";
      default:
        return "#000000";
    }
  }
  async function loadPerformerSelection() {
    const listEl = document.getElementById("hon-performer-list");
    if (!listEl)
      return;
    try {
      const performers = await fetchPerformersForSelection(5);
      listEl.innerHTML = "";
      let cards = [];
      performers.forEach((performer, index) => {
        const cardHtml = createSelectionCard(performer);
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = cardHtml;
        const card = tempDiv.firstElementChild;
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 10 + index * 100);
        card.onclick = () => {
          startGauntletWithPerformer(performer);
        };
        listEl.appendChild(card);
        cards.push(card);
      });
      const isRealMobileDevice = isMobile() && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
      if (isRealMobileDevice && cards.length > 0) {
        listEl.style.display = "block";
        const wrapper = document.createElement("div");
        wrapper.className = "hon-vs-container";
        wrapper.style.position = "relative";
        wrapper.style.width = "100%";
        wrapper.style.overflow = "hidden";
        while (listEl.firstChild) {
          wrapper.appendChild(listEl.firstChild);
        }
        listEl.appendChild(wrapper);
        const carousel = enableCardCarousel(wrapper, cards);
        cards.forEach((card, index) => {
          card.onclick = (e) => {
            if (carousel && carousel.getCurrentIndex() === index) {
              const performerId = card.dataset.performerId;
              const performer = performers.find((p) => p.id == performerId);
              if (performer) {
                startGauntletWithPerformer(performer);
              }
            } else if (carousel) {
              const currentIndex = carousel.getCurrentIndex();
              const direction = index > currentIndex ? 1 : -1;
              const steps = Math.abs(index - currentIndex);
              for (let i = 0; i < steps; i++) {
                if (direction > 0) {
                  carousel.next();
                } else {
                  carousel.prev();
                }
              }
            }
          };
        });
      }
    } catch (err) {
      listEl.innerHTML = `<div class="hon-error">Error: ${err.message}</div>`;
    }
  }
  function startGauntletWithPerformer(performer) {
    resetBattleState();
    state.gauntletChampion = performer;
    state.gauntletWins = 0;
    state.gauntletFalling = false;
    const sel = document.getElementById("hon-performer-selection");
    const comp = document.getElementById("hon-comparison-area");
    const actions = document.querySelector(".hon-actions");
    if (sel)
      sel.style.display = "none";
    if (comp)
      comp.style.display = "";
    if (actions)
      actions.style.display = "";
    loadNewPair();
  }
  function showPerformerSelection() {
    const selectionContainer = document.getElementById("hon-performer-selection");
    const comparisonArea = document.getElementById("hon-comparison-area");
    const actionsEl = document.querySelector(".hon-actions");
    if (selectionContainer) {
      selectionContainer.style.display = "block";
      loadPerformerSelection();
    }
    if (comparisonArea)
      comparisonArea.style.display = "none";
    if (actionsEl)
      actionsEl.style.display = "none";
    const modal = document.getElementById("hon-modal");
    if (modal) {
      modal.classList.remove("hon-mode-champion", "hon-mode-swiss");
      modal.classList.add("hon-mode-gauntlet");
    }
  }
  function hidePerformerSelection() {
    const selectionContainer = document.getElementById("hon-performer-selection");
    const comparisonArea = document.getElementById("hon-comparison-area");
    const actionsEl = document.querySelector(".hon-actions");
    if (selectionContainer)
      selectionContainer.style.display = "none";
    if (comparisonArea)
      comparisonArea.style.display = "";
    if (actionsEl)
      actionsEl.style.display = "";
    const modal = document.getElementById("hon-modal");
    if (modal) {
      modal.classList.remove("hon-mode-gauntlet");
      modal.classList.add(`hon-mode-${state.currentMode}`);
    }
  }
  function showPlacementScreen(item, rank, finalRating) {
    const comparisonArea = document.getElementById("hon-comparison-area");
    if (!comparisonArea)
      return;
    let title, imagePath;
    if (state.battleType === "performers") {
      title = item.name || `Performer #${item.id}`;
      imagePath = item.image_path;
    } else {
      title = `Image #${item.id}`;
      imagePath = item.paths && item.paths.thumbnail ? item.paths.thumbnail : null;
    }
    comparisonArea.innerHTML = `
      <div class="hon-victory-screen">
        <div class="hon-victory-crown">\u{1F4CD}</div>
        <h2 class="hon-victory-title">PLACED!</h2>
        <div class="hon-victory-scene">
          ${imagePath ? `<img class="hon-victory-image" src="${imagePath}" alt="${title}" />` : `<div class="hon-victory-image hon-no-image">No Image</div>`}
        </div>
        <h3 class="hon-victory-name">${title}</h3>
        <p class="hon-victory-stats">
          Rank <strong>#${rank}</strong> of ${state.totalItemsCount}<br>
          Rating: <strong>${finalRating}/100</strong>
        </p>
        <button id="hon-new-gauntlet" class="btn btn-primary">Start New Run</button>
      </div>
    `;
    const statusEl = document.getElementById("hon-gauntlet-status");
    const actionsEl = document.querySelector(".hon-actions");
    if (statusEl)
      statusEl.style.display = "none";
    if (actionsEl)
      actionsEl.style.display = "none";
    resetBattleState();
    const newBtn = comparisonArea.querySelector("#hon-new-gauntlet");
    if (newBtn) {
      newBtn.addEventListener("click", () => {
        if (actionsEl)
          actionsEl.style.display = "";
        loadNewPair();
      });
    }
  }
  var GENDER_ICONS2;
  var init_gauntlet_selection = __esm({
    "gauntlet-selection.js"() {
      init_api_client();
      init_parsers();
      init_state();
      init_battle_engine();
      init_formatters();
      init_ui_swipe();
      GENDER_ICONS2 = {
        "FEMALE": "\u2640\uFE0F",
        "MALE": "\u2642\uFE0F",
        "TRANSGENDER_MALE": "\u26A7\uFE0F\u2642\uFE0F",
        "TRANSGENDER_FEMALE": "\u26A7\uFE0F\u2640\uFE0F",
        "INTERSEX": "\u26A5",
        "NON_BINARY": "\u26A7\uFE0F"
      };
    }
  });

  // match-handler.js
  var match_handler_exports = {};
  __export(match_handler_exports, {
    handleChooseItem: () => handleChooseItem,
    handleSkip: () => handleSkip,
    handleUndo: () => handleUndo
  });
  async function handleChooseItem(event) {
    if (state.disableChoice)
      return;
    state.disableChoice = true;
    const body = event.currentTarget;
    const winnerId = body.dataset.winner;
    const isLeftWinner = winnerId === state.currentPair.left.id;
    const winnerItem = isLeftWinner ? state.currentPair.left : state.currentPair.right;
    const loserItem = isLeftWinner ? state.currentPair.right : state.currentPair.left;
    const loserId = loserItem.id;
    const winnerCard = body.closest(".hon-scene-card");
    const loserCard = document.querySelector(`[data-performer-id="${loserId}"], [data-scene-id="${loserId}"], [data-image-id="${loserId}"]`);
    const winnerRating = parseInt(winnerCard.dataset.rating) || 1;
    const loserRating = parseInt(loserCard?.dataset.rating) || 1;
    const loserRank = isLeftWinner ? state.currentRanks.right : state.currentRanks.left;
    if (state.battleType === "images") {
      const outcome2 = await handleComparison(winnerId, loserId, winnerRating, loserRating, null, winnerItem, loserItem);
      applyVisualFeedback(winnerCard, loserCard, winnerRating, loserRating, outcome2);
      return;
    }
    if (state.currentMode === "gauntlet") {
      if (state.gauntletFalling && state.gauntletFallingItem) {
        if (winnerId === state.gauntletFallingItem.id) {
          const championRating = state.gauntletChampion?.rating100 || winnerRating;
          const finalRating = championRating;
          await handleComparison(
            winnerId,
            // falling item (now winner)
            loserId,
            // the opponent they beat
            winnerRating,
            loserRating,
            null,
            // no rank for placement matches
            winnerItem,
            loserItem,
            false
            // not a draw
          );
          const finalRank = Math.max(1, (loserRank || 1) - 1);
          applyVisualFeedback(winnerCard, loserCard, winnerRating, loserRating, { newWinnerRating: finalRating, newLoserRating: loserRating, winnerChange: 0, loserChange: 0 });
          setTimeout(() => showPlacementScreen2(winnerItem, finalRank, finalRating, state.battleType, state.totalItemsCount), 800);
          return;
        } else {
          state.gauntletDefeated.push(winnerId);
          const outcome3 = await handleComparison(
            winnerId,
            // winner (the challenger)
            state.gauntletFallingItem.id,
            // loser (the falling item)
            winnerRating,
            loserRating,
            null,
            // no rank for falling matches
            winnerItem,
            loserItem,
            // loserItem is the falling item
            false
            // not a draw
          );
          applyVisualFeedback(winnerCard, loserCard, winnerRating, loserRating, outcome3);
          return;
        }
      }
      const outcome2 = await handleComparison(winnerId, loserId, winnerRating, loserRating, loserRank, winnerItem, loserItem);
      updateGauntletState(winnerId, winnerItem, loserId, loserItem, outcome2.newWinnerRating);
      applyVisualFeedback(winnerCard, loserCard, winnerRating, loserRating, outcome2);
      return;
    }
    if (state.currentMode === "champion") {
      const outcome2 = await handleComparison(winnerId, loserId, winnerRating, loserRating, loserRank, winnerItem, loserItem);
      updateChampionModeState(winnerId, winnerItem, loserId, outcome2.newWinnerRating);
      applyVisualFeedback(winnerCard, loserCard, winnerRating, loserRating, outcome2);
      return;
    }
    const outcome = await handleComparison(winnerId, loserId, winnerRating, loserRating, null, winnerItem, loserItem);
    applyVisualFeedback(winnerCard, loserCard, winnerRating, loserRating, outcome);
  }
  function updateGauntletState(winnerId, winnerItem, loserId, loserItem, newWinnerRating) {
    if (state.gauntletChampion?.id === winnerId) {
      state.gauntletDefeated.push(loserId);
      state.gauntletWins++;
      state.gauntletChampion.rating100 = newWinnerRating;
    } else {
      if (!state.gauntletFalling) {
        console.log(`[Ascension] Champion ${loserItem.name} defeated. Entering placement phase.`);
        state.gauntletFalling = true;
        state.gauntletFallingItem = loserItem;
        state.gauntletDefeated = [winnerId];
      } else {
        state.gauntletDefeated.push(winnerId);
      }
    }
  }
  function updateChampionModeState(winnerId, winnerItem, loserId, newWinnerRating) {
    if (state.gauntletChampion?.id === winnerId) {
      state.gauntletDefeated.push(loserId);
      state.gauntletWins++;
      state.gauntletChampion.rating100 = newWinnerRating;
    } else {
      state.gauntletChampion = winnerItem;
      state.gauntletWins = 1;
      state.gauntletChampion.rating100 = newWinnerRating;
    }
  }
  async function handleSkip() {
    const left = state.currentPair?.left;
    const right = state.currentPair?.right;
    if (left && right) {
      const pairKey = [left.id, right.id].sort().join("-");
      state.seenPairs.add(pairKey);
      if (state.seenPairs.size > 1e3) {
        const pairsArray = Array.from(state.seenPairs);
        state.seenPairs = new Set(pairsArray.slice(500));
      }
      const leftRating = left.rating100 || 1;
      const rightRating = right.rating100 || 1;
      await handleComparison(
        left.id,
        right.id,
        leftRating,
        rightRating,
        null,
        left,
        right,
        true
        // isDraw
      );
    }
    if (state.currentMode === "gauntlet" && right) {
      state.skippedIds.push(right.id);
      if (state.skippedIds.length > 10) {
        state.skippedIds.shift();
      }
      console.log(`[Ascension] Skipping Gauntlet opponent: ${right.name}`);
    }
    loadNewPair();
  }
  async function handleUndo() {
    if (!state.matchHistory || state.matchHistory.length === 0) {
      console.log("[Ascension] Nothing to undo.");
      return;
    }
    const undoBtn = document.getElementById("hon-undo-btn");
    if (undoBtn) {
      undoBtn.disabled = true;
      undoBtn.textContent = "\u{1F504}";
    }
    try {
      console.log("[Ascension] Starting undo operation...");
      const pairSnapshot = await undoLastMatch();
      if (pairSnapshot?.left && pairSnapshot?.right) {
        console.log("[Ascension] Re-rendering previous pair from snapshot");
        const { renderCard: renderCard2 } = await Promise.resolve().then(() => (init_ui_manager(), ui_manager_exports));
        const { attachBattleListeners: attachBattleListeners2 } = await Promise.resolve().then(() => (init_battle_engine(), battle_engine_exports));
        const area = document.getElementById("hon-comparison-area");
        if (area) {
          state.disableChoice = false;
          area.innerHTML = `
		<div class="hon-vs-container">
		  ${renderCard2(pairSnapshot.left, "left", pairSnapshot.rankLeft)}
		  <div class="hon-vs-divider"><span>VS</span></div>
		  ${renderCard2(pairSnapshot.right, "right", pairSnapshot.rankRight)}
		</div>
	  `;
          attachBattleListeners2(area);
        }
        console.log("[Ascension] Undo successful \u2014 previous pair restored.");
      } else {
        console.log("[Ascension] No snapshot available, loading fresh pair");
        loadNewPair();
      }
    } catch (err) {
      console.error("[Ascension] Undo failed:", err);
      const area = document.getElementById("hon-comparison-area");
      if (area) {
        area.innerHTML = `<div class="hon-error">Undo failed: ${err.message}</div>`;
      }
      setTimeout(() => {
        loadNewPair();
      }, 2e3);
    } finally {
      const btn = document.getElementById("hon-undo-btn");
      if (btn) {
        btn.disabled = false;
        btn.textContent = "\u21A9";
        btn.style.display = state.matchHistory && state.matchHistory.length > 0 ? "inline-block" : "none";
      }
    }
  }
  function applyVisualFeedback(winnerCard, loserCard, winnerRating, loserRating, outcome) {
    winnerCard.classList.add("hon-winner");
    if (loserCard)
      loserCard.classList.add("hon-loser");
    const winnerBody = winnerCard.querySelector(".hon-scene-body");
    const loserBody = loserCard ? loserCard.querySelector(".hon-scene-body") : null;
    if (winnerBody) {
      const winnerBtn = winnerBody.querySelector(".hon-choose-btn");
      if (winnerBtn) {
        winnerBtn.classList.add("chosen-btn");
        winnerBtn.innerHTML = "\u2705";
      }
    }
    if (loserBody) {
      const loserBtn = loserBody.querySelector(".hon-choose-btn");
      if (loserBtn) {
        loserBtn.classList.add("not-chosen-btn");
        loserBtn.innerHTML = "\u274C";
      }
    }
    showRatingAnimation(winnerCard, winnerRating, outcome.newWinnerRating, outcome.winnerChange, true);
    if (loserCard) {
      showRatingAnimation(loserCard, loserRating, outcome.newLoserRating, outcome.loserChange, false);
    }
    const isMobileView = window.innerWidth <= 1200;
    if (isMobileView) {
      setTimeout(() => {
        winnerCard.classList.add("hon-transition-out");
        if (loserCard)
          loserCard.classList.add("hon-transition-out");
      }, 1200);
      setTimeout(() => {
        const isVictoryVisible = document.querySelector(".hon-victory-screen");
        if (!isVictoryVisible) {
          loadNewPair();
        }
      }, 1800);
    } else {
      setTimeout(() => {
        winnerCard.classList.add("hon-transition-out");
        if (loserCard)
          loserCard.classList.add("hon-transition-out");
      }, 2e3);
      setTimeout(() => {
        const isVictoryVisible = document.querySelector(".hon-victory-screen");
        if (!isVictoryVisible) {
          loadNewPair();
        }
      }, 3e3);
    }
  }
  var init_match_handler = __esm({
    "match-handler.js"() {
      init_state();
      init_api_client();
      init_ui_manager();
      init_battle_engine();
      init_ui_manager();
    }
  });

  // battle-engine.js
  var battle_engine_exports = {};
  __export(battle_engine_exports, {
    attachBattleListeners: () => attachBattleListeners,
    fetchChampionPairPerformers: () => fetchChampionPairPerformers,
    fetchGauntletPairPerformers: () => fetchGauntletPairPerformers,
    fetchPair: () => fetchPair,
    fetchSwissPairImages: () => fetchSwissPairImages,
    fetchSwissPairPerformers: () => fetchSwissPairPerformers,
    getRatingTier: () => getRatingTier3,
    handleMatchmakingLogic: () => handleMatchmakingLogic,
    loadNewPair: () => loadNewPair
  });
  function attachBattleListeners(area) {
    if (isMobile()) {
      const container = area.querySelector(".hon-vs-container");
      if (container) {
        const cards = Array.from(container.querySelectorAll(".hon-scene-card"));
        if (cards.length >= 2) {
          const carousel = enableCardCarousel(container, cards);
          cards.forEach((card, index) => {
            card.querySelector(".hon-scene-body").addEventListener("click", (e) => {
              e.stopPropagation();
              handleChooseItem(e);
            });
          });
        }
      }
    } else {
      area.querySelectorAll(".hon-scene-body").forEach((body) => {
        body.onclick = (e) => handleChooseItem(e);
      });
    }
    if (!isMobile()) {
      area.querySelectorAll(".hon-scene-card").forEach((card) => {
        const video = card.querySelector(".hon-hover-preview");
        if (!video)
          return;
        card.onmouseenter = () => video.play().catch(() => {
        });
        card.onmouseleave = () => {
          video.pause();
          video.currentTime = 0;
        };
      });
    }
    area.querySelectorAll(".hon-tags-more").forEach((tagElement) => {
      tagElement.onclick = function(e) {
        e.stopPropagation();
        const container = this.parentElement;
        const displayedTags = container.querySelector(".hon-tags-displayed");
        const ellipsis = container.querySelector(".hon-tags-ellipsis");
        const moreLink = this;
        const expandedTags = container.querySelector(".hon-tags-expanded");
        if (displayedTags)
          displayedTags.style.display = "none";
        if (ellipsis)
          ellipsis.style.display = "none";
        moreLink.style.display = "none";
        if (expandedTags)
          expandedTags.style.display = "inline";
      };
    });
  }
  async function fetchPair() {
    const { battleType, currentMode } = state;
    if (currentMode === "swiss") {
      if (battleType === "performers")
        return await fetchSwissPairPerformers(state.selectedGenders);
      if (battleType === "images")
        return await fetchSwissPairImages();
    }
    if (currentMode === "gauntlet") {
      if (battleType === "performers")
        return await fetchGauntletPairPerformers();
      if (battleType === "images")
        return await fetchSwissPairImages();
    }
    if (currentMode === "champion") {
      if (battleType === "performers")
        return await fetchChampionPairPerformers();
      if (battleType === "images")
        return await fetchSwissPairImages();
    }
  }
  async function loadNewPair() {
    state.disableChoice = false;
    const area = document.getElementById("hon-comparison-area");
    if (!area)
      return;
    const undoBtn = document.getElementById("hon-undo-btn");
    if (undoBtn) {
      undoBtn.style.display = state.matchHistory && state.matchHistory.length > 0 ? "inline-block" : "none";
      undoBtn.disabled = false;
      undoBtn.textContent = "\u21A9";
    }
    if (state.currentMode === "gauntlet" && state.battleType === "performers" && !state.gauntletChampion && !state.gauntletFalling) {
      showPerformerSelection();
      return;
    }
    try {
      const result = await fetchPair();
      if (result.isVictory) {
        area.innerHTML = createVictoryScreen(result.items[0], state.battleType, state.gauntletWins, state.totalItemsCount);
        attachVictoryHandlers(area);
        return;
      }
      if (result.isPlacement) {
        showPlacementScreen(result.items[0], result.placementRank, result.placementRating);
        return;
      }
      const [left, right] = result.items;
      state.currentPair = { left, right };
      state.currentRanks = { left: result.ranks[0], right: result.ranks[1] };
      area.innerHTML = `
      <div class="hon-vs-container">
        ${renderCard(left, "left", result.ranks[0])}
        ${renderCard(right, "right", result.ranks[1])}
      </div>
    `;
      attachBattleListeners(area);
      if (isMobile()) {
        const container = area.querySelector(".hon-vs-container");
        if (container) {
          const cards = container.querySelectorAll(".hon-scene-card");
          if (cards.length >= 2) {
            cards[0].classList.add("stack-top");
            cards[1].classList.add("stack-bottom");
          }
        }
      }
    } catch (err) {
      area.innerHTML = `<div class="hon-error">Error: ${err.message}</div>`;
    }
  }
  function shouldForceCrossTierMatch() {
    return Math.random() < 0.1;
  }
  function attachVictoryHandlers(area) {
    const btn = area.querySelector("#hon-new-gauntlet");
    if (btn) {
      btn.onclick = () => {
        resetBattleState();
        if (state.currentMode === "gauntlet" && state.battleType === "performers") {
          Promise.resolve().then(() => (init_gauntlet_selection(), gauntlet_selection_exports)).then((m) => m.showPerformerSelection());
        } else {
          loadNewPair();
        }
      };
    }
  }
  async function fetchSwissPairImages() {
    const totalImages = await fetchImageCount();
    const useSampling = totalImages > 1e3;
    const sampleSize = useSampling ? Math.min(500, totalImages) : totalImages;
    const query = `query FindImagesByRating($filter: FindFilterType) {
    findImages(filter: $filter) { images { ${IMAGE_FRAGMENT} } }
  }`;
    const result = await graphqlQuery(query, {
      filter: {
        per_page: sampleSize,
        sort: useSampling ? "random" : "rating",
        direction: useSampling ? void 0 : "DESC"
      }
    });
    const images = result.findImages.images || [];
    if (images.length < 2)
      return { items: await fetchRandomImages(2), ranks: [null, null] };
    const image1 = images[Math.floor(Math.random() * images.length)];
    const rating1 = image1.rating100 || 1;
    const matchWindow = images.length > 1 ? 10 : 20;
    const similar = images.filter((s) => s.id !== image1.id && Math.abs((s.rating100 || 1) - rating1) <= matchWindow);
    const image2 = similar.length > 0 ? similar[Math.floor(Math.random() * similar.length)] : images.filter((s) => s.id !== image1.id)[0];
    let ranks = [null, null];
    if (!useSampling && images.length > 0) {
      const sortedImages = [...images].sort((a, b) => (b.rating100 || 0) - (a.rating100 || 0));
      const rank1 = sortedImages.findIndex((img) => img.id === image1.id) + 1;
      const rank2 = sortedImages.findIndex((img) => img.id === image2.id) + 1;
      ranks = [rank1 || null, rank2 || null];
    }
    return {
      items: [image1, image2],
      ranks
    };
  }
  function canBattleByTier(tier1, tier2) {
    const eliteTiers = ["S-Tier", "A-Tier", "B-Tier"];
    if (tier1 === "S-Tier")
      return eliteTiers.includes(tier2);
    if (tier2 === "S-Tier")
      return eliteTiers.includes(tier1);
    return true;
  }
  function getRatingTier3(rating) {
    if (rating >= 85)
      return "S-Tier";
    if (rating >= 70)
      return "A-Tier";
    if (rating >= 55)
      return "B-Tier";
    if (rating >= 40)
      return "C-Tier";
    if (rating >= 25)
      return "D-Tier";
    return "F-Tier";
  }
  async function fetchSwissPairPerformers() {
    const performerFilter = getPerformerFilter(state.cachedUrlFilter, state.selectedGenders);
    const query = `query FindPerformersByRating($performer_filter: PerformerFilterType, $filter: FindFilterType) {
    findPerformers(performer_filter: $performer_filter, filter: $filter) { 
      count, 
      performers { ${PERFORMER_FRAGMENT} } 
    }
  }`;
    const result = await graphqlQuery(query, {
      performer_filter: performerFilter,
      filter: { per_page: -1, sort: "rating", direction: "DESC" }
    });
    const performers = result.findPerformers.performers || [];
    state.totalItemsCount = performers.length;
    if (performers.length < 2)
      return { items: await fetchRandomPerformers(2), ranks: [null, null] };
    const logMatch = (type, p1, p2, w1, w2, color) => {
      const r1 = ((p1.rating100 || 0) / 10).toFixed(1);
      const r2 = ((p2.rating100 || 0) / 10).toFixed(1);
      console.log(
        `%c[Ascension] ${type}: %c${p1.name || "???"} %c(w:${w1.toFixed(2)})%c [${r1}] %cvs %c${p2.name || "???"} %c(w:${w2.toFixed(2)})%c [${r2}]`,
        "color: #1cb4d6; font-weight: bold;",
        // [Ascension] prefix
        `color: ${color}; font-weight: bold;`,
        // p1 name
        "color: #FF69B4; font-weight: bold;",
        // p1 weight (PINK!)
        "color: #1cb4d6;",
        // p1 rating
        "color: #888;",
        // vs
        `color: ${color}; font-weight: bold;`,
        // p2 name
        "color: #FF69B4; font-weight: bold;",
        // p2 weight (PINK!)
        "color: #1cb4d6;"
        // p2 rating
      );
    };
    const avgMatches = calculateAverageMatches(performers);
    const sortedPool = performers.map((p) => {
      const stats = parsePerformerEloData(p);
      const rawMatches = stats.total_matches || 0;
      const cappedMatches = Math.min(rawMatches, 10);
      let baseWeight = Math.pow(getRecencyWeight(p), 3) + Math.random() * 0.01;
      const lowMatchBoost = getLowMatchBoost({ ...p, total_matches: cappedMatches }, avgMatches);
      const finalWeight = baseWeight * lowMatchBoost;
      return {
        p,
        weight: finalWeight,
        rating: p.rating100 || 1,
        matches: rawMatches,
        // Store actual matches for logging/display
        cappedMatches
        // Store capped version for debugging
      };
    }).filter((item) => {
      const stats = parsePerformerEloData(item.p);
      const isUnrated = stats.total_matches === 0;
      const isHighWeight = item.weight > 0.01;
      const isUndermatched = item.matches > 0 && item.matches < avgMatches * 0.2;
      return isUnrated || isHighWeight || isUndermatched;
    }).sort((a, b) => b.weight - a.weight);
    if (sortedPool.length < 2) {
      console.warn("[Ascension] Not enough eligible performers after applying filters.");
      return { items: await fetchRandomPerformers(2), ranks: [null, null] };
    }
    const seedIndex = Math.floor(Math.random() * Math.min(sortedPool.length, 15));
    const seed = sortedPool[seedIndex];
    const tier1 = getRatingTier3(seed.rating);
    console.log(
      `%c[Ascension] %cSelected Seed: %c${seed.p.name || "???"} %c(ID: ${seed.p.id})%c, %cWeight: %c${seed.weight.toFixed(3)}%c, %cTotal Match Count: %c${seed.matches}`,
      "color: #1cb4d6; font-weight: bold;",
      // [Ascension]
      "color: #1cb4d6;",
      // Selected Seed:
      "color: #1cb4d6; font-weight: bold;",
      // seed.p.name 
      "color: #1cb4d6;",
      // ID 
      "color: #888;",
      //
      "color: #FF69B4;",
      // Weight:
      "color: #FF69B4; font-weight: bold;",
      // seed.weight
      "color: #888;",
      //
      "color: #d64029;",
      // Total Match Count
      "color: #d64029; font-weight: bold;"
      // seed.matches
    );
    if (shouldForceCrossTierMatch()) {
      const crossTierCandidates = sortedPool.filter(
        (item) => item.p.id !== seed.p.id && (item.p.rating100 || 1) >= (seed.p.rating100 || 1) + 20
      );
      if (crossTierCandidates.length > 0) {
        const weights = crossTierCandidates.map((candidate) => candidate.weight);
        const challengerItem = weightedRandomSelect(crossTierCandidates, weights);
        if (challengerItem && canBattleByTier(tier1, getRatingTier3(challengerItem.p.rating100 || 0))) {
          logMatch("CROSS-TIER", seed.p, challengerItem.p, seed.weight, challengerItem.weight, "#E91E63");
          const rank1 = getPerformerRankInList(seed.p, performers);
          const rank2 = getPerformerRankInList(challengerItem.p, performers);
          return { items: [seed.p, challengerItem.p], ranks: [rank1, rank2] };
        }
      }
    }
    const validOpponents = sortedPool.filter((item) => {
      if (item.p.id === seed.p.id)
        return false;
      const pointDiff = Math.abs(seed.rating - item.rating);
      if (pointDiff > 15)
        return false;
      if (!canBattleByTier(tier1, getRatingTier3(item.rating)))
        return false;
      return true;
    });
    if (validOpponents.length > 0) {
      const weights = validOpponents.map((opponent) => opponent.weight);
      const opponentItem = weightedRandomSelect(validOpponents, weights);
      if (opponentItem) {
        logMatch("RANGE-VALID", seed.p, opponentItem.p, seed.weight, opponentItem.weight, "#2196F3");
        const rank1 = getPerformerRankInList(seed.p, performers);
        const rank2 = getPerformerRankInList(opponentItem.p, performers);
        return { items: [seed.p, opponentItem.p], ranks: [rank1, rank2] };
      }
    }
    const looseRangeOpponents = sortedPool.filter(
      (item) => item.p.id !== seed.p.id && Math.abs(seed.rating - item.rating) <= 25
    );
    if (looseRangeOpponents.length > 0) {
      const looseWeights = looseRangeOpponents.map((opponent) => opponent.weight);
      const opponentItem = weightedRandomSelect(looseRangeOpponents, looseWeights);
      if (opponentItem) {
        logMatch("LOOSE-RANGE", seed.p, opponentItem.p, seed.weight, opponentItem.weight, "#FF9800");
        const rank1 = getPerformerRankInList(seed.p, performers);
        const rank2 = getPerformerRankInList(opponentItem.p, performers);
        return { items: [seed.p, opponentItem.p], ranks: [rank1, rank2] };
      }
    }
    const fallbackOpponents = sortedPool.filter((item) => item.p.id !== seed.p.id);
    if (fallbackOpponents.length > 0) {
      const fallbackWeights = fallbackOpponents.map((opponent) => opponent.weight);
      const fallbackItem = weightedRandomSelect(fallbackOpponents, fallbackWeights);
      if (fallbackItem && fallbackItem.p.id !== seed.p.id) {
        logMatch("FALLBACK-DIFF", seed.p, fallbackItem.p, seed.weight, fallbackItem.weight, "#F44336");
        const rank1 = getPerformerRankInList(seed.p, performers);
        const rank2 = getPerformerRankInList(fallbackItem.p, performers);
        return { items: [seed.p, fallbackItem.p], ranks: [rank1, rank2] };
      }
    }
    console.warn("[Ascension] Extremely unlikely scenario in Swiss pairing, using basic random fallback.");
    return { items: await fetchRandomPerformers(2), ranks: [null, null] };
  }
  function getPerformerRankInList(performer, allPerformers) {
    if (!performer || performer.rating100 === null || performer.rating100 === 1)
      return null;
    try {
      const sorted = [...allPerformers].filter((p) => p.rating100 !== null && p.rating100 > 1).sort((a, b) => (b.rating100 || 0) - (a.rating100 || 0));
      const index = sorted.findIndex((p) => p.id === performer.id);
      return index >= 0 ? index + 1 : null;
    } catch (err) {
      console.warn("[Ascension] Could not calculate rank for performer:", performer.id, err);
      return null;
    }
  }
  async function fetchGauntletPairPerformers() {
    const gender = state.gauntletChampion?.gender || state.selectedGenders[0];
    const performerFilter = getPerformerFilter(state.cachedUrlFilter, [gender]);
    const result = await graphqlQuery(`query FindPerformersByRating($performer_filter: PerformerFilterType, $filter: FindFilterType) {
    findPerformers(performer_filter: $performer_filter, filter: $filter) { count, performers { ${PERFORMER_FRAGMENT} } }
  }`, { performer_filter: performerFilter, filter: { per_page: -1, sort: "rating", direction: "DESC" } });
    const performers = result.findPerformers.performers || [];
    state.totalItemsCount = performers.length;
    if (performers.length < 2)
      return { items: await fetchRandomPerformers(2), ranks: [null, null], isVictory: false };
    return handleMatchmakingLogic(performers, "performers");
  }
  async function fetchChampionPairPerformers() {
    const performerFilter = getPerformerFilter(state.cachedUrlFilter, state.selectedGenders);
    const result = await graphqlQuery(`query FindPerformersByRating($performer_filter: PerformerFilterType, $filter: FindFilterType) {
    findPerformers(performer_filter: $performer_filter, filter: $filter) { performers { ${PERFORMER_FRAGMENT} } }
  }`, { performer_filter: performerFilter, filter: { per_page: -1, sort: "rating", direction: "DESC" } });
    const performers = result.findPerformers.performers || [];
    state.totalItemsCount = performers.length;
    if (performers.length < 2)
      return { items: await fetchRandomPerformers(2), ranks: [null, null] };
    if (!state.gauntletChampion) {
      const shuffled = [...performers].sort(() => Math.random() - 0.5);
      return { items: [shuffled[0], shuffled[1]], ranks: [null, null] };
    }
    return handleMatchmakingLogic(performers, "performers");
  }
  function handleMatchmakingLogic(list, type) {
    if (!state.gauntletChampion) {
      console.warn("[Ascension] No champion selected, picking a random starter.");
      const randomStarter = list[Math.floor(Math.random() * list.length)];
      let candidate = list.find((i) => i.id !== randomStarter.id);
      if (state.seenPairs && state.seenPairs.size > 0) {
        const candidates = list.filter(
          (i) => i.id !== randomStarter.id && !hasBeenRecentlyPaired(randomStarter.id, i.id)
        );
        if (candidates.length > 0) {
          candidate = candidates[Math.floor(Math.random() * candidates.length)];
        }
      }
      return {
        items: [randomStarter, candidate || list.find((i) => i.id !== randomStarter.id)],
        ranks: [null, null],
        isVictory: false
      };
    }
    const champIdx = list.findIndex((i) => i.id === state.gauntletChampion.id);
    let potentialOpponents = list.filter(
      (item, idx) => idx < champIdx && !state.gauntletDefeated.includes(item.id) && !state.skippedIds.includes(item.id) && // Don't rematch skipped opponents
      !hasBeenRecentlyPaired(state.gauntletChampion.id, item.id)
      // Avoid recent pairs
    );
    if (potentialOpponents.length === 0) {
      if (state.skippedIds.length > 0) {
        state.skippedIds = [];
        return handleMatchmakingLogic(list, type);
      }
      return { items: [state.gauntletChampion], ranks: [1], isVictory: true };
    }
    const proximityWindow = Math.min(5, potentialOpponents.length);
    let filteredOpponents = potentialOpponents.slice(-proximityWindow).filter(
      (opponent) => !hasBeenRecentlyPaired(state.gauntletChampion.id, opponent.id)
    );
    if (filteredOpponents.length === 0) {
      filteredOpponents = potentialOpponents.slice(-proximityWindow);
    }
    const randomIdx = Math.floor(Math.random() * filteredOpponents.length);
    const nextOpponent = filteredOpponents[randomIdx];
    const pairKey = [state.gauntletChampion.id, nextOpponent.id].sort().join("-");
    if (state.seenPairs) {
      state.seenPairs.add(pairKey);
    }
    return {
      items: [state.gauntletChampion, nextOpponent],
      ranks: [champIdx + 1, list.indexOf(nextOpponent) + 1],
      isVictory: false
    };
  }
  function hasBeenRecentlyPaired(id1, id2) {
    if (!state.seenPairs)
      return false;
    const pairKey = [id1, id2].sort().join("-");
    return state.seenPairs.has(pairKey);
  }
  var init_battle_engine = __esm({
    "battle-engine.js"() {
      init_api_client();
      init_math_utils();
      init_parsers();
      init_state();
      init_ui_manager();
      init_gauntlet_selection();
      init_match_handler();
      init_ui_swipe();
    }
  });

  // ui-stats.js
  var ui_stats_exports = {};
  __export(ui_stats_exports, {
    createStatsModalContent: () => createStatsModalContent,
    generateBarGroups: () => generateBarGroups,
    generateStatTables: () => generateStatTables,
    openStatsModal: () => openStatsModal
  });
  function getRatingTier4(rating) {
    if (rating >= 85)
      return "S-Tier";
    if (rating >= 70)
      return "A-Tier";
    if (rating >= 55)
      return "B-Tier";
    if (rating >= 40)
      return "C-Tier";
    if (rating >= 25)
      return "D-Tier";
    return "F-Tier";
  }
  function getTierColor3(tier) {
    switch (tier) {
      case "S-Tier":
        return "#eb9834";
      case "A-Tier":
        return "#e014aa";
      case "B-Tier":
        return "#7f1e82";
      case "C-Tier":
        return "#14bbe0";
      case "D-Tier":
        return "#92e014";
      case "F-Tier":
        return "#808080";
      default:
        return "#000000";
    }
  }
  async function openStatsModal() {
    const existingStatsModal = document.getElementById("hon-stats-modal");
    if (existingStatsModal)
      existingStatsModal.remove();
    const statsModal = document.createElement("div");
    statsModal.id = "hon-stats-modal";
    statsModal.className = "hon-stats-modal";
    statsModal.innerHTML = `
    <div class="hon-modal-backdrop"></div>
    <div class="hon-stats-modal-dialog">
      <button class="hon-modal-close">\u2715</button>
      <div class="hon-stats-loading">Loading stats...</div>
    </div>
  `;
    document.body.appendChild(statsModal);
    const closeStats = () => statsModal.remove();
    const dialogContainer = statsModal.querySelector(".hon-stats-modal-dialog");
    dialogContainer.addEventListener("click", (e) => e.stopPropagation());
    statsModal.querySelector(".hon-modal-backdrop").addEventListener("click", closeStats);
    statsModal.querySelector(".hon-modal-close").addEventListener("click", closeStats);
    try {
      const performers = await fetchAllPerformerStats();
      const content = createStatsModalContent(performers);
      dialogContainer.innerHTML = `
      <button class="hon-modal-close">\u2715</button>
      ${content}
    `;
      dialogContainer.addEventListener("click", (e) => e.stopPropagation());
      dialogContainer.querySelector(".hon-modal-close").addEventListener("click", closeStats);
      initStatsTabs(dialogContainer);
      initStatsCollapsibles(dialogContainer);
      initStatsSorting(dialogContainer);
      const activeDistributionTab = dialogContainer.querySelector('.hon-stats-tab[data-tab="distribution"].active');
      if (activeDistributionTab) {
        setTimeout(() => {
          const bars = dialogContainer.querySelectorAll(".animated-bar:not(.animated)");
          if (bars.length > 0) {
            animateBars(bars);
          }
        }, 100);
      }
    } catch (error) {
      console.error("[Ascension] Error loading stats:", error);
      dialogContainer.innerHTML = `
      <button class="hon-modal-close">\u2715</button>
      <div class="hon-stats-error">Failed to load statistics.</div>
    `;
      dialogContainer.querySelector(".hon-modal-close").addEventListener("click", closeStats);
    }
  }
  function createStatsModalContent(performers) {
    if (!performers || performers.length === 0) {
      return '<div class="hon-stats-empty">No performer stats available</div>';
    }
    const processedPerformers = performers.map((p, idx) => {
      const stats = parsePerformerEloData(p);
      const rawRating = p.rating100 ?? 1;
      return {
        ...stats,
        rank: idx + 1,
        id: p.id,
        name: p.name || `Performer #${p.id}`,
        rating: (rawRating / 10).toFixed(1)
      };
    });
    const rankGroupsHTML = generateStatTables(processedPerformers);
    const ratingBuckets = new Array(101).fill(0);
    performers.forEach((p) => {
      const r = p.rating100 ?? 1;
      if (r >= 0 && r <= 100)
        ratingBuckets[r]++;
    });
    return `
    <div class="hon-stats-header">
      <h2>\u{1F4CA} Performer Statistics</h2>
      <div class="hon-stats-tabs">
        <button class="hon-stats-tab active" data-tab="leaderboard">Leaderboard</button>
        <button class="hon-stats-tab" data-tab="distribution">Rating Distribution</button>
      </div>
    </div>
    <div class="hon-stats-content">
      <div class="hon-stats-tab-panel active" data-panel="leaderboard">
        ${rankGroupsHTML}
      </div>
      <div class="hon-stats-tab-panel" data-panel="distribution">
        <div class="hon-bar-graph">
          ${generateBarGroups(ratingBuckets)}
        </div>
      </div>
    </div>
  `;
  }
  function generateStatTables(processedPerformers) {
    const tierGroups = {};
    processedPerformers.forEach((p) => {
      const numericRating = parseFloat(p.rating) * 10;
      const tier = getRatingTier4(numericRating);
      if (!tierGroups[tier]) {
        tierGroups[tier] = [];
      }
      tierGroups[tier].push(p);
    });
    const sortedTiers = Object.keys(tierGroups).sort((a, b) => {
      const tierValues = {
        "S-Tier": 5,
        "A-Tier": 4,
        "B-Tier": 3,
        "C-Tier": 2,
        "D-Tier": 1,
        "F-Tier": 0
      };
      return tierValues[b] - tierValues[a];
    });
    return sortedTiers.map((tier) => {
      const performersInTier = tierGroups[tier];
      const tierColor = getTierColor3(tier);
      const rows = performersInTier.map((p) => {
        const winRate = p.total_matches > 0 ? (p.wins / p.total_matches * 100).toFixed(1) : "0.0";
        const streakDisplay = p.current_streak > 0 ? `<span class="hon-stats-positive">+${p.current_streak}</span>` : p.current_streak < 0 ? `<span class="hon-stats-negative">${p.current_streak}</span>` : "0";
        return `
        <tr data-rank="${p.rank}" 
            data-rating="${parseFloat(p.rating)}" 
            data-matches="${p.total_matches}" 
            data-wins="${p.wins}" 
            data-losses="${p.losses}" 
            data-draws="${p.draws || 0}" 
            data-winrate="${winRate}" 
            data-streak="${p.current_streak}" 
            data-beststreak="${p.best_streak}" 
            data-worststreak="${p.worst_streak}">
          <td class="hon-stats-rank">#${p.rank}</td>
          <td class="hon-stats-name">
            <a href="/performers/${p.id}" target="_blank">${escapeHtml(p.name)}</a>
          </td>
          <td class="hon-stats-rating" style="color: ${tierColor}; font-weight: bold;">
            ${p.rating}
          </td>
          <td>${p.total_matches}</td>
          <td class="hon-stats-positive">${p.wins}</td>
          <td class="hon-stats-negative">${p.losses}</td>
          <td>${p.draws || 0}</td>
          <td>${winRate}%</td>
          <td>${streakDisplay}</td>
          <td class="hon-stats-positive">${p.best_streak}</td>
          <td class="hon-stats-negative">${p.worst_streak}</td>
        </tr>`;
      }).join("");
      return `
      <div class="hon-rank-group">
        <div class="hon-rank-group-header" data-group="${tier}" role="button">
          <span class="hon-group-toggle">\u25B6</span>
          <span class="hon-rank-group-title" style="color: ${tierColor}; font-weight: bold;">
            ${tier} Performers (${performersInTier.length})
          </span>
        </div>
        <div class="hon-rank-group-content collapsed" data-group="${tier}">
          <table class="hon-stats-table">
            <thead>
              <tr>
                <th data-sort="rank">Rank</th>
                <th data-sort="name">Name</th>
                <th data-sort="rating">Rating</th>
                <th data-sort="matches">Matches</th>
                <th data-sort="wins">W</th>
                <th data-sort="losses">L</th>
                <th data-sort="draws">D</th>
                <th data-sort="winrate">%</th>
                <th data-sort="streak">Streak</th>
                <th data-sort="beststreak">Best</th>
                <th data-sort="worststreak">Worst</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>`;
    }).join("");
  }
  function initStatsSorting(dialog) {
    const headers = dialog.querySelectorAll(".hon-stats-table th[data-sort]");
    headers.forEach((header) => {
      header.addEventListener("click", () => {
        const table = header.closest("table");
        const tbody = table.querySelector("tbody");
        const sortType = header.dataset.sort;
        const isAscending = header.classList.toggle("ascending");
        headers.forEach((h) => {
          if (h !== header) {
            h.classList.remove("ascending", "descending", "sort-active");
          }
        });
        header.classList.toggle("descending", !isAscending);
        header.classList.add("sort-active");
        table.className = table.className.replace(/sorted-by-\w+/g, "");
        table.classList.add(`sorted-by-${sortType}`);
        const rows = Array.from(tbody.querySelectorAll("tr"));
        rows.sort((a, b) => {
          let aValue = a.dataset[sortType];
          let bValue = b.dataset[sortType];
          if (sortType === "name") {
            aValue = aValue.toLowerCase();
            bValue = bValue.toLowerCase();
          } else if (sortType !== "name") {
            aValue = parseFloat(aValue);
            bValue = parseFloat(bValue);
          }
          if (aValue < bValue)
            return isAscending ? -1 : 1;
          if (aValue > bValue)
            return isAscending ? 1 : -1;
          return 0;
        });
        rows.forEach((row) => tbody.appendChild(row));
      });
    });
  }
  function generateBarGroups(ratingBuckets) {
    const tiers = [
      { label: "S-Tier", min: 85, max: 100, color: "#eb9834" },
      { label: "A-Tier", min: 70, max: 84, color: "#e014aa" },
      { label: "B-Tier", min: 55, max: 69, color: "#7f1e82" },
      { label: "C-Tier", min: 40, max: 54, color: "#14bbe0" },
      { label: "D-Tier", min: 25, max: 39, color: "#92e014" },
      { label: "F-Tier", min: 0, max: 24, color: "#808080" }
    ];
    const tierStats = tiers.map((tier) => {
      const count = ratingBuckets.slice(tier.min, tier.max + 1).reduce((sum, val) => sum + val, 0);
      return { ...tier, count };
    });
    const nonZeroTiers = tierStats.filter((tier) => tier.count > 0);
    if (nonZeroTiers.length === 0)
      return "";
    const maxCount = Math.max(...nonZeroTiers.map((t) => t.count), 1);
    const minCount = Math.min(...nonZeroTiers.map((t) => t.count));
    return nonZeroTiers.map((tier) => {
      const logMax = Math.log(maxCount + 1);
      const logMin = Math.log(minCount + 1);
      const logCurrent = Math.log(tier.count + 1);
      let percentage;
      if (logMax === logMin) {
        percentage = 100;
      } else {
        percentage = 5 + (logCurrent - logMin) / (logMax - logMin) * 95;
      }
      return `
      <div class="hon-bar-container" title="${tier.label} (${tier.min}-${tier.max}): ${tier.count} performers">
        <div class="hon-bar-label-wrapper">
          <span class="hon-bar-label">${tier.label}</span>
        </div>
        <div class="hon-bar-wrapper">
          <div class="hon-bar animated-bar" 
               data-target-width="${percentage}" 
               data-final-count="${tier.count}"
               data-actual-count="${tier.count}"
               style="background-color: ${tier.color}; width: 0%;">
            <span class="hon-bar-count" style="opacity: 0;">${tier.count}</span>
          </div>
        </div>
      </div>`;
    }).join("");
  }
  function initStatsTabs(dialog) {
    const buttons = dialog.querySelectorAll(".hon-stats-tab");
    const panels = dialog.querySelectorAll(".hon-stats-tab-panel");
    buttons.forEach((btn) => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const target = btn.dataset.tab;
        buttons.forEach((b) => b.classList.toggle("active", b === btn));
        panels.forEach((p) => p.classList.toggle("active", p.dataset.panel === target));
        if (target === "distribution") {
          setTimeout(() => {
            const bars = dialog.querySelectorAll(".animated-bar:not(.animated)");
            animateBars(bars);
          }, 100);
        }
      };
    });
  }
  function initStatsCollapsibles(dialog) {
    const headers = dialog.querySelectorAll(".hon-rank-group-header, .hon-bar-group-header");
    headers.forEach((header) => {
      header.onclick = (e) => {
        e.stopPropagation();
        const groupType = header.classList.contains("hon-rank-group-header") ? ".hon-rank-group-content" : ".hon-bar-group-content";
        const content = dialog.querySelector(`${groupType}[data-group="${header.dataset.group}"]`);
        const isCollapsed = content.classList.toggle("collapsed");
        header.setAttribute("aria-expanded", !isCollapsed);
        header.querySelector(".hon-group-toggle").textContent = isCollapsed ? "\u25B6" : "\u25BC";
      };
    });
  }
  function animateBars(bars) {
    bars.forEach((bar, index) => {
      bar.classList.add("animated");
      setTimeout(() => {
        const targetWidth = parseFloat(bar.dataset.targetWidth);
        const finalCount = parseInt(bar.dataset.finalCount);
        const countElement = bar.querySelector(".hon-bar-count");
        bar.style.width = `${targetWidth}%`;
        let currentCount = 0;
        const duration = 1e3;
        const steps = 30;
        const increment = finalCount / steps;
        const stepTime = duration / steps;
        const timer = setInterval(() => {
          currentCount += increment;
          if (currentCount >= finalCount) {
            currentCount = finalCount;
            clearInterval(timer);
          }
          countElement.textContent = Math.floor(currentCount);
        }, stepTime);
        setTimeout(() => {
          countElement.style.opacity = "1";
        }, 300);
      }, index * 100);
    });
  }
  var init_ui_stats = __esm({
    "ui-stats.js"() {
      init_api_client();
      init_math_utils();
      init_formatters();
    }
  });

  // ui-sidebar.js
  var ui_sidebar_exports = {};
  __export(ui_sidebar_exports, {
    attachSidebarEventListeners: () => attachSidebarEventListeners,
    createSidebar: () => createSidebar
  });
  function createSidebar() {
    const swissActive = state.currentMode === "swiss" ? "active" : "";
    const gauntletActive = state.currentMode === "gauntlet" ? "active" : "";
    const championActive = state.currentMode === "champion" ? "active" : "";
    const ALL_GENDERS2 = [
      { value: "FEMALE", label: "Female" },
      { value: "MALE", label: "Male" },
      { value: "TRANSGENDER_MALE", label: "Trans Male" },
      { value: "TRANSGENDER_FEMALE", label: "Trans Female" },
      { value: "INTERSEX", label: "Intersex" },
      { value: "NON_BINARY", label: "Non-Binary" }
    ];
    const mobileClass = isMobile() ? "mobile" : "";
    return `
    <div id="hon-sidebar" class="hon-sidebar ${mobileClass}">
      <div class="hon-sidebar-content">
        <!-- Main Performer Matchmaking Section -->
        <div class="hon-sidebar-section">
          <div class="hon-sidebar-row hon-sidebar-expandable" data-target="matchmaking-options">
            <span class="hon-sidebar-row-text">${isMobile() ? "Matchmaking" : "Performer Matchmaking"}</span>
            <span class="hon-sidebar-expand-icon">\u25B6</span>
          </div>
          <div id="matchmaking-options" class="hon-sidebar-expanded-content">
            <!-- Mode Select Subsection -->
            <div class="hon-sidebar-subsection">
              <div class="hon-sidebar-subrow hon-sidebar-expandable" data-target="mode-select-sub">
                <span class="hon-sidebar-row-text">Mode Select</span>
                <span class="hon-sidebar-expand-icon">\u25B6</span>
              </div>
              <div id="mode-select-sub" class="hon-sidebar-expanded-content">
                <div class="hon-sidebar-subrow ${swissActive}" data-mode="swiss">
                  <span class="hon-mode-icon">\u{1F94A}</span>
                  <span>Head to Head</span>
                </div>
                <div class="hon-sidebar-subrow ${gauntletActive}" data-mode="gauntlet">
                  <span class="hon-mode-icon">\u269C\uFE0F</span>
                  <span>Placement Mode</span>
                </div>
                <div class="hon-sidebar-subrow ${championActive}" data-mode="champion">
                  <span class="hon-mode-icon">\u{1F3C6}</span>
                  <span>Champion Mode</span>
                </div>
              </div>
            </div>

            <!-- Gender Select Subsection -->
            <div class="hon-sidebar-subsection">
              <div class="hon-sidebar-subrow hon-sidebar-expandable" data-target="gender-select-sub">
                <span class="hon-sidebar-row-text">Gender Select</span>
                <span class="hon-sidebar-expand-icon">\u25B6</span>
              </div>
              <div id="gender-select-sub" class="hon-sidebar-expanded-content">
                ${ALL_GENDERS2.map((gender) => `
                  <div class="hon-sidebar-subrow ${state.selectedGenders.includes(gender.value) ? "active" : ""}" data-gender="${gender.value}">
                    <span>${gender.label}</span>
                  </div>
                `).join("")}
              </div>
            </div>

            <!-- Metrics Subsection -->
            <div class="hon-sidebar-subsection">
              <div class="hon-sidebar-subrow hon-sidebar-expandable" data-target="metrics-select-sub">
                <span class="hon-sidebar-row-text">Metrics</span>
                <span class="hon-sidebar-expand-icon">\u25B6</span>
              </div>
              <div id="metrics-select-sub" class="hon-sidebar-expanded-content">
                <div class="hon-sidebar-subrow" data-action="view-stats">
                  <span>\u{1F4CA} View All Stats</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  }
  function attachSidebarEventListeners(container) {
    const expandableRows = container.querySelectorAll(".hon-sidebar-expandable");
    expandableRows.forEach((row) => {
      row.addEventListener("click", (e) => {
        e.stopPropagation();
        const targetId = row.dataset.target;
        const content = container.querySelector(`#${targetId}`);
        const icon = row.querySelector(".hon-sidebar-expand-icon");
        if (content && icon) {
          const isExpanded = content.style.display === "block";
          content.style.display = isExpanded ? "none" : "block";
          icon.textContent = isExpanded ? "\u25B6" : "\u25BC";
          row.classList.toggle("expanded", !isExpanded);
        }
      });
    });
    const modeRows = container.querySelectorAll(".hon-sidebar-subrow[data-mode]");
    modeRows.forEach((row) => {
      row.addEventListener("click", async (e) => {
        e.stopPropagation();
        const mode = row.dataset.mode;
        state.currentMode = mode;
        modeRows.forEach((r) => r.classList.remove("active"));
        row.classList.add("active");
        const selectionContainer = document.getElementById("hon-performer-selection");
        const comparisonArea = document.getElementById("hon-comparison-area");
        const actionsEl = document.querySelector(".hon-actions");
        const modal = document.getElementById("hon-modal");
        if (modal) {
          modal.classList.remove("hon-mode-champion", "hon-mode-swiss", "hon-mode-gauntlet");
          modal.classList.add(`hon-mode-${mode}`);
        }
        if (mode === "swiss") {
          if (selectionContainer)
            selectionContainer.style.display = "none";
          if (comparisonArea)
            comparisonArea.style.display = "";
          if (actionsEl)
            actionsEl.style.display = "";
          const { loadNewPair: loadNewPair2 } = await Promise.resolve().then(() => (init_battle_engine(), battle_engine_exports));
          loadNewPair2();
        } else if (mode === "gauntlet" || mode === "champion") {
          const { getPerformerIdFromUrl: getPerformerIdFromUrl2 } = await Promise.resolve().then(() => (init_ui_modal(), ui_modal_exports));
          const urlPerformerId = getPerformerIdFromUrl2();
          if (urlPerformerId) {
            const { fetchPerformerById: fetchPerformerById2 } = await Promise.resolve().then(() => (init_api_client(), api_client_exports));
            state.gauntletChampion = await fetchPerformerById2(urlPerformerId);
          }
          if (state.gauntletChampion) {
            if (selectionContainer)
              selectionContainer.style.display = "none";
            if (comparisonArea)
              comparisonArea.style.display = "";
            if (actionsEl)
              actionsEl.style.display = "";
            const { loadNewPair: loadNewPair2 } = await Promise.resolve().then(() => (init_battle_engine(), battle_engine_exports));
            loadNewPair2();
          } else {
            if (selectionContainer)
              selectionContainer.style.display = "block";
            if (comparisonArea)
              comparisonArea.style.display = "none";
            if (actionsEl)
              actionsEl.style.display = "none";
            Promise.resolve().then(() => (init_gauntlet_selection(), gauntlet_selection_exports)).then((m) => m.loadPerformerSelection());
          }
        }
      });
    });
    const genderRows = container.querySelectorAll(".hon-sidebar-subrow[data-gender]");
    genderRows.forEach((row) => {
      row.addEventListener("click", async (e) => {
        e.stopPropagation();
        const gender = row.dataset.gender;
        if (state.selectedGenders.includes(gender)) {
          state.selectedGenders = state.selectedGenders.filter((g) => g !== gender);
          row.classList.remove("active");
        } else {
          state.selectedGenders.push(gender);
          row.classList.add("active");
        }
        try {
          localStorage.setItem("hotornot_selected_genders", JSON.stringify(state.selectedGenders));
        } catch (err) {
          console.warn("[HotOrNot] Could not save gender selection to localStorage:", err);
        }
        genderRows.forEach((r) => {
          const genderValue = r.dataset.gender;
          r.classList.toggle("active", state.selectedGenders.includes(genderValue));
        });
        const { loadNewPair: loadNewPair2 } = await Promise.resolve().then(() => (init_battle_engine(), battle_engine_exports));
        loadNewPair2();
      });
    });
    const actionRows = container.querySelectorAll(".hon-sidebar-subrow[data-action]");
    actionRows.forEach((row) => {
      row.addEventListener("click", (e) => {
        e.stopPropagation();
        const action = row.dataset.action;
        if (action === "view-stats") {
          Promise.resolve().then(() => (init_ui_stats(), ui_stats_exports)).then((m) => m.openStatsModal());
        }
      });
    });
  }
  var init_ui_sidebar = __esm({
    "ui-sidebar.js"() {
      init_state();
      init_ui_dashboard();
      init_ui_swipe();
    }
  });

  // ui-modal.js
  var ui_modal_exports = {};
  __export(ui_modal_exports, {
    addFloatingButton: () => addFloatingButton,
    cleanupButtonObserver: () => cleanupButtonObserver,
    closeRankingModal: () => closeRankingModal,
    getPerformerIdFromUrl: () => getPerformerIdFromUrl,
    isOnSinglePerformerPage: () => isOnSinglePerformerPage,
    openRankingModal: () => openRankingModal,
    shouldShowButton: () => shouldShowButton
  });
  function getPerformerIdFromUrl() {
    const match = window.location.pathname.match(/^\/performers\/(\d+)(?:\/|$)/);
    return match ? match[1] : null;
  }
  function isOnSinglePerformerPage() {
    return getPerformerIdFromUrl() !== null;
  }
  function shouldShowButton() {
    const path = window.location.pathname;
    if (path === "/performers" || path === "/performers/")
      return true;
    if (path === "/images" || path === "/images/")
      return true;
    return /^\/performers\/\d+(?:\/|$)/.test(path);
  }
  function addFloatingButton() {
    const buttonId = "plugin_hon";
    const existing = document.getElementById(buttonId);
    if (existing)
      return;
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "col-4 col-sm-3 col-md-2 col-lg-auto nav-link";
    buttonContainer.innerHTML = `
    <a href="javascript:void(0);" id="${buttonId}" class="minimal p-4 p-xl-2 d-flex d-xl-inline-block flex-column justify-content-between align-items-center btn btn-primary" title="Ascension">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512" 
        class="plugin_hon__flame svg-inline--fa fa-icon nav-menu-icon d-block d-xl-inline mb-2 mb-xl-0" 
        fill="currentColor"
        aria-hidden="true" 
        focusable="false" 
        role="img"
        width="16" 
        height="16">
        <path d="M160.53 20.906c-22.075.207-39.973 9.138-54.218 23.782C89.507 61.962 78.3 87.6 74.876 115.624c-6.847 56.05 16.55 119.953 82.094 146.625l-7.032 17.313c-64.128-26.096-93.275-84.757-94.782-141-17.36 10.866-27.608 27.05-32.343 46.437-5.728 23.448-2.727 51.54 7.906 77.844 21.264 52.61 71.37 96.856 138.436 87.594l2.563 18.53c-48.795 6.74-90.183-11.576-119.907-41.03-8.152 16.216-7.504 32.264-.657 48.312 8.472 19.854 27.498 39.252 52.875 53.594 47.085 26.61 114.8 35.554 173.19 5.094-5.43-20.99-2.652-45.074 11.342-69.313 22.71-39.332 60.78-49.83 88.375-38.688 13.798 5.572 25.08 16.555 29.875 31.157 4.796 14.6 2.836 32.303-7.375 50.312-11.8 20.81-34.144 27.877-51.25 22.22-8.552-2.83-16.22-9.437-18.875-18.876-2.653-9.44-.142-20.366 7.063-31.313l15.594 10.282c-5.238 7.955-5.5 13.08-4.69 15.967.813 2.888 2.84 4.895 6.75 6.188 7.822 2.587 21.483-.152 29.158-13.688 8.188-14.44 8.82-26.183 5.843-35.25-2.976-9.066-9.846-15.954-19.092-19.687-18.493-7.467-46.14-2.273-65.188 30.72-14.024 24.29-14.373 45.376-6.72 63.436l2.814 4.375c-.197.13-.397.25-.594.376.256.497.513 1.008.78 1.5 1.945 3.565 4.218 7.007 6.814 10.28.1.13.21.25.312.377.395.49.81.984 1.22 1.468 11.508 13.657 28.358 24.378 47.312 30.283 24.26 7.557 51.596 7.146 74.843-3.75 23.248-10.897 42.935-31.972 52.69-68.375 3.323-12.406 5.08-23.776 5.5-34.313.01-.418.023-.832.03-1.25.087-5.1-.088-10.246-.563-15.406-.037-.407-.084-.814-.125-1.22-.032-.27-.06-.544-.093-.813-3.295-25.79-15.823-46.16-34.345-64.437-29.635-29.24-75.698-51.638-122.75-74.125-47.052-22.487-95.112-45.1-128.875-77.656-31.683-30.553-49.926-71.185-40.313-124.814-.72-.01-1.444-.006-2.156 0z"/>
      </svg>
      <span>Ascension</span>
    </a>
  `;
    const button = buttonContainer.querySelector(`#${buttonId}`);
    button.addEventListener("click", openRankingModal);
    const navTarget = document.querySelector(".navbar-nav");
    if (navTarget)
      navTarget.appendChild(buttonContainer);
  }
  function watchForNavigation() {
    if (buttonObserver) {
      buttonObserver.disconnect();
    }
    buttonObserver = new MutationObserver(() => {
      addFloatingButton();
    });
    buttonObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  function cleanupButtonObserver() {
    if (buttonObserver) {
      buttonObserver.disconnect();
      buttonObserver = null;
    }
  }
  function closeRankingModal() {
    const gameModal = document.getElementById("hon-modal");
    const statsModal = document.getElementById("hon-stats-modal");
    if (gameModal)
      gameModal.remove();
    if (statsModal)
      statsModal.remove();
    document.removeEventListener("keydown", handleGlobalKeys, { capture: true });
    cleanupButtonObserver();
    clearDOMCache();
  }
  function handleGlobalKeys(e) {
    const activeModal = document.getElementById("hon-modal");
    if (!activeModal) {
      document.removeEventListener("keydown", handleGlobalKeys, { capture: true });
      return;
    }
    e.stopPropagation();
    if (e.key === "Escape" || e.key === "Esc") {
      e.preventDefault();
      closeRankingModal();
      return;
    }
    if ((e.ctrlKey || e.metaKey) && e.key === "z") {
      e.preventDefault();
      Promise.resolve().then(() => (init_match_handler(), match_handler_exports)).then((m) => m.handleUndo());
      return;
    }
    const isSpace = e.key === " " || e.code === "Space";
    const hotKeys = ["ArrowLeft", "ArrowRight", ...isSpace ? [" ", "Space"] : []];
    if (hotKeys.includes(e.key) || e.code && hotKeys.includes(e.code)) {
      e.preventDefault();
      e.stopImmediatePropagation();
      if (e.key === "ArrowLeft") {
        const leftCard = activeModal.querySelector('.hon-scene-card[data-side="left"] .hon-scene-body');
        if (leftCard) {
          leftCard.click();
        }
      } else if (e.key === "ArrowRight") {
        const rightCard = activeModal.querySelector('.hon-scene-card[data-side="right"] .hon-scene-body');
        if (rightCard) {
          rightCard.click();
        }
      } else if (isSpace) {
        const skipBtn = document.getElementById("hon-skip-btn");
        if (skipBtn) {
          skipBtn.click();
        }
      }
    }
  }
  async function _buildAndOpenModal() {
    try {
      const existing = document.getElementById("hon-modal");
      if (existing)
        existing.remove();
      const modal = document.createElement("div");
      modal.id = "hon-modal";
      modal.className = "hon-modal";
      const { createSidebar: createSidebar2, attachSidebarEventListeners: attachSidebarEventListeners2 } = await Promise.resolve().then(() => (init_ui_sidebar(), ui_sidebar_exports));
      const { isMobile: isMobile2 } = await Promise.resolve().then(() => (init_ui_swipe(), ui_swipe_exports));
      const mobileCheck = isMobile2();
      const mainUI = `
	  <div id="hotornot-container" class="hon-container">
		<div class="hon-plugin-layout ${mobileCheck ? "mobile" : ""}">
		  ${createSidebar2()}
		  <div class="hon-main-plugin-content">
			<div class="hon-header">

			</div>
			<div id="hon-performer-selection" style="display: none;">
			  <div id="hon-performer-list">Loading...</div>
			</div>
			<div class="hon-content">
			  <div id="hon-comparison-area">
				<div class="hon-loading">Loading...</div>
			  </div>
			  <div class="hon-actions">
				<div class="hon-action-buttons">
				  <button id="hon-skip-btn" class="hon-action-btn" title="Skip">\u23ED\uFE0F</button>
				  <button id="hon-undo-btn" class="hon-action-btn" title="">\u21A9</button>
				</div>
			  </div>
			  <div class="hon-keyboard-hints">
				<span class="hon-hint"><strong>\u2B05\uFE0F</strong> Choose Left</span>
				<span class="hon-hint"><strong>\u27A1\uFE0F</strong> Choose Right</span>
				<span class="hon-hint"><strong>Space</strong> to Skip</span>
				<span class="hon-hint"><strong>Ctrl+Z</strong> to Undo</span>
				<span class="hon-hint"><strong>ESC</strong> to Exit</span>
			  </div>
			</div>
		  </div>
		</div>
	  </div>`;
      modal.innerHTML = `
      <div class="hon-modal-backdrop"></div>
      <div class="hon-modal-content ${mobileCheck ? "mobile" : ""}">
        <span class="hon-modal-close">\u2715</span>
        ${mainUI}
      </div>
    `;
      if (mobileCheck) {
        const style = document.createElement("style");
        style.textContent = `
        .hon-plugin-layout.mobile {
          flex-direction: column-reverse;
          height: 100%;
        }
        
        .hon-sidebar.mobile {
          order: -1;
          width: 100%;
          max-height: 40vh;
          overflow-y: auto;
          border-top: 1px solid #444;
        }
        
        .hon-sidebar.mobile .hon-sidebar-content {
          padding: 10px;
        }
        
        .hon-sidebar.mobile .hon-sidebar-section {
          margin-bottom: 5px;
        }
        
        .hon-sidebar.mobile .hon-sidebar-subsection {
          padding: 5px 0;
        }
        
        .hon-main-plugin-content {
          flex: 1;
          overflow-y: auto;
        }
        
        /* Transparent background for mobile modal */
        .hon-modal-content.mobile {
          background: transparent;
          box-shadow: none;
        }
      `;
        modal.appendChild(style);
      }
      document.body.appendChild(modal);
      const sidebarContainer = modal.querySelector("#hon-sidebar");
      if (sidebarContainer) {
        attachSidebarEventListeners2(modal);
      }
      const { attachEventListeners: attachEventListeners2 } = await Promise.resolve().then(() => (init_ui_dashboard(), ui_dashboard_exports));
      attachEventListeners2(modal);
      const closeModalBtn = modal.querySelector(".hon-modal-close");
      if (closeModalBtn) {
        closeModalBtn.onclick = () => closeRankingModal();
      }
      const modalBackdrop = modal.querySelector(".hon-modal-backdrop");
      if (modalBackdrop) {
        modalBackdrop.onclick = () => closeRankingModal();
      }
      const { loadNewPair: loadNewPair2 } = await Promise.resolve().then(() => (init_battle_engine(), battle_engine_exports));
      if (state.currentMode === "gauntlet") {
        if (state.gauntletChampion) {
          const selEl = document.getElementById("hon-performer-selection");
          const compEl = document.getElementById("hon-comparison-area");
          const actEl = document.querySelector(".hon-actions");
          if (selEl)
            selEl.style.display = "none";
          if (compEl)
            compEl.style.display = "";
          if (actEl)
            actEl.style.display = "";
          loadNewPair2();
        } else {
          window.showPerformerSelection();
        }
      } else {
        loadNewPair2();
      }
      document.addEventListener("keydown", handleGlobalKeys, { capture: true });
    } catch (err) {
      console.error("CRASH in _buildAndOpenModal:", err);
    }
  }
  async function openRankingModal() {
    try {
      const navbarToggle = document.querySelector(".navbar-toggler");
      if (navbarToggle && !navbarToggle.classList.contains("collapsed")) {
        navbarToggle.click();
      }
      state.gauntletChampion = null;
      state.battleType = "performers";
      const path = window.location.pathname;
      const performerMatch = path.match(/\/performers\/(\d+)/);
      const isSinglePerformerPage = !!performerMatch;
      if (isSinglePerformerPage) {
        const performerId = performerMatch[1];
        if (state.currentMode === "gauntlet" && state.gauntletChampion && state.gauntletChampion.id.toString() === performerId) {
          console.log("[Ascension] Resuming existing Gauntlet run.");
          _buildAndOpenModal();
          return;
        }
        state.currentMode = "gauntlet";
        const { fetchPerformerById: fetchPerformerById2 } = await Promise.resolve().then(() => (init_api_client(), api_client_exports));
        try {
          const performer = await fetchPerformerById2(performerId);
          if (performer) {
            state.gauntletChampion = performer;
            state.gauntletWins = 0;
            state.gauntletDefeated = [];
            state.gauntletFalling = false;
            state.gauntletFallingItem = null;
          }
        } catch (e) {
          console.warn("[Ascension] Could not preload performer:", e);
        }
      } else {
        state.currentMode = "swiss";
      }
      _buildAndOpenModal();
    } catch (err) {
      console.error("CRASH in openRankingModal:", err);
    }
  }
  var buttonObserver;
  var init_ui_modal = __esm({
    "ui-modal.js"() {
      init_state();
      init_battle_engine();
      init_ui_dashboard();
      init_dom_utils();
      init_ui_sidebar();
      buttonObserver = null;
      window._honCleanupButtonObserver = cleanupButtonObserver;
      watchForNavigation();
      ["popstate"].forEach(
        (event) => window.addEventListener(event, () => {
          watchForNavigation();
          addFloatingButton();
        })
      );
    }
  });

  // ui-dashboard.js
  var ui_dashboard_exports = {};
  __export(ui_dashboard_exports, {
    attachEventListeners: () => attachEventListeners,
    createMainUI: () => createMainUI,
    handleGenderToggle: () => handleGenderToggle,
    setMode: () => setMode
  });
  function createMainUI() {
    const isPerformers = state.battleType === "performers";
    const genderFilterHTML = isPerformers ? `
    <div class="hon-gender-filter">
      <div class="hon-gender-btns">
        ${ALL_GENDERS.map((g) => `
          <button
            class="hon-gender-btn ${state.selectedGenders.includes(g.value) ? "active" : ""}"
            data-gender="${g.value}"
          >
            ${g.label}
          </button>`).join("")}
      </div>
    </div>` : "";
    return `
    <div id="hotornot-container" class="hon-container">
      <div class="hon-header">
        <h1 class="hon-title">Ascension</h1>

        ${genderFilterHTML}
        ${isPerformers ? `<button id="hon-stats-btn" class="btn btn-primary">\u{1F4CA} View All Stats</button>` : ""}
      </div>
      <div id="hon-performer-selection" style="display: none;">
        <div id="hon-performer-list">Loading...</div>
      </div>
      <div class="hon-content">
        <div id="hon-comparison-area">
          <div class="hon-loading">Loading...</div>
        </div>
        <div class="hon-actions">
          <div class="hon-action-buttons">
            <button id="hon-skip-btn" class="hon-action-btn" title="Skip">\u23ED\uFE0F</button>
            <button id="hon-undo-btn" class="hon-action-btn" title="">\u21A9</button>
          </div>
        </div>
        <div class="hon-keyboard-hints">
          <span class="hon-hint"><strong>\u2B05\uFE0F</strong> Choose Left</span>
          <span class="hon-hint"><strong>\u27A1\uFE0F</strong> Choose Right</span>
          <span class="hon-hint"><strong>Space</strong> to Skip</span>
          <span class="hon-hint"><strong>Ctrl+Z</strong> to Undo</span>
          <span class="hon-hint"><strong>ESC</strong> to Exit</span>
        </div>
      </div>
    </div>`;
  }
  function attachEventListeners(parent = document) {
    const statsBtn = parent.querySelector("#hon-stats-btn");
    if (statsBtn) {
      statsBtn.addEventListener("click", () => {
        Promise.resolve().then(() => (init_ui_stats(), ui_stats_exports)).then((m) => m.openStatsModal());
      });
    }
    const performerLinks = parent.querySelectorAll(".hon-performer-link, .hon-gauntlet-select-img");
    performerLinks.forEach((link) => {
      link.addEventListener("click", (e) => e.stopPropagation());
    });
    const skipBtn = parent.querySelector("#hon-skip-btn");
    if (skipBtn) {
      const updateSkipButtonVisibility = () => {
        const isSkippableMode = state.currentMode === "swiss" || state.currentMode === "gauntlet";
        skipBtn.style.display = isSkippableMode ? "inline-block" : "none";
      };
      updateSkipButtonVisibility();
      const newSkipBtn = skipBtn.cloneNode(true);
      skipBtn.parentNode.replaceChild(newSkipBtn, skipBtn);
      newSkipBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isSkippableMode = state.currentMode === "swiss" || state.currentMode === "gauntlet";
        if (isSkippableMode) {
          const { handleSkip: handleSkip2 } = await Promise.resolve().then(() => (init_match_handler(), match_handler_exports));
          handleSkip2();
        }
      });
    }
    const undoBtn = parent.querySelector("#hon-undo-btn");
    if (undoBtn) {
      undoBtn.onclick = () => handleUndo();
      undoBtn.style.display = state.matchHistory && state.matchHistory.length > 0 ? "inline-block" : "none";
    }
    const genderButtons = parent.querySelectorAll(".hon-gender-btn");
    genderButtons.forEach((btn) => {
      btn.addEventListener("click", () => handleGenderToggle(btn.dataset.gender));
    });
    const modeButtons = parent.querySelectorAll(".hon-mode-btn");
    modeButtons.forEach((btn) => {
      btn.addEventListener("click", async () => {
        const newMode = btn.dataset.mode;
        state.currentMode = newMode;
        modeButtons.forEach((button) => {
          button.classList.toggle("active", button.dataset.mode === newMode);
        });
        const { getPerformerIdFromUrl: getPerformerIdFromUrl2 } = await Promise.resolve().then(() => (init_ui_modal(), ui_modal_exports));
        const urlPerformerId = getPerformerIdFromUrl2();
        state.gauntletChampion = null;
        state.gauntletWins = 0;
        state.gauntletDefeated = [];
        state.gauntletFalling = false;
        const modal = document.getElementById("hon-modal");
        if (modal) {
          modal.classList.remove("hon-mode-champion", "hon-mode-swiss", "hon-mode-gauntlet");
          modal.classList.add(`hon-mode-${newMode}`);
        }
        const selectionContainer = document.getElementById("hon-performer-selection");
        const comparisonArea = document.getElementById("hon-comparison-area");
        const actionsEl = document.querySelector(".hon-actions");
        if (newMode === "swiss") {
          if (selectionContainer)
            selectionContainer.style.display = "none";
          if (comparisonArea)
            comparisonArea.style.display = "";
          if (actionsEl)
            actionsEl.style.display = "";
          loadNewPair();
        } else if (newMode === "gauntlet") {
          if (urlPerformerId) {
            const { fetchPerformerById: fetchPerformerById2 } = await Promise.resolve().then(() => (init_api_client(), api_client_exports));
            state.gauntletChampion = await fetchPerformerById2(urlPerformerId);
          }
          if (state.gauntletChampion) {
            if (selectionContainer)
              selectionContainer.style.display = "none";
            if (comparisonArea)
              comparisonArea.style.display = "";
            if (actionsEl)
              actionsEl.style.display = "";
            loadNewPair();
          } else {
            if (selectionContainer)
              selectionContainer.style.display = "block";
            if (comparisonArea)
              comparisonArea.style.display = "none";
            if (actionsEl)
              actionsEl.style.display = "none";
            Promise.resolve().then(() => (init_gauntlet_selection(), gauntlet_selection_exports)).then((m) => m.loadPerformerSelection());
          }
        } else if (newMode === "champion") {
          if (urlPerformerId) {
            const { fetchPerformerById: fetchPerformerById2 } = await Promise.resolve().then(() => (init_api_client(), api_client_exports));
            state.gauntletChampion = await fetchPerformerById2(urlPerformerId);
          }
          if (state.gauntletChampion) {
            if (selectionContainer)
              selectionContainer.style.display = "none";
            if (comparisonArea)
              comparisonArea.style.display = "";
            if (actionsEl)
              actionsEl.style.display = "";
            loadNewPair();
          } else {
            if (selectionContainer)
              selectionContainer.style.display = "block";
            if (comparisonArea)
              comparisonArea.style.display = "none";
            if (actionsEl)
              actionsEl.style.display = "none";
            Promise.resolve().then(() => (init_gauntlet_selection(), gauntlet_selection_exports)).then((m) => m.loadPerformerSelection());
          }
        }
      });
    });
  }
  function handleGenderToggle(gender) {
    if (state.selectedGenders.includes(gender)) {
      state.selectedGenders = state.selectedGenders.filter((g) => g !== gender);
    } else {
      state.selectedGenders.push(gender);
    }
    try {
      localStorage.setItem("hotornot_selected_genders", JSON.stringify(state.selectedGenders));
    } catch (e) {
      console.warn("[Ascension] Could not save gender selection to localStorage:", e);
    }
    console.log(`[Ascension] Gender Filter Updated: ${state.selectedGenders.join(", ")}`);
    const genderBtns = document.querySelectorAll(`.hon-gender-btn[data-gender="${gender}"]`);
    genderBtns.forEach((btn) => {
      btn.classList.toggle("active", state.selectedGenders.includes(gender));
    });
    loadNewPair();
  }
  function setMode(mode) {
    const selEl = document.getElementById("hon-performer-selection");
    const compEl = document.getElementById("hon-comparison-area");
    if (selEl)
      selEl.style.display = "none";
    if (compEl)
      compEl.style.display = "none";
    if (mode === "gauntlet") {
      Promise.resolve().then(() => (init_gauntlet_selection(), gauntlet_selection_exports)).then((m) => m.showPerformerSelection());
    }
  }
  var init_ui_dashboard = __esm({
    "ui-dashboard.js"() {
      init_state();
      init_dom_utils();
      init_constants();
      init_battle_engine();
      init_match_handler();
    }
  });

  // ui-badge.js
  function isOnSinglePerformerPage2() {
    return window.location.pathname.includes("/performers/") && !window.location.pathname.endsWith("/performers");
  }
  function createBattleRankBadge(rank, total, rating, stats = null) {
    const badge = document.createElement("div");
    badge.className = "hon-battle-rank-badge";
    badge.id = "hon-battle-rank-badge";
    const percentile = (total - rank + 1) / total * 100;
    let tierEmoji = "\u{1F525}";
    if (percentile >= 95)
      tierEmoji = "\u{1F451}";
    else if (percentile >= 80)
      tierEmoji = "\u{1F947}";
    else if (percentile >= 60)
      tierEmoji = "\u{1F948}";
    else if (percentile >= 40)
      tierEmoji = "\u{1F949}";
    let matchStatsHTML = "";
    let winRate = "0.0";
    const hasMatchStats = stats && stats.total_matches > 0;
    if (hasMatchStats) {
      winRate = (stats.wins / (stats.total_matches || 1) * 100).toFixed(1);
      let streakDisplay = "";
      if (stats.current_streak > 0) {
        streakDisplay = `<span class="hon-streak-positive">W${stats.current_streak}</span>`;
      } else if (stats.current_streak < 0) {
        streakDisplay = `<span class="hon-streak-negative">L${Math.abs(stats.current_streak)}</span>`;
      }
      matchStatsHTML = `
      <span class="hon-match-stats">
        <span class="hon-stats-record">
          <span class="hon-wins">${stats.wins}W</span>
          <span class="hon-losses">${stats.losses}L</span>
          <span class="hon-draws">${stats.draws}D</span>
        </span>
        <span class="hon-win-rate">${winRate}%</span>
        ${streakDisplay}
      </span>
    `;
    }
    badge.innerHTML = `
    <span class="hon-rank-emoji">${tierEmoji}</span>
    <span class="hon-rank-text">Battle Rank #${rank}</span>
    <span class="hon-rank-total">of ${total}</span>
    ${matchStatsHTML}
  `;
    let tooltipText = `Battle Rank #${rank} of ${total} performers (Rating: ${rating}/100)`;
    if (hasMatchStats) {
      tooltipText += `

Match Stats:`;
      tooltipText += `
\u2022 Record: ${stats.wins}W - ${stats.losses}L - ${stats.draws}D`;
      tooltipText += `
\u2022 Win Rate: ${winRate}%`;
      tooltipText += `
\u2022 Total Matches: ${stats.total_matches}`;
      if (stats.current_streak !== 0) {
        const streakType = stats.current_streak > 0 ? "Winning" : "Losing";
        tooltipText += `
\u2022 Current Streak: ${streakType} ${Math.abs(stats.current_streak)}`;
      }
      if (stats.best_streak > 0)
        tooltipText += `
\u2022 Best Streak: ${stats.best_streak}`;
      if (stats.worst_streak < 0)
        tooltipText += `
\u2022 Worst Streak: ${Math.abs(stats.worst_streak)}`;
    }
    badge.title = tooltipText;
    return badge;
  }
  async function injectBattleRankBadge() {
    const pathParts = window.location.pathname.split("/");
    const pIndex = pathParts.indexOf("performers");
    if (pIndex === -1 || !pathParts[pIndex + 1])
      return;
    const performerId = pathParts[pIndex + 1];
    setTimeout(async () => {
      if (window._honBadgeInjectionInProgress)
        return;
      window._honBadgeInjectionInProgress = true;
      try {
        const ratingEl = document.querySelector(".quality-group");
        if (ratingEl && !document.getElementById("hon-battle-rank-badge")) {
          const rankInfo = await getPerformerBattleRank(performerId);
          if (rankInfo) {
            const badge = createBattleRankBadge(
              rankInfo.rank,
              rankInfo.total,
              rankInfo.rating,
              rankInfo.stats
            );
            ratingEl.append(badge);
          }
        }
      } finally {
        window._honBadgeInjectionInProgress = false;
      }
    }, 200);
  }
  function showPlacementScreen2(item, rank, finalRating, battleType, totalItemsCount) {
    const area = document.getElementById("hon-comparison-area");
    if (!area)
      return;
    let title, imagePath;
    if (battleType === "performers") {
      title = item.name || `Performer #${item.id}`;
      imagePath = item.image_path;
    } else if (battleType === "images") {
      title = `Image #${item.id}`;
      imagePath = item.paths?.thumbnail || null;
    } else {
      const file = item.files?.[0] || {};
      title = item.title || file.path?.split(/[/\\]/).pop().replace(/\.[^/.]+$/, "") || `Scene #${item.id}`;
      imagePath = item.paths?.screenshot || null;
    }
    area.innerHTML = `
    <div class="hon-victory-screen">
      <div class="hon-victory-crown">\u{1F4CD}</div>
      <h2 class="hon-victory-title">PLACED!</h2>
      <div class="hon-victory-scene">
        ${imagePath ? `<img class="hon-victory-image" src="${imagePath}" alt="${title}" />` : `<div class="hon-victory-image hon-no-image">No Image</div>`}
      </div>
      <h3 class="hon-victory-name">${title}</h3>
      <p class="hon-victory-stats">
        Rank <strong>#${rank}</strong> of ${totalItemsCount}<br>
        Rating: <strong>${(finalRating / 10).toFixed(1)}/10.0</strong>
      </p>
      <button id="hon-new-gauntlet" class="btn btn-primary">Start New Run</button>
    </div>
  `;
    document.getElementById("hon-gauntlet-status")?.remove();
    const actionsEl = document.querySelector(".hon-actions");
    if (actionsEl)
      actionsEl.style.display = "none";
    state.gauntletFalling = false;
    state.gauntletFallingItem = null;
    state.gauntletChampion = null;
    state.gauntletWins = 0;
    state.gauntletDefeated = [];
    area.querySelector("#hon-new-gauntlet")?.addEventListener("click", () => {
      if (actionsEl)
        actionsEl.style.display = "";
      loadNewPair();
    });
  }
  function showTierChangeNotification(card, oldRating, newRating) {
    const oldTier = getRatingTier5(oldRating);
    const newTier = getRatingTier5(newRating);
    if (oldTier === newTier)
      return;
    const tiers = ["F-Tier", "D-Tier", "C-Tier", "B-Tier", "A-Tier", "S-Tier"];
    const oldIndex = tiers.indexOf(oldTier);
    const newIndex = tiers.indexOf(newTier);
    const isUpgrade = newIndex > oldIndex;
    const isMobile2 = window.innerWidth <= 1200;
    if (isMobile2) {
      if (!card.classList.contains("active"))
        return;
    }
    const notification = document.createElement("div");
    notification.className = "hon-tier-change-notification";
    const tierColor = getTierColor4(newTier);
    notification.innerHTML = `Tier Change: ${isUpgrade ? "\u2B06\uFE0F" : "\u2B07\uFE0F"} <span style="color: ${tierColor}">${newTier}</span>`;
    if (isMobile2) {
      card.style.position = "relative";
      card.classList.add("tier-changing");
      card.appendChild(notification);
      notification.offsetHeight;
      setTimeout(() => {
        notification.classList.add("show");
      }, 10);
      setTimeout(() => {
        notification.classList.remove("show");
        notification.classList.add("exit");
        setTimeout(() => {
          if (notification.parentNode) {
            notification.remove();
            card.classList.remove("tier-changing");
          }
        }, 400);
      }, 2e3);
    } else {
      notification.style.position = "absolute";
      notification.style.top = "1px";
      notification.style.left = "50%";
      notification.style.fontSize = "1.5rem";
      notification.style.fontWeight = "bold";
      notification.style.textAlign = "center";
      notification.style.zIndex = "150";
      notification.style.pointerEvents = "none";
      notification.style.whiteSpace = "nowrap";
      notification.style.opacity = "0";
      notification.style.background = "transparent";
      notification.style.padding = "0";
      notification.style.borderRadius = "0";
      notification.style.boxShadow = "none";
      notification.style.margin = "0";
      notification.style.transition = "opacity 0.3s ease, transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      if (isUpgrade) {
        notification.style.transform = "translateX(-50%) translateY(20px)";
      } else {
        notification.style.transform = "translateX(-50%) translateY(-20px)";
      }
      card.style.position = "relative";
      card.appendChild(notification);
      setTimeout(() => {
        notification.style.opacity = "1";
        notification.style.transform = "translateX(-50%) translateY(0)";
      }, 10);
      setTimeout(() => {
        notification.style.opacity = "0";
        if (isUpgrade) {
          notification.style.transform = "translateX(-50%) translateY(-20px)";
        } else {
          notification.style.transform = "translateX(-50%) translateY(20px)";
        }
        setTimeout(() => {
          if (notification.parentNode) {
            notification.remove();
          }
        }, 300);
      }, 1700);
    }
  }
  function getRatingTier5(rating) {
    if (rating >= 85)
      return "S-Tier";
    if (rating >= 70)
      return "A-Tier";
    if (rating >= 55)
      return "B-Tier";
    if (rating >= 40)
      return "C-Tier";
    if (rating >= 25)
      return "D-Tier";
    return "F-Tier";
  }
  function getTierColor4(tier) {
    switch (tier) {
      case "S-Tier":
        return "#eb9834";
      case "A-Tier":
        return "#e014aa";
      case "B-Tier":
        return "#7f1e82";
      case "C-Tier":
        return "#14bbe0";
      case "D-Tier":
        return "#92e014";
      case "F-Tier":
        return "#808080";
      default:
        return "#000000";
    }
  }
  function showRatingAnimation(card, oldRating, newRating, change, isWinner) {
    showTierChangeNotification(card, oldRating, newRating);
    const overlay = document.createElement("div");
    overlay.className = `hon-rating-overlay ${isWinner ? "hon-rating-winner" : "hon-rating-loser"}`;
    const ratingDisplay = document.createElement("div");
    ratingDisplay.className = "hon-rating-display";
    ratingDisplay.textContent = (oldRating / 10).toFixed(1);
    const changeDisplay = document.createElement("div");
    changeDisplay.className = "hon-rating-change";
    const decimalChange = change / 10;
    changeDisplay.textContent = (decimalChange >= 0 ? "+" : "") + decimalChange.toFixed(1);
    overlay.appendChild(ratingDisplay);
    overlay.appendChild(changeDisplay);
    card.appendChild(overlay);
    const totalSteps = Math.abs(change);
    if (totalSteps > 0) {
      const step = isWinner ? 1 : -1;
      let stepCount = 0;
      let currentRating = oldRating;
      const interval = setInterval(() => {
        stepCount++;
        currentRating += step;
        ratingDisplay.textContent = (currentRating / 10).toFixed(1);
        if (stepCount >= totalSteps) {
          clearInterval(interval);
          ratingDisplay.textContent = (newRating / 10).toFixed(1);
        }
      }, 30);
    }
    setTimeout(() => overlay.remove(), 1400);
  }
  var init_ui_badge = __esm({
    "ui-badge.js"() {
      init_state();
      init_api_client();
      init_battle_engine();
    }
  });

  // ui-manager.js
  var ui_manager_exports = {};
  __export(ui_manager_exports, {
    addFloatingButton: () => addFloatingButton,
    attachEventListeners: () => attachEventListeners,
    closeRankingModal: () => closeRankingModal,
    createBattleRankBadge: () => createBattleRankBadge,
    createImageCard: () => createImageCard,
    createMainUI: () => createMainUI,
    createPerformerCard: () => createPerformerCard,
    createSceneCard: () => createSceneCard,
    createStatsModalContent: () => createStatsModalContent,
    createVictoryScreen: () => createVictoryScreen,
    generateBarGroups: () => generateBarGroups,
    generateStatTables: () => generateStatTables,
    handleGenderToggle: () => handleGenderToggle,
    injectBattleRankBadge: () => injectBattleRankBadge,
    isOnSinglePerformerPage: () => isOnSinglePerformerPage2,
    openRankingModal: () => openRankingModal,
    openStatsModal: () => openStatsModal,
    renderCard: () => renderCard,
    setMode: () => setMode,
    shouldShowButton: () => shouldShowButton,
    showPlacementScreen: () => showPlacementScreen2,
    showRatingAnimation: () => showRatingAnimation,
    showTierChangeNotification: () => showTierChangeNotification
  });
  var init_ui_manager = __esm({
    "ui-manager.js"() {
      init_ui_cards();
      init_ui_dashboard();
      init_ui_modal();
      init_ui_stats();
      init_ui_badge();
    }
  });

  // main.js
  init_state();
  init_ui_manager();
  init_ui_modal();
  init_gauntlet_selection();
  init_match_handler();
  init_api_client();
  init_parsers();
  window.openRankingModal = openRankingModal;
  window.openStatsModal = openStatsModal;
  window.closeRankingModal = closeRankingModal;
  window.handleGenderToggle = handleGenderToggle;
  window.showPerformerSelection = showPerformerSelection;
  window.handleChooseItem = handleChooseItem;
  window.handleGenderToggle = handleGenderToggle;
  var lastPath = "";
  function syncGendersFromPerformersPage() {
  }
  (function initializeSelectedGendersFromLocalStorage() {
    try {
      const saved = localStorage.getItem("hotornot_selected_genders");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          state.selectedGenders = parsed;
        }
      }
    } catch (e) {
      console.warn("[Ascension] Failed to load selected genders from localStorage:", e);
    }
  })();
  var observer = null;
  function main() {
    if (window.honLoaded)
      return;
    window.honLoaded = true;
    console.log("[Ascension] Global Scope Initialized");
    if (!observer) {
      observer = new MutationObserver(() => {
        const currentPath = window.location.pathname;
        const existingBtn = document.getElementById("hon-floating-btn");
        if (existingBtn) {
          if (!shouldShowButton()) {
            existingBtn.remove();
          }
        } else if (shouldShowButton()) {
          addFloatingButton();
        }
        if (isOnSinglePerformerPage2()) {
          const badgeExists = !!document.getElementById("hon-battle-rank-badge");
          if (currentPath !== lastPath || !badgeExists) {
            lastPath = currentPath;
            setTimeout(() => {
              if (!document.getElementById("hon-battle-rank-badge")) {
                injectBattleRankBadge();
              }
            }, 300);
          }
        }
        const container = document.getElementById("stash-main-container");
        if (container && !document.getElementById("hotornot-container")) {
          container.innerHTML = createMainUI();
          attachEventListeners(container);
        }
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
    if (isOnSinglePerformerPage2()) {
      setTimeout(() => injectBattleRankBadge(), 1e3);
    }
    syncGendersFromPerformersPage();
    if (typeof PluginApi !== "undefined" && PluginApi.Event?.addEventListener) {
      PluginApi.Event.addEventListener("stash:location", (e) => {
        const path = e.detail?.data?.location?.pathname || "";
        if (path.includes("/performers")) {
          state.cachedUrlFilter = getUrlPerformerFilter();
        }
        const isListPage = path === "/performers" || path === "/performers/";
        if (isListPage) {
          setTimeout(syncGendersFromPerformersPage, 100);
        }
      });
    }
  }
  function cleanup() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    try {
      if (typeof window._honCleanupButtonObserver === "function") {
        window._honCleanupButtonObserver();
      }
    } catch (e) {
      console.debug("[Ascension] Button observer cleanup not available");
    }
  }
  main();
})();
