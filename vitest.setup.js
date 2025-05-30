import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from "@testing-library/jest-dom/matchers";

console.log('Available matchers:', matchers);

expect.extend(matchers);

afterEach(() => {
  cleanup();
});