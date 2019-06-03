import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, i as init, d as _assertThisInitialized, s as safe_not_equal, S as SvelteComponent, t as element, D as text, u as claim_element, v as children, C as claim_text, j as detach, f as insert, x as append, I as set_data, B as space, n as noop, M as destroy_each } from './chunk.605ae403.js';

function get_each_context(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.post = list[i];
  return child_ctx;
} // (27:1) {#each posts as post}


function create_each_block(ctx) {
  var li,
      a,
      t_value = ctx.post.title,
      t,
      a_href_value;
  return {
    c: function c() {
      li = element("li");
      a = element("a");
      t = text(t_value);
      this.h();
    },
    l: function l(nodes) {
      li = claim_element(nodes, "LI", {}, false);
      var li_nodes = children(li);
      a = claim_element(li_nodes, "A", {
        rel: true,
        href: true
      }, false);
      var a_nodes = children(a);
      t = claim_text(a_nodes, t_value);
      a_nodes.forEach(detach);
      li_nodes.forEach(detach);
      this.h();
    },
    h: function h() {
      a.rel = "prefetch";
      a.href = a_href_value = "blog/" + ctx.post.slug;
    },
    m: function m(target, anchor) {
      insert(target, li, anchor);
      append(li, a);
      append(a, t);
    },
    p: function p(changed, ctx) {
      if (changed.posts && t_value !== (t_value = ctx.post.title)) {
        set_data(t, t_value);
      }

      if (changed.posts && a_href_value !== (a_href_value = "blog/" + ctx.post.slug)) {
        a.href = a_href_value;
      }
    },
    d: function d(detaching) {
      if (detaching) {
        detach(li);
      }
    }
  };
}

function create_fragment(ctx) {
  var t0, h1, t1, t2, ul;
  var each_value = ctx.posts;
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  return {
    c: function c() {
      t0 = space();
      h1 = element("h1");
      t1 = text("Recent posts");
      t2 = space();
      ul = element("ul");

      for (var i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      this.h();
    },
    l: function l(nodes) {
      t0 = claim_text(nodes, "\n\n");
      h1 = claim_element(nodes, "H1", {}, false);
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Recent posts");
      h1_nodes.forEach(detach);
      t2 = claim_text(nodes, "\n\n");
      ul = claim_element(nodes, "UL", {
        class: true
      }, false);
      var ul_nodes = children(ul);

      for (var i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(ul_nodes);
      }

      ul_nodes.forEach(detach);
      this.h();
    },
    h: function h() {
      document.title = "Blog";
      ul.className = "svelte-1frg2tf";
    },
    m: function m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, h1, anchor);
      append(h1, t1);
      insert(target, t2, anchor);
      insert(target, ul, anchor);

      for (var i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
    },
    p: function p(changed, ctx) {
      if (changed.posts) {
        each_value = ctx.posts;

        for (var i = 0; i < each_value.length; i += 1) {
          var child_ctx = get_each_context(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(changed, child_ctx);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
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
        detach(t0);
        detach(h1);
        detach(t2);
        detach(ul);
      }

      destroy_each(each_blocks, detaching);
    }
  };
}

function preload(_ref) {
  var params = _ref.params,
      query = _ref.query;
  return this.fetch("blog.json").then(function (r) {
    return r.json();
  }).then(function (posts) {
    return {
      posts: posts
    };
  });
}

function instance($$self, $$props, $$invalidate) {
  var posts = $$props.posts;

  $$self.$set = function ($$props) {
    if ('posts' in $$props) $$invalidate('posts', posts = $$props.posts);
  };

  return {
    posts: posts
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
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, ["posts"]);
    return _this;
  }

  return Index;
}(SvelteComponent);

export default Index;
export { preload };
//# sourceMappingURL=index.be47a912.js.map
