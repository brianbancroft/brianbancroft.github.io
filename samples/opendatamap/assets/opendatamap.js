"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('opendatamap/app', ['exports', 'ember', 'opendatamap/resolver', 'ember-load-initializers', 'opendatamap/config/environment'], function (exports, _ember, _opendatamapResolver, _emberLoadInitializers, _opendatamapConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _opendatamapConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _opendatamapConfigEnvironment['default'].podModulePrefix,
    Resolver: _opendatamapResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _opendatamapConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('opendatamap/components/array-path-layer', ['exports', 'ember-leaflet/components/array-path-layer'], function (exports, _emberLeafletComponentsArrayPathLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsArrayPathLayer['default'];
    }
  });
});
define('opendatamap/components/base-layer', ['exports', 'ember-leaflet/components/base-layer'], function (exports, _emberLeafletComponentsBaseLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsBaseLayer['default'];
    }
  });
});
define('opendatamap/components/circle-layer', ['exports', 'ember-leaflet/components/circle-layer'], function (exports, _emberLeafletComponentsCircleLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsCircleLayer['default'];
    }
  });
});
define('opendatamap/components/circle-marker-layer', ['exports', 'ember-leaflet/components/circle-marker-layer'], function (exports, _emberLeafletComponentsCircleMarkerLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsCircleMarkerLayer['default'];
    }
  });
});
define('opendatamap/components/container-layer', ['exports', 'ember-leaflet/components/container-layer'], function (exports, _emberLeafletComponentsContainerLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsContainerLayer['default'];
    }
  });
});
define('opendatamap/components/div-overlay-layer', ['exports', 'ember-leaflet/components/div-overlay-layer'], function (exports, _emberLeafletComponentsDivOverlayLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsDivOverlayLayer['default'];
    }
  });
});
define('opendatamap/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('opendatamap/components/geojson-layer', ['exports', 'ember-leaflet/components/geojson-layer'], function (exports, _emberLeafletComponentsGeojsonLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsGeojsonLayer['default'];
    }
  });
});
define('opendatamap/components/image-layer', ['exports', 'ember-leaflet/components/image-layer'], function (exports, _emberLeafletComponentsImageLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsImageLayer['default'];
    }
  });
});
define('opendatamap/components/leaflet-map', ['exports', 'ember-leaflet/components/leaflet-map'], function (exports, _emberLeafletComponentsLeafletMap) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsLeafletMap['default'];
    }
  });
});
define('opendatamap/components/map-view', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    mapservice: _ember['default'].inject.service(),

    actions: {
      panToPrinceGeorge: function panToPrinceGeorge() {
        this.get('mapservice').panToPrinceGeorge();
      },
      panToVictoria: function panToVictoria() {
        console.log('map should pan to Victoria');

        this.get('mapservice').panToVictoria();
      }
    },
    setup: _ember['default'].on('didInsertElement', function () {
      _ember['default'].run.scheduleOnce('afterRender', this, function () {
        this.get('mapservice').loadMap();
      });
    })
  });
});
define('opendatamap/components/marker-layer', ['exports', 'ember-leaflet/components/marker-layer'], function (exports, _emberLeafletComponentsMarkerLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsMarkerLayer['default'];
    }
  });
});
define('opendatamap/components/path-layer', ['exports', 'ember-leaflet/components/path-layer'], function (exports, _emberLeafletComponentsPathLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPathLayer['default'];
    }
  });
});
define('opendatamap/components/point-path-layer', ['exports', 'ember-leaflet/components/point-path-layer'], function (exports, _emberLeafletComponentsPointPathLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPointPathLayer['default'];
    }
  });
});
define('opendatamap/components/polygon-layer', ['exports', 'ember-leaflet/components/polygon-layer'], function (exports, _emberLeafletComponentsPolygonLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPolygonLayer['default'];
    }
  });
});
define('opendatamap/components/polyline-layer', ['exports', 'ember-leaflet/components/polyline-layer'], function (exports, _emberLeafletComponentsPolylineLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPolylineLayer['default'];
    }
  });
});
define('opendatamap/components/popup-layer', ['exports', 'ember-leaflet/components/popup-layer'], function (exports, _emberLeafletComponentsPopupLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPopupLayer['default'];
    }
  });
});
define('opendatamap/components/tile-layer', ['exports', 'ember-leaflet/components/tile-layer'], function (exports, _emberLeafletComponentsTileLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsTileLayer['default'];
    }
  });
});
define('opendatamap/components/tooltip-layer', ['exports', 'ember-leaflet/components/tooltip-layer'], function (exports, _emberLeafletComponentsTooltipLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsTooltipLayer['default'];
    }
  });
});
define('opendatamap/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('opendatamap/components/wms-tile-layer', ['exports', 'ember-leaflet/components/wms-tile-layer'], function (exports, _emberLeafletComponentsWmsTileLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsWmsTileLayer['default'];
    }
  });
});
define('opendatamap/helpers/app-version', ['exports', 'ember', 'opendatamap/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _opendatamapConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _opendatamapConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('opendatamap/helpers/div-icon', ['exports', 'ember-leaflet/helpers/div-icon'], function (exports, _emberLeafletHelpersDivIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersDivIcon['default'];
    }
  });
  Object.defineProperty(exports, 'divIcon', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersDivIcon.divIcon;
    }
  });
});
define('opendatamap/helpers/icon', ['exports', 'ember-leaflet/helpers/icon'], function (exports, _emberLeafletHelpersIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersIcon['default'];
    }
  });
  Object.defineProperty(exports, 'icon', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersIcon.icon;
    }
  });
});
define('opendatamap/helpers/lat-lng-bounds', ['exports', 'ember-leaflet/helpers/lat-lng-bounds'], function (exports, _emberLeafletHelpersLatLngBounds) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersLatLngBounds['default'];
    }
  });
  Object.defineProperty(exports, 'latLngBounds', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersLatLngBounds.latLngBounds;
    }
  });
});
define('opendatamap/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('opendatamap/helpers/point', ['exports', 'ember-leaflet/helpers/point'], function (exports, _emberLeafletHelpersPoint) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersPoint['default'];
    }
  });
  Object.defineProperty(exports, 'point', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersPoint.point;
    }
  });
});
define('opendatamap/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('opendatamap/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'opendatamap/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _opendatamapConfigEnvironment) {
  var _config$APP = _opendatamapConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('opendatamap/initializers/browser/leaflet-assets', ['exports', 'ember-get-config'], function (exports, _emberGetConfig) {
  exports.initialize = initialize;

  /* global L */

  function initialize() /* container, application */{
    L.Icon.Default.imagePath = (_emberGetConfig['default'].rootURL || _emberGetConfig['default'].baseURL || '/') + 'assets/images/';
  }

  exports['default'] = {
    name: 'leaflet-assets',
    initialize: initialize
  };
});
define('opendatamap/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('opendatamap/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('opendatamap/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('opendatamap/initializers/export-application-global', ['exports', 'ember', 'opendatamap/config/environment'], function (exports, _ember, _opendatamapConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_opendatamapConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _opendatamapConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_opendatamapConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('opendatamap/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('opendatamap/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('opendatamap/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("opendatamap/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('opendatamap/models/index', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({});
});
define('opendatamap/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('opendatamap/router', ['exports', 'ember', 'opendatamap/config/environment'], function (exports, _ember, _opendatamapConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _opendatamapConfigEnvironment['default'].locationType,
    rootURL: _opendatamapConfigEnvironment['default'].rootURL
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('opendatamap/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    actions: {
      openSideNav: function openSideNav() {
        _ember['default'].$('#hide-menu').css('display', 'block').animate({ left: '22vw' });
        _ember['default'].$('#side-nav').css('display', 'flex').animate({ left: '0px' });
        _ember['default'].$('#top-nav').animate({ left: '22vw' });
        this.set('isSideRetracted', false);
      },
      openSecondaryNav: function openSecondaryNav() {
        _ember['default'].$('#hide-menu').animate({ left: '35vw' });
        _ember['default'].$('#side-nav').animate({ left: '14vw' });
        _ember['default'].$('#secondary-side-nav').css('display', 'block').animate({ left: '0' });
        _ember['default'].$('#top-nav').animate({ left: '36vw' });
        this.set('isSecondaryRetracted', false);
      },
      closeSecondaryNav: function closeSecondaryNav() {
        _ember['default'].$('#hide-menu').animate({ left: '22vw' });
        _ember['default'].$('#top-nav').animate({ left: '22vw' });
        _ember['default'].$('#side-nav').animate({ left: '0vw' });
        _ember['default'].$('#secondary-side-nav').css('display', 'none').animate({ left: '-14vw' });
        this.set('isSecondaryRetracted', true);
      },
      closeSideNav: function closeSideNav() {
        _ember['default'].$('#hide-menu').css('display', 'none').animate({ left: '-22vw' });
        _ember['default'].$('#side-nav').css('display', 'none').animate({ left: '-20px' });
        _ember['default'].$('#top-nav').animate({ left: '0' });
        this.set('isSideRetracted', false);
      },
      backUpNav: function backUpNav() {
        if (this.get('isSecondaryRetracted') === false) {
          this.send('closeSecondaryNav');
        } else if (this.get('isSideRetracted') === false) {
          this.send('closeSideNav');
        } else {}
      },
      toggleLegend: function toggleLegend() {
        if (this.get('isLegendActive')) {
          _ember['default'].$('#map').css('height', '100vh');
          _ember['default'].$('#legend').css('height', '0').css('display', 'none');
          this.set('isLegendActive', false);
        } else {
          _ember['default'].$('#map').css('height', '60vh');
          _ember['default'].$('#legend').css('height', '40vh').css('display', 'block');
          this.set('isLegendActive', true);
        }
      },
      panToPrinceGeorge: function panToPrinceGeorge() {
        _ember['default'].$('#secondary-side-nav .side-nav-item').first().css('color', '#eee');
        this.get('mapservice').removeLayers();
        this.set('whichCity', 'prince-george');
        this.get('mapservice').panToCityCenter(this.get('whichCity'));
        if (this.get('isSecondaryRetracted')) this.send('openSecondaryNav');
      },
      panToVictoria: function panToVictoria() {
        _ember['default'].$('#secondary-side-nav .side-nav-item').first().css('color', '#eee');
        this.get('mapservice').removeLayers();
        this.set('whichCity', 'victoria');
        this.get('mapservice').panToCityCenter(this.get('whichCity'));
        if (this.get('isSecondaryRetracted')) this.send('openSecondaryNav');
      },
      togglePopulationDensity: function togglePopulationDensity() {
        if (this.get('areLayersActive')) {
          _ember['default'].$('#secondary-side-nav .side-nav-item').first().css('color', '#eee');
          this.get('mapservice').removeLayers();
          this.set('areLayersActive', false);
        } else {
          _ember['default'].$('#secondary-side-nav .side-nav-item').first().css('color', '#008FF2');
          this.get('mapservice').toggleLayer(this.get('whichCity'));
          this.set('areLayersActive', true);
        }
      }
    },
    whichCity: '',
    whichDataSet: '',
    legendItem: '',
    isLegendActive: false,
    areLayersActive: false,
    isSideRetracted: true,
    isSecondaryRetracted: true,
    mapservice: _ember['default'].inject.service()
  });
});
define('opendatamap/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('opendatamap/services/mapservice', ['exports', 'ember', 'opendatamap/models/index', 'opendatamap/components/map-view'], function (exports, _ember, _opendatamapModelsIndex, _opendatamapComponentsMapView) {

  var map = undefined;

  exports['default'] = _ember['default'].Service.extend({
    divId: 'map',
    mapStyle: 'mapbox://styles/mapbox/dark-v9',
    API_KEY: 'pk.eyJ1IjoiYnJpYW5iYW5jcm9mdCIsImEiOiJsVGVnMXFzIn0.7ldhVh3Ppsgv4lCYs65UdA',
    townCenters: {
      'prince-george': [-122.7487, 53.9171],
      'victoria': [-123.4103734351262877, 48.437451890638886]
    },
    quantileBreaks: {
      'victoria': [1561, 3414, 5982, 10071, 17369],
      'prince-george': [529, 1488, 2475, 3684, 6113]
    },
    townZoomLevel: 9.5,

    loadMap: function loadMap() {
      mapboxgl.accessToken = this.get('API_KEY');
      map = new mapboxgl.Map({
        container: this.get('divId'),
        style: this.get('mapStyle'),
        center: [-123.9761806, 48.437451890638886],
        zoom: 5,
        pitch: 40,
        bearing: 20
      });

      map.on('load', function () {
        map.addSource('population-victoria', {
          'type': 'geojson',
          'data': './victoria_population.geojson'
        });

        map.addSource('population-prince-george', {
          'type': 'geojson',
          'data': './pg_population.geojson'
        });
      });

      this.set('map', map);
    },
    removeLayers: function removeLayers() {
      ['population-prince-george', 'population-victoria'].forEach(function (element) {
        if (map.getLayer(element) !== undefined) {
          map.removeLayer(element);
        }
      });
    },
    toggleLayer: function toggleLayer(layerName) {
      map.addLayer({
        'id': 'population-' + layerName,
        'type': 'fill-extrusion',
        'source': 'population-' + layerName,
        'paint': {
          'fill-extrusion-color': {
            'stops': [[this.get('quantileBreaks')[layerName][0], '#f0f9e8'], [this.get('quantileBreaks')[layerName][1], '#bae4bc'], [this.get('quantileBreaks')[layerName][2], '#7bccc4'], [this.get('quantileBreaks')[layerName][3], '#43a2ca'], [this.get('quantileBreaks')[layerName][4], '#0868ac']],
            'property': 'pop_sqkm'
          },
          'fill-extrusion-height': {
            'type': 'identity',
            'property': 'pop_sqkm'
          },
          'fill-extrusion-base': 0,
          'fill-extrusion-opacity': 0.5
        }
      });
    },
    panToCityCenter: function panToCityCenter(city) {
      map.flyTo({
        center: this.get('townCenters')[city],
        zoom: this.get('townZoomLevel')
      });
    }
  });
});
define("opendatamap/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "gQrkyV+8", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "opendatamap/templates/application.hbs" } });
});
define("opendatamap/templates/components/map-view", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "j2o38jYQ", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"map\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "opendatamap/templates/components/map-view.hbs" } });
});
define("opendatamap/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "SYeN8c9L", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"top-nav\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"openSideNav\"]],[\"flush-element\"],[\"text\",\"\\n  OpenDataMap\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"side-nav\"],[\"static-attr\",\"class\",\"side-nav\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"side-nav-item\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"panToPrinceGeorge\"]],[\"flush-element\"],[\"text\",\"PG\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"side-nav-item\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"panToVictoria\"]],[\"flush-element\"],[\"text\",\"Vic\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"side-nav-item\"],[\"flush-element\"],[\"text\",\"More coming soon\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"secondary-side-nav\"],[\"static-attr\",\"class\",\"side-nav\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"side-nav-item\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"togglePopulationDensity\"]],[\"flush-element\"],[\"text\",\"Population\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"side-nav-item\"],[\"flush-element\"],[\"text\",\"More coming soon\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"hide-menu\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"backUpNav\"]],[\"flush-element\"],[\"text\",\"(back up)\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"bottom-legend-toggle\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"toggleLegend\"]],[\"flush-element\"],[\"text\",\"Legend\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"map-view\"],null,null,0],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"legend\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Legend\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "opendatamap/templates/index.hbs" } });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('opendatamap/config/environment', ['ember'], function(Ember) {
  var prefix = 'opendatamap';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("opendatamap/app")["default"].create({"name":"opendatamap","version":"0.0.0+8bf2e55e"});
}

/* jshint ignore:end */
//# sourceMappingURL=opendatamap.map
