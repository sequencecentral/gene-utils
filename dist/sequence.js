"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.revTranslate = exports.translate = exports.optimize = exports.melt = exports.GCContent = exports.revcomp = exports.complement = exports.reverse = exports.sanitize = void 0;
var comp = {
    "A": "T", "C": "G", "G": "C",
    "T": "A", "U": "T", "N": "N",
    "a": "T", "c": "G", "g": "C",
    "t": "A", "u": "T", "n": "N"
};
var comp_re = /[ACGTUN]/gi;
var codons = {
    'GCC': 'A', 'GCT': 'A', 'GCA': 'A', 'GCG': 'A',
    'AGG': 'R', 'AGA': 'R', 'CGG': 'R', 'CGC': 'R', 'CGA': 'R', 'CGT': 'R',
    'AAC': 'N', 'AAT': 'N',
    'GAC': 'D', 'GAT': 'D',
    'TGC': 'C', 'TGT': 'C',
    'TGA': '*', 'TAA': '*', 'TAG': '*',
    'CAG': 'Q', 'CAA': 'Q',
    'GAG': 'E', 'GAA': 'E',
    'GGC': 'G', 'GGA': 'G', 'GGG': 'G', 'GGT': 'G',
    'CAC': 'H', 'CAT': 'H',
    'ATC': 'I', 'ATT': 'I', 'ATA': 'I',
    'CTG': 'L', 'CTC': 'L', 'CTT': 'L', 'TTG': 'L', 'CTA': 'L', 'TTA': 'L',
    'AAG': 'K', 'AAA': 'K',
    'ATG': 'M',
    'TTC': 'F', 'TTT': 'F',
    'CCT': 'P', 'CCC': 'P', 'CCA': 'P', 'CCG': 'P',
    'AGC': 'S', 'TCC': 'S', 'TCT': 'S', 'AGT': 'S', 'TCA': 'S', 'TCG': 'S',
    'ACC': 'T', 'ACA': 'T', 'ACT': 'T', 'ACG': 'T', 'TGG': 'W',
    'TAC': 'Y', 'TAT': 'Y',
    'GTG': 'V', 'GTC': 'V', 'GTT': 'V', 'GTA': 'V'
};
var translate_re = /GCC|GCT|GCA|GCG|AGG|AGA|CGG|CGC|CGA|CGT|AAC|AAT|GAC|GAT|TGC|TGT|TGA|TAA|TAG|CAG|CAA|GAG|GAA|GGC|GGA|GGG|GGT|CAC|CAT|ATC|ATT|ATA|CTG|CTC|CTT|TTG|CTA|TTA|AAG|AAA|ATG|TTC|TTT|CCT|CCC|CCA|CCG|AGC|TCC|TCT|AGT|TCA|TCG|ACC|ACA|ACT|ACG|TGG|TAC|TAT|GTG|GTC|GTT|GTA/gi;
var ecCodon = {
    'A': 'GCG', 'R': 'CGC', 'D': 'GAT', 'N': 'AAC', 'C': 'TGC', 'E': 'GAA', 'G': 'GGC', 'Q': 'CAG', 'H': 'CAT', 'I': 'ATT',
    'L': 'CTG', 'K': 'AAA', 'M': 'ATG', 'F': 'TTT', 'P': 'CCG', 'S': 'AGC', 'T': 'ACC', 'Y': 'TAT', 'V': 'GTG', 'X': 'TGA', 'W': 'TGG'
};
var hsCodon = {
    'A': 'GCC', 'R': 'AGA', 'D': 'GAC', 'N': 'AAC', 'C': 'TGC', 'E': 'GAG', 'G': 'GGC', 'Q': 'CAG', 'H': 'CAC', 'I': 'ATC',
    'L': 'CTG', 'K': 'AAG', 'M': 'ATG', 'F': 'TTC', 'P': 'CCC', 'S': 'AGC', 'T': 'ACC', 'Y': 'TAC', 'V': 'GTC', 'X': 'TGA', 'W': 'TGG'
};
var revtrans_re = /A|R|D|N|C|E|G|Q|H|I|L|K|M|F|P|S|T|Y|V|X|W/gi;
exports.sanitize = function (str) {
    return str.toUpperCase();
};
exports.reverse = function (str) {
    return exports.sanitize(str).split('').reverse().join('');
};
exports.complement = function (str) {
    return (exports.sanitize(str).replace(comp_re, function (match) {
        return comp[match];
    }));
};
exports.revcomp = function (str) {
    return exports.reverse(exports.complement(str));
};
exports.GCContent = function (str) {
    var s = exports.sanitize(str);
    try {
        return Math.round(100 * (s.match(/[GC]/gi).length / s.length));
    }
    catch (err) {
    }
};
exports.melt = function (s, mismatches) {
    var m = 0;
    if (mismatches) {
        m = ((81.5 + 0.41 * (_this.GCContent(s))) - (675 / s.length) - (100 * _this.misMatches / s.length));
    }
    else {
        m = (81.5 + 0.41 * (_this.GCContent(s)));
    }
    if (m > 0) {
        return parseInt(m.toPrecision(5));
    }
};
exports.optimize = function (s, target) {
    var seq = exports.sanitize(s);
    var mlt = exports.melt(seq);
    while (mlt > target && mlt > 10) {
        seq = truncate(seq);
        mlt = exports.melt(seq);
    }
    return seq;
};
var truncate = function (s) {
    var seq = exports.sanitize(s);
    if (seq.length > 5) {
        return seq.substr(1, seq.length);
    }
};
exports.translate = function (str) {
    return (exports.sanitize(str).toUpperCase().replace(translate_re, function (match) {
        return codons[match];
    }));
};
exports.revTranslate = function (str, code) {
    return (exports.sanitize(str).replace(translate_re, function (match) {
        if (code === "hs") {
            return hsCodon[match];
        }
        else if (code === "ec") {
            return ecCodon[match];
        }
    }));
};
//# sourceMappingURL=sequence.js.map