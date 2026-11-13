export type FaceChar = 'U' | 'R' | 'F' | 'D' | 'L' | 'B';

export function createSolved3x3(): FaceChar[] {
  const faces: FaceChar[] = ['U', 'R', 'F', 'D', 'L', 'B'];
  const state: FaceChar[] = [];
  for (const f of faces) {
    for (let i = 0; i < 9; i++) state.push(f);
  }
  return state;
}

function rotFaceCW(s: FaceChar[], o: number): void {
  const [t0, t1, t2, t3, t4, t5, t6, t7, t8] = [
    s[o+0], s[o+1], s[o+2], s[o+3], s[o+4], s[o+5], s[o+6], s[o+7], s[o+8]
  ];
  s[o+0] = t6; s[o+1] = t3; s[o+2] = t0;
  s[o+3] = t7; s[o+4] = t4; s[o+5] = t1;
  s[o+6] = t8; s[o+7] = t5; s[o+8] = t2;
}

function cycle4(s: FaceChar[], a: number[], b: number[], c: number[], d: number[]): void {
  for (let i = 0; i < a.length; i++) {
    const tmp = s[d[i]];
    s[d[i]] = s[c[i]];
    s[c[i]] = s[b[i]];
    s[b[i]] = s[a[i]];
    s[a[i]] = tmp;
  }
}

export function applyBaseMove3x3(s: FaceChar[], base: string): boolean {
  switch (base) {
    case 'U': rotFaceCW(s, 0); cycle4(s, [18,19,20], [36,37,38], [45,46,47], [9,10,11]); return true;
    case 'D': rotFaceCW(s, 27); cycle4(s, [24,25,26], [15,16,17], [51,52,53], [42,43,44]); return true;
    case 'R': rotFaceCW(s, 9); cycle4(s, [2,5,8], [51,48,45], [29,32,35], [20,23,26]); return true;
    case 'L': rotFaceCW(s, 36); cycle4(s, [0,3,6], [18,21,24], [27,30,33], [53,50,47]); return true;
    case 'F': rotFaceCW(s, 18); cycle4(s, [6,7,8], [9,12,15], [29,28,27], [44,41,38]); return true;
    case 'B': rotFaceCW(s, 45); cycle4(s, [2,1,0], [36,39,42], [33,34,35], [17,14,11]); return true;
    case 'M': cycle4(s, [1,4,7], [19,22,25], [28,31,34], [52,49,46]); return true;
    case 'E': cycle4(s, [21,22,23], [12,13,14], [48,49,50], [39,40,41]); return true;
    case 'S': cycle4(s, [3,4,5], [10,13,16], [32,31,30], [43,40,37]); return true;
    case 'u': case 'Uw': applyBaseMove3x3(s, 'U'); for (let i=0;i<3;i++) applyBaseMove3x3(s, 'E'); return true;
    case 'd': case 'Dw': applyBaseMove3x3(s, 'D'); applyBaseMove3x3(s, 'E'); return true;
    case 'r': case 'Rw': applyBaseMove3x3(s, 'R'); for (let i=0;i<3;i++) applyBaseMove3x3(s, 'M'); return true;
    case 'l': case 'Lw': applyBaseMove3x3(s, 'L'); applyBaseMove3x3(s, 'M'); return true;
    case 'f': case 'Fw': applyBaseMove3x3(s, 'F'); applyBaseMove3x3(s, 'S'); return true;
    case 'b': case 'Bw': applyBaseMove3x3(s, 'B'); for (let i=0;i<3;i++) applyBaseMove3x3(s, 'S'); return true;
    case 'x': applyBaseMove3x3(s, 'R'); for (let i=0;i<3;i++) { applyBaseMove3x3(s, 'M'); applyBaseMove3x3(s, 'L'); } return true;
    case 'y': applyBaseMove3x3(s, 'U'); for (let i=0;i<3;i++) { applyBaseMove3x3(s, 'E'); applyBaseMove3x3(s, 'D'); } return true;
    case 'z': applyBaseMove3x3(s, 'F'); applyBaseMove3x3(s, 'S'); for (let i=0;i<3;i++) applyBaseMove3x3(s, 'B'); return true;
    default: return false;
  }
}
