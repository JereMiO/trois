import { OctahedronBufferGeometry } from 'three';
import Geometry from './Geometry.js';

export default {
  extends: Geometry,
  props: {
    radius: { type: Number, default: 1 },
    detail: { type: Number, default: 0 },
  },
  created() {
    this.parent.geometry = new OctahedronBufferGeometry(this.radius, this.detail);
  },
};