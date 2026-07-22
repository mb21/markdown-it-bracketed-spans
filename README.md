# markdown-it-bracketed-spans

Span tag plugin for [markdown-it markdown parser](https://github.com/markdown-it/markdown-it).

Markup is based on [pandoc `bracketed_spans` extension](http://pandoc.org/MANUAL.html#extension-bracketed_spans),
for example:

    paragraph with [a span]{.myClass}

Must be used together with the [markdown-it-attrs plugin](https://github.com/arve0/markdown-it-attrs)
(that's a peer dependency).


## Usage

```javascript
import mdIt from 'markdown-it';
import mdItBracketedSpans from 'markdown-it-bracketed-spans';
import mdItAttrs from 'markdown-it-attrs';

const md = mdIt().use(mdItBracketedSpans).use(mdItAttrs);
const output = md.render('foo [bar *bar*]{#id .class attr=value} baz');
```

Output will be:

```html
<p>
  foo
  <span id="id" class="class" attr="value">
    bar <em>bar</em>
  </span>
  baz
</p>
```
