import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, c as claim_element, a as children, b as claim_text, f as detach_dev, g as add_location, h as insert_hydration_dev, j as append_hydration_dev, n as noop } from './client.38617a5e.js';

/* src\routes\doggie-details.svelte generated by Svelte v3.55.1 */

const file = "src\\routes\\doggie-details.svelte";

function create_fragment(ctx) {
	let h1;
	let t;

	const block = {
		c: function create() {
			h1 = element("h1");
			t = text("welcome to the doggie details page");
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t = claim_text(h1_nodes, "welcome to the doggie details page");
			h1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 3, 0, 23);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, h1, anchor);
			append_hydration_dev(h1, t);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Doggie_details', slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Doggie_details> was created with unknown prop '${key}'`);
	});

	return [];
}

class Doggie_details extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Doggie_details",
			options,
			id: create_fragment.name
		});
	}
}

export { Doggie_details as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9nZ2llLWRldGFpbHMuNTA2MjNjZTkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZG9nZ2llLWRldGFpbHMuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XHJcbjwvc2NyaXB0PlxyXG5cclxuPGgxPndlbGNvbWUgdG8gdGhlIGRvZ2dpZSBkZXRhaWxzIHBhZ2U8L2gxPlxyXG48IS0tPHVsPi0tPlxyXG48IS0tICAgIHsjZWFjaCBkb2dnaWVzIGFzIGRvZ2dvfS0tPlxyXG48IS0tICAgICAgICA8bGk+e2RvZ2dvLm5hbWV9IC0ge2RvZ2dvLmVtYWlsfTwvbGk+LS0+XHJcbjwhLS0gICAgey9lYWNofS0tPlxyXG48IS0tPC91bD4tLT5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7WUFHSSxvQ0FBa0MsQ0FBQSxDQUFBOzs7Ozs7NEJBQWxDLG9DQUFrQyxDQUFBLENBQUE7Ozs7Ozs7O0dBQXRDLG9CQUEyQyxDQUFBLE1BQUEsRUFBQSxFQUFBLEVBQUEsTUFBQSxDQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
