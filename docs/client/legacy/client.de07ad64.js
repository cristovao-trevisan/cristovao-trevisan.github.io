import { s as safe_not_equal, n as noop, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, i as init, d as _assertThisInitialized, S as SvelteComponent, e as empty, f as insert, g as group_outros, o as on_outro, h as check_outros, j as detach$1, k as subscribe, m as mount_component, l as get_spread_update, p as handle_promise, q as assign, r as create_slot, t as element, u as claim_element, v as children, w as listen, x as append, y as get_slot_changes, z as get_slot_context, A as createEventDispatcher, B as space, C as claim_text, D as text, E as attr, F as toggle_class, G as update_keyed_each, H as outro_and_destroy_block, I as set_data, J as setContext, K as _typeof } from './chunk.605ae403.js';
import { _ as _asyncToGenerator, a as _regeneratorRuntime } from './chunk.836d822b.js';
import { M as MenuIcon, m as menuRoutes } from './chunk.4007b21a.js';

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/**
 * Creates a `Readable` store that allows reading by subscription.
 * @param value initial value
 * @param {StartStopNotifier}start start and stop notifications for subscriptions
 */

function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */


function writable(value) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
  var stop;
  var subscribers = [];

  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;

      if (!stop) {
        return; // not ready
      }

      subscribers.forEach(function (s) {
        return s[1]();
      });
      subscribers.forEach(function (s) {
        return s[0](value);
      });
    }
  }

  function update(fn) {
    set(fn(value));
  }

  function subscribe(run) {
    var invalidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    var subscriber = [run, invalidate];
    subscribers.push(subscriber);

    if (subscribers.length === 1) {
      stop = start(set) || noop;
    }

    run(value);
    return function () {
      var index = subscribers.indexOf(subscriber);

      if (index !== -1) {
        subscribers.splice(index, 1);
      }

      if (subscribers.length === 0) {
        stop();
      }
    };
  }

  return {
    set: set,
    update: update,
    subscribe: subscribe
  };
}

var CONTEXT_KEY = {};
var preload = function preload() {
  return {};
};

var debounce = function debounce(time, call) {
  var timeout = null;
  return function () {
    if (timeout) return;
    timeout = setTimeout(function () {
      timeout = null;
      call();
    }, time);
  };
};

// @ts-check

var getDimensions = function getDimensions() {
  // ssr default values
  if (typeof window === 'undefined') return {
    width: 800,
    height: 600
  };
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  return {
    width: width,
    height: height
  };
};

var dimensions = readable(getDimensions(), function (set) {
  if (typeof window === 'undefined') return; // ssr

  var onChange = debounce(200, function () {
    return set(getDimensions());
  });
  window.addEventListener('resize', onChange, false);
  return function () {
    return window.removeEventListener('resize', onChange, false);
  };
});

function create_else_block(ctx) {
  var switch_instance_anchor, current;
  var switch_instance_spread_levels = [ctx.props];
  var switch_value = ctx.Default;

  function switch_props(ctx) {
    var switch_instance_props = {};

    for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }

    return {
      props: switch_instance_props
    };
  }

  if (switch_value) {
    var switch_instance = new switch_value(switch_props(ctx));
  }

  return {
    c: function c() {
      if (switch_instance) switch_instance.$$.fragment.c();
      switch_instance_anchor = empty();
    },
    l: function l(nodes) {
      if (switch_instance) switch_instance.$$.fragment.l(nodes);
      switch_instance_anchor = empty();
    },
    m: function m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }

      insert(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function p(changed, ctx) {
      var switch_instance_changes = changed.props ? get_spread_update(switch_instance_spread_levels, [ctx.props]) : {};

      if (switch_value !== (switch_value = ctx.Default)) {
        if (switch_instance) {
          group_outros();
          var old_component = switch_instance;
          on_outro(function () {
            old_component.$destroy();
          });
          old_component.$$.fragment.o(1);
          check_outros();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
          switch_instance.$$.fragment.c();
          switch_instance.$$.fragment.i(1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i: function i(local) {
      if (current) return;
      if (switch_instance) switch_instance.$$.fragment.i(local);
      current = true;
    },
    o: function o(local) {
      if (switch_instance) switch_instance.$$.fragment.o(local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) {
        detach$1(switch_instance_anchor);
      }

      if (switch_instance) switch_instance.$destroy(detaching);
    }
  };
} // (24:0) {#if Component && Component !== Default}


function create_if_block(ctx) {
  var await_block_anchor, promise, current;
  var info = {
    ctx: ctx,
    current: null,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block,
    value: 'Result',
    error: 'null',
    blocks: Array(3)
  };
  handle_promise(promise = ctx.Component(), info);
  return {
    c: function c() {
      await_block_anchor = empty();
      info.block.c();
    },
    l: function l(nodes) {
      await_block_anchor = empty();
      info.block.l(nodes);
    },
    m: function m(target, anchor) {
      insert(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);

      info.mount = function () {
        return await_block_anchor.parentNode;
      };

      info.anchor = await_block_anchor;
      current = true;
    },
    p: function p(changed, new_ctx) {
      ctx = new_ctx;
      info.ctx = ctx;

      if ('Component' in changed && promise !== (promise = ctx.Component()) && handle_promise(promise, info)) ; else {
        info.block.p(changed, assign(assign({}, ctx), info.resolved));
      }
    },
    i: function i(local) {
      if (current) return;
      info.block.i();
      current = true;
    },
    o: function o(local) {
      for (var i = 0; i < 3; i += 1) {
        var block = info.blocks[i];
        if (block) block.o();
      }

      current = false;
    },
    d: function d(detaching) {
      if (detaching) {
        detach$1(await_block_anchor);
      }

      info.block.d(detaching);
      info = null;
    }
  };
} // (1:0) <script>   import Loadable from 'svelte-loadable'   import dimensions from '../stores/dimensions'    export let Default   export let Mobile   export let Desktop   export let props    export let widthThreshhold = 500   export let heightThreshhold = null    $: width = $dimensions.width   $: height = $dimensions.height    let Component = Default   $: {     if (widthThreshhold && width < widthThreshhold ) Component = Mobile     else if (heightThreshhold && height < heightThreshhold ) Component = Mobile     else Component = Desktop   }


function create_catch_block(ctx) {
  return {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
} // (27:2) {:then Result}


function create_then_block(ctx) {
  var switch_instance_anchor, current;
  var switch_instance_spread_levels = [ctx.props];
  var switch_value = ctx.Result.default;

  function switch_props(ctx) {
    var switch_instance_props = {};

    for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }

    return {
      props: switch_instance_props
    };
  }

  if (switch_value) {
    var switch_instance = new switch_value(switch_props(ctx));
  }

  return {
    c: function c() {
      if (switch_instance) switch_instance.$$.fragment.c();
      switch_instance_anchor = empty();
    },
    l: function l(nodes) {
      if (switch_instance) switch_instance.$$.fragment.l(nodes);
      switch_instance_anchor = empty();
    },
    m: function m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }

      insert(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function p(changed, ctx) {
      var switch_instance_changes = changed.props ? get_spread_update(switch_instance_spread_levels, [ctx.props]) : {};

      if (switch_value !== (switch_value = ctx.Result.default)) {
        if (switch_instance) {
          group_outros();
          var old_component = switch_instance;
          on_outro(function () {
            old_component.$destroy();
          });
          old_component.$$.fragment.o(1);
          check_outros();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
          switch_instance.$$.fragment.c();
          switch_instance.$$.fragment.i(1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i: function i(local) {
      if (current) return;
      if (switch_instance) switch_instance.$$.fragment.i(local);
      current = true;
    },
    o: function o(local) {
      if (switch_instance) switch_instance.$$.fragment.o(local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) {
        detach$1(switch_instance_anchor);
      }

      if (switch_instance) switch_instance.$destroy(detaching);
    }
  };
} // (25:22)      <svelte:component this={Default}


function create_pending_block(ctx) {
  var switch_instance_anchor, current;
  var switch_instance_spread_levels = [ctx.props];
  var switch_value = ctx.Default;

  function switch_props(ctx) {
    var switch_instance_props = {};

    for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }

    return {
      props: switch_instance_props
    };
  }

  if (switch_value) {
    var switch_instance = new switch_value(switch_props(ctx));
  }

  return {
    c: function c() {
      if (switch_instance) switch_instance.$$.fragment.c();
      switch_instance_anchor = empty();
    },
    l: function l(nodes) {
      if (switch_instance) switch_instance.$$.fragment.l(nodes);
      switch_instance_anchor = empty();
    },
    m: function m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }

      insert(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function p(changed, ctx) {
      var switch_instance_changes = changed.props ? get_spread_update(switch_instance_spread_levels, [ctx.props]) : {};

      if (switch_value !== (switch_value = ctx.Default)) {
        if (switch_instance) {
          group_outros();
          var old_component = switch_instance;
          on_outro(function () {
            old_component.$destroy();
          });
          old_component.$$.fragment.o(1);
          check_outros();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
          switch_instance.$$.fragment.c();
          switch_instance.$$.fragment.i(1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i: function i(local) {
      if (current) return;
      if (switch_instance) switch_instance.$$.fragment.i(local);
      current = true;
    },
    o: function o(local) {
      if (switch_instance) switch_instance.$$.fragment.o(local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) {
        detach$1(switch_instance_anchor);
      }

      if (switch_instance) switch_instance.$destroy(detaching);
    }
  };
}

function create_fragment(ctx) {
  var current_block_type_index, if_block, if_block_anchor, current;
  var if_block_creators = [create_if_block, create_else_block];
  var if_blocks = [];

  function select_block_type(ctx) {
    if (ctx.Component && ctx.Component !== ctx.Default) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c: function c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l: function l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p: function p(changed, ctx) {
      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(changed, ctx);
      } else {
        group_outros();
        on_outro(function () {
          if_blocks[previous_block_index].d(1);
          if_blocks[previous_block_index] = null;
        });
        if_block.o(1);
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        }

        if_block.i(1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function i(local) {
      if (current) return;
      if (if_block) if_block.i();
      current = true;
    },
    o: function o(local) {
      if (if_block) if_block.o();
      current = false;
    },
    d: function d(detaching) {
      if_blocks[current_block_type_index].d(detaching);

      if (detaching) {
        detach$1(if_block_anchor);
      }
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var $dimensions;
  subscribe($$self, dimensions, function ($$value) {
    $dimensions = $$value;
    $$invalidate('$dimensions', $dimensions);
  });
  var Default = $$props.Default,
      Mobile = $$props.Mobile,
      Desktop = $$props.Desktop,
      props = $$props.props,
      _$$props$widthThreshh = $$props.widthThreshhold,
      widthThreshhold = _$$props$widthThreshh === void 0 ? 500 : _$$props$widthThreshh,
      _$$props$heightThresh = $$props.heightThreshhold,
      heightThreshhold = _$$props$heightThresh === void 0 ? null : _$$props$heightThresh;
  var Component = Default;

  $$self.$set = function ($$props) {
    if ('Default' in $$props) $$invalidate('Default', Default = $$props.Default);
    if ('Mobile' in $$props) $$invalidate('Mobile', Mobile = $$props.Mobile);
    if ('Desktop' in $$props) $$invalidate('Desktop', Desktop = $$props.Desktop);
    if ('props' in $$props) $$invalidate('props', props = $$props.props);
    if ('widthThreshhold' in $$props) $$invalidate('widthThreshhold', widthThreshhold = $$props.widthThreshhold);
    if ('heightThreshhold' in $$props) $$invalidate('heightThreshhold', heightThreshhold = $$props.heightThreshhold);
  };

  var width, height;

  $$self.$$.update = function () {
    var $$dirty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      $dimensions: 1,
      widthThreshhold: 1,
      width: 1,
      Mobile: 1,
      heightThreshhold: 1,
      height: 1,
      Desktop: 1
    };

    if ($$dirty.$dimensions) {
      $$invalidate('width', width = $dimensions.width);
    }

    if ($$dirty.$dimensions) {
      $$invalidate('height', height = $dimensions.height);
    }

    if ($$dirty.widthThreshhold || $$dirty.width || $$dirty.Mobile || $$dirty.heightThreshhold || $$dirty.height || $$dirty.Desktop) {
      {
        if (widthThreshhold && width < widthThreshhold) $$invalidate('Component', Component = Mobile);else if (heightThreshhold && height < heightThreshhold) $$invalidate('Component', Component = Mobile);else $$invalidate('Component', Component = Desktop);
      }
    }
  };

  return {
    Default: Default,
    Mobile: Mobile,
    Desktop: Desktop,
    props: props,
    widthThreshhold: widthThreshhold,
    heightThreshhold: heightThreshhold,
    Component: Component
  };
}

var DimensionAware =
/*#__PURE__*/
function (_SvelteComponent) {
  _inherits(DimensionAware, _SvelteComponent);

  function DimensionAware(options) {
    var _this;

    _classCallCheck(this, DimensionAware);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DimensionAware).call(this));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, ["Default", "Mobile", "Desktop", "props", "widthThreshhold", "heightThreshhold"]);
    return _this;
  }

  return DimensionAware;
}(SvelteComponent);

function create_fragment$1(ctx) {
  var div, button, current, dispose;
  var default_slot_1 = ctx.$$slots.default;
  var default_slot = create_slot(default_slot_1, ctx, null);
  return {
    c: function c() {
      div = element("div");
      button = element("button");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function l(nodes) {
      div = claim_element(nodes, "DIV", {}, false);
      var div_nodes = children(div);
      button = claim_element(div_nodes, "BUTTON", {
        class: true
      }, false);
      var button_nodes = children(button);
      if (default_slot) default_slot.l(button_nodes);
      button_nodes.forEach(detach$1);
      div_nodes.forEach(detach$1);
      this.h();
    },
    h: function h() {
      button.className = "button svelte-67owpm";
      dispose = listen(button, "click", ctx.onClick);
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);
      append(div, button);

      if (default_slot) {
        default_slot.m(button, null);
      }

      current = true;
    },
    p: function p(changed, ctx) {
      if (default_slot && default_slot.p && changed.$$scope) {
        default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
      }
    },
    i: function i(local) {
      if (current) return;
      if (default_slot && default_slot.i) default_slot.i(local);
      current = true;
    },
    o: function o(local) {
      if (default_slot && default_slot.o) default_slot.o(local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) {
        detach$1(div);
      }

      if (default_slot) default_slot.d(detaching);
      dispose();
    }
  };
}

function instance$1($$self, $$props, $$invalidate) {
  var dispatch = createEventDispatcher();

  var onClick = function onClick() {
    return dispatch('click');
  };

  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;

  $$self.$set = function ($$props) {
    if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
  };

  return {
    onClick: onClick,
    $$slots: $$slots,
    $$scope: $$scope
  };
}

var FlatButton =
/*#__PURE__*/
function (_SvelteComponent) {
  _inherits(FlatButton, _SvelteComponent);

  function FlatButton(options) {
    var _this;

    _classCallCheck(this, FlatButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FlatButton).call(this));
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, []);
    return _this;
  }

  return FlatButton;
}(SvelteComponent);

function create_default_slot(ctx) {
  var current;
  var menuicon = new MenuIcon({
    props: {
      alt: "open navigation"
    }
  });
  return {
    c: function c() {
      menuicon.$$.fragment.c();
    },
    l: function l(nodes) {
      menuicon.$$.fragment.l(nodes);
    },
    m: function m(target, anchor) {
      mount_component(menuicon, target, anchor);
      current = true;
    },
    p: noop,
    i: function i(local) {
      if (current) return;
      menuicon.$$.fragment.i(local);
      current = true;
    },
    o: function o(local) {
      menuicon.$$.fragment.o(local);
      current = false;
    },
    d: function d(detaching) {
      menuicon.$destroy(detaching);
    }
  };
}

function create_fragment$2(ctx) {
  var div, current;
  var flatbutton = new FlatButton({
    props: {
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  flatbutton.$on("click", ctx.onMenu);
  return {
    c: function c() {
      div = element("div");
      flatbutton.$$.fragment.c();
      this.h();
    },
    l: function l(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      }, false);
      var div_nodes = children(div);
      flatbutton.$$.fragment.l(div_nodes);
      div_nodes.forEach(detach$1);
      this.h();
    },
    h: function h() {
      div.className = "container nav-icon svelte-vbzpg2";
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);
      mount_component(flatbutton, div, null);
      current = true;
    },
    p: function p(changed, ctx) {
      var flatbutton_changes = {};
      if (changed.$$scope) flatbutton_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      flatbutton.$set(flatbutton_changes);
    },
    i: function i(local) {
      if (current) return;
      flatbutton.$$.fragment.i(local);
      current = true;
    },
    o: function o(local) {
      flatbutton.$$.fragment.o(local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) {
        detach$1(div);
      }

      flatbutton.$destroy();
    }
  };
}

function instance$2($$self) {
  var dispatch = createEventDispatcher();

  var onMenu = function onMenu() {
    return dispatch('menu');
  };

  return {
    onMenu: onMenu
  };
}

var ToolbarMobile =
/*#__PURE__*/
function (_SvelteComponent) {
  _inherits(ToolbarMobile, _SvelteComponent);

  function ToolbarMobile(options) {
    var _this;

    _classCallCheck(this, ToolbarMobile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ToolbarMobile).call(this));
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, []);
    return _this;
  }

  return ToolbarMobile;
}(SvelteComponent);

function create_if_block$1(ctx) {
  var div0, t, div1, current, dispose;
  var default_slot_1 = ctx.$$slots.default;
  var default_slot = create_slot(default_slot_1, ctx, null);
  return {
    c: function c() {
      div0 = element("div");
      t = space();
      div1 = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function l(nodes) {
      div0 = claim_element(nodes, "DIV", {
        class: true
      }, false);
      var div0_nodes = children(div0);
      div0_nodes.forEach(detach$1);
      t = claim_text(nodes, "\n\t");
      div1 = claim_element(nodes, "DIV", {
        class: true
      }, false);
      var div1_nodes = children(div1);
      if (default_slot) default_slot.l(div1_nodes);
      div1_nodes.forEach(detach$1);
      this.h();
    },
    h: function h() {
      div0.className = "overlay mask svelte-1usk1hu";
      div1.className = "overlay container svelte-1usk1hu";
      dispose = listen(div0, "click", ctx.onClose);
    },
    m: function m(target, anchor) {
      insert(target, div0, anchor);
      insert(target, t, anchor);
      insert(target, div1, anchor);

      if (default_slot) {
        default_slot.m(div1, null);
      }

      current = true;
    },
    p: function p(changed, ctx) {
      if (default_slot && default_slot.p && changed.$$scope) {
        default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
      }
    },
    i: function i(local) {
      if (current) return;
      if (default_slot && default_slot.i) default_slot.i(local);
      current = true;
    },
    o: function o(local) {
      if (default_slot && default_slot.o) default_slot.o(local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) {
        detach$1(div0);
        detach$1(t);
        detach$1(div1);
      }

      if (default_slot) default_slot.d(detaching);
      dispose();
    }
  };
}

function create_fragment$3(ctx) {
  var if_block_anchor, current;
  var if_block = ctx.open && create_if_block$1(ctx);
  return {
    c: function c() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l: function l(nodes) {
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function m(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p: function p(changed, ctx) {
      if (ctx.open) {
        if (if_block) {
          if_block.p(changed, ctx);
          if_block.i(1);
        } else {
          if_block = create_if_block$1(ctx);
          if_block.c();
          if_block.i(1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        on_outro(function () {
          if_block.d(1);
          if_block = null;
        });
        if_block.o(1);
        check_outros();
      }
    },
    i: function i(local) {
      if (current) return;
      if (if_block) if_block.i();
      current = true;
    },
    o: function o(local) {
      if (if_block) if_block.o();
      current = false;
    },
    d: function d(detaching) {
      if (if_block) if_block.d(detaching);

      if (detaching) {
        detach$1(if_block_anchor);
      }
    }
  };
}

function instance$3($$self, $$props, $$invalidate) {
  var _$$props$open = $$props.open,
      open = _$$props$open === void 0 ? false : _$$props$open;
  var dispatch = createEventDispatcher();

  var onClose = function onClose() {
    return dispatch('close');
  };

  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;

  $$self.$set = function ($$props) {
    if ('open' in $$props) $$invalidate('open', open = $$props.open);
    if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
  };

  return {
    open: open,
    onClose: onClose,
    $$slots: $$slots,
    $$scope: $$scope
  };
}

var Drawer =
/*#__PURE__*/
function (_SvelteComponent) {
  _inherits(Drawer, _SvelteComponent);

  function Drawer(options) {
    var _this;

    _classCallCheck(this, Drawer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Drawer).call(this));
    init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, ["open"]);
    return _this;
  }

  return Drawer;
}(SvelteComponent);

function get_each_context(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.path = list[i].path;
  child_ctx.icon = list[i].icon;
  child_ctx.title = list[i].title;
  return child_ctx;
} // (16:2) {#each menuRoutes as { path, icon, title }


function create_each_block(key_1, ctx) {
  var a,
      div0,
      t0,
      div1,
      t1_value = ctx.title,
      t1,
      div1_href_value,
      t2,
      a_href_value,
      a_alt_value,
      current,
      dispose;
  var switch_value = ctx.icon;

  function switch_props(ctx) {
    return {};
  }

  if (switch_value) {
    var switch_instance = new switch_value(switch_props(ctx));
  }

  return {
    key: key_1,
    first: null,
    c: function c() {
      a = element("a");
      div0 = element("div");
      if (switch_instance) switch_instance.$$.fragment.c();
      t0 = space();
      div1 = element("div");
      t1 = text(t1_value);
      t2 = space();
      this.h();
    },
    l: function l(nodes) {
      a = claim_element(nodes, "A", {
        href: true,
        alt: true,
        class: true
      }, false);
      var a_nodes = children(a);
      div0 = claim_element(a_nodes, "DIV", {
        class: true
      }, false);
      var div0_nodes = children(div0);
      if (switch_instance) switch_instance.$$.fragment.l(div0_nodes);
      div0_nodes.forEach(detach$1);
      t0 = claim_text(a_nodes, "\n\t\t\t\t");
      div1 = claim_element(a_nodes, "DIV", {
        class: true,
        href: true
      }, false);
      var div1_nodes = children(div1);
      t1 = claim_text(div1_nodes, t1_value);
      div1_nodes.forEach(detach$1);
      t2 = claim_text(a_nodes, "\n\t\t\t");
      a_nodes.forEach(detach$1);
      this.h();
    },
    h: function h() {
      div0.className = "item-icon svelte-11qz7r9";
      div1.className = "item-title";
      attr(div1, "href", div1_href_value = ctx.path);
      a.href = a_href_value = ctx.path;
      attr(a, "alt", a_alt_value = ctx.title);
      a.className = "item-container svelte-11qz7r9";
      toggle_class(a, "selected", ctx.segment === ctx.path);
      dispose = listen(a, "click", ctx.toggleMenu);
      this.first = a;
    },
    m: function m(target, anchor) {
      insert(target, a, anchor);
      append(a, div0);

      if (switch_instance) {
        mount_component(switch_instance, div0, null);
      }

      append(a, t0);
      append(a, div1);
      append(div1, t1);
      append(a, t2);
      current = true;
    },
    p: function p(changed, ctx) {
      if (switch_value !== (switch_value = ctx.icon)) {
        if (switch_instance) {
          group_outros();
          var old_component = switch_instance;
          on_outro(function () {
            old_component.$destroy();
          });
          old_component.$$.fragment.o(1);
          check_outros();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
          switch_instance.$$.fragment.c();
          switch_instance.$$.fragment.i(1);
          mount_component(switch_instance, div0, null);
        } else {
          switch_instance = null;
        }
      }

      if (changed.segment || changed.menuRoutes) {
        toggle_class(a, "selected", ctx.segment === ctx.path);
      }
    },
    i: function i(local) {
      if (current) return;
      if (switch_instance) switch_instance.$$.fragment.i(local);
      current = true;
    },
    o: function o(local) {
      if (switch_instance) switch_instance.$$.fragment.o(local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) {
        detach$1(a);
      }

      if (switch_instance) switch_instance.$destroy();
      dispose();
    }
  };
} // (14:0) <Drawer open={menuOpen} on:close={toggleMenu}>


function create_default_slot$1(ctx) {
  var nav,
      each_blocks = [],
      each_1_lookup = new Map(),
      current;
  var each_value = menuRoutes;

  var get_key = function get_key(ctx) {
    return ctx.path;
  };

  for (var i = 0; i < each_value.length; i += 1) {
    var child_ctx = get_each_context(ctx, each_value, i);
    var key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }

  return {
    c: function c() {
      nav = element("nav");

      for (i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      this.h();
    },
    l: function l(nodes) {
      nav = claim_element(nodes, "NAV", {
        class: true
      }, false);
      var nav_nodes = children(nav);

      for (i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nav_nodes);
      }

      nav_nodes.forEach(detach$1);
      this.h();
    },
    h: function h() {
      nav.className = "container svelte-11qz7r9";
    },
    m: function m(target, anchor) {
      insert(target, nav, anchor);

      for (i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(nav, null);
      }

      current = true;
    },
    p: function p(changed, ctx) {
      var each_value = menuRoutes;
      group_outros();
      each_blocks = update_keyed_each(each_blocks, changed, get_key, 1, ctx, each_value, each_1_lookup, nav, outro_and_destroy_block, create_each_block, null, get_each_context);
      check_outros();
    },
    i: function i(local) {
      if (current) return;

      for (var i = 0; i < each_value.length; i += 1) {
        each_blocks[i].i();
      }

      current = true;
    },
    o: function o(local) {
      for (i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].o();
      }

      current = false;
    },
    d: function d(detaching) {
      if (detaching) {
        detach$1(nav);
      }

      for (i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
    }
  };
}

function create_fragment$4(ctx) {
  var t, current;
  var toolbar = new ToolbarMobile({});
  toolbar.$on("menu", ctx.toggleMenu);
  var drawer = new Drawer({
    props: {
      open: ctx.menuOpen,
      $$slots: {
        default: [create_default_slot$1]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  drawer.$on("close", ctx.toggleMenu);
  return {
    c: function c() {
      toolbar.$$.fragment.c();
      t = space();
      drawer.$$.fragment.c();
    },
    l: function l(nodes) {
      toolbar.$$.fragment.l(nodes);
      t = claim_text(nodes, "\n\n");
      drawer.$$.fragment.l(nodes);
    },
    m: function m(target, anchor) {
      mount_component(toolbar, target, anchor);
      insert(target, t, anchor);
      mount_component(drawer, target, anchor);
      current = true;
    },
    p: function p(changed, ctx) {
      var drawer_changes = {};
      if (changed.menuOpen) drawer_changes.open = ctx.menuOpen;
      if (changed.$$scope || changed.segment) drawer_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      drawer.$set(drawer_changes);
    },
    i: function i(local) {
      if (current) return;
      toolbar.$$.fragment.i(local);
      drawer.$$.fragment.i(local);
      current = true;
    },
    o: function o(local) {
      toolbar.$$.fragment.o(local);
      drawer.$$.fragment.o(local);
      current = false;
    },
    d: function d(detaching) {
      toolbar.$destroy(detaching);

      if (detaching) {
        detach$1(t);
      }

      drawer.$destroy(detaching);
    }
  };
}

function instance$4($$self, $$props, $$invalidate) {
  var _$$props$segment = $$props.segment,
      segment = _$$props$segment === void 0 ? '' : _$$props$segment;
  var menuOpen = false;

  var toggleMenu = function toggleMenu() {
    $$invalidate('menuOpen', menuOpen = !menuOpen);
  };

  $$self.$set = function ($$props) {
    if ('segment' in $$props) $$invalidate('segment', segment = $$props.segment);
  };

  return {
    segment: segment,
    menuOpen: menuOpen,
    toggleMenu: toggleMenu
  };
}

var NavMobile =
/*#__PURE__*/
function (_SvelteComponent) {
  _inherits(NavMobile, _SvelteComponent);

  function NavMobile(options) {
    var _this;

    _classCallCheck(this, NavMobile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavMobile).call(this));
    init(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, ["segment"]);
    return _this;
  }

  return NavMobile;
}(SvelteComponent);

function create_fragment$5(ctx) {
  var t, main, current;
  var dimensionaware = new DimensionAware({
    props: {
      Default: NavMobile,
      Desktop: func,
      props: {
        segment: ctx.segment
      }
    }
  });
  var default_slot_1 = ctx.$$slots.default;
  var default_slot = create_slot(default_slot_1, ctx, null);
  return {
    c: function c() {
      dimensionaware.$$.fragment.c();
      t = space();
      main = element("main");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function l(nodes) {
      dimensionaware.$$.fragment.l(nodes);
      t = claim_text(nodes, "\n\n");
      main = claim_element(nodes, "MAIN", {
        class: true
      }, false);
      var main_nodes = children(main);
      if (default_slot) default_slot.l(main_nodes);
      main_nodes.forEach(detach$1);
      this.h();
    },
    h: function h() {
      main.className = "svelte-1b1evn7";
    },
    m: function m(target, anchor) {
      mount_component(dimensionaware, target, anchor);
      insert(target, t, anchor);
      insert(target, main, anchor);

      if (default_slot) {
        default_slot.m(main, null);
      }

      current = true;
    },
    p: function p(changed, ctx) {
      var dimensionaware_changes = {};
      if (changed.NavMobile) dimensionaware_changes.Default = NavMobile;
      if (changed.segment) dimensionaware_changes.props = {
        segment: ctx.segment
      };
      dimensionaware.$set(dimensionaware_changes);

      if (default_slot && default_slot.p && changed.$$scope) {
        default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
      }
    },
    i: function i(local) {
      if (current) return;
      dimensionaware.$$.fragment.i(local);
      if (default_slot && default_slot.i) default_slot.i(local);
      current = true;
    },
    o: function o(local) {
      dimensionaware.$$.fragment.o(local);
      if (default_slot && default_slot.o) default_slot.o(local);
      current = false;
    },
    d: function d(detaching) {
      dimensionaware.$destroy(detaching);

      if (detaching) {
        detach$1(t);
        detach$1(main);
      }

      if (default_slot) default_slot.d(detaching);
    }
  };
}

function func() {
  return import('./NavDesktop.d1a5e487.js');
}

function instance$5($$self, $$props, $$invalidate) {
  var segment = $$props.segment;
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;

  $$self.$set = function ($$props) {
    if ('segment' in $$props) $$invalidate('segment', segment = $$props.segment);
    if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
  };

  return {
    segment: segment,
    $$slots: $$slots,
    $$scope: $$scope
  };
}

var Layout =
/*#__PURE__*/
function (_SvelteComponent) {
  _inherits(Layout, _SvelteComponent);

  function Layout(options) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Layout).call(this));
    init(_assertThisInitialized(_this), options, instance$5, create_fragment$5, safe_not_equal, ["segment"]);
    return _this;
  }

  return Layout;
}(SvelteComponent);

function create_if_block$2(ctx) {
  var pre,
      t_value = ctx.error.stack,
      t;
  return {
    c: function c() {
      pre = element("pre");
      t = text(t_value);
    },
    l: function l(nodes) {
      pre = claim_element(nodes, "PRE", {}, false);
      var pre_nodes = children(pre);
      t = claim_text(pre_nodes, t_value);
      pre_nodes.forEach(detach$1);
    },
    m: function m(target, anchor) {
      insert(target, pre, anchor);
      append(pre, t);
    },
    p: function p(changed, ctx) {
      if (changed.error && t_value !== (t_value = ctx.error.stack)) {
        set_data(t, t_value);
      }
    },
    d: function d(detaching) {
      if (detaching) {
        detach$1(pre);
      }
    }
  };
}

function create_fragment$6(ctx) {
  var title_value,
      t0,
      h1,
      t1,
      t2,
      p,
      t3_value = ctx.error.message,
      t3,
      t4,
      if_block_anchor;
  document.title = title_value = ctx.status;
  var if_block = ctx.dev && ctx.error.stack && create_if_block$2(ctx);
  return {
    c: function c() {
      t0 = space();
      h1 = element("h1");
      t1 = text(ctx.status);
      t2 = space();
      p = element("p");
      t3 = text(t3_value);
      t4 = space();
      if (if_block) if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l: function l(nodes) {
      t0 = claim_text(nodes, "\n\n");
      h1 = claim_element(nodes, "H1", {
        class: true
      }, false);
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, ctx.status);
      h1_nodes.forEach(detach$1);
      t2 = claim_text(nodes, "\n\n");
      p = claim_element(nodes, "P", {
        class: true
      }, false);
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, t3_value);
      p_nodes.forEach(detach$1);
      t4 = claim_text(nodes, "\n\n");
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h: function h() {
      h1.className = "svelte-8od9u6";
      p.className = "svelte-8od9u6";
    },
    m: function m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, h1, anchor);
      append(h1, t1);
      insert(target, t2, anchor);
      insert(target, p, anchor);
      append(p, t3);
      insert(target, t4, anchor);
      if (if_block) if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p: function p(changed, ctx) {
      if (changed.status && title_value !== (title_value = ctx.status)) {
        document.title = title_value;
      }

      if (changed.status) {
        set_data(t1, ctx.status);
      }

      if (changed.error && t3_value !== (t3_value = ctx.error.message)) {
        set_data(t3, t3_value);
      }

      if (ctx.dev && ctx.error.stack) {
        if (if_block) {
          if_block.p(changed, ctx);
        } else {
          if_block = create_if_block$2(ctx);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) {
        detach$1(t0);
        detach$1(h1);
        detach$1(t2);
        detach$1(p);
        detach$1(t4);
      }

      if (if_block) if_block.d(detaching);

      if (detaching) {
        detach$1(if_block_anchor);
      }
    }
  };
}

function instance$6($$self, $$props, $$invalidate) {
  var status = $$props.status,
      error = $$props.error;
  var dev = undefined === 'development';

  $$self.$set = function ($$props) {
    if ('status' in $$props) $$invalidate('status', status = $$props.status);
    if ('error' in $$props) $$invalidate('error', error = $$props.error);
  };

  return {
    status: status,
    error: error,
    dev: dev
  };
}

var Error$1 =
/*#__PURE__*/
function (_SvelteComponent) {
  _inherits(Error, _SvelteComponent);

  function Error(options) {
    var _this;

    _classCallCheck(this, Error);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Error).call(this));
    init(_assertThisInitialized(_this), options, instance$6, create_fragment$6, safe_not_equal, ["status", "error"]);
    return _this;
  }

  return Error;
}(SvelteComponent);

function create_else_block$1(ctx) {
  var switch_instance_anchor, current;
  var switch_instance_spread_levels = [ctx.level1.props];
  var switch_value = ctx.level1.component;

  function switch_props(ctx) {
    var switch_instance_props = {};

    for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }

    return {
      props: switch_instance_props
    };
  }

  if (switch_value) {
    var switch_instance = new switch_value(switch_props(ctx));
  }

  return {
    c: function c() {
      if (switch_instance) switch_instance.$$.fragment.c();
      switch_instance_anchor = empty();
    },
    l: function l(nodes) {
      if (switch_instance) switch_instance.$$.fragment.l(nodes);
      switch_instance_anchor = empty();
    },
    m: function m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }

      insert(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function p(changed, ctx) {
      var switch_instance_changes = changed.level1 ? get_spread_update(switch_instance_spread_levels, [ctx.level1.props]) : {};

      if (switch_value !== (switch_value = ctx.level1.component)) {
        if (switch_instance) {
          group_outros();
          var old_component = switch_instance;
          on_outro(function () {
            old_component.$destroy();
          });
          old_component.$$.fragment.o(1);
          check_outros();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
          switch_instance.$$.fragment.c();
          switch_instance.$$.fragment.i(1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i: function i(local) {
      if (current) return;
      if (switch_instance) switch_instance.$$.fragment.i(local);
      current = true;
    },
    o: function o(local) {
      if (switch_instance) switch_instance.$$.fragment.o(local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) {
        detach$1(switch_instance_anchor);
      }

      if (switch_instance) switch_instance.$destroy(detaching);
    }
  };
} // (19:1) {#if error}


function create_if_block$3(ctx) {
  var current;
  var error_1 = new Error$1({
    props: {
      error: ctx.error,
      status: ctx.status
    }
  });
  return {
    c: function c() {
      error_1.$$.fragment.c();
    },
    l: function l(nodes) {
      error_1.$$.fragment.l(nodes);
    },
    m: function m(target, anchor) {
      mount_component(error_1, target, anchor);
      current = true;
    },
    p: function p(changed, ctx) {
      var error_1_changes = {};
      if (changed.error) error_1_changes.error = ctx.error;
      if (changed.status) error_1_changes.status = ctx.status;
      error_1.$set(error_1_changes);
    },
    i: function i(local) {
      if (current) return;
      error_1.$$.fragment.i(local);
      current = true;
    },
    o: function o(local) {
      error_1.$$.fragment.o(local);
      current = false;
    },
    d: function d(detaching) {
      error_1.$destroy(detaching);
    }
  };
} // (18:0) <Layout segment="{segments[0]}" {...level0.props}>


function create_default_slot$2(ctx) {
  var current_block_type_index, if_block, if_block_anchor, current;
  var if_block_creators = [create_if_block$3, create_else_block$1];
  var if_blocks = [];

  function select_block_type(ctx) {
    if (ctx.error) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c: function c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l: function l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p: function p(changed, ctx) {
      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(changed, ctx);
      } else {
        group_outros();
        on_outro(function () {
          if_blocks[previous_block_index].d(1);
          if_blocks[previous_block_index] = null;
        });
        if_block.o(1);
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        }

        if_block.i(1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function i(local) {
      if (current) return;
      if (if_block) if_block.i();
      current = true;
    },
    o: function o(local) {
      if (if_block) if_block.o();
      current = false;
    },
    d: function d(detaching) {
      if_blocks[current_block_type_index].d(detaching);

      if (detaching) {
        detach$1(if_block_anchor);
      }
    }
  };
}

function create_fragment$7(ctx) {
  var current;
  var layout_spread_levels = [{
    segment: ctx.segments[0]
  }, ctx.level0.props];
  var layout_props = {
    $$slots: {
      default: [create_default_slot$2]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < layout_spread_levels.length; i += 1) {
    layout_props = assign(layout_props, layout_spread_levels[i]);
  }

  var layout = new Layout({
    props: layout_props
  });
  return {
    c: function c() {
      layout.$$.fragment.c();
    },
    l: function l(nodes) {
      layout.$$.fragment.l(nodes);
    },
    m: function m(target, anchor) {
      mount_component(layout, target, anchor);
      current = true;
    },
    p: function p(changed, ctx) {
      var layout_changes = changed.segments || changed.level0 ? get_spread_update(layout_spread_levels, [changed.segments && {
        segment: ctx.segments[0]
      }, changed.level0 && ctx.level0.props]) : {};
      if (changed.$$scope || changed.error || changed.status || changed.level1) layout_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      layout.$set(layout_changes);
    },
    i: function i(local) {
      if (current) return;
      layout.$$.fragment.i(local);
      current = true;
    },
    o: function o(local) {
      layout.$$.fragment.o(local);
      current = false;
    },
    d: function d(detaching) {
      layout.$destroy(detaching);
    }
  };
}

function instance$7($$self, $$props, $$invalidate) {
  var stores = $$props.stores,
      error = $$props.error,
      status = $$props.status,
      segments = $$props.segments,
      level0 = $$props.level0,
      _$$props$level = $$props.level1,
      level1 = _$$props$level === void 0 ? null : _$$props$level;
  setContext(CONTEXT_KEY, stores);

  $$self.$set = function ($$props) {
    if ('stores' in $$props) $$invalidate('stores', stores = $$props.stores);
    if ('error' in $$props) $$invalidate('error', error = $$props.error);
    if ('status' in $$props) $$invalidate('status', status = $$props.status);
    if ('segments' in $$props) $$invalidate('segments', segments = $$props.segments);
    if ('level0' in $$props) $$invalidate('level0', level0 = $$props.level0);
    if ('level1' in $$props) $$invalidate('level1', level1 = $$props.level1);
  };

  return {
    stores: stores,
    error: error,
    status: status,
    segments: segments,
    level0: level0,
    level1: level1
  };
}

var App =
/*#__PURE__*/
function (_SvelteComponent) {
  _inherits(App, _SvelteComponent);

  function App(options) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));
    init(_assertThisInitialized(_this), options, instance$7, create_fragment$7, safe_not_equal, ["stores", "error", "status", "segments", "level0", "level1"]);
    return _this;
  }

  return App;
}(SvelteComponent);

// This file is generated by Sapper — do not edit it!
var ignore = [/^\/blog.json$/, /^\/blog\/([^\/]+?).json$/];
var components = [{
  js: function js() {
    return import('./index.5fda1bec.js');
  },
  css: ["index.5fda1bec.css"]
}, {
  js: function js() {
    return import('./about.45fc2641.js');
  },
  css: []
}, {
  js: function js() {
    return import('./index.be47a912.js');
  },
  css: ["index.be47a912.css"]
}, {
  js: function js() {
    return import('./[slug].d175f853.js');
  },
  css: ["[slug].d175f853.css"]
}];
var routes = function (d) {
  return [{
    // index.svelte
    pattern: /^\/$/,
    parts: [{
      i: 0
    }]
  }, {
    // about.svelte
    pattern: /^\/about\/?$/,
    parts: [{
      i: 1
    }]
  }, {
    // blog/index.svelte
    pattern: /^\/blog\/?$/,
    parts: [{
      i: 2
    }]
  }, {
    // blog/[slug].svelte
    pattern: /^\/blog\/([^\/]+?)\/?$/,
    parts: [null, {
      i: 3,
      params: function params(match) {
        return {
          slug: d(match[1])
        };
      }
    }]
  }];
}(decodeURIComponent);

function goto(href) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    replaceState: false
  };
  var target = select_target(new URL(href, document.baseURI));

  if (target) {
    _history[opts.replaceState ? 'replaceState' : 'pushState']({
      id: cid
    }, '', href);

    return navigate(target, null).then(function () {});
  }

  location.href = href;
  return new Promise(function (f) {}); // never resolves
}

var initial_data = typeof __SAPPER__ !== 'undefined' && __SAPPER__;
var ready = false;
var root_component;
var current_token;
var root_preloaded;
var current_branch = [];
var current_query = '{}';
var stores = {
  page: writable({}),
  preloading: writable(null),
  session: writable(initial_data && initial_data.session)
};
var $session;
var session_dirty;
stores.session.subscribe(
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee(value) {
    var target, token, _ref2, redirect, props, branch;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            $session = value;

            if (ready) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            session_dirty = true;
            target = select_target(new URL(location.href));
            token = current_token = {};
            _context.next = 8;
            return hydrate_target(target);

          case 8:
            _ref2 = _context.sent;
            redirect = _ref2.redirect;
            props = _ref2.props;
            branch = _ref2.branch;

            if (!(token !== current_token)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return");

          case 14:
            _context.next = 16;
            return render(redirect, branch, props, target.page);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
var prefetching = null;

function set_prefetching(href, promise) {
  prefetching = {
    href: href,
    promise: promise
  };
}

var target;

function set_target(element) {
  target = element;
}

var uid = 1;

function set_uid(n) {
  uid = n;
}

var cid;

function set_cid(n) {
  cid = n;
}

var _history = typeof history !== 'undefined' ? history : {
  pushState: function pushState(state, title, href) {},
  replaceState: function replaceState(state, title, href) {},
  scrollRestoration: ''
};

var scroll_history = {};

function extract_query(search) {
  var query = Object.create(null);

  if (search.length > 0) {
    search.slice(1).split('&').forEach(function (searchParam) {
      var _$exec = /([^=]*)(?:=(.*))?/.exec(decodeURIComponent(searchParam.replace(/\+/g, ' '))),
          _$exec2 = _slicedToArray(_$exec, 3),
          key = _$exec2[1],
          _$exec2$ = _$exec2[2],
          value = _$exec2$ === void 0 ? '' : _$exec2$;

      if (typeof query[key] === 'string') query[key] = [query[key]];
      if (_typeof(query[key]) === 'object') query[key].push(value);else query[key] = value;
    });
  }

  return query;
}

function select_target(url) {
  if (url.origin !== location.origin) return null;
  if (!url.pathname.startsWith(initial_data.baseUrl)) return null;
  var path = url.pathname.slice(initial_data.baseUrl.length);

  if (path === '') {
    path = '/';
  } // avoid accidental clashes between server routes and page routes


  if (ignore.some(function (pattern) {
    return pattern.test(path);
  })) return;

  for (var i = 0; i < routes.length; i += 1) {
    var route = routes[i];
    var match = route.pattern.exec(path);

    if (match) {
      var query = extract_query(url.search);
      var part = route.parts[route.parts.length - 1];
      var params = part.params ? part.params(match) : {};
      var page = {
        path: path,
        query: query,
        params: params
      };
      return {
        href: url.href,
        route: route,
        match: match,
        page: page
      };
    }
  }
}

function handle_error(url) {
  var _location = location,
      pathname = _location.pathname,
      search = _location.search;
  var session = initial_data.session,
      preloaded = initial_data.preloaded,
      status = initial_data.status,
      error = initial_data.error;

  if (!root_preloaded) {
    root_preloaded = preloaded && preloaded[0];
  }

  var props = {
    error: error,
    status: status,
    session: session,
    level0: {
      props: root_preloaded
    },
    level1: {
      props: {
        status: status,
        error: error
      },
      component: Error$1
    },
    segments: preloaded
  };
  var query = extract_query(search);
  render(null, [], props, {
    path: pathname,
    query: query,
    params: {}
  });
}

function scroll_state() {
  return {
    x: pageXOffset,
    y: pageYOffset
  };
}

function navigate(_x2, _x3, _x4, _x5) {
  return _navigate.apply(this, arguments);
}

function _navigate() {
  _navigate = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee2(target, id, noscroll, hash) {
    var current_scroll, loaded, token, _ref3, redirect, props, branch, scroll, deep_linked;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (id) {
              // popstate or initial navigation
              cid = id;
            } else {
              current_scroll = scroll_state(); // clicked on a link. preserve scroll state

              scroll_history[cid] = current_scroll;
              id = cid = ++uid;
              scroll_history[cid] = noscroll ? current_scroll : {
                x: 0,
                y: 0
              };
            }

            cid = id;
            if (root_component) stores.preloading.set(true);
            loaded = prefetching && prefetching.href === target.href ? prefetching.promise : hydrate_target(target);
            prefetching = null;
            token = current_token = {};
            _context2.next = 8;
            return loaded;

          case 8:
            _ref3 = _context2.sent;
            redirect = _ref3.redirect;
            props = _ref3.props;
            branch = _ref3.branch;

            if (!(token !== current_token)) {
              _context2.next = 14;
              break;
            }

            return _context2.abrupt("return");

          case 14:
            _context2.next = 16;
            return render(redirect, branch, props, target.page);

          case 16:
            if (document.activeElement) document.activeElement.blur();

            if (!noscroll) {
              scroll = scroll_history[id];

              if (hash) {
                // scroll is an element id (from a hash), we need to compute y.
                deep_linked = document.getElementById(hash.slice(1));

                if (deep_linked) {
                  scroll = {
                    x: 0,
                    y: deep_linked.getBoundingClientRect().top
                  };
                }
              }

              scroll_history[cid] = scroll;
              if (scroll) scrollTo(scroll.x, scroll.y);
            }

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _navigate.apply(this, arguments);
}

function render(_x6, _x7, _x8, _x9) {
  return _render.apply(this, arguments);
}

function _render() {
  _render = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee3(redirect, branch, props, page) {
    var _start, end;

    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!redirect) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt("return", goto(redirect.location, {
              replaceState: true
            }));

          case 2:
            stores.page.set(page);
            stores.preloading.set(false);

            if (!root_component) {
              _context3.next = 8;
              break;
            }

            root_component.$set(props);
            _context3.next = 17;
            break;

          case 8:
            props.stores = {
              page: {
                subscribe: stores.page.subscribe
              },
              preloading: {
                subscribe: stores.preloading.subscribe
              },
              session: stores.session
            };
            _context3.next = 11;
            return root_preloaded;

          case 11:
            _context3.t0 = _context3.sent;
            props.level0 = {
              props: _context3.t0
            };
            // first load — remove SSR'd <head> contents
            _start = document.querySelector('#sapper-head-start');
            end = document.querySelector('#sapper-head-end');

            if (_start && end) {
              while (_start.nextSibling !== end) {
                detach(_start.nextSibling);
              }

              detach(_start);
              detach(end);
            }

            root_component = new App({
              target: target,
              props: props,
              hydrate: true
            });

          case 17:
            current_branch = branch;
            current_query = JSON.stringify(page.query);
            ready = true;
            session_dirty = false;

          case 21:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _render.apply(this, arguments);
}

function part_changed(i, segment, match, stringified_query) {
  // TODO only check query string changes for preload functions
  // that do in fact depend on it (using static analysis or
  // runtime instrumentation)
  if (stringified_query !== current_query) return true;
  var previous = current_branch[i];
  if (!previous) return false;
  if (segment !== previous.segment) return true;

  if (previous.match) {
    if (JSON.stringify(previous.match.slice(1, i + 2)) !== JSON.stringify(match.slice(1, i + 2))) {
      return true;
    }
  }
}

function hydrate_target(_x10) {
  return _hydrate_target.apply(this, arguments);
}

function _hydrate_target() {
  _hydrate_target = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee5(target) {
    var route, page, segments, _redirect, props, preload_context, branch, l, stringified_query, match, segment_dirty;

    return _regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            route = target.route, page = target.page;
            segments = page.path.split('/').filter(Boolean);
            _redirect = null;
            props = {
              error: null,
              status: 200,
              segments: [segments[0]]
            };
            preload_context = {
              fetch: function (_fetch) {
                function fetch(_x11, _x12) {
                  return _fetch.apply(this, arguments);
                }

                fetch.toString = function () {
                  return _fetch.toString();
                };

                return fetch;
              }(function (url, opts) {
                return fetch(url, opts);
              }),
              redirect: function redirect(statusCode, location) {
                if (_redirect && (_redirect.statusCode !== statusCode || _redirect.location !== location)) {
                  throw new Error("Conflicting redirects");
                }

                _redirect = {
                  statusCode: statusCode,
                  location: location
                };
              },
              error: function error(status, _error) {
                props.error = typeof _error === 'string' ? new Error(_error) : _error;
                props.status = status;
              }
            };

            if (!root_preloaded) {
              root_preloaded = initial_data.preloaded[0] || preload.call(preload_context, {
                path: page.path,
                query: page.query,
                params: {}
              }, $session);
            }

            l = 1;
            _context5.prev = 7;
            stringified_query = JSON.stringify(page.query);
            match = route.pattern.exec(page.path);
            segment_dirty = false;
            _context5.next = 13;
            return Promise.all(route.parts.map(
            /*#__PURE__*/
            function () {
              var _ref4 = _asyncToGenerator(
              /*#__PURE__*/
              _regeneratorRuntime.mark(function _callee4(part, i) {
                var segment, j, _ref5, component, preload, preloaded;

                return _regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        segment = segments[i];
                        if (part_changed(i, segment, match, stringified_query)) segment_dirty = true;
                        props.segments[l] = segments[i + 1]; // TODO make this less confusing

                        if (part) {
                          _context4.next = 5;
                          break;
                        }

                        return _context4.abrupt("return", {
                          segment: segment
                        });

                      case 5:
                        j = l++;

                        if (!(!session_dirty && !segment_dirty && current_branch[i] && current_branch[i].part === part.i)) {
                          _context4.next = 8;
                          break;
                        }

                        return _context4.abrupt("return", current_branch[i]);

                      case 8:
                        segment_dirty = false;
                        _context4.next = 11;
                        return load_component(components[part.i]);

                      case 11:
                        _ref5 = _context4.sent;
                        component = _ref5.default;
                        preload = _ref5.preload;

                        if (!(ready || !initial_data.preloaded[i + 1])) {
                          _context4.next = 25;
                          break;
                        }

                        if (!preload) {
                          _context4.next = 21;
                          break;
                        }

                        _context4.next = 18;
                        return preload.call(preload_context, {
                          path: page.path,
                          query: page.query,
                          params: part.params ? part.params(target.match) : {}
                        }, $session);

                      case 18:
                        _context4.t0 = _context4.sent;
                        _context4.next = 22;
                        break;

                      case 21:
                        _context4.t0 = {};

                      case 22:
                        preloaded = _context4.t0;
                        _context4.next = 26;
                        break;

                      case 25:
                        preloaded = initial_data.preloaded[i + 1];

                      case 26:
                        return _context4.abrupt("return", props["level".concat(j)] = {
                          component: component,
                          props: preloaded,
                          segment: segment,
                          match: match,
                          part: part.i
                        });

                      case 27:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x13, _x14) {
                return _ref4.apply(this, arguments);
              };
            }()));

          case 13:
            branch = _context5.sent;
            _context5.next = 21;
            break;

          case 16:
            _context5.prev = 16;
            _context5.t0 = _context5["catch"](7);
            props.error = _context5.t0;
            props.status = 500;
            branch = [];

          case 21:
            return _context5.abrupt("return", {
              redirect: _redirect,
              props: props,
              branch: branch
            });

          case 22:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[7, 16]]);
  }));
  return _hydrate_target.apply(this, arguments);
}

function load_css(chunk) {
  var href = "client/".concat(chunk);
  if (document.querySelector("link[href=\"".concat(href, "\"]"))) return;
  return new Promise(function (fulfil, reject) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;

    link.onload = function () {
      return fulfil();
    };

    link.onerror = reject;
    document.head.appendChild(link);
  });
}

function load_component(component) {
  // TODO this is temporary — once placeholders are
  // always rewritten, scratch the ternary
  var promises = typeof component.css === 'string' ? [] : component.css.map(load_css);
  promises.unshift(component.js());
  return Promise.all(promises).then(function (values) {
    return values[0];
  });
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function prefetch(href) {
  var target = select_target(new URL(href, document.baseURI));

  if (target) {
    if (!prefetching || href !== prefetching.href) {
      set_prefetching(href, hydrate_target(target));
    }

    return prefetching.promise;
  }
}

function start(opts) {
  if ('scrollRestoration' in _history) {
    _history.scrollRestoration = 'manual';
  }

  set_target(opts.target);
  addEventListener('click', handle_click);
  addEventListener('popstate', handle_popstate); // prefetch

  addEventListener('touchstart', trigger_prefetch);
  addEventListener('mousemove', handle_mousemove);
  return Promise.resolve().then(function () {
    var _location2 = location,
        hash = _location2.hash,
        href = _location2.href;

    _history.replaceState({
      id: uid
    }, '', href);

    var url = new URL(location.href);
    if (initial_data.error) return handle_error(url);
    var target = select_target(url);
    if (target) return navigate(target, uid, true, hash);
  });
}

var mousemove_timeout;

function handle_mousemove(event) {
  clearTimeout(mousemove_timeout);
  mousemove_timeout = setTimeout(function () {
    trigger_prefetch(event);
  }, 20);
}

function trigger_prefetch(event) {
  var a = find_anchor(event.target);
  if (!a || a.rel !== 'prefetch') return;
  prefetch(a.href);
}

function handle_click(event) {
  // Adapted from https://github.com/visionmedia/page.js
  // MIT license https://github.com/visionmedia/page.js#license
  if (which(event) !== 1) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey) return;
  if (event.defaultPrevented) return;
  var a = find_anchor(event.target);
  if (!a) return;
  if (!a.href) return; // check if link is inside an svg
  // in this case, both href and target are always inside an object

  var svg = _typeof(a.href) === 'object' && a.href.constructor.name === 'SVGAnimatedString';
  var href = String(svg ? a.href.baseVal : a.href);

  if (href === location.href) {
    if (!location.hash) event.preventDefault();
    return;
  } // Ignore if tag has
  // 1. 'download' attribute
  // 2. rel='external' attribute


  if (a.hasAttribute('download') || a.getAttribute('rel') === 'external') return; // Ignore if <a> has a target

  if (svg ? a.target.baseVal : a.target) return;
  var url = new URL(href); // Don't handle hash changes

  if (url.pathname === location.pathname && url.search === location.search) return;
  var target = select_target(url);

  if (target) {
    var noscroll = a.hasAttribute('sapper-noscroll');
    navigate(target, null, noscroll, url.hash);
    event.preventDefault();

    _history.pushState({
      id: cid
    }, '', url.href);
  }
}

function which(event) {
  return event.which === null ? event.button : event.which;
}

function find_anchor(node) {
  while (node && node.nodeName.toUpperCase() !== 'A') {
    node = node.parentNode;
  } // SVG <a> elements have a lowercase name


  return node;
}

function handle_popstate(event) {
  scroll_history[cid] = scroll_state();

  if (event.state) {
    var url = new URL(location.href);

    var _target = select_target(url);

    if (_target) {
      navigate(_target, event.state.id);
    } else {
      location.href = location.href;
    }
  } else {
    // hashchange
    set_uid(uid + 1);
    set_cid(uid);

    _history.replaceState({
      id: cid
    }, '', location.href);
  }
}

start({
  target: document.querySelector('#sapper')
});
//# sourceMappingURL=client.de07ad64.js.map
