export type PuzzleCategoryCode =
  | 'cube'
  | 'shapemod'
  | 'pyraminx'
  | 'megaminx'
  | 'skewb'
  | 'square1'
  | 'gear'
  | 'other';

export interface Puzzle {
  id: string;
  name: string;
  slug: string;
  category: string;
  categoryCode: PuzzleCategoryCode;
  difficulty: string;
  layers: string;
  wcaOfficial: boolean;
  simulatorEngine: 'cube-2x2' | 'cube-3x3' | 'cube-4x4' | 'none';
  description: string;
  structure: string;
  differences: string;
  supportedNotation: string[];
  supportedMethods: string[];
  stages: string[];
  specialCases: string[];
  referenceUrl: string;
}

export interface MethodStage {
  name: string;
  desc: string;
}

export interface Method {
  id: string;
  puzzleId: string;
  name: string;
  slug: string;
  level: string;
  algCount: number;
  avgMoves: string;
  overview: string;
  stages: MethodStage[];
  expectedCases: number;
  enteredCases: number;
  verifiedCases: number;
  missingCases: number;
  referenceUrl: string;
}

export interface AlgorithmReference {
  title: string;
  url: string;
}

export interface Algorithm {
  id: string;
  caseCode: string;
  caseName: string;
  puzzleId: string;
  methodId: string;
  category: string;
  subGroup: string;
  difficulty: string;
  algorithm: string;
  alternatives: string[];
  setup: string;
  moveCount: number;
  recognition: string;
  instructions: string;
  fingerTricks: string;
  commonMistakes: string;
  initialState: string;
  solvedState: string;
  verificationStatus: 'VERIFIED' | 'UNVERIFIED';
  simulatorSupported: boolean;
  references: AlgorithmReference[];
}

export interface NotationItem {
  symbol: string;
  name: string;
  group: string;
  meaning: string;
  puzzleTypes: string[];
  example: string;
  axis: string;
  dir: string;
  layers: string;
}

export interface LearningProgress {
  userId?: string;
  algorithmId: string;
  status: 'mastered' | 'learning';
  lastPracticed: string;
  reviewCount: number;
}
