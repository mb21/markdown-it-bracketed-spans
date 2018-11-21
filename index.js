"use strict";

module.exports = function bracketed_spans_plugin(md) {

  function span(state) {
    var max = state.posMax

    if (state.src.charCodeAt(state.pos) !== 0x5B) {
      // opening [
      return false;
    }

    var labelStart = state.pos + 1;
    var labelEnd   = state.md.helpers.parseLinkLabel(state, state.pos, true);

    if (labelEnd < 0) {
      // parser failed to find closing ]
      return false;
    }

    var pos = labelEnd + 1;
    if (pos < max && state.src.charCodeAt(pos) === 0x7B /* { */) {
      // probably found span

      state.pos = labelStart;
      state.posMax = labelEnd;

      state.push('span_open', 'span', 1);
      state.md.inline.tokenize(state);
      state.push('span_close', 'span', -1);

      state.pos = pos;
      state.posMax = max;
      return true;
    } else {
      return false;
    }
  };

  md.inline.ruler.push('bracketed-spans', span);
}
