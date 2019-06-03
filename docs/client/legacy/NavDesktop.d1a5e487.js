import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, i as init, d as _assertThisInitialized, s as safe_not_equal, S as SvelteComponent, t as element, D as text, B as space, u as claim_element, v as children, C as claim_text, j as detach, F as toggle_class, f as insert, x as append, n as noop, M as destroy_each } from './chunk.605ae403.js';
import { m as menuRoutes } from './chunk.4007b21a.js';

function get_each_context(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.path = list[i].path;
  child_ctx.icon = list[i].icon;
  child_ctx.title = list[i].title;
  return child_ctx;
} // (8:1) {#each menuRoutes as { path, icon, title }}


function create_each_block(ctx) {
  var div,
      a,
      t0_value = ctx.title,
      t0,
      a_href_value,
      t1;
  return {
    c: function c() {
      div = element("div");
      a = element("a");
      t0 = text(t0_value);
      t1 = space();
      this.h();
    },
    l: function l(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      }, false);
      var div_nodes = children(div);
      a = claim_element(div_nodes, "A", {
        class: true,
        href: true
      }, false);
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, t0_value);
      a_nodes.forEach(detach);
      t1 = claim_text(div_nodes, "\n\t\t");
      div_nodes.forEach(detach);
      this.h();
    },
    h: function h() {
      a.className = "item-title";
      a.href = a_href_value = ctx.path;
      div.className = "item-container svelte-p34j56";
      toggle_class(div, "selected", ctx.segment === ctx.path);
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);
      append(div, a);
      append(a, t0);
      append(div, t1);
    },
    p: function p(changed, ctx) {
      if (changed.segment || changed.menuRoutes) {
        toggle_class(div, "selected", ctx.segment === ctx.path);
      }
    },
    d: function d(detaching) {
      if (detaching) {
        detach(div);
      }
    }
  };
}

function create_fragment(ctx) {
  var nav;
  var each_value = menuRoutes;
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  return {
    c: function c() {
      nav = element("nav");

      for (var i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      this.h();
    },
    l: function l(nodes) {
      nav = claim_element(nodes, "NAV", {
        class: true
      }, false);
      var nav_nodes = children(nav);

      for (var i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nav_nodes);
      }

      nav_nodes.forEach(detach);
      this.h();
    },
    h: function h() {
      nav.className = "container svelte-p34j56";
    },
    m: function m(target, anchor) {
      insert(target, nav, anchor);

      for (var i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(nav, null);
      }
    },
    p: function p(changed, ctx) {
      if (changed.segment || changed.menuRoutes) {
        each_value = menuRoutes;

        for (var i = 0; i < each_value.length; i += 1) {
          var child_ctx = get_each_context(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(changed, child_ctx);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(nav, null);
          }
        }

        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) {
        detach(nav);
      }

      destroy_each(each_blocks, detaching);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$segment = $$props.segment,
      segment = _$$props$segment === void 0 ? '' : _$$props$segment;

  $$self.$set = function ($$props) {
    if ('segment' in $$props) $$invalidate('segment', segment = $$props.segment);
  };

  return {
    segment: segment
  };
}

var NavDesktop =
/*#__PURE__*/
function (_SvelteComponent) {
  _inherits(NavDesktop, _SvelteComponent);

  function NavDesktop(options) {
    var _this;

    _classCallCheck(this, NavDesktop);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavDesktop).call(this));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, ["segment"]);
    return _this;
  }

  return NavDesktop;
}(SvelteComponent);

export default NavDesktop;
//# sourceMappingURL=NavDesktop.d1a5e487.js.map
