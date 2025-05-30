import { expect } from 'vitest';
import * as matchers from "@testing-library/jest-dom/matchers";
console.log('matchers:', matchers);  // Should be an object


// Extend Vitest's expect
expect.extend(matchers);