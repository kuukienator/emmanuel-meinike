type HSLA = {
  h: number;
  s: number;
  l: number;
  a?: number;
};

type RGBA = {
  r: number;
  g: number;
  b: number;
  a?: number;
};

export default class Color {
  r: number;
  g: number;
  b: number;
  a: number;
  h: number;
  s: number;
  l: number;

  constructor(r: number, g: number, b: number, a: number = 1) {
    const hsla = Color.HSLAfromRGBA(r, g, b, a);
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;

    this.h = hsla.h;
    this.s = hsla.s;
    this.l = hsla.l;
  }

  toHex(): string {
    return `#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(
      16
    )}`;
  }

  toRGB(): string {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  toRGBA(): string {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }

  toHSLA(): string {
    return `hsla(${this.h}deg, ${this.s}%, ${this.l}%, ${this.a})`;
  }

  isDark(): boolean {
    return this.l <= 40;
  }

  darken(amount: number): Color {
    return Color.fromHSLA(this.h, this.s, Math.max(this.l - amount, 0), this.a);
  }

  lighten(amount: number): Color {
    return Color.fromHSLA(
      this.h,
      this.s,
      Math.min(this.l + amount, 100),
      this.a
    );
  }

  static RGBAfromHSLA(h: number, s: number, l: number, a: number = 1): RGBA {
    const _s = s / 100;
    const _l = l / 100;

    let c = (1 - Math.abs(2 * _l - 1)) * _s;

    let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    let m = _l - c / 2;
    let r = 0;
    let g = 0;
    let b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return { r, g, b, a };
  }

  static HSLAfromRGBA(r: number, g: number, b: number, a: number = 1): HSLA {
    const _r = r / 255;
    const _g = g / 255;
    const _b = b / 255;

    let cmin = Math.min(_r, _g, _b);
    let cmax = Math.max(_r, _g, _b);
    let delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;

    if (delta == 0) {
      h = 0;
    } else if (cmax == _r) {
      h = ((_g - _b) / delta) % 6;
    } else if (cmax == _g) {
      h = (_b - _r) / delta + 2;
    } else {
      h = (_r - _g) / delta + 4;
    }
    h = Math.round(h * 60);

    if (h < 0) {
      h += 360;
    }

    l = (cmax + cmin) / 2;

    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return { h, s, l, a };
  }

  static fromHex(hex: string): Color {
    const hexNum = hex.replace('#', '');
    if (hexNum.length === 3) {
      const r = parseInt(hexNum[0] + hexNum[0], 16);
      const g = parseInt(hexNum[1] + hexNum[1], 16);
      const b = parseInt(hexNum[2] + hexNum[2], 16);
      return new Color(r, g, b);
    } else if (hexNum.length === 6) {
      const r = parseInt(hexNum[0] + hexNum[1], 16);
      const g = parseInt(hexNum[2] + hexNum[3], 16);
      const b = parseInt(hexNum[4] + hexNum[5], 16);
      return new Color(r, g, b);
    } else {
      throw new Error('Invalid hex color');
    }
  }

  static fromRGB(r: number, g: number, b: number): Color {
    return new Color(r, g, b);
  }

  static fromRGBA(r: number, g: number, b: number, a: number = 1): Color {
    return new Color(r, g, b, a);
  }

  static fromHSLA(h: number, s: number, l: number, a: number = 1): Color {
    const rgb = Color.RGBAfromHSLA(h, s, l, a);
    return new Color(rgb.r, rgb.g, rgb.b, rgb.a);
  }

  static random(): Color {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return Color.fromHex(color);
  }
}
