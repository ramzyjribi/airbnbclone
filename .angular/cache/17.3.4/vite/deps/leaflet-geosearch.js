import {
  require_leaflet_src
} from "./chunk-V54HQVUX.js";
import {
  __toESM
} from "./chunk-ASLTLD6L.js";

// node_modules/leaflet-geosearch/dist/geosearch.module.js
var t = __toESM(require_leaflet_src());
function e() {
  return e = Object.assign ? Object.assign.bind() : function(t3) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r2 = arguments[e2];
      for (var n2 in r2)
        Object.prototype.hasOwnProperty.call(r2, n2) && (t3[n2] = r2[n2]);
    }
    return t3;
  }, e.apply(this, arguments);
}
function r(t3, e2) {
  t3.prototype = Object.create(e2.prototype), t3.prototype.constructor = t3, n(t3, e2);
}
function n(t3, e2) {
  return n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e3) {
    return t4.__proto__ = e3, t4;
  }, n(t3, e2);
}
function o() {
  if ("undefined" == typeof Reflect || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if ("function" == typeof Proxy)
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch (t3) {
    return false;
  }
}
function i(t3, e2, r2) {
  return i = o() ? Reflect.construct.bind() : function(t4, e3, r3) {
    var o2 = [null];
    o2.push.apply(o2, e3);
    var i2 = new (Function.bind.apply(t4, o2))();
    return r3 && n(i2, r3.prototype), i2;
  }, i.apply(null, arguments);
}
function s(t3, e2, r2, n2) {
  void 0 === e2 && (e2 = ""), void 0 === n2 && (n2 = {});
  var o2 = document.createElement(t3);
  return e2 && (o2.className = e2), Object.keys(n2).forEach(function(t4) {
    if ("function" == typeof n2[t4]) {
      var e3 = 0 === t4.indexOf("on") ? t4.substr(2).toLowerCase() : t4;
      o2.addEventListener(e3, n2[t4]);
    } else
      "html" === t4 ? o2.innerHTML = n2[t4] : "text" === t4 ? o2.innerText = n2[t4] : o2.setAttribute(t4, n2[t4]);
  }), r2 && r2.appendChild(o2), o2;
}
function a(t3) {
  t3.preventDefault(), t3.stopPropagation();
}
var l = function() {
  return [].slice.call(arguments).filter(Boolean).join(" ").trim();
};
function c(t3, e2) {
  t3 && t3.classList && (Array.isArray(e2) ? e2 : [e2]).forEach(function(e3) {
    t3.classList.contains(e3) || t3.classList.add(e3);
  });
}
function u(t3, e2) {
  t3 && t3.classList && (Array.isArray(e2) ? e2 : [e2]).forEach(function(e3) {
    t3.classList.contains(e3) && t3.classList.remove(e3);
  });
}
var h;
var p = 13;
var d = 40;
var f = 38;
var v = [p, 27, d, f, 37, 39];
var m = function() {
  function t3(t4) {
    var e3 = this, r2 = t4.handleSubmit, n2 = t4.searchLabel, o2 = t4.classNames, i2 = void 0 === o2 ? {} : o2;
    this.container = void 0, this.form = void 0, this.input = void 0, this.handleSubmit = void 0, this.hasError = false, this.container = s("div", l("geosearch", i2.container)), this.form = s("form", ["", i2.form].join(" "), this.container, { autocomplete: "none", onClick: a, onDblClick: a, touchStart: a, touchEnd: a }), this.input = s("input", ["glass", i2.input].join(" "), this.form, { type: "text", placeholder: n2 || "search", onInput: this.onInput, onKeyUp: function(t5) {
      return e3.onKeyUp(t5);
    }, onKeyPress: function(t5) {
      return e3.onKeyPress(t5);
    }, onFocus: this.onFocus, onBlur: this.onBlur, onClick: function() {
      e3.input.focus(), e3.input.dispatchEvent(new Event("focus"));
    } }), this.handleSubmit = r2;
  }
  var e2 = t3.prototype;
  return e2.onFocus = function() {
    c(this.form, "active");
  }, e2.onBlur = function() {
    u(this.form, "active");
  }, e2.onSubmit = function(t4) {
    try {
      var e3 = this;
      return a(t4), u(r2 = e3.container, "error"), c(r2, "pending"), Promise.resolve(e3.handleSubmit({ query: e3.input.value })).then(function() {
        u(e3.container, "pending");
      });
    } catch (t5) {
      return Promise.reject(t5);
    }
    var r2;
  }, e2.onInput = function() {
    this.hasError && (u(this.container, "error"), this.hasError = false);
  }, e2.onKeyUp = function(t4) {
    27 === t4.keyCode && (u(this.container, ["pending", "active"]), this.input.value = "", document.body.focus(), document.body.blur());
  }, e2.onKeyPress = function(t4) {
    t4.keyCode === p && this.onSubmit(t4);
  }, e2.setQuery = function(t4) {
    this.input.value = t4;
  }, t3;
}();
var g = function() {
  function t3(t4) {
    var e3 = this, r2 = t4.handleClick, n2 = t4.classNames, o2 = void 0 === n2 ? {} : n2, i2 = t4.notFoundMessage;
    this.handleClick = void 0, this.selected = -1, this.results = [], this.container = void 0, this.resultItem = void 0, this.notFoundMessage = void 0, this.onClick = function(t5) {
      if ("function" == typeof e3.handleClick) {
        var r3 = t5.target;
        if (r3 && e3.container.contains(r3) && r3.hasAttribute("data-key")) {
          var n3 = Number(r3.getAttribute("data-key"));
          e3.handleClick({ result: e3.results[n3] });
        }
      }
    }, this.handleClick = r2, this.notFoundMessage = i2 ? s("div", l(o2.notfound), void 0, { html: i2 }) : void 0, this.container = s("div", l("results", o2.resultlist)), this.container.addEventListener("click", this.onClick, true), this.resultItem = s("div", l(o2.item));
  }
  var e2 = t3.prototype;
  return e2.render = function(t4, e3) {
    var r2 = this;
    void 0 === t4 && (t4 = []), this.clear(), t4.forEach(function(t5, n2) {
      var o2 = r2.resultItem.cloneNode(true);
      o2.setAttribute("data-key", "" + n2), o2.innerHTML = e3({ result: t5 }), r2.container.appendChild(o2);
    }), t4.length > 0 ? (c(this.container.parentElement, "open"), c(this.container, "active")) : this.notFoundMessage && (this.container.appendChild(this.notFoundMessage), c(this.container.parentElement, "open")), this.results = t4;
  }, e2.select = function(t4) {
    return Array.from(this.container.children).forEach(function(e3, r2) {
      return r2 === t4 ? c(e3, "active") : u(e3, "active");
    }), this.selected = t4, this.results[t4];
  }, e2.count = function() {
    return this.results ? this.results.length : 0;
  }, e2.clear = function() {
    for (this.selected = -1; this.container.lastChild; )
      this.container.removeChild(this.container.lastChild);
    u(this.container.parentElement, "open"), u(this.container, "active");
  }, t3;
}();
var y = { position: "topleft", style: "button", showMarker: true, showPopup: false, popupFormat: function(t3) {
  return "" + t3.result.label;
}, resultFormat: function(t3) {
  return "" + t3.result.label;
}, marker: { icon: t && t.Icon ? new t.Icon.Default() : void 0, draggable: false }, maxMarkers: 1, maxSuggestions: 5, retainZoomLevel: false, animateZoom: true, searchLabel: "Enter address", clearSearchLabel: "Clear search", notFoundMessage: "", messageHideDelay: 3e3, zoomLevel: 18, classNames: { container: "leaflet-bar leaflet-control leaflet-control-geosearch", button: "leaflet-bar-part leaflet-bar-part-single", resetButton: "reset", msgbox: "leaflet-bar message", form: "", input: "", resultlist: "", item: "", notfound: "leaflet-bar-notfound" }, autoComplete: true, autoCompleteDelay: 250, autoClose: false, keepResult: false, updateMap: true };
var b = "Leaflet must be loaded before instantiating the GeoSearch control";
var E = { options: e({}, y), classNames: e({}, y.classNames), initialize: function(r2) {
  var n2, o2, i2, a2, l2 = this;
  if (!t)
    throw new Error(b);
  if (!r2.provider)
    throw new Error("Provider is missing from options");
  this.options = e({}, y, r2), this.classNames = e({}, this.classNames, r2.classNames), this.markers = new t.FeatureGroup(), this.classNames.container += " leaflet-geosearch-" + this.options.style, this.searchElement = new m({ searchLabel: this.options.searchLabel, classNames: { container: this.classNames.container, form: this.classNames.form, input: this.classNames.input }, handleSubmit: function(t3) {
    return l2.onSubmit(t3);
  } }), this.button = s("a", this.classNames.button, this.searchElement.container, { title: this.options.searchLabel, href: "#", onClick: function(t3) {
    return l2.onClick(t3);
  } }), t.DomEvent.disableClickPropagation(this.button), this.resetButton = s("button", this.classNames.resetButton, this.searchElement.form, { text: "×", "aria-label": this.options.clearSearchLabel, onClick: function() {
    "" === l2.searchElement.input.value ? l2.close() : l2.clearResults(null, true);
  } }), t.DomEvent.disableClickPropagation(this.resetButton), this.options.autoComplete && (this.resultList = new g({ handleClick: function(t3) {
    var e2 = t3.result;
    l2.searchElement.input.value = e2.label, l2.onSubmit({ query: e2.label, data: e2 });
  }, classNames: { resultlist: this.classNames.resultlist, item: this.classNames.item, notfound: this.classNames.notfound }, notFoundMessage: this.options.notFoundMessage }), this.searchElement.form.appendChild(this.resultList.container), this.searchElement.input.addEventListener("keyup", (n2 = function(t3) {
    return l2.autoSearch(t3);
  }, void 0 === (o2 = this.options.autoCompleteDelay) && (o2 = 250), void 0 === i2 && (i2 = false), function() {
    var t3 = [].slice.call(arguments);
    a2 && clearTimeout(a2), a2 = setTimeout(function() {
      a2 = null, i2 || n2.apply(void 0, t3);
    }, o2), i2 && !a2 && n2.apply(void 0, t3);
  }), true), this.searchElement.input.addEventListener("keydown", function(t3) {
    return l2.selectResult(t3);
  }, true), this.searchElement.input.addEventListener("keydown", function(t3) {
    return l2.clearResults(t3, true);
  }, true)), this.searchElement.form.addEventListener("click", function(t3) {
    t3.preventDefault();
  }, false);
}, onAdd: function(e2) {
  var r2 = this.options, n2 = r2.showMarker, o2 = r2.style;
  if (this.map = e2, n2 && this.markers.addTo(e2), "bar" === o2) {
    var i2 = e2.getContainer().querySelector(".leaflet-control-container");
    this.container = s("div", "leaflet-control-geosearch leaflet-geosearch-bar"), this.container.appendChild(this.searchElement.form), i2.appendChild(this.container);
  }
  return t.DomEvent.disableClickPropagation(this.searchElement.form), this.searchElement.container;
}, onRemove: function() {
  var t3;
  return null == (t3 = this.container) || t3.remove(), this;
}, open: function() {
  var t3 = this.searchElement, e2 = t3.input;
  c(t3.container, "active"), e2.focus();
}, close: function() {
  u(this.searchElement.container, "active"), this.clearResults();
}, onClick: function(t3) {
  t3.preventDefault(), t3.stopPropagation(), this.searchElement.container.classList.contains("active") ? this.close() : this.open();
}, selectResult: function(t3) {
  if (-1 !== [p, d, f].indexOf(t3.keyCode))
    if (t3.preventDefault(), t3.keyCode !== p) {
      var e2 = this.resultList.count() - 1;
      if (!(e2 < 0)) {
        var r2 = this.resultList.selected, n2 = t3.keyCode === d ? r2 + 1 : r2 - 1, o2 = this.resultList.select(n2 < 0 ? e2 : n2 > e2 ? 0 : n2);
        this.searchElement.input.value = o2.label;
      }
    } else {
      var i2 = this.resultList.select(this.resultList.selected);
      this.onSubmit({ query: this.searchElement.input.value, data: i2 });
    }
}, clearResults: function(t3, e2) {
  if (void 0 === e2 && (e2 = false), !t3 || 27 === t3.keyCode) {
    var r2 = this.options, n2 = r2.autoComplete;
    !e2 && r2.keepResult || (this.searchElement.input.value = "", this.markers.clearLayers()), n2 && this.resultList.clear();
  }
}, autoSearch: function(t3) {
  try {
    var e2 = this;
    if (v.indexOf(t3.keyCode) > -1)
      return Promise.resolve();
    var r2 = t3.target.value, n2 = e2.options.provider, o2 = function() {
      if (r2.length)
        return Promise.resolve(n2.search({ query: r2 })).then(function(t4) {
          t4 = t4.slice(0, e2.options.maxSuggestions), e2.resultList.render(t4, e2.options.resultFormat);
        });
      e2.resultList.clear();
    }();
    return Promise.resolve(o2 && o2.then ? o2.then(function() {
    }) : void 0);
  } catch (t4) {
    return Promise.reject(t4);
  }
}, onSubmit: function(t3) {
  try {
    var e2 = this;
    return e2.resultList.clear(), Promise.resolve(e2.options.provider.search(t3)).then(function(r2) {
      r2 && r2.length > 0 && e2.showResult(r2[0], t3);
    });
  } catch (t4) {
    return Promise.reject(t4);
  }
}, showResult: function(t3, e2) {
  var r2 = this.options, n2 = r2.autoClose, o2 = r2.updateMap, i2 = this.markers.getLayers();
  i2.length >= this.options.maxMarkers && this.markers.removeLayer(i2[0]);
  var s2 = this.addMarker(t3, e2);
  o2 && this.centerMap(t3), this.map.fireEvent("geosearch/showlocation", { location: t3, marker: s2 }), n2 && this.closeResults();
}, closeResults: function() {
  var t3 = this.searchElement.container;
  t3.classList.contains("active") && u(t3, "active"), this.clearResults();
}, addMarker: function(e2, r2) {
  var n2 = this, o2 = this.options, i2 = o2.marker, s2 = o2.showPopup, a2 = o2.popupFormat, l2 = new t.Marker([e2.y, e2.x], i2), c2 = e2.label;
  return "function" == typeof a2 && (c2 = a2({ query: r2, result: e2 })), l2.bindPopup(c2), this.markers.addLayer(l2), s2 && l2.openPopup(), i2.draggable && l2.on("dragend", function(t3) {
    n2.map.fireEvent("geosearch/marker/dragend", { location: l2.getLatLng(), event: t3 });
  }), l2;
}, centerMap: function(e2) {
  var r2 = this.options, n2 = r2.retainZoomLevel, o2 = r2.animateZoom, i2 = e2.bounds ? new t.LatLngBounds(e2.bounds) : new t.LatLng(e2.y, e2.x).toBounds(10), s2 = i2.isValid() ? i2 : this.markers.getBounds();
  !n2 && i2.isValid() && !e2.bounds || n2 || !i2.isValid() ? this.map.setView(s2.getCenter(), this.getZoom(), { animate: o2 }) : this.map.fitBounds(s2, { animate: o2 });
}, getZoom: function() {
  var t3 = this.options, e2 = t3.zoomLevel;
  return t3.retainZoomLevel ? this.map.getZoom() : e2;
} };
function w() {
  if (!t)
    throw new Error(b);
  var e2 = t.Control.extend(E);
  return i(e2, [].slice.call(arguments));
}
!function(t3) {
  t3[t3.SEARCH = 0] = "SEARCH", t3[t3.REVERSE = 1] = "REVERSE";
}(h || (h = {}));
var x = function() {
  function t3(t4) {
    void 0 === t4 && (t4 = {}), this.options = void 0, this.options = t4;
  }
  var r2 = t3.prototype;
  return r2.getParamString = function(t4) {
    void 0 === t4 && (t4 = {});
    var r3 = e({}, this.options.params, t4);
    return Object.keys(r3).map(function(t5) {
      return encodeURIComponent(t5) + "=" + encodeURIComponent(r3[t5]);
    }).join("&");
  }, r2.getUrl = function(t4, e2) {
    return t4 + "?" + this.getParamString(e2);
  }, r2.search = function(t4) {
    try {
      var e2 = this, r3 = e2.endpoint({ query: t4.query, type: h.SEARCH });
      return Promise.resolve(fetch(r3)).then(function(t5) {
        return Promise.resolve(t5.json()).then(function(t6) {
          return e2.parse({ data: t6 });
        });
      });
    } catch (t5) {
      return Promise.reject(t5);
    }
  }, t3;
}();
var L = function(t3) {
  function n2() {
    return t3.apply(this, arguments) || this;
  }
  r(n2, t3);
  var o2 = n2.prototype;
  return o2.endpoint = function() {
    return "https://places-dsn.algolia.net/1/places/query";
  }, o2.findBestMatchLevelIndex = function(t4) {
    var e2 = t4.find(function(t5) {
      return "full" === t5.matchLevel;
    }) || t4.find(function(t5) {
      return "partial" === t5.matchLevel;
    });
    return e2 ? t4.indexOf(e2) : 0;
  }, o2.getLabel = function(t4) {
    var e2, r2, n3, o3;
    return [null == (e2 = t4.locale_names) ? void 0 : e2.default[this.findBestMatchLevelIndex(t4._highlightResult.locale_names.default)], null == (r2 = t4.city) ? void 0 : r2.default[this.findBestMatchLevelIndex(t4._highlightResult.city.default)], t4.administrative[this.findBestMatchLevelIndex(t4._highlightResult.administrative)], null == (n3 = t4.postcode) ? void 0 : n3[this.findBestMatchLevelIndex(t4._highlightResult.postcode)], null == (o3 = t4.country) ? void 0 : o3.default].filter(Boolean).join(", ");
  }, o2.parse = function(t4) {
    var e2 = this;
    return t4.data.hits.map(function(t5) {
      return { x: t5._geoloc.lng, y: t5._geoloc.lat, label: e2.getLabel(t5), bounds: null, raw: t5 };
    });
  }, o2.search = function(t4) {
    var r2 = t4.query;
    try {
      var n3 = this, o3 = "string" == typeof r2 ? { query: r2 } : r2;
      return Promise.resolve(fetch(n3.endpoint(), { method: "POST", body: JSON.stringify(e({}, n3.options.params, o3)) })).then(function(t5) {
        return Promise.resolve(t5.json()).then(function(t6) {
          return n3.parse({ data: t6 });
        });
      });
    } catch (t5) {
      return Promise.reject(t5);
    }
  }, n2;
}(x);
var k = function(t3) {
  function e2() {
    for (var e3, r2 = arguments.length, n3 = new Array(r2), o2 = 0; o2 < r2; o2++)
      n3[o2] = arguments[o2];
    return (e3 = t3.call.apply(t3, [this].concat(n3)) || this).searchUrl = "https://dev.virtualearth.net/REST/v1/Locations", e3;
  }
  r(e2, t3);
  var n2 = e2.prototype;
  return n2.endpoint = function(t4) {
    var e3 = t4.query, r2 = "string" == typeof e3 ? { q: e3 } : e3;
    return r2.jsonp = t4.jsonp, this.getUrl(this.searchUrl, r2);
  }, n2.parse = function(t4) {
    return 0 === t4.data.resourceSets.length ? [] : t4.data.resourceSets[0].resources.map(function(t5) {
      return { x: t5.point.coordinates[1], y: t5.point.coordinates[0], label: t5.address.formattedAddress, bounds: [[t5.bbox[0], t5.bbox[1]], [t5.bbox[2], t5.bbox[3]]], raw: t5 };
    });
  }, n2.search = function(t4) {
    var e3, r2, n3, o2 = t4.query;
    try {
      var i2 = this, a2 = "BING_JSONP_CB_" + Date.now();
      return Promise.resolve((e3 = i2.endpoint({ query: o2, jsonp: a2 }), r2 = a2, n3 = s("script", null, document.body), n3.setAttribute("type", "text/javascript"), new Promise(function(t5) {
        window[r2] = function(e4) {
          n3.remove(), delete window[r2], t5(e4);
        }, n3.setAttribute("src", e3);
      }))).then(function(t5) {
        return i2.parse({ data: t5 });
      });
    } catch (t5) {
      return Promise.reject(t5);
    }
  }, e2;
}(x);
var U = function(t3) {
  function e2() {
    for (var e3, r2 = arguments.length, n3 = new Array(r2), o2 = 0; o2 < r2; o2++)
      n3[o2] = arguments[o2];
    return (e3 = t3.call.apply(t3, [this].concat(n3)) || this).searchUrl = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/find", e3;
  }
  r(e2, t3);
  var n2 = e2.prototype;
  return n2.endpoint = function(t4) {
    var e3 = t4.query, r2 = "string" == typeof e3 ? { text: e3 } : e3;
    return r2.f = "json", this.getUrl(this.searchUrl, r2);
  }, n2.parse = function(t4) {
    return t4.data.locations.map(function(t5) {
      return { x: t5.feature.geometry.x, y: t5.feature.geometry.y, label: t5.name, bounds: [[t5.extent.ymin, t5.extent.xmin], [t5.extent.ymax, t5.extent.xmax]], raw: t5 };
    });
  }, e2;
}(x);
var S = function(t3) {
  function e2(e3) {
    var r2;
    return void 0 === e3 && (e3 = {}), (r2 = t3.call(this, e3) || this).host = void 0, r2.host = e3.host || "http://localhost:4000", r2;
  }
  r(e2, t3);
  var n2 = e2.prototype;
  return n2.endpoint = function(t4) {
    var e3 = t4.query;
    return t4.type === h.REVERSE ? this.getUrl(this.host + "/v1/reverse", "string" == typeof e3 ? {} : e3) : this.getUrl(this.host + "/v1/autocomplete", "string" == typeof e3 ? { text: e3 } : e3);
  }, n2.parse = function(t4) {
    return t4.data.features.map(function(t5) {
      var e3 = { x: t5.geometry.coordinates[0], y: t5.geometry.coordinates[1], label: t5.properties.label, bounds: null, raw: t5 };
      return Array.isArray(t5.bbox) && 4 === t5.bbox.length && (e3.bounds = [[t5.bbox[1], t5.bbox[0]], [t5.bbox[3], t5.bbox[2]]]), e3;
    });
  }, e2;
}(x);
var C = function(t3) {
  function e2(e3) {
    return void 0 === e3 && (e3 = {}), e3.host = "https://api.geocode.earth", t3.call(this, e3) || this;
  }
  return r(e2, t3), e2;
}(S);
function P(t3) {
  return t3 && t3.__esModule && Object.prototype.hasOwnProperty.call(t3, "default") ? t3.default : t3;
}
var R;
var I = P(function t2(e2, r2) {
  if (e2 === r2)
    return true;
  if (e2 && r2 && "object" == typeof e2 && "object" == typeof r2) {
    if (e2.constructor !== r2.constructor)
      return false;
    var n2, o2, i2;
    if (Array.isArray(e2)) {
      if ((n2 = e2.length) != r2.length)
        return false;
      for (o2 = n2; 0 != o2--; )
        if (!t2(e2[o2], r2[o2]))
          return false;
      return true;
    }
    if (e2.constructor === RegExp)
      return e2.source === r2.source && e2.flags === r2.flags;
    if (e2.valueOf !== Object.prototype.valueOf)
      return e2.valueOf() === r2.valueOf();
    if (e2.toString !== Object.prototype.toString)
      return e2.toString() === r2.toString();
    if ((n2 = (i2 = Object.keys(e2)).length) !== Object.keys(r2).length)
      return false;
    for (o2 = n2; 0 != o2--; )
      if (!Object.prototype.hasOwnProperty.call(r2, i2[o2]))
        return false;
    for (o2 = n2; 0 != o2--; ) {
      var s2 = i2[o2];
      if (!t2(e2[s2], r2[s2]))
        return false;
    }
    return true;
  }
  return e2 != e2 && r2 != r2;
});
!function(t3) {
  t3[t3.INITIALIZED = 0] = "INITIALIZED", t3[t3.LOADING = 1] = "LOADING", t3[t3.SUCCESS = 2] = "SUCCESS", t3[t3.FAILURE = 3] = "FAILURE";
}(R || (R = {}));
var j = class _j {
  constructor({ apiKey: t3, authReferrerPolicy: e2, channel: r2, client: n2, id: o2 = "__googleMapsScriptId", language: i2, libraries: s2 = [], mapIds: a2, nonce: l2, region: c2, retries: u2 = 3, url: h2 = "https://maps.googleapis.com/maps/api/js", version: p2 }) {
    if (this.callbacks = [], this.done = false, this.loading = false, this.errors = [], this.apiKey = t3, this.authReferrerPolicy = e2, this.channel = r2, this.client = n2, this.id = o2 || "__googleMapsScriptId", this.language = i2, this.libraries = s2, this.mapIds = a2, this.nonce = l2, this.region = c2, this.retries = u2, this.url = h2, this.version = p2, _j.instance) {
      if (!I(this.options, _j.instance.options))
        throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(_j.instance.options)}`);
      return _j.instance;
    }
    _j.instance = this;
  }
  get options() {
    return { version: this.version, apiKey: this.apiKey, channel: this.channel, client: this.client, id: this.id, libraries: this.libraries, language: this.language, region: this.region, mapIds: this.mapIds, nonce: this.nonce, url: this.url, authReferrerPolicy: this.authReferrerPolicy };
  }
  get status() {
    return this.errors.length ? R.FAILURE : this.done ? R.SUCCESS : this.loading ? R.LOADING : R.INITIALIZED;
  }
  get failed() {
    return this.done && !this.loading && this.errors.length >= this.retries + 1;
  }
  createUrl() {
    let t3 = this.url;
    return t3 += "?callback=__googleMapsCallback&loading=async", this.apiKey && (t3 += `&key=${this.apiKey}`), this.channel && (t3 += `&channel=${this.channel}`), this.client && (t3 += `&client=${this.client}`), this.libraries.length > 0 && (t3 += `&libraries=${this.libraries.join(",")}`), this.language && (t3 += `&language=${this.language}`), this.region && (t3 += `&region=${this.region}`), this.version && (t3 += `&v=${this.version}`), this.mapIds && (t3 += `&map_ids=${this.mapIds.join(",")}`), this.authReferrerPolicy && (t3 += `&auth_referrer_policy=${this.authReferrerPolicy}`), t3;
  }
  deleteScript() {
    const t3 = document.getElementById(this.id);
    t3 && t3.remove();
  }
  load() {
    return this.loadPromise();
  }
  loadPromise() {
    return new Promise((t3, e2) => {
      this.loadCallback((r2) => {
        r2 ? e2(r2.error) : t3(window.google);
      });
    });
  }
  importLibrary(t3) {
    return this.execute(), google.maps.importLibrary(t3);
  }
  loadCallback(t3) {
    this.callbacks.push(t3), this.execute();
  }
  setScript() {
    var t3, e2;
    if (document.getElementById(this.id))
      return void this.callback();
    const r2 = { key: this.apiKey, channel: this.channel, client: this.client, libraries: this.libraries.length && this.libraries, v: this.version, mapIds: this.mapIds, language: this.language, region: this.region, authReferrerPolicy: this.authReferrerPolicy };
    Object.keys(r2).forEach((t4) => !r2[t4] && delete r2[t4]), (null === (e2 = null === (t3 = null === window || void 0 === window ? void 0 : window.google) || void 0 === t3 ? void 0 : t3.maps) || void 0 === e2 ? void 0 : e2.importLibrary) || ((t4) => {
      let e3, r3, n3, o2 = "The Google Maps JavaScript API", i2 = "google", s2 = "importLibrary", a2 = "__ib__", l2 = document, c2 = window;
      c2 = c2[i2] || (c2[i2] = {});
      const u2 = c2.maps || (c2.maps = {}), h2 = /* @__PURE__ */ new Set(), p2 = new URLSearchParams(), d2 = () => e3 || (e3 = new Promise((s3, c3) => {
        return d3 = this, v2 = function* () {
          var d4;
          for (n3 in yield r3 = l2.createElement("script"), r3.id = this.id, p2.set("libraries", [...h2] + ""), t4)
            p2.set(n3.replace(/[A-Z]/g, (t5) => "_" + t5[0].toLowerCase()), t4[n3]);
          p2.set("callback", i2 + ".maps." + a2), r3.src = this.url + "?" + p2, u2[a2] = s3, r3.onerror = () => e3 = c3(Error(o2 + " could not load.")), r3.nonce = this.nonce || (null === (d4 = l2.querySelector("script[nonce]")) || void 0 === d4 ? void 0 : d4.nonce) || "", l2.head.append(r3);
        }, new ((f2 = void 0) || (f2 = Promise))(function(t5, e4) {
          function r4(t6) {
            try {
              o3(v2.next(t6));
            } catch (t7) {
              e4(t7);
            }
          }
          function n4(t6) {
            try {
              o3(v2.throw(t6));
            } catch (t7) {
              e4(t7);
            }
          }
          function o3(e5) {
            var o4;
            e5.done ? t5(e5.value) : (o4 = e5.value, o4 instanceof f2 ? o4 : new f2(function(t6) {
              t6(o4);
            })).then(r4, n4);
          }
          o3((v2 = v2.apply(d3, [])).next());
        });
        var d3, f2, v2;
      }));
      u2[s2] ? console.warn(o2 + " only loads once. Ignoring:", t4) : u2[s2] = (t5, ...e4) => h2.add(t5) && d2().then(() => u2[s2](t5, ...e4));
    })(r2);
    const n2 = this.libraries.map((t4) => this.importLibrary(t4));
    n2.length || n2.push(this.importLibrary("core")), Promise.all(n2).then(() => this.callback(), (t4) => {
      const e3 = new ErrorEvent("error", { error: t4 });
      this.loadErrorCallback(e3);
    });
  }
  reset() {
    this.deleteScript(), this.done = false, this.loading = false, this.errors = [], this.onerrorEvent = null;
  }
  resetIfRetryingFailed() {
    this.failed && this.reset();
  }
  loadErrorCallback(t3) {
    if (this.errors.push(t3), this.errors.length <= this.retries) {
      const t4 = this.errors.length * Math.pow(2, this.errors.length);
      console.error(`Failed to load Google Maps script, retrying in ${t4} ms.`), setTimeout(() => {
        this.deleteScript(), this.setScript();
      }, t4);
    } else
      this.onerrorEvent = t3, this.callback();
  }
  callback() {
    this.done = true, this.loading = false, this.callbacks.forEach((t3) => {
      t3(this.onerrorEvent);
    }), this.callbacks = [];
  }
  execute() {
    if (this.resetIfRetryingFailed(), this.done)
      this.callback();
    else {
      if (window.google && window.google.maps && window.google.maps.version)
        return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."), void this.callback();
      this.loading || (this.loading = true, this.setScript());
    }
  }
};
var A = function(t3) {
  function e2(e3) {
    var r2;
    return (r2 = t3.call(this, e3) || this).loader = null, r2.geocoder = null, "undefined" != typeof window && (r2.loader = new j(e3).load().then(function(t4) {
      var e4 = new t4.maps.Geocoder();
      return r2.geocoder = e4, e4;
    })), r2;
  }
  r(e2, t3);
  var n2 = e2.prototype;
  return n2.endpoint = function(t4) {
    throw new Error("Method not implemented.");
  }, n2.parse = function(t4) {
    return t4.data.results.map(function(t5) {
      var e3 = t5.geometry.location.toJSON(), r2 = e3.lat, n3 = e3.lng, o2 = t5.geometry.viewport.toJSON();
      return { x: n3, y: r2, label: t5.formatted_address, bounds: [[o2.south, o2.west], [o2.north, o2.east]], raw: t5 };
    });
  }, n2.search = function(t4) {
    try {
      var e3 = function(e4) {
        if (!e4)
          throw new Error("GoogleMaps GeoCoder is not loaded. Are you trying to run this server side?");
        return Promise.resolve(e4.geocode({ address: t4.query }, function(t5) {
          return { results: t5 };
        }).catch(function(t5) {
          return "ZERO_RESULTS" !== t5.code && console.error(t5.code + ": " + t5.message), { results: [] };
        })).then(function(t5) {
          return r2.parse({ data: t5 });
        });
      }, r2 = this, n3 = r2.geocoder;
      return Promise.resolve(n3 ? e3(n3) : Promise.resolve(r2.loader).then(e3));
    } catch (t5) {
      return Promise.reject(t5);
    }
  }, e2;
}(x);
var N = function(t3) {
  function e2() {
    for (var e3, r2 = arguments.length, n3 = new Array(r2), o2 = 0; o2 < r2; o2++)
      n3[o2] = arguments[o2];
    return (e3 = t3.call.apply(t3, [this].concat(n3)) || this).searchUrl = "https://maps.googleapis.com/maps/api/geocode/json", e3;
  }
  r(e2, t3);
  var n2 = e2.prototype;
  return n2.endpoint = function(t4) {
    var e3 = t4.query;
    return this.getUrl(this.searchUrl, "string" == typeof e3 ? { address: e3 } : e3);
  }, n2.parse = function(t4) {
    return t4.data.results.map(function(t5) {
      return { x: t5.geometry.location.lng, y: t5.geometry.location.lat, label: t5.formatted_address, bounds: [[t5.geometry.viewport.southwest.lat, t5.geometry.viewport.southwest.lng], [t5.geometry.viewport.northeast.lat, t5.geometry.viewport.northeast.lng]], raw: t5 };
    });
  }, e2;
}(x);
var O = function(t3) {
  function e2() {
    for (var e3, r2 = arguments.length, n3 = new Array(r2), o2 = 0; o2 < r2; o2++)
      n3[o2] = arguments[o2];
    return (e3 = t3.call.apply(t3, [this].concat(n3)) || this).searchUrl = "https://geocode.search.hereapi.com/v1/autosuggest", e3;
  }
  r(e2, t3);
  var n2 = e2.prototype;
  return n2.endpoint = function(t4) {
    var e3 = t4.query;
    return this.getUrl(this.searchUrl, "string" == typeof e3 ? { q: e3 } : e3);
  }, n2.parse = function(t4) {
    return t4.data.items.filter(function(t5) {
      return void 0 !== t5.position;
    }).map(function(t5) {
      return { x: t5.position.lng, y: t5.position.lat, label: t5.address.label, bounds: null, raw: t5 };
    });
  }, e2;
}(x);
var F = function(t3) {
  function e2(e3) {
    var r2;
    void 0 === e3 && (e3 = {}), (r2 = t3.call(this, e3) || this).searchUrl = void 0, r2.reverseUrl = void 0;
    var n3 = "https://nominatim.openstreetmap.org";
    return r2.searchUrl = e3.searchUrl || n3 + "/search", r2.reverseUrl = e3.reverseUrl || n3 + "/reverse", r2;
  }
  r(e2, t3);
  var n2 = e2.prototype;
  return n2.endpoint = function(t4) {
    var e3 = t4.query, r2 = t4.type, n3 = "string" == typeof e3 ? { q: e3 } : e3;
    return n3.format = "json", this.getUrl(r2 === h.REVERSE ? this.reverseUrl : this.searchUrl, n3);
  }, n2.parse = function(t4) {
    return (Array.isArray(t4.data) ? t4.data : [t4.data]).map(function(t5) {
      return { x: Number(t5.lon), y: Number(t5.lat), label: t5.display_name, bounds: [[parseFloat(t5.boundingbox[0]), parseFloat(t5.boundingbox[2])], [parseFloat(t5.boundingbox[1]), parseFloat(t5.boundingbox[3])]], raw: t5 };
    });
  }, e2;
}(x);
var _ = function(t3) {
  function n2(r2) {
    return t3.call(this, e({}, r2, { searchUrl: "https://locationiq.org/v1/search.php", reverseUrl: "https://locationiq.org/v1/reverse.php" })) || this;
  }
  return r(n2, t3), n2.prototype.parse = function(e2) {
    return e2.data.error ? [] : t3.prototype.parse.call(this, e2);
  }, n2;
}(F);
var M = function(t3) {
  function e2() {
    for (var e3, r2 = arguments.length, n3 = new Array(r2), o2 = 0; o2 < r2; o2++)
      n3[o2] = arguments[o2];
    return (e3 = t3.call.apply(t3, [this].concat(n3)) || this).searchUrl = "https://api.opencagedata.com/geocode/v1/json", e3;
  }
  r(e2, t3);
  var n2 = e2.prototype;
  return n2.endpoint = function(t4) {
    var e3 = t4.query, r2 = "string" == typeof e3 ? { q: e3 } : e3;
    return r2.format = "json", this.getUrl(this.searchUrl, r2);
  }, n2.parse = function(t4) {
    return t4.data.results.map(function(t5) {
      return { x: t5.geometry.lng, y: t5.geometry.lat, label: t5.formatted, bounds: [[t5.bounds.southwest.lat, t5.bounds.southwest.lng], [t5.bounds.northeast.lat, t5.bounds.northeast.lng]], raw: t5 };
    });
  }, n2.search = function(e3) {
    try {
      return Promise.resolve(e3.query.length < 2 ? [] : t3.prototype.search.call(this, e3));
    } catch (t4) {
      return Promise.reject(t4);
    }
  }, e2;
}(x);
var q = function(t3) {
  function e2(e3) {
    var r2;
    void 0 === e3 && (e3 = {}), (r2 = t3.call(this, e3) || this).searchUrl = void 0, r2.reverseUrl = void 0;
    var n3 = "https://civildefense.fit.vutbr.cz";
    return r2.searchUrl = e3.searchUrl || n3 + "/search", r2.reverseUrl = e3.reverseUrl || n3 + "/reverse", r2;
  }
  r(e2, t3);
  var n2 = e2.prototype;
  return n2.endpoint = function(t4) {
    var e3 = t4.query, r2 = t4.type, n3 = "string" == typeof e3 ? { q: e3 } : e3;
    return n3.format = "json", this.getUrl(r2 === h.REVERSE ? this.reverseUrl : this.searchUrl, n3);
  }, n2.parse = function(t4) {
    return (Array.isArray(t4.data) ? t4.data : [t4.data]).map(function(t5) {
      return { x: Number(t5.lon), y: Number(t5.lat), label: t5.display_name, bounds: [[parseFloat(t5.boundingbox[0]), parseFloat(t5.boundingbox[2])], [parseFloat(t5.boundingbox[1]), parseFloat(t5.boundingbox[3])]], raw: t5 };
    });
  }, e2;
}(x);
var B = function(t3) {
  function e2(e3) {
    var r2;
    return void 0 === e3 && (e3 = {}), (r2 = t3.call(this, e3) || this).searchUrl = void 0, r2.searchUrl = e3.searchUrl || "https://a.tiles.mapbox.com/v4/geocode/mapbox.places/", r2;
  }
  r(e2, t3);
  var n2 = e2.prototype;
  return n2.endpoint = function(t4) {
    return this.getUrl("" + this.searchUrl + t4.query + ".json");
  }, n2.parse = function(t4) {
    return (Array.isArray(t4.data.features) ? t4.data.features : []).map(function(t5) {
      var e3 = null;
      return t5.bbox && (e3 = [[parseFloat(t5.bbox[1]), parseFloat(t5.bbox[0])], [parseFloat(t5.bbox[3]), parseFloat(t5.bbox[2])]]), { x: Number(t5.center[0]), y: Number(t5.center[1]), label: t5.place_name ? t5.place_name : t5.text, bounds: e3, raw: t5 };
    });
  }, e2;
}(x);
var D = function(t3) {
  function e2(e3) {
    var r2;
    void 0 === e3 && (e3 = {}), (r2 = t3.call(this, e3) || this).searchUrl = void 0, r2.reverseUrl = void 0;
    var n3 = "https://api-adresse.data.gouv.fr";
    return r2.searchUrl = e3.searchUrl || n3 + "/search", r2.reverseUrl = e3.reverseUrl || n3 + "/reverse", r2;
  }
  r(e2, t3);
  var n2 = e2.prototype;
  return n2.endpoint = function(t4) {
    var e3 = t4.query;
    return this.getUrl(t4.type === h.REVERSE ? this.reverseUrl : this.searchUrl, "string" == typeof e3 ? { q: e3 } : e3);
  }, n2.parse = function(t4) {
    return t4.data.features.map(function(t5) {
      return { x: t5.geometry.coordinates[0], y: t5.geometry.coordinates[1], label: t5.properties.label, bounds: null, raw: t5 };
    });
  }, e2;
}(x);
var T = function(t3) {
  function e2(e3) {
    var r2;
    void 0 === e3 && (e3 = {}), (r2 = t3.call(this, e3) || this).searchUrl = void 0, r2.reverseUrl = void 0;
    var n3 = "https://api.geoapify.com/v1/geocode";
    return r2.searchUrl = e3.searchUrl || n3 + "/search", r2.reverseUrl = e3.reverseUrl || n3 + "/reverse", r2;
  }
  r(e2, t3);
  var n2 = e2.prototype;
  return n2.endpoint = function(t4) {
    var e3 = t4.query, r2 = t4.type, n3 = "string" == typeof e3 ? { text: e3 } : e3;
    return n3.format = "json", this.getUrl(r2 === h.REVERSE ? this.reverseUrl : this.searchUrl, n3);
  }, n2.parse = function(t4) {
    return (Array.isArray(t4.data.results) ? t4.data.results : [t4.data.results]).map(function(t5) {
      return { x: Number(t5.lon), y: Number(t5.lat), label: t5.formatted, bounds: [[parseFloat(t5.bbox.lat1), parseFloat(t5.bbox.lon1)], [parseFloat(t5.bbox.lat2), parseFloat(t5.bbox.lon2)]], raw: t5 };
    });
  }, e2;
}(x);
export {
  L as AlgoliaProvider,
  k as BingProvider,
  q as CivilDefenseMapProvider,
  U as EsriProvider,
  D as GeoApiFrProvider,
  w as GeoSearchControl,
  T as GeoapifyProvider,
  C as GeocodeEarthProvider,
  A as GoogleProvider,
  O as HereProvider,
  x as JsonProvider,
  N as LegacyGoogleProvider,
  _ as LocationIQProvider,
  B as MapBoxProvider,
  M as OpenCageProvider,
  F as OpenStreetMapProvider,
  S as PeliasProvider,
  w as SearchControl,
  m as SearchElement
};
//# sourceMappingURL=leaflet-geosearch.js.map
