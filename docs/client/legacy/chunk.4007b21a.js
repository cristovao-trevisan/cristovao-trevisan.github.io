import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, i as init, d as _assertThisInitialized, s as safe_not_equal, S as SvelteComponent, L as svg_element, u as claim_element, v as children, j as detach, E as attr, f as insert, x as append, n as noop } from './chunk.605ae403.js';

function create_fragment(ctx) {
  var svg, path, polyline;
  return {
    c: function c() {
      svg = svg_element("svg");
      path = svg_element("path");
      polyline = svg_element("polyline");
      this.h();
    },
    l: function l(nodes) {
      svg = claim_element(nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        viewBox: true,
        fill: true,
        stroke: true,
        "stroke-width": true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        class: true
      }, true);
      var svg_nodes = children(svg);
      path = claim_element(svg_nodes, "path", {
        d: true
      }, true);
      var path_nodes = children(path);
      path_nodes.forEach(detach);
      polyline = claim_element(svg_nodes, "polyline", {
        points: true
      }, true);
      var polyline_nodes = children(polyline);
      polyline_nodes.forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h: function h() {
      attr(path, "d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z");
      attr(polyline, "points", "9 22 9 12 15 12 15 22");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "width", "24");
      attr(svg, "height", "24");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "fill", "none");
      attr(svg, "stroke", "currentColor");
      attr(svg, "stroke-width", "2");
      attr(svg, "stroke-linecap", "round");
      attr(svg, "stroke-linejoin", "round");
      attr(svg, "class", "feather feather-home");
    },
    m: function m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path);
      append(svg, polyline);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) {
        detach(svg);
      }
    }
  };
}

var HomeIcon =
/*#__PURE__*/
function (_SvelteComponent) {
  _inherits(HomeIcon, _SvelteComponent);

  function HomeIcon(options) {
    var _this;

    _classCallCheck(this, HomeIcon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HomeIcon).call(this));
    init(_assertThisInitialized(_this), options, null, create_fragment, safe_not_equal, []);
    return _this;
  }

  return HomeIcon;
}(SvelteComponent);

function create_fragment$1(ctx) {
  var svg, circle, line0, line1;
  return {
    c: function c() {
      svg = svg_element("svg");
      circle = svg_element("circle");
      line0 = svg_element("line");
      line1 = svg_element("line");
      this.h();
    },
    l: function l(nodes) {
      svg = claim_element(nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        viewBox: true,
        fill: true,
        stroke: true,
        "stroke-width": true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        class: true
      }, true);
      var svg_nodes = children(svg);
      circle = claim_element(svg_nodes, "circle", {
        cx: true,
        cy: true,
        r: true
      }, true);
      var circle_nodes = children(circle);
      circle_nodes.forEach(detach);
      line0 = claim_element(svg_nodes, "line", {
        x1: true,
        y1: true,
        x2: true,
        y2: true
      }, true);
      var line0_nodes = children(line0);
      line0_nodes.forEach(detach);
      line1 = claim_element(svg_nodes, "line", {
        x1: true,
        y1: true,
        x2: true,
        y2: true
      }, true);
      var line1_nodes = children(line1);
      line1_nodes.forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h: function h() {
      attr(circle, "cx", "12");
      attr(circle, "cy", "12");
      attr(circle, "r", "10");
      attr(line0, "x1", "12");
      attr(line0, "y1", "16");
      attr(line0, "x2", "12");
      attr(line0, "y2", "12");
      attr(line1, "x1", "12");
      attr(line1, "y1", "8");
      attr(line1, "x2", "12");
      attr(line1, "y2", "8");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "width", "24");
      attr(svg, "height", "24");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "fill", "none");
      attr(svg, "stroke", "currentColor");
      attr(svg, "stroke-width", "2");
      attr(svg, "stroke-linecap", "round");
      attr(svg, "stroke-linejoin", "round");
      attr(svg, "class", "feather feather-info");
    },
    m: function m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, circle);
      append(svg, line0);
      append(svg, line1);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) {
        detach(svg);
      }
    }
  };
}

var InfoIcon =
/*#__PURE__*/
function (_SvelteComponent) {
  _inherits(InfoIcon, _SvelteComponent);

  function InfoIcon(options) {
    var _this;

    _classCallCheck(this, InfoIcon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InfoIcon).call(this));
    init(_assertThisInitialized(_this), options, null, create_fragment$1, safe_not_equal, []);
    return _this;
  }

  return InfoIcon;
}(SvelteComponent);

function create_fragment$2(ctx) {
  var svg, line0, line1, line2;
  return {
    c: function c() {
      svg = svg_element("svg");
      line0 = svg_element("line");
      line1 = svg_element("line");
      line2 = svg_element("line");
      this.h();
    },
    l: function l(nodes) {
      svg = claim_element(nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        viewBox: true,
        fill: true,
        stroke: true,
        "stroke-width": true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        class: true
      }, true);
      var svg_nodes = children(svg);
      line0 = claim_element(svg_nodes, "line", {
        x1: true,
        y1: true,
        x2: true,
        y2: true
      }, true);
      var line0_nodes = children(line0);
      line0_nodes.forEach(detach);
      line1 = claim_element(svg_nodes, "line", {
        x1: true,
        y1: true,
        x2: true,
        y2: true
      }, true);
      var line1_nodes = children(line1);
      line1_nodes.forEach(detach);
      line2 = claim_element(svg_nodes, "line", {
        x1: true,
        y1: true,
        x2: true,
        y2: true
      }, true);
      var line2_nodes = children(line2);
      line2_nodes.forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h: function h() {
      attr(line0, "x1", "3");
      attr(line0, "y1", "12");
      attr(line0, "x2", "21");
      attr(line0, "y2", "12");
      attr(line1, "x1", "3");
      attr(line1, "y1", "6");
      attr(line1, "x2", "21");
      attr(line1, "y2", "6");
      attr(line2, "x1", "3");
      attr(line2, "y1", "18");
      attr(line2, "x2", "21");
      attr(line2, "y2", "18");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "width", "24");
      attr(svg, "height", "24");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "fill", "none");
      attr(svg, "stroke", "currentColor");
      attr(svg, "stroke-width", "2");
      attr(svg, "stroke-linecap", "round");
      attr(svg, "stroke-linejoin", "round");
      attr(svg, "class", "feather feather-menu");
    },
    m: function m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, line0);
      append(svg, line1);
      append(svg, line2);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) {
        detach(svg);
      }
    }
  };
}

var MenuIcon =
/*#__PURE__*/
function (_SvelteComponent) {
  _inherits(MenuIcon, _SvelteComponent);

  function MenuIcon(options) {
    var _this;

    _classCallCheck(this, MenuIcon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MenuIcon).call(this));
    init(_assertThisInitialized(_this), options, null, create_fragment$2, safe_not_equal, []);
    return _this;
  }

  return MenuIcon;
}(SvelteComponent);

var menuRoutes = [{
  path: '',
  title: 'Home',
  icon: HomeIcon
}, {
  path: 'about',
  title: 'About',
  icon: InfoIcon
}];

export { MenuIcon as M, menuRoutes as m };
//# sourceMappingURL=chunk.4007b21a.js.map
