// 0xxxxxxx (0, 128)
// 10xxxxxx [128, 192)
// 110xxxxx [192, 224)
// 1110xxxx [224, 240)
// 11110xxx [240, 248)

function check(data) {
  return data >= 128 && data < 192;
}

function validByte(data: number[]): boolean {
  const first = data[0];
  if (first < 128) {
    return data.length === 1;
  }

  if (first >= 192 && first < 224) {
    return data.length === 2 && check(data[1]);
  }

  if (first >= 224 && first < 240) {
    return data.length === 3 && check(data[1]) && check(data[2]);
  }

  if (first >= 240 && first < 248) {
    return (
      data.length === 4 && check(data[1]) && check(data[2]) && check(data[3])
    );
  }
  return false;
}

function validUtf8(data: number[]): boolean {
  if (data.length <= 0) return false;

  let index = 0;
  while (index < data.length) {
    const cur = data[index];
    if (cur < 128) {
      const r = validByte(data.slice(index, index + 1));
      if (!r) return false;
      index += 1;
    } else if (cur >= 192 && cur < 224) {
      const r = validByte(data.slice(index, index + 2));
      if (!r) return false;
      index += 2;
    } else if (cur >= 224 && cur < 240) {
      const r = validByte(data.slice(index, index + 3));
      if (!r) return false;
      index += 3;
    } else if (cur >= 240 && cur < 248) {
      const r = validByte(data.slice(index, index + 4));
      if (!r) return false;
      index += 4;
    } else return false;
  }

  return true;
}

(function () {
  const data = [235, 140, 4];
  const result = validUtf8(data);
  console.log(result);
})();
