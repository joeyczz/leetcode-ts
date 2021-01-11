function isMatch(s: string, p: string): boolean {
  const plist = p.split("");
  const plen = plist.length;
  const slist = s.split("");
  const slen = slist.length;

  const o: { [key: string]: boolean } = {
    "0,0": true,
  };

  let si = 1;
  let pi = 0;

  for (; pi <= plen; pi++) {
    if (p[pi] === "*") pi += 1;
    si = 0;
    for (; si <= slen; si++) {
      if (pi === 0 && si === 0) {
        o[getKey(pi, si)] = true;
        continue;
      }
      const _m = spMatch(pi, si);
      o[getKey(pi, si)] = _m;
    }
  }

  function spMatch(pi: number, si: number): boolean {
    if (p[pi - 1] !== "*") {
      if (!o[getKey(pi - 1, si - 1)]) return false;

      return equalMatch(p[pi - 1], s[si - 1]);
    }

    if (p[pi - 1] === "*") {
      if (o[getKey(pi - 2, si)]) return true;

      if (o[getKey(pi - 2, si - 1)] && equalMatch(p[pi - 2], s[si - 1]))
        return true;

      if (o[getKey(pi, si - 1)] && equalMatch(p[pi - 2], s[si - 1]))
        return true;
      return false;
    }
  }

  console.log(o);

  return o[`${plen},${slen}`] ?? false;
}

const equalMatch = (p: string, s: string) => p === "." || p === s;

const getKey = (pi: number, si: number) => `${pi},${si}`;

(function () {
  const result = isMatch("aab" /* s */, "c*a*b" /* p */);
  console.log(result);
})();
