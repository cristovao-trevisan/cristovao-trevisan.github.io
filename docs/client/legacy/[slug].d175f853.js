import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, i as init, d as _assertThisInitialized, s as safe_not_equal, S as SvelteComponent, B as space, t as element, D as text, C as claim_text, u as claim_element, v as children, j as detach, f as insert, x as append, I as set_data, n as noop } from './chunk.605ae403.js';
import { _ as _asyncToGenerator, a as _regeneratorRuntime } from './chunk.836d822b.js';

function create_fragment(ctx) {
  var title_value,
      t0,
      h1,
      t1_value = ctx.post.title,
      t1,
      t2,
      div,
      raw_value = ctx.post.html;
  document.title = title_value = ctx.post.title;
  return {
    c: function c() {
      t0 = space();
      h1 = element("h1");
      t1 = text(t1_value);
      t2 = space();
      div = element("div");
      this.h();
    },
    l: function l(nodes) {
      t0 = claim_text(nodes, "\n\n");
      h1 = claim_element(nodes, "H1", {}, false);
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, t1_value);
      h1_nodes.forEach(detach);
      t2 = claim_text(nodes, "\n\n");
      div = claim_element(nodes, "DIV", {
        class: true
      }, false);
      var div_nodes = children(div);
      div_nodes.forEach(detach);
      this.h();
    },
    h: function h() {
      div.className = "content svelte-gnxal1";
    },
    m: function m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, h1, anchor);
      append(h1, t1);
      insert(target, t2, anchor);
      insert(target, div, anchor);
      div.innerHTML = raw_value;
    },
    p: function p(changed, ctx) {
      if (changed.post && title_value !== (title_value = ctx.post.title)) {
        document.title = title_value;
      }

      if (changed.post && t1_value !== (t1_value = ctx.post.title)) {
        set_data(t1, t1_value);
      }

      if (changed.post && raw_value !== (raw_value = ctx.post.html)) {
        div.innerHTML = raw_value;
      }
    },
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) {
        detach(t0);
        detach(h1);
        detach(t2);
        detach(div);
      }
    }
  };
}

function preload(_x) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee(_ref) {
    var params, query, res, data;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _ref.params, query = _ref.query;
            _context.next = 3;
            return this.fetch("blog/".concat(params.slug, ".json"));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;

            if (!(res.status === 200)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", {
              post: data
            });

          case 11:
            this.error(res.status, data.message);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _preload.apply(this, arguments);
}

function instance($$self, $$props, $$invalidate) {
  var post = $$props.post;

  $$self.$set = function ($$props) {
    if ('post' in $$props) $$invalidate('post', post = $$props.post);
  };

  return {
    post: post
  };
}

var Slug =
/*#__PURE__*/
function (_SvelteComponent) {
  _inherits(Slug, _SvelteComponent);

  function Slug(options) {
    var _this;

    _classCallCheck(this, Slug);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slug).call(this));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, ["post"]);
    return _this;
  }

  return Slug;
}(SvelteComponent);

export default Slug;
export { preload };
//# sourceMappingURL=[slug].d175f853.js.map
