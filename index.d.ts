import type { PluginSimple } from "markdown-it";

/**
 * A markdown-it plugin that converts `[text]{attributes}` syntax into
 * `<span>` tags.
 *
 * @example
 * ```typescript
 * import mdIt from 'markdown-it';
 * import mdItBracketedSpans from 'markdown-it-pandoc';
 * import mdItAttrs from 'markdown-it-attrs';
 * 
 * const md = mdIt().use(mdItBracketedSpans).use(mdItAttrs);
 * const output = md.render('foo [bar *bar*]{#id .class attr=value} baz');
 * // <p>foo <span id="id" class="class" attr="value">bar <em>bar</em></span> baz</p>
 * ```
 */
declare const markdownItBracketedSpans: PluginSimple;
export default markdownItBracketedSpans;
