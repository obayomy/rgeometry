(function() {var implementors = {
"num_bigint":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;T&gt; for <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;T, Output = <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>&gt;,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;T&gt; for <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;T, Output = <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>&gt;,</span>"]],
"num_complex":[["impl&lt;'a, T: 'a + <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"num_complex/struct.Complex.html\" title=\"struct num_complex::Complex\">Complex</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"num_complex/struct.Complex.html\" title=\"struct num_complex::Complex\">Complex</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"num_complex/struct.Complex.html\" title=\"struct num_complex::Complex\">Complex</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"num_complex/struct.Complex.html\" title=\"struct num_complex::Complex\">Complex</a>&lt;T&gt;"]],
"num_rational":[["impl&lt;T: <a class=\"trait\" href=\"num_integer/trait.Integer.html\" title=\"trait num_integer::Integer\">Integer</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"num_rational/struct.Ratio.html\" title=\"struct num_rational::Ratio\">Ratio</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"num_rational/struct.Ratio.html\" title=\"struct num_rational::Ratio\">Ratio</a>&lt;T&gt;"],["impl&lt;'a, T: <a class=\"trait\" href=\"num_integer/trait.Integer.html\" title=\"trait num_integer::Integer\">Integer</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"num_rational/struct.Ratio.html\" title=\"struct num_rational::Ratio\">Ratio</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"num_rational/struct.Ratio.html\" title=\"struct num_rational::Ratio\">Ratio</a>&lt;T&gt;"]],
"ordered_float":[["impl&lt;T: <a class=\"trait\" href=\"ordered_float/trait.Float.html\" title=\"trait ordered_float::Float\">Float</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"ordered_float/struct.OrderedFloat.html\" title=\"struct ordered_float::OrderedFloat\">OrderedFloat</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"ordered_float/struct.OrderedFloat.html\" title=\"struct ordered_float::OrderedFloat\">OrderedFloat</a>&lt;T&gt;"],["impl&lt;'a, T: <a class=\"trait\" href=\"ordered_float/trait.Float.html\" title=\"trait ordered_float::Float\">Float</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"ordered_float/struct.NotNan.html\" title=\"struct ordered_float::NotNan\">NotNan</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"ordered_float/struct.NotNan.html\" title=\"struct ordered_float::NotNan\">NotNan</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"ordered_float/trait.Float.html\" title=\"trait ordered_float::Float\">Float</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"ordered_float/struct.NotNan.html\" title=\"struct ordered_float::NotNan\">NotNan</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"ordered_float/struct.NotNan.html\" title=\"struct ordered_float::NotNan\">NotNan</a>&lt;T&gt;"],["impl&lt;'a, T: <a class=\"trait\" href=\"ordered_float/trait.Float.html\" title=\"trait ordered_float::Float\">Float</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"ordered_float/struct.OrderedFloat.html\" title=\"struct ordered_float::OrderedFloat\">OrderedFloat</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"ordered_float/struct.OrderedFloat.html\" title=\"struct ordered_float::OrderedFloat\">OrderedFloat</a>&lt;T&gt;"]],
"rgeometry":[["impl&lt;T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"rgeometry/data/struct.Vector.html\" title=\"struct rgeometry::data::Vector\">Vector</a>&lt;T, N&gt;&gt; for <a class=\"struct\" href=\"rgeometry/data/struct.Vector.html\" title=\"struct rgeometry::data::Vector\">Vector</a>&lt;T, N&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"num_traits/trait.NumOps.html\" title=\"trait num_traits::NumOps\">NumOps</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()