import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, i as init, d as _assertThisInitialized, s as safe_not_equal, S as SvelteComponent, B as space, t as element, D as text, C as claim_text, u as claim_element, v as children, j as detach, f as insert, x as append, n as noop } from './chunk.605ae403.js';

function create_fragment(ctx) {
  var t0, h1, t1, t2, figure, img, t3, figcaption, t4, t5, p, strong, t6;
  return {
    c: function c() {
      t0 = space();
      h1 = element("h1");
      t1 = text("Great success!");
      t2 = space();
      figure = element("figure");
      img = element("img");
      t3 = space();
      figcaption = element("figcaption");
      t4 = text("HIGH FIVE!");
      t5 = space();
      p = element("p");
      strong = element("strong");
      t6 = text("Try editing this file (src/routes/index.svelte) to test live reloading.");
      this.h();
    },
    l: function l(nodes) {
      t0 = claim_text(nodes, "\n\n");
      h1 = claim_element(nodes, "H1", {
        class: true
      }, false);
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Great success!");
      h1_nodes.forEach(detach);
      t2 = claim_text(nodes, "\n\n");
      figure = claim_element(nodes, "FIGURE", {
        class: true
      }, false);
      var figure_nodes = children(figure);
      img = claim_element(figure_nodes, "IMG", {
        alt: true,
        src: true,
        class: true
      }, false);
      var img_nodes = children(img);
      img_nodes.forEach(detach);
      t3 = claim_text(figure_nodes, "\n\t");
      figcaption = claim_element(figure_nodes, "FIGCAPTION", {}, false);
      var figcaption_nodes = children(figcaption);
      t4 = claim_text(figcaption_nodes, "HIGH FIVE!");
      figcaption_nodes.forEach(detach);
      figure_nodes.forEach(detach);
      t5 = claim_text(nodes, "\n\n");
      p = claim_element(nodes, "P", {
        class: true
      }, false);
      var p_nodes = children(p);
      strong = claim_element(p_nodes, "STRONG", {}, false);
      var strong_nodes = children(strong);
      t6 = claim_text(strong_nodes, "Try editing this file (src/routes/index.svelte) to test live reloading.");
      strong_nodes.forEach(detach);
      p_nodes.forEach(detach);
      this.h();
    },
    h: function h() {
      document.title = "Sapper project template";
      h1.className = "svelte-d9fxeg";
      img.alt = "Borat";
      img.src = "great-success.png";
      img.className = "svelte-d9fxeg";
      figure.className = "svelte-d9fxeg";
      p.className = "svelte-d9fxeg";
    },
    m: function m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, h1, anchor);
      append(h1, t1);
      insert(target, t2, anchor);
      insert(target, figure, anchor);
      append(figure, img);
      append(figure, t3);
      append(figure, figcaption);
      append(figcaption, t4);
      insert(target, t5, anchor);
      insert(target, p, anchor);
      append(p, strong);
      append(strong, t6);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) {
        detach(t0);
        detach(h1);
        detach(t2);
        detach(figure);
        detach(t5);
        detach(p);
      }
    }
  };
}

var Index =
/*#__PURE__*/
function (_SvelteComponent) {
  _inherits(Index, _SvelteComponent);

  function Index(options) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this));
    init(_assertThisInitialized(_this), options, null, create_fragment, safe_not_equal, []);
    return _this;
  }

  return Index;
}(SvelteComponent);

export default Index;
//# sourceMappingURL=index.5fda1bec.js.map
