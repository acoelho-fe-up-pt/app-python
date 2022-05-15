/* PrismJS 1.23.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript */
/* eslint-disable */
const _self = typeof window !== 'undefined' ? window : typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self : {}; const Prism = (function (u) {
  const c = /\blang(?:uage)?-([\w-]+)\b/i; let n = 0; var _ = {
    manual: u.Prism && u.Prism.manual,
    disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler,
    util: {
      encode: function e(n) { return n instanceof M ? new M(n.type, e(n.content), n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' '); }, type(e) { return Object.prototype.toString.call(e).slice(8, -1); }, objId(e) { return e.__id || Object.defineProperty(e, '__id', { value: ++n }), e.__id; }, clone: function t(e, r) { let a; let n; switch (r = r || {}, _.util.type(e)) { case 'Object': if (n = _.util.objId(e), r[n]) return r[n]; for (const i in a = {}, r[n] = a, e)e.hasOwnProperty(i) && (a[i] = t(e[i], r)); return a; case 'Array': return n = _.util.objId(e), r[n] ? r[n] : (a = [], r[n] = a, e.forEach((e, n) => { a[n] = t(e, r); }), a); default: return e; } }, getLanguage(e) { for (;e && !c.test(e.className);)e = e.parentElement; return e ? (e.className.match(c) || [, 'none'])[1].toLowerCase() : 'none'; }, currentScript() { if (typeof document === 'undefined') return null; if ('currentScript' in document) return document.currentScript; try { throw new Error(); } catch (e) { const n = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1]; if (n) { const t = document.getElementsByTagName('script'); for (const r in t) if (t[r].src == n) return t[r]; } return null; } }, isActive(e, n, t) { for (let r = `no-${n}`; e;) { const a = e.classList; if (a.contains(n)) return !0; if (a.contains(r)) return !1; e = e.parentElement; } return !!t; }
    },
    languages: { extend(e, n) { const t = _.util.clone(_.languages[e]); for (const r in n)t[r] = n[r]; return t; }, insertBefore(t, e, n, r) { const a = (r = r || _.languages)[t]; const i = {}; for (const l in a) if (a.hasOwnProperty(l)) { if (l == e) for (const o in n)n.hasOwnProperty(o) && (i[o] = n[o]); n.hasOwnProperty(l) || (i[l] = a[l]); } const s = r[t]; return r[t] = i, _.languages.DFS(_.languages, function (e, n) { n === s && e != t && (this[e] = i); }), i; }, DFS: function e(n, t, r, a) { a = a || {}; const i = _.util.objId; for (const l in n) if (n.hasOwnProperty(l)) { t.call(n, l, n[l], r || l); const o = n[l]; const s = _.util.type(o); s !== 'Object' || a[i(o)] ? s !== 'Array' || a[i(o)] || (a[i(o)] = !0, e(o, t, l, a)) : (a[i(o)] = !0, e(o, t, null, a)); } } },
    plugins: {},
    highlightAll(e, n) { _.highlightAllUnder(document, e, n); },
    highlightAllUnder(e, n, t) { const r = { callback: t, container: e, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' }; _.hooks.run('before-highlightall', r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), _.hooks.run('before-all-elements-highlight', r); for (var a, i = 0; a = r.elements[i++];)_.highlightElement(a, !0 === n, r.callback); },
    highlightElement(e, n, t) {
      const r = _.util.getLanguage(e); const a = _.languages[r]; e.className = `${e.className.replace(c, '').replace(/\s+/g, ' ')} language-${r}`; const i = e.parentElement; i && i.nodeName.toLowerCase() === 'pre' && (i.className = `${i.className.replace(c, '').replace(/\s+/g, ' ')} language-${r}`); const l = {
        element: e, language: r, grammar: a, code: e.textContent
      }; function o(e) { l.highlightedCode = e, _.hooks.run('before-insert', l), l.element.innerHTML = l.highlightedCode, _.hooks.run('after-highlight', l), _.hooks.run('complete', l), t && t.call(l.element); } if (_.hooks.run('before-sanity-check', l), !l.code) return _.hooks.run('complete', l), void (t && t.call(l.element)); if (_.hooks.run('before-highlight', l), l.grammar) if (n && u.Worker) { const s = new Worker(_.filename); s.onmessage = function (e) { o(e.data); }, s.postMessage(JSON.stringify({ language: l.language, code: l.code, immediateClose: !0 })); } else o(_.highlight(l.code, l.grammar, l.language)); else o(_.util.encode(l.code));
    },
    highlight(e, n, t) { const r = { code: e, grammar: n, language: t }; return _.hooks.run('before-tokenize', r), r.tokens = _.tokenize(r.code, r.grammar), _.hooks.run('after-tokenize', r), M.stringify(_.util.encode(r.tokens), r.language); },
    tokenize(e, n) { const t = n.rest; if (t) { for (const r in t)n[r] = t[r]; delete n.rest; } const a = new i(); return z(a, a.head, e), (function e(n, t, r, a, i, l) { for (const o in r) if (r.hasOwnProperty(o) && r[o]) { let s = r[o]; s = Array.isArray(s) ? s : [s]; for (let u = 0; u < s.length; ++u) { if (l && l.cause == `${o},${u}`) return; const c = s[u]; const g = c.inside; const f = !!c.lookbehind; const h = !!c.greedy; const d = c.alias; if (h && !c.pattern.global) { const v = c.pattern.toString().match(/[imsuy]*$/)[0]; c.pattern = RegExp(c.pattern.source, `${v}g`); } for (let p = c.pattern || c, m = a.next, y = i; m !== t.tail && !(l && y >= l.reach); y += m.value.length, m = m.next) { let k = m.value; if (t.length > n.length) return; if (!(k instanceof M)) { var b; let x = 1; if (h) { if (!(b = W(p, y, n, f))) break; var w = b.index; const A = b.index + b[0].length; let P = y; for (P += m.value.length; P <= w;)m = m.next, P += m.value.length; if (P -= m.value.length, y = P, m.value instanceof M) continue; for (let S = m; S !== t.tail && (P < A || typeof S.value === 'string'); S = S.next)x++, P += S.value.length; x--, k = n.slice(y, P), b.index -= y; } else if (!(b = W(p, 0, k, f))) continue; var w = b.index; const E = b[0]; const O = k.slice(0, w); const L = k.slice(w + E.length); const N = y + k.length; l && N > l.reach && (l.reach = N); let j = m.prev; O && (j = z(t, j, O), y += O.length), I(t, j, x); const C = new M(o, g ? _.tokenize(E, g) : E, d, E); m = z(t, j, C), L && z(t, m, L), x > 1 && e(n, t, r, m.prev, y, { cause: `${o},${u}`, reach: N }); } } } } }(e, a, n, a.head, 0)), (function (e) { const n = []; let t = e.head.next; for (;t !== e.tail;)n.push(t.value), t = t.next; return n; }(a)); },
    hooks: { all: {}, add(e, n) { const t = _.hooks.all; t[e] = t[e] || [], t[e].push(n); }, run(e, n) { const t = _.hooks.all[e]; if (t && t.length) for (var r, a = 0; r = t[a++];)r(n); } },
    Token: M
  }; function M(e, n, t, r) { this.type = e, this.content = n, this.alias = t, this.length = 0 | (r || '').length; } function W(e, n, t, r) { e.lastIndex = n; const a = e.exec(t); if (a && r && a[1]) { const i = a[1].length; a.index += i, a[0] = a[0].slice(i); } return a; } function i() { const e = { value: null, prev: null, next: null }; const n = { value: null, prev: e, next: null }; e.next = n, this.head = e, this.tail = n, this.length = 0; } function z(e, n, t) { const r = n.next; const a = { value: t, prev: n, next: r }; return n.next = a, r.prev = a, e.length++, a; } function I(e, n, t) { for (var r = n.next, a = 0; a < t && r !== e.tail; a++)r = r.next; (n.next = r).prev = n, e.length -= a; } if (u.Prism = _, M.stringify = function n(e, t) {
    if (typeof e === 'string') return e; if (Array.isArray(e)) { let r = ''; return e.forEach((e) => { r += n(e, t); }), r; } const a = {
      type: e.type, content: n(e.content, t), tag: 'span', classes: ['token', e.type], attributes: {}, language: t
    }; const i = e.alias; i && (Array.isArray(i) ? Array.prototype.push.apply(a.classes, i) : a.classes.push(i)), _.hooks.run('wrap', a); let l = ''; for (const o in a.attributes)l += ` ${o}="${(a.attributes[o] || '').replace(/"/g, '&quot;')}"`; return `<${a.tag} class="${a.classes.join(' ')}"${l}>${a.content}</${a.tag}>`;
  }, !u.document) return u.addEventListener && (_.disableWorkerMessageHandler || u.addEventListener('message', (e) => { const n = JSON.parse(e.data); const t = n.language; const r = n.code; const a = n.immediateClose; u.postMessage(_.highlight(r, _.languages[t], t)), a && u.close(); }, !1)), _; const e = _.util.currentScript(); function t() { _.manual || _.highlightAll(); } if (e && (_.filename = e.src, e.hasAttribute('data-manual') && (_.manual = !0)), !_.manual) { const r = document.readyState; r === 'loading' || r === 'interactive' && e && e.defer ? document.addEventListener('DOMContentLoaded', t) : window.requestAnimationFrame ? window.requestAnimationFrame(t) : window.setTimeout(t, 16); } return _;
}(_self)); typeof module !== 'undefined' && module.exports && (module.exports = Prism), typeof global !== 'undefined' && (global.Prism = Prism);
Prism.languages.markup = {
  comment: /<!--[\s\S]*?-->/,
  prolog: /<\?[\s\S]+?\?>/,
  doctype: {
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      'internal-subset': {
        pattern: /(\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null
      },
      string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
      punctuation: /^<!|>$|[[\]]/,
      'doctype-tag': /^DOCTYPE/,
      name: /[^\s<>'"]+/
    }
  },
  cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, 'attr-value': { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/] } }, punctuation: /\/?>/, 'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } }
    }
  },
  entity: [{ pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' }, /&#x?[\da-f]{1,8};/i]
}, Prism.languages.markup.tag.inside['attr-value'].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside['internal-subset'].inside = Prism.languages.markup, Prism.hooks.add('wrap', (a) => { a.type === 'entity' && (a.attributes.title = a.content.replace(/&amp;/, '&')); }), Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
  value(a, e) {
    const s = {}; s[`language-${e}`] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: Prism.languages[e] }, s.cdata = /^<!\[CDATA\[|\]\]>$/i; const n = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s } }; n[`language-${e}`] = { pattern: /[\s\S]+/, inside: Prism.languages[e] }; const t = {}; t[a] = {
      pattern: RegExp('(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)'.replace(/__/g, () => a), 'i'), lookbehind: !0, greedy: !0, inside: n
    }, Prism.languages.insertBefore('markup', 'cdata', t);
  }
}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend('markup', {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
!(function (s) {
  const e = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/; s.languages.css = {
    comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/, inside: { rule: /^@[\w-]+/, 'selector-function-argument': { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: !0, alias: 'selector' }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 } } }, url: { pattern: RegExp(`\\burl\\((?:${e.source}|(?:[^\\\\\r\n()"']|\\\\[^])*)\\)`, 'i'), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp(`^${e.source}$`), alias: 'url' } } }, selector: RegExp(`[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|${e.source})*(?=\\s*\\{)`), string: { pattern: e, greedy: !0 }, property: /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, important: /!important\b/i, function: /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:,]/
  }, s.languages.css.atrule.inside.rest = s.languages.css; const t = s.languages.markup; t && (t.tag.addInlined('style', 'css'), s.languages.insertBefore('inside', 'attr-value', {
    'style-attr': {
      pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
      lookbehind: !0,
      inside: {
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            style: {
              pattern: /(["'])[\s\S]+(?=["']$)/, lookbehind: !0, alias: 'language-css', inside: s.languages.css
            },
            punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/]
          }
        },
        'attr-name': /^style/i
      }
    }
  }, t.tag));
}(Prism));
Prism.languages.clike = {
  comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, 'class-name': { pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend('clike', {
  'class-name': [Prism.languages.clike['class-name'], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
}), Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore('javascript', 'keyword', {
  regex: {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: !0,
    greedy: !0,
    inside: {
      'regex-source': {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: 'language-regex', inside: Prism.languages.regex
      },
      'regex-flags': /[a-z]+$/,
      'regex-delimiter': /^\/|\/$/
    }
  },
  'function-variable': { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: 'function' },
  parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, inside: Prism.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: !0, inside: Prism.languages.javascript }],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore('javascript', 'string', { 'template-string': { pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/, greedy: !0, inside: { 'template-punctuation': { pattern: /^`|`$/, alias: 'string' }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/, lookbehind: !0, inside: { 'interpolation-punctuation': { pattern: /^\${|}$/, alias: 'punctuation' }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } } }), Prism.languages.markup && Prism.languages.markup.tag.addInlined('script', 'javascript'), Prism.languages.js = Prism.languages.javascript;
