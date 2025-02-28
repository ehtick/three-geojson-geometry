import { BufferGeometry } from 'three';

type Coords = number[] | Coords[];

interface GeoJson {
  type: 'Point' | 'MultiPoint' | 'LineString' | 'MultiLineString' | 'Polygon' | 'MultiPolygon';
  coordinates: Coords;
}

declare class GeoJsonGeometry extends BufferGeometry {
  constructor(
    geoJson: GeoJson,
    radius?: number,
    resolution?: number
  );

  parameters: {
    geoJson: GeoJson,
    radius?: number,
    resolution?: number
  }
}

export default GeoJsonGeometry;
