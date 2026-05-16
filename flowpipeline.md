# 🧠 Claude AI Prompt — OOP in JavaScript: Complete Flow Pipeline Diagram

> **How to use:** Copy everything inside the prompt block below and paste it into Claude AI.

---

## 📋 PROMPT (Copy & Paste into Claude AI)

---

```
You are an expert JavaScript educator and technical diagram designer.

Create a **complete, detailed Flow Pipeline Diagram** for all Object-Oriented Programming (OOP) concepts in JavaScript. The diagram must be in **Mermaid.js syntax** so it can be rendered directly.

## 🎯 Requirements

### Diagram Type
Use `flowchart TD` (top-down) as the primary layout.
Use subgraphs to group related concepts into labeled sections.
Use clear, descriptive node labels with short code hints.

### 📦 Topics to Cover (in this exact learning order)

**PHASE 1 — Foundation: JavaScript Objects**
1. Object Literals `{ key: value }`
2. Object Methods (functions inside objects)
3. `Object.create()` — prototype-based creation
4. Constructor Functions (pre-ES6 way)
5. `new` keyword mechanics (4 steps: create, link proto, bind this, return)

**PHASE 2 — ES6 Classes & Constructors**
6. `class` syntax sugar over prototypes
7. `constructor()` method
8. Instance Properties (`this.prop`)
9. Instance Methods (on prototype)
10. `new ClassName()` — instantiation flow

**PHASE 3 — Encapsulation**
11. Public Properties & Methods
12. Private Fields `#field` (ES2022)
13. Getters `get prop()` — controlled read
14. Setters `set prop(val)` — controlled write
15. Closure-based privacy (old way)

**PHASE 4 — Abstraction**
16. Hiding internal complexity
17. Simulated Abstract Classes (`new.target` check)
18. Abstract Methods (throw Error if not overridden)
19. Public interface vs. private implementation

**PHASE 5 — Inheritance**
20. `extends` keyword — class inheritance
21. `super()` — calling parent constructor
22. `super.method()` — calling parent method
23. Method Overriding
24. Prototype-based Inheritance (old way: `Child.prototype = Object.create(Parent.prototype)`)
25. Inheritance Chain depth (shallow vs. deep)

**PHASE 6 — Polymorphism**
26. Method Overriding (runtime polymorphism)
27. Duck Typing (structural polymorphism)
28. `instanceof` type check
29. Same method name, different behavior per subclass

**PHASE 7 — Prototypes & Prototype Chain**
30. Every object has `[[Prototype]]`
31. `__proto__` vs `Object.getPrototypeOf()`
32. Prototype Chain lookup order
33. `Object.prototype` — root of all chains
34. `hasOwnProperty()` — own vs inherited
35. Class methods live on `ClassName.prototype`

**PHASE 8 — `this` Keyword**
36. `this` in global scope
37. `this` in regular function (undefined in strict mode)
38. `this` in method (refers to object)
39. `this` in arrow function (lexically inherited)
40. `this` with `new` (refers to new instance)
41. Explicit binding: `.call()`, `.apply()`, `.bind()`

**PHASE 9 — Static Methods & Properties**
42. `static` keyword
43. Static methods — called on class, not instance
44. Static properties — shared across all instances
45. Factory methods using static
46. `ClassName.method()` call pattern

**PHASE 10 — Design Patterns**
47. Factory Pattern (createUser() function returns objects)
48. Singleton Pattern (one instance only)
49. Observer Pattern (subscribe/notify)
50. Module Pattern (IIFE + closure)
51. Strategy Pattern (swap algorithm at runtime)

**PHASE 11 — Mixins & Composition**
52. `Object.assign(Target.prototype, mixin)`
53. Mixin Factory: `const Mixin = (Base) => class extends Base {...}`
54. Composing behaviors: `const Class = MixinA(MixinB(BaseClass))`
55. Composition over Inheritance principle

---

### 📐 Diagram Structure Rules

1. **Use subgraphs** for each Phase (PHASE 1 through PHASE 11).
2. **Connect phases with arrows** to show learning flow/dependency.
3. **Within each phase**, connect nodes in sequence showing concept flow.
4. **Use different node shapes**:
   - `[Rectangle]` = concept/topic
   - `(Rounded)` = action or process step
   - `{Diamond}` = decision/check
   - `[(Database)]` = internal mechanism
   - `>Asymmetric]` = code example/syntax note
5. **Add short code snippets** as labels where helpful (e.g., `` `class Dog extends Animal` ``).
6. **Show cross-phase connections** where concepts relate:
   - Objects → Prototype Chain
   - Classes → Prototype Chain
   - Encapsulation → Private Fields / Closure
   - Inheritance → Prototype Chain
   - `this` → Constructor / Method / Arrow function
   - Static → Class (not instance)

---

### 🎨 Styling (Mermaid classDef)

Apply color-coded styles to each phase subgraph nodes:
- Phase 1 (Objects): `fill:#1a1a2e,stroke:#e94560,color:#fff`
- Phase 2 (Classes): `fill:#16213e,stroke:#0f3460,color:#fff`
- Phase 3 (Encapsulation): `fill:#0f3460,stroke:#533483,color:#fff`
- Phase 4 (Abstraction): `fill:#533483,stroke:#e94560,color:#fff`
- Phase 5 (Inheritance): `fill:#e94560,stroke:#16213e,color:#fff`
- Phase 6 (Polymorphism): `fill:#0f3460,stroke:#e94560,color:#fff`
- Phase 7 (Prototypes): `fill:#16213e,stroke:#533483,color:#fff`
- Phase 8 (this keyword): `fill:#1a1a2e,stroke:#533483,color:#fff`
- Phase 9 (Static): `fill:#533483,stroke:#16213e,color:#fff`
- Phase 10 (Patterns): `fill:#e94560,stroke:#533483,color:#fff`
- Phase 11 (Mixins): `fill:#0f3460,stroke:#1a1a2e,color:#fff`

---

### 📤 Output Format

1. First, output the **complete Mermaid diagram** inside a ```mermaid code block.
2. Then output a **Legend Table** (Markdown) explaining each Phase, its color, and the key concept.
3. Then output **Key Connections** — a bullet list of cross-phase dependencies that a learner should know.
4. Finally, output a **Learning Path Recommendation** — which order to study topics for someone completely new to OOP in JS.

Make the diagram comprehensive enough to serve as a **complete visual reference** for JavaScript OOP, while keeping node labels concise. Aim for 60–80 nodes total across all phases.
```

---

## 🗺️ Repository Structure This Prompt Covers

| Folder | Topic | Phase |
|--------|-------|-------|
| `01-objects/` | Object Literals, Methods, `Object.create`, Constructor Fns, `new` | Phase 1 |
| `02-classes-constructor/` | ES6 `class`, `constructor()`, Instantiation | Phase 2 |
| `03-encapsulation/` | Public/Private, `#fields`, Getters/Setters, Closures | Phase 3 |
| `11-abstraction/` | Abstract Classes, `new.target`, Interface Hiding | Phase 4 |
| `04-inheritance/` | `extends`, `super`, Method Override, Proto-chain | Phase 5 |
| `05-polymorphism/` | Override, Duck Typing, `instanceof` | Phase 6 |
| `06-prototypes/` | `[[Prototype]]`, Chain, `Object.prototype` | Phase 7 |
| `09-this keywords/` | `this` in all contexts, `.call/.apply/.bind` | Phase 8 |
| `08_static_methods/` | `static` methods/props, Factory statics | Phase 9 |
| `10-design-patterns/` | Factory, Singleton, Observer, Module, Strategy | Phase 10 |
| `12-mixins-composition/` | `Object.assign`, Mixin factories, Composition | Phase 11 |
| `07-advanced/` | Advanced combos of above concepts | Spans all |

---

## ✅ Missing Topics Checklist (Added to Repo)

- [x] `11-abstraction/index.js` — **Abstract classes, `new.target`, private internals**
- [x] `12-mixins-composition/index.js` — **Mixin pattern, Functional Mixins, Composition**

Both were listed in README but had no implementation folder — now fixed.

---

## 💡 Tips for Using This Prompt

1. **Paste the prompt block** (between the triple backtick fences) directly into Claude AI.
2. Claude will generate a **full Mermaid diagram** — copy it into [mermaid.live](https://mermaid.live) to render it visually.
3. You can ask Claude follow-up questions like:
   - *"Expand the Prototype Chain subgraph with more detail"*
   - *"Add arrows showing how `this` behaves differently in each context"*
   - *"Create a separate mini-diagram for Design Patterns only"*
4. Save the generated Mermaid code and embed it in your `README.md` using a mermaid code block.
