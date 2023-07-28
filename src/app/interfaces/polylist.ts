export interface PolyList {
    type: 'Feature';
    geometry: {
      type: 'Polygon';
      coordinates: number[][][]; // Each polygon can have multiple rings, and each ring consists of multiple points.
    };
  }