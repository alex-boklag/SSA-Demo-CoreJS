export function analizeEnvelopes(envelope1, envelope2) {
  if (Number.isInteger(envelope1.a) === false
    || Number.isInteger(envelope1.b) === false
    || envelope1.a <= 0 || envelope1.a >= 1000000
    || envelope1.b <= 0 || envelope1.b >= 1000000) {
    return 'The first envelope is incorrect!';
  }
  if (Number.isInteger(envelope2.c) === false
    || Number.isInteger(envelope2.d) === false
    || envelope2.c <= 0 || envelope2.c >= 1000000
    || envelope2.d <= 0 || envelope2.d >= 1000000) {
    return 'The second envelope is incorrect!';
  }

  const [W, H] = [Math.max(envelope1.a, envelope1.b), Math.min(envelope1.a, envelope1.b)];
  const D2 = W * W + H * H;

  const [w, h] = [Math.max(envelope2.c, envelope2.d), Math.min(envelope2.c, envelope2.d)];
  const d2 = w * w + h * h;

  if (H > h && W > w) {
    return 1;
  }
  if (H < h && W < w) {
    return 2;
  }
  if (H * Math.sqrt(d2 - W * W) + W * Math.sqrt(d2 - H * H) <= w * w - h * h) {
    return 1;
  }
  if (h * Math.sqrt(D2 - w * w) + w * Math.sqrt(D2 - h * h) <= W * W - H * H) {
    return 2;
  }

  return 0;
}