import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, i as init, d as _assertThisInitialized, s as safe_not_equal, S as SvelteComponent, B as space, t as element, D as text, C as claim_text, u as claim_element, v as children, j as detach, f as insert, x as append, n as noop } from './chunk.605ae403.js';

function create_fragment(ctx) {
  var t0, h1, t1, t2, p, t3;
  return {
    c: function c() {
      t0 = space();
      h1 = element("h1");
      t1 = text("About this site");
      t2 = space();
      p = element("p");
      t3 = text("This is the 'about' page. There's not much here.");
      this.h();
    },
    l: function l(nodes) {
      t0 = claim_text(nodes, "\n\n");
      h1 = claim_element(nodes, "H1", {}, false);
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "About this site");
      h1_nodes.forEach(detach);
      t2 = claim_text(nodes, "\n\n");
      p = claim_element(nodes, "P", {}, false);
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, "This is the 'about' page. There's not much here.");
      p_nodes.forEach(detach);
      this.h();
    },
    h: function h() {
      document.title = "About";
    },
    m: function m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, h1, anchor);
      append(h1, t1);
      insert(target, t2, anchor);
      insert(target, p, anchor);
      append(p, t3);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) {
        detach(t0);
        detach(h1);
        detach(t2);
        detach(p);
      }
    }
  };
}

var About =
/*#__PURE__*/
function (_SvelteComponent) {
  _inherits(About, _SvelteComponent);

  function About(options) {
    var _this;

    _classCallCheck(this, About);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(About).call(this));
    init(_assertThisInitialized(_this), options, null, create_fragment, safe_not_equal, []);
    return _this;
  }

  return About;
}(SvelteComponent);

export default About;
//# sourceMappingURL=about.45fc2641.js.map
