import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, k as validate_each_argument, v as validate_slots, o as onMount, l as space, A as create_component, e as element, t as text, m as head_selector, f as detach_dev, p as claim_space, B as claim_component, c as claim_element, a as children, b as claim_text, g as add_location, q as attr_dev, C as set_style, r as src_url_equal, h as insert_hydration_dev, D as mount_component, j as append_hydration_dev, G as transition_in, H as transition_out, I as destroy_component, x as destroy_each, J as globals, w as listen_dev, z as set_data_dev, y as run_all } from './client.38617a5e.js';
import { M as Modal } from './Modal.f38ccd69.js';
import { T as Toast } from './Toast.0a10c4d3.js';

/* src\routes\admin\customers\index.svelte generated by Svelte v3.55.1 */

const { document: document_1 } = globals;
const file = "src\\routes\\admin\\customers\\index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[12] = list[i];
	return child_ctx;
}

// (180:6) {#each posts as item}
function create_each_block(ctx) {
	let tr;
	let td0;
	let a0;
	let t0_value = /*item*/ ctx[12].first_name + ' ' + /*item*/ ctx[12].last_name + "";
	let t0;
	let a0_href_value;
	let t1;
	let td1;
	let a1;
	let i0;
	let a1_href_value;
	let t2;
	let td2;
	let span;
	let i1;
	let t3;
	let mounted;
	let dispose;

	function click_handler() {
		return /*click_handler*/ ctx[5](/*item*/ ctx[12]);
	}

	function click_handler_1() {
		return /*click_handler_1*/ ctx[6](/*item*/ ctx[12]);
	}

	const block = {
		c: function create() {
			tr = element("tr");
			td0 = element("td");
			a0 = element("a");
			t0 = text(t0_value);
			t1 = space();
			td1 = element("td");
			a1 = element("a");
			i0 = element("i");
			t2 = space();
			td2 = element("td");
			span = element("span");
			i1 = element("i");
			t3 = space();
			this.h();
		},
		l: function claim(nodes) {
			tr = claim_element(nodes, "TR", {});
			var tr_nodes = children(tr);
			td0 = claim_element(tr_nodes, "TD", { class: true });
			var td0_nodes = children(td0);
			a0 = claim_element(td0_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t0 = claim_text(a0_nodes, t0_value);
			a0_nodes.forEach(detach_dev);
			td0_nodes.forEach(detach_dev);
			t1 = claim_space(tr_nodes);
			td1 = claim_element(tr_nodes, "TD", { class: true });
			var td1_nodes = children(td1);
			a1 = claim_element(td1_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			i0 = claim_element(a1_nodes, "I", { class: true });
			children(i0).forEach(detach_dev);
			a1_nodes.forEach(detach_dev);
			td1_nodes.forEach(detach_dev);
			t2 = claim_space(tr_nodes);
			td2 = claim_element(tr_nodes, "TD", { class: true });
			var td2_nodes = children(td2);
			span = claim_element(td2_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			i1 = claim_element(span_nodes, "I", { class: true });
			children(i1).forEach(detach_dev);
			span_nodes.forEach(detach_dev);
			td2_nodes.forEach(detach_dev);
			t3 = claim_space(tr_nodes);
			tr_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a0, "href", a0_href_value = "/admin/customers/" + /*item*/ ctx[12].id);
			attr_dev(a0, "class", "svelte-16wadjs");
			add_location(a0, file, 181, 12, 3714);
			attr_dev(td0, "class", "svelte-16wadjs");
			add_location(td0, file, 181, 8, 3710);
			attr_dev(i0, "class", "fas fa-edit");
			add_location(i0, file, 182, 64, 3968);
			attr_dev(a1, "href", a1_href_value = "/admin/edit-user/" + /*item*/ ctx[12].id);
			attr_dev(a1, "class", "svelte-16wadjs");
			add_location(a1, file, 182, 27, 3931);
			attr_dev(td1, "class", "center svelte-16wadjs");
			add_location(td1, file, 182, 8, 3912);
			attr_dev(i1, "class", "fas fa-trash-alt");
			add_location(i1, file, 183, 92, 4098);
			attr_dev(span, "class", "link");
			add_location(span, file, 183, 27, 4033);
			attr_dev(td2, "class", "center svelte-16wadjs");
			add_location(td2, file, 183, 8, 4014);
			add_location(tr, file, 180, 7, 3696);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, tr, anchor);
			append_hydration_dev(tr, td0);
			append_hydration_dev(td0, a0);
			append_hydration_dev(a0, t0);
			append_hydration_dev(tr, t1);
			append_hydration_dev(tr, td1);
			append_hydration_dev(td1, a1);
			append_hydration_dev(a1, i0);
			append_hydration_dev(tr, t2);
			append_hydration_dev(tr, td2);
			append_hydration_dev(td2, span);
			append_hydration_dev(span, i1);
			append_hydration_dev(tr, t3);

			if (!mounted) {
				dispose = [
					listen_dev(a0, "click", click_handler, false, false, false),
					listen_dev(span, "click", click_handler_1, false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*posts*/ 1 && t0_value !== (t0_value = /*item*/ ctx[12].first_name + ' ' + /*item*/ ctx[12].last_name + "")) set_data_dev(t0, t0_value);

			if (dirty & /*posts*/ 1 && a0_href_value !== (a0_href_value = "/admin/customers/" + /*item*/ ctx[12].id)) {
				attr_dev(a0, "href", a0_href_value);
			}

			if (dirty & /*posts*/ 1 && a1_href_value !== (a1_href_value = "/admin/edit-user/" + /*item*/ ctx[12].id)) {
				attr_dev(a1, "href", a1_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(tr);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(180:6) {#each posts as item}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let modal;
	let t1;
	let toast;
	let t2;
	let div8;
	let div4;
	let div0;
	let h2;
	let t3;
	let t4;
	let div1;
	let t5;
	let div2;
	let a;
	let i;
	let t6;
	let div3;
	let label;
	let img;
	let img_src_value;
	let t7;
	let input;
	let t8;
	let div7;
	let div6;
	let div5;
	let table;
	let thead;
	let tr;
	let th0;
	let t9;
	let t10;
	let th1;
	let t11;
	let t12;
	let th2;
	let t13;
	let t14;
	let tbody;
	let current;

	modal = new Modal({
			props: {
				confirmText: /*confirmText*/ ctx[1],
				confirmYesEvent: /*deleteAction*/ ctx[4]
			},
			$$inline: true
		});

	toast = new Toast({
			props: { toastBody: /*toastBody*/ ctx[2] },
			$$inline: true
		});

	let each_value = /*posts*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			create_component(modal.$$.fragment);
			t1 = space();
			create_component(toast.$$.fragment);
			t2 = space();
			div8 = element("div");
			div4 = element("div");
			div0 = element("div");
			h2 = element("h2");
			t3 = text("My Customers");
			t4 = space();
			div1 = element("div");
			t5 = space();
			div2 = element("div");
			a = element("a");
			i = element("i");
			t6 = space();
			div3 = element("div");
			label = element("label");
			img = element("img");
			t7 = space();
			input = element("input");
			t8 = space();
			div7 = element("div");
			div6 = element("div");
			div5 = element("div");
			table = element("table");
			thead = element("thead");
			tr = element("tr");
			th0 = element("th");
			t9 = text("Name");
			t10 = space();
			th1 = element("th");
			t11 = text("Edit");
			t12 = space();
			th2 = element("th");
			t13 = text("Delete");
			t14 = space();
			tbody = element("tbody");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = head_selector('svelte-1ih934x', document_1.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(modal.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(toast.$$.fragment, nodes);
			t2 = claim_space(nodes);
			div8 = claim_element(nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div4 = claim_element(div8_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h2 = claim_element(div0_nodes, "H2", {});
			var h2_nodes = children(h2);
			t3 = claim_text(h2_nodes, "My Customers");
			h2_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t4 = claim_space(div4_nodes);
			div1 = claim_element(div4_nodes, "DIV", { style: true, class: true });
			children(div1).forEach(detach_dev);
			t5 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			a = claim_element(div2_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			i = claim_element(a_nodes, "I", { class: true });
			children(i).forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t6 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			label = claim_element(div3_nodes, "LABEL", { class: true });
			var label_nodes = children(label);

			img = claim_element(label_nodes, "IMG", {
				src: true,
				alt: true,
				id: true,
				class: true
			});

			label_nodes.forEach(detach_dev);
			t7 = claim_space(div3_nodes);
			input = claim_element(div3_nodes, "INPUT", { class: true, type: true });
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t8 = claim_space(div8_nodes);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			table = claim_element(div5_nodes, "TABLE", { class: true });
			var table_nodes = children(table);
			thead = claim_element(table_nodes, "THEAD", {});
			var thead_nodes = children(thead);
			tr = claim_element(thead_nodes, "TR", {});
			var tr_nodes = children(tr);
			th0 = claim_element(tr_nodes, "TH", {});
			var th0_nodes = children(th0);
			t9 = claim_text(th0_nodes, "Name");
			th0_nodes.forEach(detach_dev);
			t10 = claim_space(tr_nodes);
			th1 = claim_element(tr_nodes, "TH", { class: true });
			var th1_nodes = children(th1);
			t11 = claim_text(th1_nodes, "Edit");
			th1_nodes.forEach(detach_dev);
			t12 = claim_space(tr_nodes);
			th2 = claim_element(tr_nodes, "TH", { class: true });
			var th2_nodes = children(th2);
			t13 = claim_text(th2_nodes, "Delete");
			th2_nodes.forEach(detach_dev);
			tr_nodes.forEach(detach_dev);
			thead_nodes.forEach(detach_dev);
			t14 = claim_space(table_nodes);
			tbody = claim_element(table_nodes, "TBODY", {});
			var tbody_nodes = children(tbody);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(tbody_nodes);
			}

			tbody_nodes.forEach(detach_dev);
			table_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document_1.title = "Customers | ProfitFLow";
			add_location(h2, file, 150, 3, 3021);
			attr_dev(div0, "class", "svelte-16wadjs");
			add_location(div0, file, 149, 2, 3011);
			set_style(div1, "flex-grow", "1");
			attr_dev(div1, "class", "svelte-16wadjs");
			add_location(div1, file, 153, 2, 3058);
			attr_dev(i, "class", "fas fa-plus");
			add_location(i, file, 156, 29, 3150);
			attr_dev(a, "href", "/admin/add-user");
			attr_dev(a, "class", "svelte-16wadjs");
			add_location(a, file, 156, 3, 3124);
			attr_dev(div2, "class", "add-user svelte-16wadjs");
			add_location(div2, file, 155, 2, 3097);
			if (!src_url_equal(img.src, img_src_value = "/user-search.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "search user svg");
			attr_dev(img, "id", "svg-user-search");
			attr_dev(img, "class", "svelte-16wadjs");
			add_location(img, file, 160, 4, 3218);
			attr_dev(label, "class", "svelte-16wadjs");
			add_location(label, file, 159, 3, 3205);
			attr_dev(input, "class", "form-control svelte-16wadjs");
			attr_dev(input, "type", "text");
			add_location(input, file, 163, 3, 3309);
			attr_dev(div3, "class", "svelte-16wadjs");
			add_location(div3, file, 158, 2, 3195);
			attr_dev(div4, "class", "search-bar container svelte-16wadjs");
			add_location(div4, file, 148, 1, 2973);
			add_location(th0, file, 173, 7, 3527);
			attr_dev(th1, "class", "center svelte-16wadjs");
			add_location(th1, file, 174, 7, 3549);
			attr_dev(th2, "class", "center svelte-16wadjs");
			add_location(th2, file, 175, 7, 3586);
			add_location(tr, file, 172, 6, 3514);
			add_location(thead, file, 171, 5, 3499);
			add_location(tbody, file, 178, 5, 3651);
			attr_dev(table, "class", "table");
			add_location(table, file, 170, 4, 3471);
			attr_dev(div5, "class", "col-md-12 converter-list");
			add_location(div5, file, 169, 3, 3427);
			attr_dev(div6, "class", "row");
			add_location(div6, file, 168, 2, 3405);
			attr_dev(div7, "class", "container page svelte-16wadjs");
			add_location(div7, file, 167, 1, 3373);
			attr_dev(div8, "class", "home-page svelte-16wadjs");
			add_location(div8, file, 147, 0, 2947);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			mount_component(modal, target, anchor);
			insert_hydration_dev(target, t1, anchor);
			mount_component(toast, target, anchor);
			insert_hydration_dev(target, t2, anchor);
			insert_hydration_dev(target, div8, anchor);
			append_hydration_dev(div8, div4);
			append_hydration_dev(div4, div0);
			append_hydration_dev(div0, h2);
			append_hydration_dev(h2, t3);
			append_hydration_dev(div4, t4);
			append_hydration_dev(div4, div1);
			append_hydration_dev(div4, t5);
			append_hydration_dev(div4, div2);
			append_hydration_dev(div2, a);
			append_hydration_dev(a, i);
			append_hydration_dev(div4, t6);
			append_hydration_dev(div4, div3);
			append_hydration_dev(div3, label);
			append_hydration_dev(label, img);
			append_hydration_dev(div3, t7);
			append_hydration_dev(div3, input);
			append_hydration_dev(div8, t8);
			append_hydration_dev(div8, div7);
			append_hydration_dev(div7, div6);
			append_hydration_dev(div6, div5);
			append_hydration_dev(div5, table);
			append_hydration_dev(table, thead);
			append_hydration_dev(thead, tr);
			append_hydration_dev(tr, th0);
			append_hydration_dev(th0, t9);
			append_hydration_dev(tr, t10);
			append_hydration_dev(tr, th1);
			append_hydration_dev(th1, t11);
			append_hydration_dev(tr, t12);
			append_hydration_dev(tr, th2);
			append_hydration_dev(th2, t13);
			append_hydration_dev(table, t14);
			append_hydration_dev(table, tbody);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(tbody, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			const modal_changes = {};
			if (dirty & /*confirmText*/ 2) modal_changes.confirmText = /*confirmText*/ ctx[1];
			modal.$set(modal_changes);

			if (dirty & /*clickDeleteCustomer, posts, setCurrentCustomer*/ 9) {
				each_value = /*posts*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(tbody, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(modal.$$.fragment, local);
			transition_in(toast.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(modal.$$.fragment, local);
			transition_out(toast.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			destroy_component(modal, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(toast, detaching);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(div8);
			destroy_each(each_blocks, detaching);
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

function preload({ query }) {
	let url = '/admin/customers.json?';

	if (!!query.q) {
		url += 'q=' + query.q;
	}

	return this.fetch(url).then(r => r.json()).then(posts => {
		return { posts };
	});
}

function setCurrentCustomer(name, id, companyId) {
	localStorage.setItem('currentCustomerName', name);
	localStorage.setItem('currentCustomerId', id);
	localStorage.setItem('currentCompanyId', companyId);
}

function showToast() {
	const toastLiveExample = document.getElementById('liveToast');

	const toast = new bootstrap.Toast(toastLiveExample,
	{
			// delay: 3000,
			animation: true,
			autohide: false
		});

	toast.show();
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Customers', slots, []);
	let { posts } = $$props;
	let toastBody;
	let showModal;
	let showConfirm = false;
	let confirmText;
	let errors = [];

	onMount(() => {
		
	});

	function clickDeleteCustomer(id) {
		$$invalidate(1, confirmText = 'Are you sure you want to delete this customer?');
		localStorage.setItem('currentCustomerId', id);
		controlConfirm();
	}

	let confirmModal;

	function controlConfirm() {
		// document.getElementById("btn-confirm-modal").click();
		confirmModal = new bootstrap.Modal('#myModal');

		confirmModal.show();
	}

	async function deleteAction() {
		let id = localStorage.getItem('currentCustomerId');
		confirmModal.hide();

		const response = await fetch("/admin/customers/delete/" + id, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			}
		});

		const parsed = await response.json();

		if (parsed.error) {
			if (parsed.error.errors) {
				errors = parsed.error.errors;
			} else {
				errors = [{ msg: parsed.error.error }];
			}
		} else {
			location.reload();
		}
	}

	$$self.$$.on_mount.push(function () {
		if (posts === undefined && !('posts' in $$props || $$self.$$.bound[$$self.$$.props['posts']])) {
			console.warn("<Customers> was created without expected prop 'posts'");
		}
	});

	const writable_props = ['posts'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Customers> was created with unknown prop '${key}'`);
	});

	const click_handler = item => setCurrentCustomer(item.first_name + ' ' + item.last_name, item.id, item.company_id);
	const click_handler_1 = item => clickDeleteCustomer(item.id);

	$$self.$$set = $$props => {
		if ('posts' in $$props) $$invalidate(0, posts = $$props.posts);
	};

	$$self.$capture_state = () => ({
		preload,
		onMount,
		Modal,
		Toast,
		posts,
		toastBody,
		showModal,
		showConfirm,
		confirmText,
		errors,
		clickDeleteCustomer,
		confirmModal,
		controlConfirm,
		setCurrentCustomer,
		deleteAction,
		showToast
	});

	$$self.$inject_state = $$props => {
		if ('posts' in $$props) $$invalidate(0, posts = $$props.posts);
		if ('toastBody' in $$props) $$invalidate(2, toastBody = $$props.toastBody);
		if ('showModal' in $$props) showModal = $$props.showModal;
		if ('showConfirm' in $$props) showConfirm = $$props.showConfirm;
		if ('confirmText' in $$props) $$invalidate(1, confirmText = $$props.confirmText);
		if ('errors' in $$props) errors = $$props.errors;
		if ('confirmModal' in $$props) confirmModal = $$props.confirmModal;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		posts,
		confirmText,
		toastBody,
		clickDeleteCustomer,
		deleteAction,
		click_handler,
		click_handler_1
	];
}

class Customers extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { posts: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Customers",
			options,
			id: create_fragment.name
		});
	}

	get posts() {
		throw new Error("<Customers>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Customers>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Customers as default, preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMDRhMmQzMjIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYWRtaW4vY3VzdG9tZXJzL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cclxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHF1ZXJ5IH0pIHtcclxuXHRcdGxldCB1cmwgPSAnL2FkbWluL2N1c3RvbWVycy5qc29uPyc7XHJcblxyXG5cdFx0aWYoISFxdWVyeS5xKXtcclxuXHRcdFx0dXJsICs9ICdxPScgKyBxdWVyeS5xO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLmZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKHBvc3RzID0+IHtcclxuXHRcdFx0cmV0dXJuIHsgcG9zdHMgfTtcclxuXHRcdH0pO1xyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7b25Nb3VudH0gZnJvbSAnc3ZlbHRlJztcclxuXHRpbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTW9kYWwuc3ZlbHRlXCI7XHJcblx0aW1wb3J0IFRvYXN0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1RvYXN0LnN2ZWx0ZVwiO1xyXG5cclxuXHRleHBvcnQgbGV0IHBvc3RzO1xyXG5cdGxldCB0b2FzdEJvZHk7XHJcblxyXG5cdGxldCBzaG93TW9kYWw7XHJcblx0bGV0IHNob3dDb25maXJtID0gZmFsc2U7XHJcblx0bGV0IGNvbmZpcm1UZXh0O1xyXG5cdGxldCBlcnJvcnMgPSBbXTtcclxuXHJcblx0b25Nb3VudCgoKSA9PiB7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRmdW5jdGlvbiBjbGlja0RlbGV0ZUN1c3RvbWVyKGlkKXtcclxuXHRcdGNvbmZpcm1UZXh0ID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjdXN0b21lcj8nO1xyXG5cclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50Q3VzdG9tZXJJZCcsIGlkKTtcclxuXHJcblx0XHRjb250cm9sQ29uZmlybSgpO1xyXG5cdH1cclxuXHJcblx0bGV0IGNvbmZpcm1Nb2RhbDtcclxuXHJcblx0ZnVuY3Rpb24gY29udHJvbENvbmZpcm0oKXtcclxuXHRcdC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWNvbmZpcm0tbW9kYWxcIikuY2xpY2soKTtcclxuXHRcdGNvbmZpcm1Nb2RhbCA9IG5ldyBib290c3RyYXAuTW9kYWwoJyNteU1vZGFsJyk7XHJcblxyXG5cdFx0Y29uZmlybU1vZGFsLnNob3coKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHNldEN1cnJlbnRDdXN0b21lcihuYW1lLCBpZCwgY29tcGFueUlkKXtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50Q3VzdG9tZXJOYW1lJywgbmFtZSk7XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudEN1c3RvbWVySWQnLCBpZCk7XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudENvbXBhbnlJZCcsIGNvbXBhbnlJZCk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBkZWxldGVBY3Rpb24oKXtcclxuXHRcdGxldCBpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50Q3VzdG9tZXJJZCcpO1xyXG5cclxuXHRcdGNvbmZpcm1Nb2RhbC5oaWRlKCk7XHJcblxyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hZG1pbi9jdXN0b21lcnMvZGVsZXRlL1wiICsgaWQsIHtcclxuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcblx0XHRcdFx0QWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgcGFyc2VkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuXHRcdGlmKHBhcnNlZC5lcnJvcil7XHJcblx0XHRcdGlmKHBhcnNlZC5lcnJvci5lcnJvcnMpe1xyXG5cdFx0XHRcdGVycm9ycyA9IHBhcnNlZC5lcnJvci5lcnJvcnM7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGVycm9ycyA9IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bXNnOiBwYXJzZWQuZXJyb3IuZXJyb3JcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzaG93VG9hc3QoKXtcclxuXHRcdGNvbnN0IHRvYXN0TGl2ZUV4YW1wbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGl2ZVRvYXN0JylcclxuXHRcdGNvbnN0IHRvYXN0ID0gbmV3IGJvb3RzdHJhcC5Ub2FzdCh0b2FzdExpdmVFeGFtcGxlLCB7XHJcblx0XHRcdC8vIGRlbGF5OiAzMDAwLFxyXG5cdFx0XHRhbmltYXRpb246IHRydWUsXHJcblx0XHRcdGF1dG9oaWRlOiBmYWxzZSxcclxuXHRcdH0pXHJcblxyXG5cdFx0dG9hc3Quc2hvdygpO1xyXG5cdH1cclxuXHJcbjs8L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHQjc3ZnLXVzZXItc2VhcmNoe1xyXG5cdFx0aGVpZ2h0OiAyOHB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdH1cclxuXHJcblx0ZGl2LmhvbWUtcGFnZT5kaXYuY29udGFpbmVye1xyXG5cdH1cclxuXHJcblx0ZGl2LnNlYXJjaC1iYXJ7XHJcblx0XHRwYWRkaW5nOiA2MHB4IDAgMTBweCAwO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4ICNlNWU1ZTUgc29saWQ7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdH1cclxuXHRkaXYuc2VhcmNoLWJhcj5kaXZ7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO31cclxuXHRkaXYuc2VhcmNoLWJhciBsYWJlbHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0ZGl2LnNlYXJjaC1iYXIgaW5wdXR7d2lkdGg6IDMwMHB4O31cclxuXHJcblx0LyoqL1xyXG5cdC5jb252ZXJ0ZXItbGlzdCAuaXRlbT4udGl0bGU+YXtjb2xvcjogIzMzMzt9XHJcblx0dGQuc3RhdHVzPml7Y29sb3I6ICMxN2Q2MzI7fVxyXG5cdHRoLmNlbnRlciwgdGQuY2VudGVye3RleHQtYWxpZ246IGNlbnRlcjt9XHJcblxyXG5cdHRkIGF7XHJcblx0XHRjb2xvcjogIzMzMztcclxuXHR9XHJcblxyXG5cdGRpdi5hZGQtdXNlcnttYXJnaW4tcmlnaHQ6IDQwcHg7fVxyXG5cdGRpdi5hZGQtdXNlcj5he1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHRjb2xvcjogIzMzMztcclxuXHR9XHJcblx0ZGl2LmFkZC11c2VyPmE6aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOiBub25lO31cclxuPC9zdHlsZT5cclxuXHJcbjxzdmVsdGU6aGVhZD5cclxuXHQ8dGl0bGU+Q3VzdG9tZXJzIHwgUHJvZml0RkxvdzwvdGl0bGU+XHJcbjwvc3ZlbHRlOmhlYWQ+XHJcblxyXG48TW9kYWwge2NvbmZpcm1UZXh0fSBjb25maXJtWWVzRXZlbnQ9e2RlbGV0ZUFjdGlvbn0gLz5cclxuPFRvYXN0IHt0b2FzdEJvZHl9IC8+XHJcblxyXG48ZGl2IGNsYXNzPVwiaG9tZS1wYWdlXCI+XHJcblx0PGRpdiBjbGFzcz1cInNlYXJjaC1iYXIgY29udGFpbmVyXCI+XHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8aDI+TXkgQ3VzdG9tZXJzPC9oMj5cclxuXHRcdDwvZGl2PlxyXG5cclxuXHRcdDxkaXYgc3R5bGU9XCJmbGV4LWdyb3c6IDE7XCI+PC9kaXY+XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cImFkZC11c2VyXCI+XHJcblx0XHRcdDxhIGhyZWY9XCIvYWRtaW4vYWRkLXVzZXJcIj48aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPjwvYT5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGxhYmVsPlxyXG5cdFx0XHRcdDxpbWcgc3JjPVwiL3VzZXItc2VhcmNoLnN2Z1wiIGFsdD1cInNlYXJjaCB1c2VyIHN2Z1wiIGlkPVwic3ZnLXVzZXItc2VhcmNoXCI+XHJcblx0XHRcdDwvbGFiZWw+XHJcblxyXG5cdFx0XHQ8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJjb250YWluZXIgcGFnZVwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGNvbnZlcnRlci1saXN0XCI+XHJcblx0XHRcdFx0PHRhYmxlIGNsYXNzPVwidGFibGVcIj5cclxuXHRcdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5OYW1lPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGggY2xhc3M9XCJjZW50ZXJcIj5FZGl0PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGggY2xhc3M9XCJjZW50ZXJcIj5EZWxldGU8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdFx0eyNlYWNoIHBvc3RzIGFzIGl0ZW19XHJcblx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkPjxhIG9uOmNsaWNrPXsoKSA9PiBzZXRDdXJyZW50Q3VzdG9tZXIoaXRlbS5maXJzdF9uYW1lICsgJyAnICsgaXRlbS5sYXN0X25hbWUsIGl0ZW0uaWQsIGl0ZW0uY29tcGFueV9pZCl9IGhyZWY9XCIvYWRtaW4vY3VzdG9tZXJzL3tpdGVtLmlkfVwiPntpdGVtLmZpcnN0X25hbWUgKyAnICcgKyBpdGVtLmxhc3RfbmFtZX08L2E+PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cImNlbnRlclwiPjxhIGhyZWY9XCIvYWRtaW4vZWRpdC11c2VyL3tpdGVtLmlkfVwiPjxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+PC9hPjwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3M9XCJjZW50ZXJcIj48c3BhbiBjbGFzcz1cImxpbmtcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tEZWxldGVDdXN0b21lcihpdGVtLmlkKX0+PGkgY2xhc3M9XCJmYXMgZmEtdHJhc2gtYWx0XCI+PC9pPjwvc3Bhbj48L3RkPlxyXG5cdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdHsvZWFjaH1cclxuXHRcdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC9kaXY+XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFMd0osQ0FBQSxJQUFBLFFBQUEsWUFBQSxHQUFJLEtBQUMsVUFBVSxHQUFHLEdBQUcsWUFBRyxHQUFJLEtBQUMsU0FBUyxHQUFBLEVBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBakQsR0FBQSxRQUFBLENBQUEsRUFBQSxF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
